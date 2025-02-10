import { Grid, GridItem, Show } from "@chakra-ui/react"
import Navbar from "./components/navbar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"

function App() {
  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      md: `"nav nav" "aside main"`,
    }}>
      <GridItem gridArea="nav">
        <Navbar />
      </GridItem>
      <Show above="md">
        <GridItem gridArea="aside" >
          <GenreList />
        </GridItem>
      </Show>
      <GridItem gridArea="main" >
        <GameGrid />
      </GridItem>
    </Grid>
  )
}

export default App
