import { useContext, useState } from "react"
import { Link } from "react-router-dom";
import { tabContext } from "../utils/busContexts";

const Header = ()=>{
    const { tab, settab } = useContext(tabContext);
    const nav = [
        {"key": "home", "name": "Home"},
        {"key": "tickets", "name": "Tickets"},
        {"key": "about", "name": "About"},
        {"key": "tracking", "name": "Tracking"},
    ]
    return(
        <div className="fixed w-full backdrop-blur-sm z-50">
            <header className="flex flex-col items-center justify-between py-2 px-9 border-b border-white/20 bg-[#0e0e0ea0] text-white sm:py-4 sm:flex-row sm:items-center sm:gap-3">
                <img src="/Logo.avif" alt="logo" className="h-10"/>
                <div className="m-1">
                    <ul className="flex gap-5 items-center text-sm">
                        {
                            nav.map((item)=>(
                                <Link to={`/${item.key != "home" ? item.key: ""}`} key={item.key}><li  
                                    onClick={()=>{settab(item.key)}} 
                                    className={`${item.key === tab ? "bg-white/15": ""} py-1.5 px-3 rounded-xl border-[0.5px] bg-black border-white/15 cursor-pointer hover:border-white/25`}>{item.name}</li></Link>
                            ))
                        }
                        <li
                            onClick={()=>{settab("profile")}}
                            className={`${tab === "profile"? "bg-white/20": ""} rounded-full border border-white/0 hover:border-white/50`}>
                            <img src="/profileLogo.avif" alt="profile" className="min-w-7 w-7 cursor-pointer"/></li>
                    </ul>
                </div>
            </header>
        </div>
    )
}
export default Header;