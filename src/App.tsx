import { Grid, GridItem, Show } from "@chakra-ui/react"
import Navbar from "./components/navbar"
import GameGrid from "./components/GameGrid"

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
          Sidebar
        </GridItem>
      </Show>
      <GridItem gridArea="main" >
        <GameGrid />
      </GridItem>
    </Grid>
  )
}

export default App
