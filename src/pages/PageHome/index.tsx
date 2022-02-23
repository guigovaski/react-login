import { PageHomeArea } from "./styled";

import banner from '../../assets/images/banner.png';

export const PageHome = () => {
    return (
        <PageHomeArea>
          <img src={banner} alt=""></img>
        </PageHomeArea>
    );
}