import { Button, Heading, HStack, Image, List, ListItem } from "@chakra-ui/react"
import useGenres, { Genre } from "../hooks/useGenres"
import getCroppedImageUrl from "../services/image-url"

interface Props {
  onSelectGenre: (genre: Genre) => void
  selectedGenre: Genre | null
}

const GenreList = ({selectedGenre, onSelectGenre} : Props) => {
  const {data } = useGenres()

  // if (error) return null

  return (
    <>
    {/* {isLoading && <Spinner/>} */}
    <Heading fontSize={'2xl'} marginBottom={3}  color="white">Genres</Heading>
    <List>
      {data.map(genre => (
        <ListItem key={genre.id} paddingY={5}>
          <HStack>
            <Image src={getCroppedImageUrl(genre.image_background, 600, 400)} objectFit={'cover'} alt={genre.name} boxSize='50px' borderRadius={8}/>
            <Button whiteSpace='normal' textAlign='left'fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} onClick={()=>{onSelectGenre(genre)}}variant='link' fontSize='lg'>{genre.name}</Button>
           
          </HStack>
          </ListItem>
        ))}
    </List>
    </>
  )
}

export default GenreList