import logo from "../logo.svg";
import {styled,keyframes} from "styled-components";
const rotate = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  `;
const RootDiv = styled.div`
  text-align: center;
`;
const MyA = styled.a`
  color: #61DAFB;
`;
const AppHeader = styled.header`
  background-color: #282C34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;
const AppLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${rotate} infinite 20s linear;
  }
`;
function reactcopy() {
  return (
    <RootDiv>
      <AppHeader>
        <AppLogo src={logo} alt="app"></AppLogo>
        
        <MyA
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </MyA>
      </AppHeader>
    </RootDiv>
  );
}



export default reactcopy;