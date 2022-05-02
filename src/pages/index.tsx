import type { NextPage } from "next";
import { ThemeProvider } from "styled-components";

import { Card, Content, Grid, Title } from "components";
import { GlobalStyles, theme } from "styles";

const Home: NextPage = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Content data-cy="content">
          <Title data-cy="title">Raules Ezinha :sunglasses:</Title>
          <Card data-cy="card">
            <Grid />
          </Card>
        </Content>
      </ThemeProvider>
    </>
  );
};

export default Home;
