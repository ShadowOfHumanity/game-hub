import { HStack, Image } from "@chakra-ui/react"
import logo from "../assets/logo.webp"
import ColorModeSwitch from "./ColorModeSwitch"
import SearchInput from "./SearchInput"
 
const navbar = () => {
  return (
    <HStack padding={10} bg="gray.800" color="white">
        <Image src={logo} boxSize="60px"/>
        <SearchInput />
        <ColorModeSwitch />
    </HStack>
  )
}

export default navbar