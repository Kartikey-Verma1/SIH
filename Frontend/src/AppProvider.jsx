import { routeContext, tabContext } from "./utils/busContexts";
import { useState, useEffect } from "react";
const AppProvider = ({children})=>{
    const [tab, settab] = useState("home");
    const [busData, setbusData] = useState(()=>{
        try{
            const saved = localStorage.getItem("busData");
            return saved ? JSON.parse(saved) : {};
        }
        catch(err){
            console.log(err);
        }
    });

    useEffect(()=>{
        localStorage.setItem("busData" , JSON.stringify(busData));
    },[busData]);

    useEffect(()=>{
        if(!busData.routeNo){
            const data = {
                "routeNo" : "22A",
                "start" : "City Center",
                "end" : "Tech Park",
                "ETA" : "3",
                "stops" : "12",
                "crowd" : "medium"
            }
            setbusData(data);
        }
    },[]);

    return(
        <routeContext.Provider value={{busData, setbusData}}>
            <tabContext.Provider value={{tab, settab}}>
                {children}
            </tabContext.Provider>
        </routeContext.Provider>
    )
}
export default AppProvider;