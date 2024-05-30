import About from '~/pages/About';
import Home from '~/pages/Home';
import Menu from '~/pages/Menu';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/menu', component: Menu },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
