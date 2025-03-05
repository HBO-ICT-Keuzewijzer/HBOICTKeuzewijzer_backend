/**
 * @typedef {Object} Route
 * @property {string} path - The url path.
 * @property {string} page - The path to the page file.
 * @property {string} title - The title of the page.
 * @property {AuthResolver} [authResolver] - Optional function that determines if the user is allowed to access this route.
 */

/**
 * Auth resolver function that checks if a user has permission.
 * @callback AuthResolver
 * @returns {boolean} - Whether the user is authorized
 */

/**
 * @type {Route[]}
 */
const routes = [];

/**
 * @type {HTMLElement}
 */
let pageRoot;

/**
 * Define a new route for the application.
 * @param {Route} route
 */
const addRoute = (route) => {
    routes.push(route);
}

/**
 * Sets up the router with settings.
 * @param {HTMLElement} pageRoot 
 * @param {Function} authResolver
 */
const setup = (pageRootElement) => {
    pageRoot = pageRootElement;
    window.addEventListener("popstate", () => {
        navigate(window.location.pathname);
    });

    navigate(window.location.pathname);
}

/**
 * 
 * @param {string} path - The url path.
 * @returns 
 */
const navigate = (path) => {
    const route = routes.find(r => r.path === path);

    if (route == null) {
        navigate("/404");
        return;
    }

    if (route.authResolver != null && !route.authResolver()) {
        navigate("/login");
        return;
    }

    document.title = route.title;
    console.log("Navigating to", route);
}

export default { addRoute, setup, navigate };