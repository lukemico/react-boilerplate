import styled from 'styled-components';
// import { Wrapper, Logo } from '@incentloyalty/ui-kit';

export const Footer = styled.div`
  margin-top: 2rem;
  color: ${props => props.theme.colors.darkGrey};
  border-top: 1px solid ${props => props.theme.colors.grey};

  ${props => props.theme.media.medium`
   margin-top: 3rem;
 `}
`;

// export const FooterWrapper = styled(Wrapper)`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;

//   ${props => props.theme.media.medium`
//    justify-content: space-between;
//  `}
// `;

// export const FooterLogo = styled(Logo).attrs({
//   color: 'currentColor'
// })`
//   width: 76px;
//   height: 16px;
//   margin: 1rem 0;

//   ${props => props.theme.media.medium`
//    width: 151px;
//    height: 32px;
//    margin: 3rem 0;
//  `}
// `;

// export const Version = styled.div`
//   font-size: 0.75rem;
//   font-weight: 300;

//   ${props => props.theme.media.medium`
//    font-size: 1.5rem;
//  `}
// `;
