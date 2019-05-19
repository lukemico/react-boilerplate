import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
 *,
 *:before,
 *:after {
   box-sizing: border-box;
   font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
   -webkit-tap-highlight-color: transparent;
 }

 html,
 body,
 #app {
   margin: 0;
   padding: 0;
   height: 100%;
   min-height: 100%;
 }

 input,
 button,
 select,
 textarea,
 body,
 html {
   font-size: 16px;
   font-weight: 400;
 }

 body {
   overflow-y: scroll;
 }

 button {
   outline: none;
 }

 a {
   color: ${props => props.theme.colors.blue};
   text-decoration: none;

   &:hover {
     text-decoration: underline;
   }
 }

 svg {
   fill: currentColor;
   display: inline-block;
 }
`;
