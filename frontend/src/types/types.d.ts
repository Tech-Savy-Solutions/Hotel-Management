// src/types.ts
import { RouteObject } from "react-router-dom";
import { ReactNode } from "react";

export interface CustomRouteObject extends RouteObject {
    icon?: ReactNode; // Add your custom properties here
}
