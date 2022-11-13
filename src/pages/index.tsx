import type { NextPage } from 'next'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import { Card, Content, Grid, Title } from 'components'
import { configureStore } from 'core'
import { GlobalStyles, theme } from 'styles'

const store = configureStore()

const Home: NextPage = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Provider store={store}>
          <Content data-cy="content">
            <Title data-cy="title">Next.js Sudoku</Title>
            <Card data-cy="card">
              <Grid />
            </Card>
          </Content>
        </Provider>
      </ThemeProvider>
    </>
  )
}

export default Home
