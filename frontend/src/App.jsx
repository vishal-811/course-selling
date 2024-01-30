import Home from './components/Home'
import Signup from './components/Signup'
import Role from './components/Role'
import Header from './components/Header'
import Signin from './components/Signin'
import {BrowserRouter,Routes ,Route} from 'react-router-dom'
function App() {
 
  return (
   
    <BrowserRouter>
    <Header></Header>
      <Routes>
         <Route path='/'
         element={<Home/>}
         />

         <Route path='/role'
         element={<Role/>}/>

         <Route path='/Signup'
         element={<Signup/>}/>

         <Route path='/signin'
         element={<Signin/>}/>

      </Routes>
    </BrowserRouter>

  )
}

export default App
