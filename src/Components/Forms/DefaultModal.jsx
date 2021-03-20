import React from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from 'reactstrap';

function DefaultModal({
	isOpen,
	title,
	faClass,
	handleSubmit,
	handleClose,
	children,
	showHeader,
	icon,
	hideFooter,
	...rest
}) {
	return (
		<>
			<Modal isOpen={isOpen} {...rest}>
				{!showHeader && (
					<ModalHeader toggle={handleClose}>
						{faClass && !icon && <i className={faClass + ' mr-2'} />}
						{icon && icon}
						{title}
					</ModalHeader>
				)}
				<ModalBody>{children}</ModalBody>
				{/* {
                    !hideFooter &&
                    <ModalFooter>
                        <Button color="primary" onClick={handleSubmit}>Submit</Button>{' '}
                        <Button color="danger" onClick={handleClose}>Cancel</Button>
                    </ModalFooter>
                } */}
			</Modal>
		</>
	);
}

export default DefaultModal;
