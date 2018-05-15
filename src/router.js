import pathToRegexp from 'path-to-regexp'

import Front from './Pages/Front'
import About from './Pages/About'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Profile from './Pages/Profile'
import Contact from './Pages/Contact'

import NotFound from './Pages/NotFound'

const routes = [
    { path: '/', name: 'front', page: Front },
    { path: '/about', name: 'about', page: About },
    { path: '/contact', name: 'contact', page: Contact },
    { path: '/register', name: 'register', page: Register },
    { path: '/login', name: 'login', page: Login },

    { loggedIn: true, path: '/profile', name: 'profile', page: Profile },
]

const notFoundRoute = { name: 'notFound', page: NotFound }

routes.forEach(route => route.re = pathToRegexp(route.path))

export const match = (path) => {
    for (let index = 0; index < routes.length; index++) {
        const route = routes[index];
        const params = route.re.exec(path)
        if (params) {
            return { route, params }
        }
    }

    return {
        route: notFoundRoute,
        params: {},
    }
}
