import { HStack, Image, Text } from "@chakra-ui/react"
import logo from "../assets/logo.webp"
import ColorModeSwitch from "./ColorModeSwitch"
 
const navbar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={10} bg="gray.800" color="white">
        <Image src={logo} boxSize="60px"/>
        <Text fontSize="2xl">Game Hub</Text>
        <ColorModeSwitch />
    </HStack>
  )
}

export default navbar