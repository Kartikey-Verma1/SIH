import { busdata } from "../utils/busdata";
import { routeContext } from "../utils/busContexts";
import { useContext } from "react";

const BusList = ()=>{
    const { busData, setbusData } = useContext(routeContext);
    const setdata = (e, item)=>{
        e.preventDefault();
        setbusData(item);
    };
    return (
        <div className="m-2 bg-[#080808] rounded-xl border border-white/30">
            {
                busdata.map((item, index)=>(
                    <div 
                        key={item.routeNo}  
                        className={`flex justify-between items-center ${index == busdata.length-1 ? "rounded-b-xl" : "border-b border-b-white/30"} ${index == 0 ? "rounded-t-xl" : ""}`}>
                        <div className="text-left p-3">
                            <p className="font-medium text-sm">{item.routeNo} &bull; {item.start}
                                {item.end && (<> &harr; {item.end}</>)}
                            </p>
                            <p className="text-xs text-white/70">
                                {item.stops} stops &bull; 
                                Crowd: {item.crowd.charAt(0).toUpperCase() + item.crowd.slice(1)}
                            </p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <p className="text-xs text-white/70">ETA {item.ETA} min</p>
                            <button
                            className={`relative text-2xl font-[100] cursor-pointer px-3 h-15 before:absolute before:content-[''] before:border-l before:border-l-white/40 before:h-7 before:left-0 before:top-6/12 before:-translate-y-6/12 hover:bg-[#161616e2] ${index == 0 ? "rounded-tr-xl" : ""} ${index == busdata.length-1 ? "rounded-br-xl" : ""}`}
                            onClick={(e)=>{setdata(e, item)}}>&rsaquo;</button>
                        </div>
                        
                    </div>
                ))
            }
        </div>
    )
}
export default BusList;