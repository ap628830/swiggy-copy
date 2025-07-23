import { createRoot } from "react-dom/client"
import Body from "./components/body"
import "./styles/shimmer.css";
import Header from "./components/header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Cart from "./components/cart";
import Error from "./components/error";

const Applayout =()=>{
    return <>
        <Header></Header>
        <Outlet></Outlet>
    </>
}

const routerConfig = createBrowserRouter([
    {
        path: '/',
        element: <Applayout/>,
        errorElement: <Error/>,
        children: [
            {
                path: '/',
                element: <Body/>
            },
            {
                path:'/home',
                element: <Home/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/contact',
                element: <Contact/>
            }, 
            {
                path: '/cart',
                element: <Cart/>
            }
        ]
    },
    
])

const root = createRoot(document.getElementById('root'))
root.render(<RouterProvider router={routerConfig}></RouterProvider>)

