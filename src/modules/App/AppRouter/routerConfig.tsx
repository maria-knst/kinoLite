import { RouteProps } from "react-router-dom";

import MainPage from '../../../pages/MainPage';
import ProfilePage from '../../../pages/ProfilePage';
import NotFoundPage from "../../../pages/NotFoundPage";

enum AppRoutes {
    MAIN = 'main',
    PROFILE = 'profile',
    NOT_FOUND = 'not_found',
};

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.PROFILE]: '/profile',

    // If other pages not found we open last page
    [AppRoutes.NOT_FOUND]: '*',
};

export const routerConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.PROFILE]: {
        path: RoutePath.profile,
        element: <ProfilePage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage/>,
    },
};