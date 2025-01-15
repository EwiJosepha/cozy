import { Field, FieldProps } from 'formik'
import React from 'react'

export interface TextInputProps {
  name: string;
  label?: string;
  [key: string]: any; // This allows for any additional props
}

const TextInput: React.FC<TextInputProps> = ({ name, label, ...rest }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {({ field }: FieldProps) => (
          <input
            {...field}
            {...rest}
            id={name}
            className='pl-10 pr-4 py-2 w-full rounded border border-gray-300'
          />
        )}
      </Field>
    </div>
  )
}

export default TextInput

