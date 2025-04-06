import {index, prefix, route, type RouteConfig} from "@react-router/dev/routes";

export default [
    index("features/home.tsx"),
    route('about', 'features/about.tsx'),
    ...prefix('api', [
        route('set-theme', 'api/set-theme.tsx')
    ]),
    ...prefix('sketch', [
        index('features/sketch/sketch-list.tsx'),
        route('new', 'features/sketch/sketch-new.tsx'),
        route(':slug', 'features/sketch/sketch-detail.tsx')
    ])
] satisfies RouteConfig;
