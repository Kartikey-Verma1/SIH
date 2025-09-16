import Location from "./Location";
import SearchBus from "./SearchBus";

const Home = ()=>{
    return(
        <div className="min-w-full flex flex-wrap gap-4">
            <div className="flex-1 min-w-sm">
                <SearchBus />
            </div>

            <div className="flex-1 min-w-sm">
                <Location />
            </div>
        </div>
    )
}
export default Home;