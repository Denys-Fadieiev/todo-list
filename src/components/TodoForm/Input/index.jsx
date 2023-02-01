import React from "react";
import { Field } from "formik";
import cx from "classnames";

const Input = (props) => {
	const { name, styles, ...restProps } = props;
	const { input, inputValid, inputInvalid, wrapperInput, error } = styles;
	return (
		<Field name={name} >
			{({ field, form: { errors, touched }, meta }) => {
				const inputValidStyles = cx(input, {
					[inputValid]: !meta.error && meta.touched,
					[inputInvalid]: meta.error && meta.touched,
				});

				return (
					<label className={wrapperInput}>
						<input 
              className={inputValidStyles}
              {...restProps}
              {...field}
            />
						{meta.error && meta.touched && (
							<div className={error}>{meta.error}</div>
						)}
					</label>
				);
			}}
		</Field>
	);
};

export default Input;
