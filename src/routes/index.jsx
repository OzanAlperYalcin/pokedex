import Main from "../layouts/Main"
import Home from "../pages/Home"
import Pokemon from "../pages/Pokemon"
import NotFound from "../pages/NotFound"
import { useRoutes } from "react-router-dom"

function Router() {

    const routes = [
        {
            path: '/',
            element: <Main />,
            children: [
                {
                    index: true,
                    element: <Home />
                },
                {
                    path: 'pokemon/:name',
                    element: <Pokemon />
                },
                {
                    path: '*',
                    element: <NotFound />
                }
            ]
        }
    ]

    const router = useRoutes(routes)

    return router
}

export default Router