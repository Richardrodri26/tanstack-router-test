import { createBrowserRouter } from "react-router-dom";
import { EstablishmentPage, FormAllPage, FormPage, HomePage, LoginPage, NoFound, PanelFormsByIdPage, UserPage } from "@ui/pages";
import { AppGuardLayout, PrincipalLayout } from "@ui/components/layout";
import { adminRoutes, routerPaths } from "./routes.config";

export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppGuardLayout />,
        children: [
            {
                path: routerPaths.home.path,
                element: <LoginPage />,
            },
            {
                path: routerPaths.admin.path,
                element: <PrincipalLayout />,
                children: [
                    { path: "", element: <HomePage />, index: true },
                    {
                        path: adminRoutes.forms.path, children: [
                            { path: "", element: <FormPage />, index: true },
                            { path: "todos", element: <FormAllPage /> },
                            { path: ":id", element: <PanelFormsByIdPage /> }
                        ]
                    },
                    {
                        path: adminRoutes.censadores.path, element: <UserPage />
                    },
                    {
                        path: adminRoutes.establishment.path, element: <EstablishmentPage />, errorElement: <></>,
                    }
                ]
            },
            {
                path: "*",
                element: <NoFound />
            }
        ]
    },
])