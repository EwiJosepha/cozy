import { Field } from "formik"

interface Props {
  name: string;
  label: string;
  options: {}
}
 export const Options:React.FC<Props> = (props) => {
  const{ label, name, options, ...rest} = props
  return (
    <div className="options">
<label>{label}</label>
<Field name={name} {...rest} ></Field>
    </div>
  )
}