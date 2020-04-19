// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  interface Gradients {
    scissor: string;
    paper: string;
    rock: string;
    lizard: string;
    background: string;
    cyan: string;
  }

  interface Colors {
    darkPurple: string;
    blue: string;
    darkText: string;
    scoreText: string;
    header: string;
    light: string;
  }

  interface Size {
    mobile: string;
    desktop: string;
  }

  export interface DefaultTheme {
    gradients: Gradients;
    colors: Colors;
    size: Size;
  }
}
