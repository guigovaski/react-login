import { FooterArea } from "./styled";

export const Footer = () => {

    return (
        <FooterArea>
            <div className="footer-container">
                <div className="footer-social">
                    <span><a href="">Instagram: @guizinho</a></span>
                    <span><a href="">Facebook: /guizinho</a></span>
                    <span><a href="">WhatsApp: (41) 9 9999-9999</a></span>
                </div>
                <div className="footer-copyright">
                    <span>Todos os direitos reservados.</span>
                </div>
                <div className="footer-address">
                    <span>Rua João Melão, 999</span>
                    <span>Curitiba - PR</span>
                    <span>Brasil</span>
                </div>
            </div>
        </FooterArea>
    );
}