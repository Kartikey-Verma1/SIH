import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './Components/Home'
import Tickets from './Components/Tickets'
import About from './Components/About'
import Tracking from './Components/Tracking'
import AppProvider from './AppProvider'

const App = ()=>{
  return(
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Home />}/>
            <Route path='/tickets' element={<Tickets />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/tracking' element={<Tracking />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  )
}

export default App;
