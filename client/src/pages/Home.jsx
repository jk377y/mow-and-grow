import { useState } from 'react';
import styled from "styled-components";
import { isAuthenticated } from '../utils/isAuthenticated';
import { handleLogout } from '../utils/handleLogout';
import LogoutButton from '../components/LogoutButton';
import Login from '../components/Login';
import Signup from '../components/Signup';

const StyledHomeTitle = styled.h2`
    text-align: center;
`;

const Home = () => {
    const [flipSide, setFlipSide] = useState('login'); // 'login' or 'signup'
    const username = sessionStorage.getItem('username');
    const handleFlipCard = () => {
        setFlipSide(flipSide === 'login' ? 'signup' : 'login');
    };

    return (
        <>
            <StyledHomeTitle>Mow & Grow</StyledHomeTitle>
            {username && isAuthenticated() && (
                <div className='home-hiddenUnlessIsAuthenticated'>
                    <h3>Hello <span>{username}</span></h3>
                    <LogoutButton onClick={handleLogout} />
                </div>
            )}
            {!username && !isAuthenticated() && (
                <div className='home-user-wrapper'>
                    <div className={`home-login-wrapper ${flipSide === 'login' ? '' : 'flipped'}`}>
                        {flipSide === 'login' ? (
                            <>
                                <Login />
                                <a onClick={handleFlipCard} className='home-flip-link'>Signup instead</a>
                            </>
                        ) : (
                            <>
                                <Signup />
                                <a onClick={handleFlipCard} className='home-flip-link'>Login instead</a>
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default Home;