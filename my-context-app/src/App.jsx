// 1. Застилизовать чекбокс под переключатель, написать все стили для изменения темы для всего приложения что то похожее как на скриншоте

// 2. Создать контекст для хранения информации About Us/ team и contacts . создать отдельную компоненту и отрисовать весь контент по нужному роуту. ( у нас уже роуты созданы, просто всавить созданный вами компонент нужно будет)

// пример для team в скрине.

// Информация о компанде может быть любая, но должна храниться в контексте и в нужной компоненте доставаться из него


import { Routes, Route } from 'react-router-dom'
import { Layout } from './pages/Layout'
import { Home } from './pages/Home'
import { Contacts } from './pages/Contacts'
import { About } from './pages/About'
import { Team } from './pages/Team'

import { useState } from 'react'
import { ThemeContext } from './context/ThemeContext'
import { AboutUsContext } from './context/AboutUsContext'

import './App.css'


function App() {
  const [theme, setTheme] = useState('white')

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <AboutUsContext.Provider value={{
          contacts: {
            email: 'ourExampleEmail@gmail.com',
            phone: '+123456789',
            office: 'randomCity, exampleStreet, secondHouse'
          },
          team: 'https://randomuser.me/api/'
        }}>
          <Routes>
            <Route path='/' element={<Layout />} >
              <Route exact path='/' element={<Home />} />
              <Route path='/about' element={<About />} >
                <Route path='/about/contacts' element={<Contacts />} />
                <Route path='/about/team' element={<Team />} />
              </Route>
            </Route>
          </Routes>
        </AboutUsContext.Provider>
      </ThemeContext.Provider>
    </>
  )
}

export default App