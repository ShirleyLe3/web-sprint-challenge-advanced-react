// write your custom hook here to control your checkout form
import { useLocalStorage } from "./useLocalStorage";

const useForm = (initialValues, cb) => {
  const [calues, setValues] = useLocalStorage("blahData", intialValues);

  const handleChanges = (e) => {
    console.log(e.target.name, e.target.value);
    setValues({
      ...setValues,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(values);
    cb();
  };
  const clearForm = (e) => {
    e.preventdefault();
    setValues(initialValues);
  };
  return [values, handleSubmit, handleChanges, clearForm];
};

export default useForm;
