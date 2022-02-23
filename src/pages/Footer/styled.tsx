import styled from 'styled-components';

export const FooterArea = styled.div`
    background-color: #000;
    height: 90px;

    .footer-container {
        height: inherit;
        max-width: 1140px;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .footer-social {
            display: flex;
            flex-direction: column;
            color: #fff;

            span {
                font-size: 15px;
                font-weight: bold;
                line-height: 20px;

                a {
                    text-decoration: none;
                    color: #fff;
                }
            }
        }

        .footer-copyright {
            color: #fff;
            font-weight: bold;
            align-self: flex-end;
            margin-bottom: 15px;
        }

        .footer-address {
            display: flex;
            flex-direction: column;
            color: #fff;
            font-size: 15px;
            font-weight: bold;
            line-height: 20px;
        }
    }
`
