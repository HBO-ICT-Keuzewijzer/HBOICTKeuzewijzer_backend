import { Role } from "./roles"

/**
 * Gets the current user's role (mock example).
 * @returns {Role}
 */
const getCurrentUserRole = () => {
    // in future get role from api so we can use http only cookies
    const user = JSON.parse(localStorage.getItem("user")) || { role: Role.GUEST };
    return user.role;
};

/**
 * 
 * @param {Role[]} roles 
 * @returns {AuthResolver}
 */
export const createAuthResolver = (roles) => {
    return () => {
        const userRole = getCurrentUserRole();
        return roles.includes(userRole);
    };
}