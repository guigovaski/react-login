import { Container } from "../../components/MainComponents";

import { PrivateArea } from './styled';

export const Private = () => {
    return (
        <Container>
            <PrivateArea>
                <h1>Products</h1>
                <div className="container">
                    <div className="item item1">1</div>
                    <div className="item item2">2</div>
                    <div className="item item3">3</div>
                    <div className="item item4">4</div>
                    <div className="item item5">5</div>
                    <div className="item item6">6</div>
                    <div className="item item7">7</div>
                    <div className="item item8">8</div>
                </div>
            </PrivateArea>
        </Container>
    );
}