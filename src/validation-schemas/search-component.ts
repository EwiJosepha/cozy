import * as Yup from 'yup'
const SearchInputSchema = Yup.object({
  search: Yup.string().required('Please type..'),
  date: Yup.date().required('required').nullable()
})
export default SearchInputSchema;
