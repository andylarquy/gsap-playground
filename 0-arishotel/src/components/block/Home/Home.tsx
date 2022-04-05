import { Burger } from "../../atom/Burger/Burger";
import { StyledHeader, StyledHome, StyledIconLogo } from "./Home.styles";

export const Home = () => (
  <StyledHome>
    <StyledHeader>
      <Burger />
      <StyledIconLogo />
      <p>Stuff</p>
    </StyledHeader>
  </StyledHome>
);
