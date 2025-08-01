import { createRoot } from "react-dom/client"
import Body from "./components/body"
import "./styles/shimmer.css";
import Header from "./components/header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";

import Error from "./components/error";
import CardDetails from "./components/cardDetails";
import { lazy, Suspense, useState } from "react";
import UserContext from "./utils/userContext";
import { Provider } from "react-redux";
import cartStore from "./utils/cartStore";



const Applayout =()=>{
    const [userName, setUser] = useState('Abhishek')
    return <>
    <Provider store={cartStore}>
    <UserContext.Provider value={{loggedInUser: userName,setUser}}>
        <Header></Header>
        <Outlet></Outlet>
    </UserContext.Provider>

    </Provider>
    </>
}

const Cart = lazy(()=>import("./components/cart"))


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
                element: <Suspense fallback={<h1>Code is working</h1>}> <Cart/> </Suspense>
            }, {
                path: '/cardDetail/:id',
                element: <CardDetails/>
            }
        ]
    },
    
])

const root = createRoot(document.getElementById('root'))
root.render(<RouterProvider router={routerConfig}></RouterProvider>)

