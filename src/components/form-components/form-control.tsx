import React from 'react'
import TextInput from './text-input'
import DatePicker from './date-picker'

interface Props {
  control: string,
  name: string,
  label?: string,
  id: string
}

const FormControl: React.FC<Props> = ({control, name, label, id, ...rest}) => {

  switch (control) {
    case "textInput": return <TextInput name={name} id={id}  {...rest} />
    case 'textarea': { }
    case 'select': { }
    case 'radio': { }
    case 'date-picker':<DatePicker name={name}  id={id}  {...rest} />
    default: return null
  }
}

export default FormControl
