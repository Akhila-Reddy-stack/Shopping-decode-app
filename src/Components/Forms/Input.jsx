import classnames from 'classnames';
import { asField } from 'informed';
import React, { Fragment } from 'react';

export const TextInput = asField(({ fieldState, fieldApi, ...props }) => {
	const { value } = fieldState;
	const { setValue, setTouched } = fieldApi;
	const { field, onChange, onBlur, initialValue, forwardedRef, className, content, ...rest } = props;

	return (
		<Fragment>
			<div className="form-group">
				{props.label && (
					<label htmlFor={field} style={{ fontWeight: '600', fontSize: '16px', color: '#0268ba' }}>
						{props.label}:
					</label>
				)}
				<input
					{...rest}
					id={field}
					ref={forwardedRef}
					// value={!value && value !== 0 ? '' : value}
					className={classnames(`form-control form-control-sm ${className}`, {
						'is-invalid': fieldState.error,
					})}
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
				{props.helper && <small className="form-text text-muted">{content}</small>}
				{fieldState.error ? <div className="invalid-field">{fieldState.error}</div> : null}
			</div>
		</Fragment>
	);
});
