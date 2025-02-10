import { Button, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react"
import useGenres, { Genre } from "../hooks/useGenres"
import getCroppedImageUrl from "../services/image-url"

interface Props {
  onSelectGenre: (genre: Genre) => void
  selectedGenre: Genre | null
}

const GenreList = ({selectedGenre, onSelectGenre} : Props) => {
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
            <Button fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} onClick={()=>{onSelectGenre(genre)}}variant='link' fontSize='lg'>{genre.name}</Button>
           
          </HStack>
          </ListItem>
        ))}
    </List>
    </>
  )
}

export default GenreList