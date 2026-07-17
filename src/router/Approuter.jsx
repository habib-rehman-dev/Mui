import { Route , Routes } from "react-router-dom";


import Home from "../page/Home";

const Approuter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
    )
}

export default Approuter
