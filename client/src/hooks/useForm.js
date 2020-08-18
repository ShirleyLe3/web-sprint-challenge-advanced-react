// write your custom hook here to control your checkout form
import { useState} from "react";
// import { useLocalStorage } from "./useLocalStorage";


const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // const [values, setValues] = useLocalStorage("blahData", intialValues);

  const handleChanges = (e) => {
    console.log(e.target.name, e.target.value);
    // e.persist();
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // alert(values);
  //   // cb();
  // };

    const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
  };
  
  const clearForm = (e) => {
    e.preventdefault();
    setValues(initialValues);
  };
  return [values, handleSubmit, handleChanges, clearForm, showSuccessMessage];
};
//ha t obe same order
export default useForm;
