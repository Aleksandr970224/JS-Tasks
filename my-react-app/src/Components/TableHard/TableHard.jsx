import { useState, useEffect } from 'react'
import { TextUser } from '../TextUser/TextUser'

import './TableHard.css'

export const TableHard = ({ userData }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then(data => {
        // console.log(data)
        setData(data)
      })
      .catch(e => console.error(e))
  }, [])

  const [combinedData, setCombinedData] = useState([]);
  useEffect(() => {
    const mergedData = [...(userData || []), ...data];
    setCombinedData(mergedData);
  }, [data, userData]);

  const [isSortedById, setIsSortedById] = useState(true)
  // const sortedData = JSON.parse(JSON.stringify(combinedData));
  const sortedData = [...combinedData];
  const handleSortId = () => {
    (isSortedById) ? (
      sortedData.sort((a, b) => {
        if (a.id < b.id) {
          return 1
        } if (a.id > b.id) {
          return -1
        }
        return 0
      })
    ) : (
      sortedData.reverse()
    )
    setIsSortedById(!isSortedById)
    // setData(sortedData);
    setCombinedData(sortedData)
    // console.log(data);
  }

  const [isSortedByName, setIsSortedByName] = useState(true)
  const handleSortName = () => {
    (isSortedByName) ? (
      sortedData.sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();

        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      })
    ) : (
      sortedData.reverse()
    )
    setIsSortedByName(!isSortedByName);
    // setData(sortedData)
    setCombinedData(sortedData)
  }

  const [isSortedByUsername, setIsSortedByUsername] = useState(true)
  const handleSortUsername = () => {
    (isSortedByUsername) ? (
      sortedData.sort((a, b) => {
        const usernameA = a.username.toLowerCase();
        const usernameB = b.username.toLowerCase();

        if (usernameA < usernameB) {
          return -1;
        }
        if (usernameA > usernameB) {
          return 1;
        }
        return 0;
      })
    ) : (
      sortedData.reverse()
    )
    setIsSortedByUsername(!isSortedByUsername);
    // setData(sortedData)
    setCombinedData(sortedData)
  }

  const [isSortedByUserEmail, setIsSortedByUserEmail] = useState(true)
  const handleSortUserEmail = () => {
    (isSortedByUserEmail) ? (
      sortedData.sort((a, b) => {
        const emailA = a.email.toLowerCase();
        const emailB = b.email.toLowerCase();

        if (emailA < emailB) {
          return -1;
        }
        if (emailA > emailB) {
          return 1;
        }
        return 0;
      })
    ) : (
      sortedData.reverse()
    )
    setIsSortedByUserEmail(!isSortedByUserEmail);
    // setData(sortedData)
    setCombinedData(sortedData)
  }

  const [isSortedByAddress, setIsSortedByAddress] = useState(true)
  const handleSortAddress = () => {
    (isSortedByAddress) ? (
      sortedData.sort((a, b) => {
        const addressA = a.address.street.toLowerCase();
        const addressB = b.address.street.toLowerCase();

        if (addressA < addressB) {
          return -1;
        }
        if (addressA > addressB) {
          return 1;
        }
        return 0;
      })
    ) : (
      sortedData.reverse()
    )
    setIsSortedByAddress(!isSortedByAddress);
    // setData(sortedData)
    setCombinedData(sortedData)
  }

  const [text, setText] = useState([])
  const handleResetUser = (event) => {
    let arr = event.target.parentElement;

    let obj = Object.values(arr);

    let arrOfObj = obj[1].children;
    let user = {};

    user.id = arrOfObj[0].props.children;
    user.name = arrOfObj[1].props.children;
    user.username = arrOfObj[2].props.children;
    user.email = arrOfObj[3].props.children;
    user.address = arrOfObj[4].props.children;

    setText(prevState => [user, ...prevState])
  }

  return (
    <>
      {(!combinedData.length) ?
        (<p>Loading...</p>) :
        (
          <table>
            <thead>
              <tr>
                <th onClick={handleSortId}>ID</th>
                <th onClick={handleSortName}>Name</th>
                <th onClick={handleSortUsername}>User name</th>
                <th onClick={handleSortUserEmail}>User email</th>
                <th onClick={handleSortAddress}>Address</th>
              </tr>
            </thead>
            <tbody>
              {combinedData.map(el => (
                <tr
                  key={el.id}
                  onClick={handleResetUser}
                >
                  <td>{el.id}</td>
                  <td>{el.name}</td>
                  <td>{el.username}</td>
                  <td>{el.email}</td>
                  <td>{el.address.street}</td>
                </tr>
              ))}
              {/* {console.log(combinedData)} */}
            </tbody>
          </table>
        )}

      <div className='wrapper-row-user'>
        <p>Пользователи:</p>
        {
          (text.length) ? (
            text.map(el => (
              <TextUser key={Math.ceil(Math.random() * 1000)}>
                {`ID: ${el.id}; Name: ${el.name}; Nik: ${el.username}; Email: ${el.email}; Address:${el.address}`}
              </TextUser>
            ))
          ) : (
            <TextUser>(Нажмите на нужного пользователя)</TextUser>
          )
        }
      </div>
    </>
  )
}