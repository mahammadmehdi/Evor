
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MainLayout from './layout/MainLayout'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout></MainLayout>}>

            <Route path="/" />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
