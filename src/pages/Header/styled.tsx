import styled from 'styled-components';

export const HeaderArea = styled.div`
    background-color: #ddd;

    .logo {
        text-decoration: none;
        color: #000;
        font-size: 40px;
        font-weight: bold;
    }

    header {
        max-width: 1140px;
        margin: auto;
        height: 70px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        nav {
            a {
                margin-right: 20px;
                text-decoration: none;
                color: #000;
                font-size: 17px;
                font-weight: semi-bold;
                padding: 10px;
                transition: all ease .3s;

                &:hover {
                    background-color: rgba(204, 204, 204, 0.8);
                    border-radius: 8px;
                }
            }
            
            .logoutButton {
                color: #ff0000;
            }
        }

        nav a:last-child {
            margin-right: 0;
        }
    }
`;