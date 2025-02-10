import { Card, CardBody, Heading, HStack, Image ,} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./platformIconList";
import CriticScore from "./CriticScore";
import imageFix from "../services/image-url";


interface Props {
    game : Game
}
  

const GameCard = ({ game } : Props) => {
  return (
    <Card> 
        <Image src={imageFix(game.background_image, 600, 400)} alt={game.name} />
        <CardBody>
            <Heading fontSize='2xl'>{game.name}</Heading>
            <HStack justifyContent={'space-between'}>
              <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
              <CriticScore score={game.metacritic} />
            </HStack>

        </CardBody>
    </Card>
  )
}

export default GameCard