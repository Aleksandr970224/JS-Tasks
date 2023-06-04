import { useContext } from "react"
import { AboutUsContext } from "../context/AboutUsContext"

export const Contacts = () => {
  const { contacts } = useContext(AboutUsContext)

  return (
    <>
      <h1>This is our Contacts</h1>
      <p>Наш email: {contacts.email}</p>
      <p>Наш телефон: {contacts.phone}</p>
      <p>Наш адрес: {contacts.office}</p>
    </>
  )
}