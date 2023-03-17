import { Outlet } from "react-router-dom"
import { Suspense } from "react"
import { AppBar } from "components/AppBar/AppBar"
import { ToastContainer } from 'react-toastify'

export const Layout = () => {
    return (
        <div>
            <AppBar/>
            <Suspense fallback = {null}>
                <Outlet/>
            </Suspense>
            <ToastContainer/>
        </div>
    )
}
