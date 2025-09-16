import { useState } from "react";
import BusList from "./BusList";

const SearchBus = ()=>{
    const [from, setfrom] = useState("");
    const [to, setto] = useState("");
    const swap = (e)=>{
        e.preventDefault();
        const a = from;
        setfrom(to);
        setto(a);
    }
    return (
        <div className="text-white text-right p-4 rounded-xl border border-white/20 bg-[#0e0e0e]">
            <div className="text-left"><p className="p-2 font-medium">Plan a Route</p></div>
            <form className="flex items-center">
                <input 
                    type="text"
                    value={from}
                    className="flex-1 min-w-3 text-sm border border-white/20 rounded-xl h-10 m-2 p-2 bg-[#080808] placeholder:text-white/30 focus:outline-none focus:border-white/50"
                    placeholder="From (e.g., City Center)"
                    onChange={(e)=>{setfrom(e.target.value)}}/>
                <button className="cursor-pointer" onClick={swap}><img src="/swap.avif" alt="swap" className="w-6 min-w-6"/></button>
                <input 
                    type="text"
                    value={to}
                    className="flex-1 min-w-3 text-sm border border-white/20 rounded-xl h-10 m-2 p-2 bg-[#080808] placeholder:text-white/30 focus:outline-none focus:border-white/50"
                    placeholder="To(e.g., Tech Park)"
                    onChange={(e)=>{setto(e.target.value)}}/>
            </form>
            <button className="m-2 px-4 py-2 rounded-xl bg-white text-black font-medium text-sm hover:bg-white/95 hover:shadow-black hover:shadow-lg active:shadow-sm active:bg-white/90 cursor-pointer">Search</button>
            <BusList />
        </div>
    )
}
export default SearchBus;