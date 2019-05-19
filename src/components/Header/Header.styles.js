import styled from 'styled-components';

export const Header = styled.div`
  background-color: white;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
  height: 5rem;
`;

// export const HeaderWrapper = styled(Wrapper)`
//   display: flex;
//   justify-content: center;
//   min-height: 100%;
//   padding: 0 0.5rem;

//   ${props => props.theme.media.medium`
//    justify-content: space-between;
//  `}
// `;

// export const HeaderLogo = styled(Logo).attrs({
//   simple: true
// })`
//   display: inline-flex;
//   height: 25px;
//   width: 25px;
//   margin: 1rem;

//   ${props => props.theme.media.medium`
//    height: 45px;
//    width: 45px;
//  `}
// `;

// export const HeaderMenu = styled(Menu)`
//   display: none;

//   ${props => props.theme.media.medium`
//    display: flex;
//  `}
// `;
