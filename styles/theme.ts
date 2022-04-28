import { DefaultTheme } from 'styled-components';

// responsible props
const size = {
  mobileHorizon: '768px',
  mobileVertical: '480px',
  desktop: '1024px',
};

const theme: DefaultTheme = {
  black: `rgba(0,0,0,0.8)`,
  MainBackground: `#F7F8F8`,
  mobileHorizon: `(max-width: ${size.mobileHorizon})`,
  mobileVertical: `(max-width: ${size.mobileVertical})`,
  desktop: `(max-width: ${size.desktop})`,
};

export default theme;
