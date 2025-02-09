import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

interface Game {
  id: number;
  name: string;
}

const GameGrid = () => {
    const {games, error} = useGames()

   

  return (
    <>
    {error && <Text>{error}</Text>}
    <ul>
        {games.map((game: Game) => (
            <li key={game.id}>{game.name}</li>
        ))}
    </ul>
    </>
  )
}

export default GameGrid