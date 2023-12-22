/* eslint-disable react/prop-types */
import { useForm } from "./useForm"; 

const createDataForm = () => {
    return {
        username: '',
        password: '',
    }
}

export const Form = () =>{
    const {dataForm, onInput, onSubmit} = useForm(createDataForm());

    return (
        <form onSubmit={onSubmit}>
            <label >Username:
                <input type="text" name="username" value={dataForm.username} onChange={onInput}/>
            </label>
            <label >Passaword:
                <input type="password" name="password" value={dataForm.password} onChange={onInput} />
            </label>
            <button type="submit" disabled={!dataForm.username || !dataForm.password} >Submit</button>
        </form>
    );
}