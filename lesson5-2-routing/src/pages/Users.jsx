import { Link } from 'react-router-dom'

export const Users = () => {
  const randomId = Math.ceil(Math.random() * 10);
  const url = `/users/${randomId}`;

  return (
    <>
      <div>
        <h1>Users</h1>
        <p>Here are the users:</p>
        <ul className='users-list'>
          <li>
            <Link to="/users/1">User 1</Link>
          </li>
          <li>
            <Link to="/users/2">User 2</Link>
          </li>
          <li>
            <Link to="/users/3">User 3</Link>
          </li>
          <li>
            <Link to={url}>User random</Link>
          </li>
        </ul>
      </div>
    </>
  )
} 