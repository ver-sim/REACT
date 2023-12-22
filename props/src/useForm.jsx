import { useState } from "react"

export const useForm = (initialValue = {}) => {
  const [dataForm, setDataForm] = useState(initialValue);

  const handelChangeInput = (event) => {
    const {value, name} = event.target;
    setDataForm((data) => {
        return{
            ...data,
            [name]: value,
        }
    });
  }

  const handelSubmit = (event) => {
    event.preventDefault();
    console.log(dataForm);
    setDataForm(initialValue);
  }
  return {
    dataForm: dataForm,
    onInput: handelChangeInput,
    onSubmit: handelSubmit,
  }
}

// Create a custom hook that keeps track of the state of a controlled form with the username and password inputs, and returns the current value of the inputs as well as an event handler to update either input.