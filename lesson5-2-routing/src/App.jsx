// Создать приложение с 4 разными страницами . ( Home, Users, User, NotFound);

// создать роуты для каждой странице. отрисовать layout для приложения с header, footer . 

// на странице users сдклать кнопку ( Link) по клику на которую будет переход на траницу User c нужной id. Для запростов использовать любой api (https://jsonplaceholder.typicode.com/users) как вариант .. путь в адресной строке должен выглядеть так: users/2( id user)

import { Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home'
import { Users } from './pages/Users'
import { User } from './pages/User'
import { NotFound } from './pages/NotFound'
import { Layout } from './Component/Layout'

import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route exact path='/' element={<Home />}></Route>
          <Route path='/users' element={<Users />}></Route>
          <Route path='/users/:id' element={<User />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App