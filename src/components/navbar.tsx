import { HStack, Image } from "@chakra-ui/react"
import logo from "../assets/logo.webp"
import ColorModeSwitch from "./ColorModeSwitch"
import SearchInput from "./SearchInput"

interface Props {
  onSearch: (search: string) => void
}

const navbar = ({onSearch} : Props) => {
  return (
    <HStack padding={10} bg="gray.800" color="white">
        <Image src={logo} boxSize="60px"/>
        <SearchInput onSearch={onSearch}/>
        <ColorModeSwitch />
    </HStack>
  )
}

export default navbar