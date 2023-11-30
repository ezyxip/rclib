import {createContext} from "react";
import {Credentials} from "./api/auth";

export const AuthContext = createContext<Credentials>(null);