import { HomeArea } from "./styled";

type Props = {
    children: JSX.Element;
}

export const Home: React.FC<Props> = ( {children} ) => {
    return (
        <HomeArea>
            {children}
        </HomeArea>
    );
}