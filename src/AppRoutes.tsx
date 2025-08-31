import {
    BrowserRouter,
    Route,
    Routes,
    type RouteObject,
} from "react-router-dom";
import Home from "./Home";
import Privacy from "./Privacy";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/privacy",
        element: <Privacy />
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