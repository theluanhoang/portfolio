import Contact from "../pages/Contact"
import Home from "../pages/Home"
import AboutMe from "../pages/AboutMe"
import MyProject from "../pages/MyProject"
import Blog from "../pages/Blog"
import Admin from "../pages/Admin"

const publicRoutes = [
    {path: '/', component: Home},
    {path: '/contact', component: Contact},
    {path: '/about-me', component: AboutMe},
    {path: '/my-project', component: MyProject},
    {path: '/blog', component: Blog},
    {path: '/admin', component: Admin},
]

export {publicRoutes}