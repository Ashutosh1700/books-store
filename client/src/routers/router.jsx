import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import About from "../components/About";
import Blog from "../components/Blog";
import SingleBookData from "../shop/SingleBookData";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadBook from "../dashboard/Upload";
import ManageBook from "../dashboard/ManageBook";
import EditBook from "../dashboard/EditBook";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import PrivateRoute from "../components/private/PrivateRoute";
import Logout from "../components/Logout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/shop',
                element: <Shop />
            },
            {
                path: '/about',
                element: <About />
            }, {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/book/:id',
                element: <SingleBookData />,
                loader: ({ params }) => fetch(`http://localhost:5000/book/${params.id}`)
            }
        ]
    },
    {
        path: '/admin/dashboard',
        element: <DashboardLayout />,
        children: [
            {
                path: '/admin/dashboard',
                element: <PrivateRoute><Dashboard /></PrivateRoute>

            },
            {
                path: '/admin/dashboard/upload',
                element: <UploadBook />

            },
            {
                path: '/admin/dashboard/manage',
                element: <ManageBook />

            },
            {
                path: '/admin/dashboard/edit-books/:id',
                element: <EditBook />,
                loader: ({ params }) => fetch(`http://localhost:5000/book/${params.id}`)

            },
        ]

    },
    {
        path: '/signup',
        element: <SignUp />
    },
    {
        path: '/login',
        element: <SignIn />
    },
    {
        path: '/logout',
        element: <Logout />
    }
]);

export default router;

