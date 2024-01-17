import { lazy } from "react"

export const LazyPanelAnexxesContent = lazy(() => import("./PanelAnexxes"))
export const LazyPanelEstablismentsContent = lazy(() => import("./PanelEstablisments"))
export const LazyPanelActivitiesContent = lazy(() => import("./PanelActivities"))