import myContext from "./MovieContext";
import moviesData from "../MovieData";
import { useState } from "react";


const MyState = ({ children }) => {
    const [data, setData] = useState(moviesData)
    // console.log(data)
    return (

        <myContext.Provider value={{data, setData}}>
            {children}
        </myContext.Provider>
    )

}
export default MyState