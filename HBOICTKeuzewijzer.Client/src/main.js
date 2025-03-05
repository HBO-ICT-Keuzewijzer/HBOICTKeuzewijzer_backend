import Router from './router/router';
import { createAuthResolver } from './router/authResolver';
import { Role } from './router/roles';

Router.addRoute({
    path: '/locked',
    page: './pages/locked.html',
    title: 'Locked',
    authResolver: createAuthResolver([Role.STUDENT, Role.ADMIN])
});

Router.addRoute({
    path: '/',
    page: './pages/home.html',
    title: 'Home'
});

Router.setup(document.getElementById('app'));

localStorage.setItem("user", JSON.stringify({ role: Role.GUEST }));