import { useEffect, useState } from 'react'
import './App.css'
// import { Routes, Route, } from "react-router-dom"
// import Header from './assets/components/Header'
// import Formulario from './assets/components/Formulario/Formulario';
// import Contacto from './assets/components/Contacto/Contacto';
import AddUserForm from './assets/components/Crud/AddUserForm';
import UserTable from './assets/components/UserTable/UserTable';
// import uuidv4 from 'uuid'

function App() {

  const usersData = [
    { id: Math.random(), name: 'Tania', username: 'taniadiaz' },
    { id: Math.random(), name: 'nicole', username: 'nicoleromero' },
    { id: Math.random(), name: 'gustavo', username: 'gustavochoua' }
  ]
  const [users, setUsers] = useState(usersData)

  const addUser = (user) => {
    user.id = Math.random()
    console.log(user)
    setUsers([
      ...users,
      user
    ])
  }

  // Eliminar usuario
  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id))
  }

  // Editar usuario
  const [editing, setEditing] = useState(false)

  const initialFormState = { id: null, name: '', username: '' }
  const [currentUser, setCurrentUser] = useState(initialFormState)

  const editRow = user => {
    setEditing(true) 
    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false)
    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }
  return (
    <>

<div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
        {editing ? (
          <div>
            <h2>Edit user</h2>
            {/* <EditYo 
              setEditing={setEditing}
              currentUser={currentUser}
              updateUser={updateUser}
            /> */}
          </div>
        ) : (
          <div>
            <h2>Add user</h2>
            <AddUserForm addUser={addUser}  />
          </div>
        )}
      </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
        </div>
      </div>
    </div>
    </>
  )
}

export default App
