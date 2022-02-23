import { useContext } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth/AuthContext';

import { HeaderArea } from './styled';

export const Header = () => {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        auth.signout();
        navigate('/');
      }

    return (
        <HeaderArea>
            <header>
                <Link to="/" className="logo">Logo</Link>
                <nav>
                    <Link to="/">
                        Home
                    </Link>
                    {!auth.user &&                     
                    <Link to="/login">
                        Login
                    </Link>
                    }
                    <Link to="/private">
                        Private
                    </Link>
                    {auth.user && <a className="logoutButton" href="" onClick={handleLogout}>Sair</a>}
                </nav>
            </header>
        </HeaderArea>
    );
}