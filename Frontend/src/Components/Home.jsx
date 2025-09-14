import Location from "./Location";
import SearchBus from "./SearchBus";

const Home = ()=>{
    return(
        <div className="min-w-full flex justify-between">
            <SearchBus />
            <Location />
        </div>
    )
}
export default Home;