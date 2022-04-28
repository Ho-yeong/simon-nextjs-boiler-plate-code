import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    black?: string;
    MainBackground?: string;
    mobileFontSize?: string;
    mobileHorizon?: string;
    mobileVertical?: string;
    desktop?: string;
  }
}
