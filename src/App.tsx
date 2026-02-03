import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import { HeaderComponent } from './components/Header/HeaderComponent'
import { CreateComponent } from './components/Create/CreateComponent'

function App() {


  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/create" element={<CreateComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
