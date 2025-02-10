import { Grid, GridItem, Show } from "@chakra-ui/react"
import Navbar from "./components/navbar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import { useState } from "react"
import { Genre } from "./hooks/useGenres"
import PlatformSelector from "./components/PlatformSelector"

function App() {
  const [selectedGenre, selectedSetGenre] = useState<Genre | null>(null);

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
          <GenreList selectedGenre={selectedGenre} onSelectGenre={(genre: Genre) => selectedSetGenre(genre)}/>
        </GridItem>
      </Show>
      <GridItem gridArea="main" >
        <PlatformSelector />
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  )
}

export default App
