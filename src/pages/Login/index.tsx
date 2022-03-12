import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";

import { LoginArea } from './styled';

export const Login = () => {
    const auth = useContext(AuthContext);

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleLogin = async () => {
        if (email && password) {
            const isLogged = await auth.signin(email, password);

            if (isLogged) {
                navigate('/');
            } else {
                alert('Dados incorretos.')
            }
        }
    } 
    
    return (
        <div>
            <LoginArea>
                <h2>Faça seu login</h2>
                <div className="inputs-area">
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Digite seu email" />
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Digite sua senha" />
                    <button onClick={handleLogin}>Login</button>
                </div>
            </LoginArea>
        </div>
    );
}
