import 'styled-components';

// and extend it
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      header: string;
      body: string;
      footer: string
    };

    mobile: string
  }
}
