import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react"
import useGenres from "../hooks/useGenres"
import getCroppedImageUrl from "../services/image-url"

const GenreList = () => {
  const {data, isLoading, error } = useGenres()

  if (error) return null

  return (
    <>
    {isLoading && <Spinner/>}
    <List>
      {data.map(genre => (
        <ListItem key={genre.id} paddingY={5}>
          <HStack>
            <Image src={getCroppedImageUrl(genre.image_background, 600, 400)} alt={genre.name} boxSize='50px' borderRadius={8}/>
            <Text fontSize='lg'>{genre.name}</Text>
           
          </HStack>
          </ListItem>
        ))}
    </List>
    </>
  )
}

export default GenreList