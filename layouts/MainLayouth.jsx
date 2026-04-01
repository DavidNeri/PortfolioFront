import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"

const MainLayouth = () => {
    return (
        <>
            <NavBar />
            <main className="mt-30 ml-50 mr-50 p-10">
                <Outlet />            
            </main>
        </>
    
    )
}

export default MainLayouth