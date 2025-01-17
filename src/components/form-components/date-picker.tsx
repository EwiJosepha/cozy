import React from 'react'
import DateView from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Field, ErrorMessage, FieldProps } from 'formik'
import TextError from './text-error'

interface DateProps {
  name: string,
  id: string,
  label?: string
}

const DatePicker: React.FC<DateProps> = (props) => {
  const { name, id, label, ...rest } = props
  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}
      <Field name={name}>
        {
          ({ form, field }: FieldProps) => {
            const { setFieldValue } = form
            const { value } = field
            return (
              <DateView
              showIcon
                id={id}
                {...field}
                {...rest}
                selected={value ? new Date(value) : null}
                onChange={(date: Date | null) => {
                  if (date) {
                    setFieldValue(name, date);
                  }
                }}
                dateFormat="MM/dd/yyyy"
                className="bg-red-500"
              />

            )
          }
        }
      </Field>

      <ErrorMessage name={name}>
        {(errorMsg) => <TextError>{errorMsg}</TextError>}
      </ErrorMessage>    </div>
  )
}

export default DatePicker
