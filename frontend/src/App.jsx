import Home from './components/Home'
import Signup from './components/Signup'
import Role from './components/Role'
import Header from './components/Header'
import {BrowserRouter,Routes ,Route} from 'react-router-dom'
function App() {
 
  return (
   
    <BrowserRouter>
      <Header/>
      <Routes>
         <Route path='/'
         element={<Home/>}
         />

         <Route path='/role'
         element={<Role/>}/>

      </Routes>
    </BrowserRouter>

  )
}

export default App
