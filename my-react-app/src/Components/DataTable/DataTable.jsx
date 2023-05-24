import { useState, useEffect } from 'react'

import './DataTable.css'

export const DataTable = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then(data => {
        // console.log(data)
        setData(data)
      })
      .catch(e => console.error(e))
  }, [])

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>User name</th>
            <th>User email</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Address</th>
            <th>Company</th>
            </tr>
        </thead>
        <tbody>
          {data.map(el => (
            <tr key={el.id}>
              <td>{el.id}</td>
              <td>{el.name}</td>
              <td>{el.username}</td>
              <td>{el.email}</td>
              <td>{el.phone}</td>
              <td>{el.website}</td>
              <td>{`${el.address.street}, ${el.address.suite}, ${el.address.city}, ${el.address.zipcode}; GEO: ${el.address.geo.lat}, ${el.address.geo.lng}`}</td>
              <td>{`${el.company.name}, ${el.company.catchPhrase}, ${el.company.bs}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}