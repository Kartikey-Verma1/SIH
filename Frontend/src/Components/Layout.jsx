import Header from './Header.jsx'
import Footer from './Footer.jsx'
import { Outlet } from 'react-router-dom'
const Layout = ()=>{
    return(
        <div className="bg-black font-sans tracking-wider">
            <Header />
            <div className='p-20 pt-30'>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}
export default Layout;