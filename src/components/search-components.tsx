'use client'
import { Field, Formik, Form } from 'formik';
import { Calendar, Search } from 'lucide-react';
import SearchInputSchema from '@/validation-schemas/search-component'
import FormControl from './form-components/form-control';

const SearchComponent: React.FC = () => {
  const initialValues = {
    search: '',
    date: null
  }
  const onSubmit = (values: any,) => {
    console.log("these are the values", values);
    // setSubmitting(false);
  }
  
  return (
    <Formik 
      initialValues={initialValues} 
      validationSchema={SearchInputSchema} 
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="relative bg-yellow-500 p-4 flex items-center px-40 justify-between z-50 -mt-8">
            <div className="flex items-center flex-1">
              <div className="relative flex-1 mr-2">
                <Search className="absolute left-3 top-2 text-gray-600 cursor-pointer" />
                <FormControl control='textInput' name='search' id='search' />
              </div>
              <div className="relative flex-1 mr-2">
                {/* <Calendar className="absolute left-3 top-2 text-gray-600 cursor-pointer" /> */}
                <FormControl control='date-picker' name='date' label='Search' id='date' />
              </div>
              <button
                type='submit'
                disabled={isSubmitting}
                className="bg-white text-yellow-500 px-4 py-2 rounded hover:bg-gray-200"
              >
                Search
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SearchComponent;
