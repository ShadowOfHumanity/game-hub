import {  FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid, FaWindows,  } from 'react-icons/fa'
import { BsNintendoSwitch } from "react-icons/bs";
import { MdPhoneIphone } from 'react-icons/md';
import { BsGlobe } from 'react-icons/bs';
// above are icons
import { Platform } from "../hooks/useGames"
import { HStack, Icon } from "@chakra-ui/react"
import { IconType } from 'react-icons';

interface PlatformObjects {
    platforms: Platform[]
}

const PlatformIconList = ({platforms} : PlatformObjects) => {

    let platformIcons: { [key: string]: IconType } = {

        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        apple: FaApple,
        mac: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        ios: MdPhoneIphone,
        nintendo: BsNintendoSwitch,
        web: BsGlobe
    }

  return (
    <>
    <HStack spacing={2} marginY={1}>
        {platforms.map(platforms => <Icon color='gray.500' as={platformIcons[platforms.slug]} key={platforms.id} />)}
    </HStack>
    </>
  )
}

export default PlatformIconList