import { Heading } from "@chakra-ui/react"
import { GameQuery } from "../App"

interface Props {
    gameQuery: GameQuery
}

const GameHeading = ({gameQuery} : Props) => {

    const heading = `Top ${gameQuery.platform?.name || '' } ${gameQuery.genre?.name || ''} Games`

  return (
    <Heading fontSize={'5xl'} as='h1' padding={5} color="white">{heading}</Heading>
  )
}

export default GameHeading