import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Contacto = () => {

    const [equipo, setEquipo] = useState([])

    useEffect(() => {
        console.log('useEffect')
        obtenerDatos()
    }, [])


    const Title = styled.h1`
    color: red;
    padding: 10px;
    background-color:black;
    `

    const obtenerDatos = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await data.json()
        console.log(users)
        setEquipo(users)
    }


    return (
        <>
            <div>Lista de usuarios</div>
            <div className='padre-contenedor'>
                {equipo.map(item =>
                
                    <div key={item.id} className='contenedor'>
                        <h2>{item.name}</h2>
                          <p>{item.email}</p>
                          <p>{item.address.street}</p>

                    </div>

                )}
            </div>



        </>

    )
}

export default Contacto
