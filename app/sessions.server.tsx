import {createThemeSessionResolver} from "remix-themes";
import {createCookieSessionStorage} from "react-router";

const domain = process.env.DOMAIN ?? "localhost";
const secret = process.env.COOKIE_SECRET ?? "";
const secure = process.env.NODE_ENV === "production";

const sessionStorage = createCookieSessionStorage({
    cookie: {domain, httpOnly: true, name: "__sketch-hub-poc-theme", path: "/", secrets: [secret], secure,},
});

export const themeSessionResolver = createThemeSessionResolver(sessionStorage);