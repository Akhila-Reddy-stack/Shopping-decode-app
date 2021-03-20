import classnames from 'classnames';
import { asField } from 'informed';
import React, { Fragment } from 'react';

const RadioButton = asField(({ fieldState, fieldApi, faClass, ...props }) => {
	const { value } = fieldState;
	const { setValue, setTouched } = fieldApi;
	const { field, onChange, onBlur, initialValue, forwardedRef, className, content, ...rest } = props;
	return (
		<Fragment>
			<div>
				{/* {faClass && <i className={faClass}></i>} */}
				<div className="radiomargin">
					<input
						{...rest}
						id={field}
						ref={forwardedRef}
						name={props.name}
						type="radio"
						required={false}
						value={props.value}
						className={classnames(` ${className}`, { 'is-invalid': fieldState.error })}
						onChange={(e) => {
							setValue(e.target.value);
							if (onChange) {
								onChange(e);
							}
						}}
						onBlur={(e) => {
							setTouched(true);
							if (onBlur) {
								onBlur(e);
							}
						}}
					/>
					<span class="mrselect">{props.label && <label htmlFor={field}>{props.label}</label>}</span>
				</div>
				{props.helper && <small className="form-text text-muted">{content}</small>}
			</div>
			<row>
				<div className="selecterror">
					{fieldState.error ? <div className="invalid-field">{fieldState.error}</div> : null}
				</div>
			</row>
		</Fragment>
	);
});

export default RadioButton;
