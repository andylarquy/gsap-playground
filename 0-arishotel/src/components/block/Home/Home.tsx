import { Burger } from "../../atom/Burger/Burger";
import { StyledHeader, StyledHome, StyledIconLogo } from "./Home.styles";

export const Home = () => (
  <StyledHome>
    <StyledHeader>
      <Burger width={20} height={40} />
      <StyledIconLogo color="white" width="20%" />
      <p>Stuff</p>
    </StyledHeader>
  </StyledHome>
);
