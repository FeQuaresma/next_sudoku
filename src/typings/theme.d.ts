import 'styled-components'

import { theme } from '../styles'

type Theme = typeof theme

declare module 'style-components' {
  export interface DefaultTheme extends Theme {}
};
