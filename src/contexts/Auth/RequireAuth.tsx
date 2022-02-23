import { useContext } from "react"
import { AuthContext } from "./AuthContext"

import { Login } from '../../pages/Login';

import { Error } from '../../components/MainComponents';

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
    const auth = useContext(AuthContext)

    if (!auth.user) {
        return (
            <>
                <Error>Faça seu login para continuar!</Error>
                <Login />
            </>
        );
    }
    return children;

}