import { useState } from 'react'
import { TableHard } from '../TableHard/TableHard'

import './Form.css'

export const Form = () => {
  const [inputName, setInputName] = useState('')
  const [inputNik, setInputNik] = useState('')
  const [inputEmail, setInputEmail] = useState('')
  const [inputAddress, setInputAddress] = useState('')

  const [newUser, setNewUser] = useState([])

  const handleSubmit = (event) => event.preventDefault()

  const handleAddUser = () => {
    setNewUser(prevState => [{
      'id': Math.round(Math.random() * 1000),
      // 'id': uuidv4(),
      'name': inputName,
      'username': inputNik,
      'email': inputEmail,
      'address': { 'street': inputAddress },
    }, ...prevState])

    setInputName('')
    setInputNik('')
    setInputEmail('')
    setInputAddress('')
    // console.log(newUser);
  }

  return (
    <><form action="" className='form-add-user' onSubmit={handleSubmit}>
      <div className='wrapper-input-add-user'>
        <label htmlFor="">
          <p>Name:</p>
          <input
            type="text"
            value={inputName}
            onChange={(event) => setInputName(event.target.value)}
          />
        </label>
        <label htmlFor="">
          <p>Nik:</p>
          <input
            type="text"
            value={inputNik}
            onChange={(event) => setInputNik(event.target.value)}
          />
        </label>
        <label htmlFor="">
          <p>Email:</p>
          <input
            type="email"
            value={inputEmail}
            onChange={(event) => setInputEmail(event.target.value)}
          />
        </label>
        <label htmlFor="">
          <p>Address:</p>
          <input
            type="text"
            value={inputAddress}
            onChange={(event) => setInputAddress(event.target.value)}
          />
        </label>
      </div>
      <button onClick={handleAddUser}>Добавить</button>
    </form >
      {
        (newUser.length) ? (
          <TableHard userData={newUser} />
        ) : (
          <TableHard />
        )
      }
    </>
  )
}