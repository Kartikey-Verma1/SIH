import { busdata } from "../utils/busdata";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { routeContext, tabContext } from "../utils/busContexts";

const Location = ()=>{
    const { busData } = useContext(routeContext);
    const { settab } = useContext(tabContext);
    const [time, settime] = useState(0);
    useEffect(()=>{
        const interval = ()=>{settime(prev => prev + 0.5)}
        setInterval(interval, 10000);

        return ()=>clearInterval(interval);
    },[]);
    
    return (
        <div className="ml-2 p-3 text-white border border-white/30 rounded-xl flex flex-col justify-between">
            <div 
                key={busData?.routeNo}  
                className={`flex justify-between items-center`}>
                <div className="text-left pt-3">
                    <p className="font-medium text-sm">{busData?.routeNo} &bull; {busData?.start}
                        {busData?.end && (<> &harr; {busData?.end}</>)}
                    </p>
                    <p className="text-xs text-white/70">
                        {busData?.stops} stops &bull; 
                        Crowd: {busData?.crowd?.charAt(0)?.toUpperCase() + busData?.crowd?.slice(1)}
                    </p>
                </div>
                <div className="text-xs text-white/70 text-right">
                    <p>ETA {busData?.ETA} min</p>
                    <Link to={"/tracking"} onClick={()=>settab("tracking")}><p className="underline mt-1">View on Map</p></Link>
                </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19923.625756687634!2d77.06587028049022!3d28.59812444369823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b5a8a5a93d1%3A0xd3adfa2521cf7f28!2sNew%20Delhi%2C%20Delhi%2C%20110045!5e1!3m2!1sen!2sin!4v1757705963639!5m2!1sen!2sin" 
            className="w-lg h-[270px] rounded-xl" 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"></iframe>
            
            <p className="text-xs text-white/60">&bull;Last Updated{time ? ` ${time} minutes ago` : " recently"}</p>
        </div>
    )
}
export default Location;