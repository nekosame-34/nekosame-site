import {
    BrowserRouter,
    Route,
    Routes,
    type RouteObject,
} from "react-router-dom";
import Home from "./Pages/Home";
import Privacy from "./Pages/Privacy";
import Page404 from "./Pages/404";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/privacy",
        element: <Privacy />
    },
    {
        path: "*",
        element: <Page404 />
    }
];

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                {routes.map((route, i) => (
                    <Route key={i} path={route.path} element={route.element} />
                ))}
            </Routes> 
        </BrowserRouter>
    )
}

export default AppRoutes;