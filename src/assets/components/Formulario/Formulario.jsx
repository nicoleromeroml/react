import { useState } from "react";

const Formulario = () => {
    const [respForm, setRespForm] = useState('')
    const [values, setValues] = useState({
        name: "",
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setRespForm(values)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>

                <label htmlFor="name">NOMBRE :</label> <br />
                <input type="text" name="name" id="name" className="inputForm" onChange={handleChange} value={values.name} /> <br />

                <label htmlFor="email">EMAIL:</label> <br />
                <input type="text" name="email" id="email" className="inputForm" onChange={handleChange} value={values.email} /> <br />

                <label htmlFor="message">Dejanos tu mensaje:</label> <br />
                <input type="text" name="message" id="message" className="inputForm" onChange={handleChange} value={values.message} /> <br />

                <button type="submit">Enviar</button>
            </form>
            <h2>{Object.values(respForm).map(
                value => value
            )}</h2>
        </>
    );
}

export default Formulario;