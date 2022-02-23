import styled from 'styled-components';

export const PrivateArea = styled.div`
    .container {
        background-color: #ccc;
        display: grid;
        gap: 10px;
        grid-template-areas:
        "item1 item2 item3 item4"
        "item5 item6 item7 item8";
        margin-bottom: 30px;
    }

    .item {
        height: 277px;
        background-color: #ff0000;
        border-radius: 5px;
        padding: 20px;
        color: #fff;
        font-size: 20px;
    }
    
    .item1 {
        grid-area: item1;
    }

    .item2 {
        grid-area: item2;
    }

    .item3 {
        grid-area: item3;
    }

    .item4 {
        grid-area: item4;
    }

    .item5 {
        grid-area: item5;
    }

    .item6 {
        grid-area: item6;
    }

    .item7 {
        grid-area: item7;
    }

   .item8 {
       grid-area: item8;
   }

`;