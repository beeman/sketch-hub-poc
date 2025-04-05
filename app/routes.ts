import {index, prefix, route, type RouteConfig} from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    ...prefix('api', [
        route('set-theme', 'routes/api/set-theme.tsx')
    ])
] satisfies RouteConfig;
