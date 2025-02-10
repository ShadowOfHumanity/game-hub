import { Grid, GridItem, Show } from "@chakra-ui/react"
import Navbar from "./components/navbar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"

function App() {
  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      md: `"nav nav" "aside main"`,
    }}
    templateColumns={{base: '1fr', md: '200px 1fr'}}
    >
      <GridItem gridArea="nav">
        <Navbar />
      </GridItem>
      <Show above="md">
        <GridItem gridArea="aside" paddingX={5}>
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
