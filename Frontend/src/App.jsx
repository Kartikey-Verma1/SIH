import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './Components/Home'
const App = ()=>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
