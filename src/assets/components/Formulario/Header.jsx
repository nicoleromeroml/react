import { useState } from "react";

const Header = () => {
    const [state, setState] = useState('estado inicial')
    const [error, setError] = useState("")

    const cambiarEstado = () => {
        setState('Se modifico el estado')
        setError('Hubo un error')
    }

    return (
        <>
            <h1>{state}</h1>
            <button onClick={cambiarEstado}>cambiar estado</button>
            <h2 className="mensajeError">{error}</h2>
            {import.meta.env.VITE_IMPORTANT_VARIABLE}
        </>
    );
}
//EL CICLO DE VIDA DE UN COMPONENTE: CUANDO SE MONTA
//UNA VEZ QUE ESTA MONTADO,
//CUANDO SE DESMONTA
export default Header;