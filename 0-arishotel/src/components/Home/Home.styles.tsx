import styled from "styled-components";
import { Icon } from "../Icon/Icon"

export const StyledHome = styled.section`
  height: 100vh;
  background: url("https://picsum.photos/1920/1080");
`;

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
`

export const StyledIconLogo = styled(Icon.Logo)`
	color: ${(props) => props.color};
  width: ${(props) => props.width};
`;