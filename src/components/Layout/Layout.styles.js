import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  flex: 1 0 auto;
`;

// export const LayoutMenu = styled(Menu)`
//  display: flex;
//  position: sticky;
//  width: 100%;
//  bottom: 0;
//  left: 0;
//  right: 0;
//  background-color: ${props => props.theme.colors.white};
//  border-top: 1px solid ${props => props.theme.colors.grey};
//  z-index: 10;

//  ${props => props.theme.media.medium`
//    display: none;
//  `}
// `;
