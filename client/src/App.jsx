import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import OffersPage from './pages/OffersPage'
import ForgotPasswordPage from './pages/ForgotPasswordPage'

import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'
import Header from './components/Header'
import {ToastContainer} from 'react-toastify'






// Browserrouter->Router kiya hai 

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/profile' element={<ProfilePage/>}/>
          <Route  path='/offers' element={<OffersPage/>}/>
          <Route path="/signin" element={<SignInPage/>}/>
          <Route path="/signup" element={<SignUpPage/>}/>
          <Route path='/forgot-password' element={<ForgotPasswordPage/>}/>
          
          
        
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    

    </div>
  )
}

export default App
  