import {createThemeSessionResolver} from "remix-themes";
import {createCookieSessionStorage} from "react-router";

const secure = process.env.NODE_ENV === "production";
const domain = process.env.DOMAIN ?? "localhost";

const sessionStorage = createCookieSessionStorage({
    cookie: {domain, httpOnly: true, name: "__sketch-hub-poc-theme", path: "/", secure,},
});

export const themeSessionResolver = createThemeSessionResolver(sessionStorage);