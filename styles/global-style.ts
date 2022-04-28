import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
     ${reset};
     *, *::before, *::after {
          box-sizing: border-box;
     }
     
     /* custom scrollbar */
     *::-webkit-scrollbar{
          width: 6px;
     }
     *::-webkit-scrollbar-thumb{
          height: 17%;
          background-color: rgba(0,0,0,0.7);
          border-radius: 10px;  
     }
     *::-webkit-scrollbar-track{
          background-color: rgba(0,0,0,0.1);
     }
     
     a:link { color: black; text-decoration: none;}
     a:visited { color: black; text-decoration: none;}
     
     input {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          border: none;
     }
     
     input:focus { outline: none;}
     
     /* delete erase button at input box */
     input::-ms-clear { display: none; }
     
     /* delete arrow at input type number */
     input[type='number']::-webkit-inner-spin-button,
     input[type='number']::-webkit-outer-spin-button {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
     }     
`;

export default GlobalStyle;
