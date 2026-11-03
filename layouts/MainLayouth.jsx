import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"

const MainLayouth = () => {
    return (
        <>
            <NavBar />
            <main className="mt-30">
                <Outlet />            
            </main>
        </>
    
    )
}

export default MainLayouth