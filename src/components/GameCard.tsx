import { Card, CardBody, Heading, HStack, Image ,} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import imageFix from "../services/image-url";
import Emoji from "./Emoji";


interface Props {
    game : Game
}
  

const GameCard = ({ game } : Props) => {
  return (
    <Card> 
        <Image src={imageFix(game.background_image, 600, 400)} alt={game.name} />
        <CardBody>
           
            <HStack marginBottom={3} justifyContent={'space-between'}>
              <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
              <CriticScore score={game.metacritic} />
            </HStack>
            <Heading fontSize='2xl'>{game.name}<Emoji rating={game.rating_top}></Emoji></Heading>

        </CardBody>
    </Card>
  )
}

export default GameCard