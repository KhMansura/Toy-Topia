import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path:'/',
        element:<h2>home layout</h2>,
    },
    {
        path:"/auth",
        element:<h2>authentication layout</h2>
    }
]);
export default router;