import { useContext, useEffect, useState } from "react"
import { AboutUsContext } from "../context/AboutUsContext"

import './Team.css'

export const Team = () => {
  const { team } = useContext(AboutUsContext)
  const [users, setUser] = useState([])

  useEffect(() => {
    fetch(team)
      .then(resp => resp.json())
      .then(data => {
        setUser(prevState => [data, ...prevState]);
      })
  }, []);

  return (
    <div className="wrapper">
      <h1>This is our Team</h1>
      {
        (!users.length) ? (
          <p>user</p>
        ) : (
          users.map(el => (
            console.log(el),
            <div key={el.results[0].id.name} className="wrapper-team">
              <div>
                <h3>{el.results[0].name.first}</h3>
                <p>{el.results[0].email}</p>
                <img src={el.results[0].picture.large} alt="dev" />
              </div>
              <div>
                <h3>{el.results[0].name.first}</h3>
                <p>{el.results[0].email}</p>
                <img src={el.results[0].picture.large} alt="dev" />
              </div>
              <div>
                <h3>{el.results[0].name.first}</h3>
                <p>{el.results[0].email}</p>
                <img src={el.results[0].picture.large} alt="dev" />
              </div>
            </div>
          ))
        )
      }
    </div>
  )
}