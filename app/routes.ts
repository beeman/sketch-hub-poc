import {index, prefix, route, type RouteConfig} from "@react-router/dev/routes";

export default [
    index("features/home.tsx"),
    route('about', 'features/about.tsx'),
    ...prefix('api', [
        route('set-theme', 'api/set-theme.tsx')
    ])
] satisfies RouteConfig;
