import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'

export const User = () => {

  const [data, setData] = useState([])
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/`)
      .then(resp => resp.json())
      .then(data => setData(data))
  }, [])

  return (
    <div>
      <h1>User: {id}</h1>
      <p>Here is the user with ID {id}.</p>
    </div>
  )
}