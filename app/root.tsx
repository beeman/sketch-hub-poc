import {isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData,} from "react-router";

import type {Route} from "./+types/root";
import "./app.css";
import {themeSessionResolver} from "~/sessions.server";
import {PreventFlashOnWrongTheme, ThemeProvider, useTheme} from "remix-themes";

export const links: Route.LinksFunction = () => [];

export async function loader({request}: Route.LoaderArgs) {
    const {getTheme} = await themeSessionResolver(request);

    return {
        theme: getTheme(),
    }
}

export function Layout({children}: { children: React.ReactNode }) {
    const {theme} = useLoaderData<typeof loader>();
    return (
        <ThemeProvider specifiedTheme={theme} themeAction='/api/set-theme'>
            <LayoutContent>
                {children}
            </LayoutContent>
        </ThemeProvider>
    );
}

export function LayoutContent({children}: { children: React.ReactNode }) {
    const {...data} = useLoaderData<typeof loader>();
    const [theme] = useTheme();
    return (
        <html lang="en" data-theme={theme} className={theme ?? ''} suppressHydrationWarning>
        <head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <PreventFlashOnWrongTheme ssrTheme={Boolean(data.theme)}/>
            <Meta/>
            <Links/>
        </head>
        <body>
        {children}
        <ScrollRestoration/>
        <Scripts/>
        </body>
        </html>
    );
}

export default function App({loaderData}: Route.ComponentProps) {
    return <Outlet/>

}

export function ErrorBoundary({error}: Route.ErrorBoundaryProps) {
    let message = "Oops!";
    let details = "An unexpected error occurred.";
    let stack: string | undefined;

    if (isRouteErrorResponse(error)) {
        message = error.status === 404 ? "404" : "Error";
        details =
            error.status === 404
                ? "The requested page could not be found."
                : error.statusText || details;
    } else if (import.meta.env.DEV && error && error instanceof Error) {
        details = error.message;
        stack = error.stack;
    }

    return (
        <main className="pt-16 p-4 container mx-auto">
            <h1>{message}</h1>
            <p>{details}</p>
            {stack && (
                <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
            )}
        </main>
    );
}
