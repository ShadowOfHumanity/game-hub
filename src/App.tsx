import { Grid, GridItem, Show } from "@chakra-ui/react"

function App() {
  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      md: `"nav nav" "aside main"`,
    }}>
      <GridItem gridArea="nav" bg="tomato">
        Navigation
      </GridItem>
      <Show above="md">
        <GridItem gridArea="aside" bg="papayawhip">
          Sidebar
        </GridItem>
      </Show>
      <GridItem gridArea="main" bg="lightblue">
        Main Content
      </GridItem>
    </Grid>
  )
}

export default App
