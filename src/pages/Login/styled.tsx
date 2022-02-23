import styled from 'styled-components';

export const LoginArea = styled.div`
    max-width: 1140px;
    height: calc(100vh - 160px);
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    h2 {
        padding-bottom: 20px;
        font-size: 30px;
    }

    .inputs-area {
        display: flex;
        flex-direction: column;

        input {
            padding: 5px 15px;
            width: 300px;
            outline: 0;
            border: 0;
            border-bottom: 1px solid #aaa;
            margin-bottom: 30px;
            font-size: 15px;
            color: #575757;
            transition: all ease .4s;

            &:hover {
                border-bottom: 1px solid #575757;
            }
        }

            button {
            padding: 10px;
            border: 0;
            border-radius: 6px;
            background-color: #007bff;
            color: #fff;
            cursor: pointer;
            margin-bottom: 30px;
            font-size: 15px;
            font-weight: bold;
            transition: all ease .4s;

            &:hover {
                background-color: #0062cc;
            }
        }
    }
`;