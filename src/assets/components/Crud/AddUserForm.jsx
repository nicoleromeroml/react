import React from 'react';
import { useForm } from 'react-hook-form'

const AddUserForm = (props) => {

    const { handleSubmit} = useForm();

    const onSubmit = (data, e) => {
        // data.id = null
        console.log(data)
        props.addUser(data)
        e.target.reset();
    }

    return (
    <> 
    <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" name="name" id=""
        
         />
           
        <input type="text" name='username'  
                />
                  
        <button type='submit'>agregar</button>
    </form>
    </>   
    );
}
 
export default AddUserForm;
