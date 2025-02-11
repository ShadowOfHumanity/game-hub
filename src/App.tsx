import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react"
import Navbar from "./components/navbar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import { useState } from "react"
import { Genre } from "./hooks/useGenres"
import PlatformSelector from "./components/PlatformSelector"
import { Platform } from "./hooks/useGames"
import SortSelector from "./components/SortSelector"
import GameHeading from "./components/GameHeading"

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      md: `"nav nav" "aside main"`,
    }}
    templateColumns={{base: '1fr', md: '200px 1fr'}}
    >
      <GridItem gridArea="nav">
        <Navbar onSearch={(searchText) => setGameQuery({...gameQuery, searchText})} />
      </GridItem> 
      <Show above="md">
        <GridItem gridArea="aside" paddingX={5}>
          <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre: Genre) => setGameQuery({...gameQuery, genre})}/>
        </GridItem>
      </Show>
      <GridItem gridArea="main" >
        <GameHeading gameQuery={gameQuery} />
        <Flex marginBottom={5} paddingLeft={2} >
          <Box marginRight={5}>
            <PlatformSelector selectedPlatforms={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})} />
          </Box>
            <SortSelector selectedSort={gameQuery.sortOrder} onSelectSort={(sortOrder) => setGameQuery({...gameQuery, sortOrder})}  />
        </Flex>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  )
}

export default App
