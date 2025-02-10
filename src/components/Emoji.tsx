import bullsEye from '../assets/bulls-eye.webp';
import thumbsUp from '../assets/thumbs-up.webp';
import meh from '../assets/meh.webp';
import { Image, ImageProps } from '@chakra-ui/react';

interface Props {
    rating: number
}

const Emoji = ({ rating }: Props) => {
    if (rating < 3) return null;

    const emojiMap: {[key: number]: ImageProps} = {
        5: {src: bullsEye, alt: 'Exceptional', boxSize: '35px'},
        4: {src: thumbsUp, alt: 'Recommended', boxSize: '25px'},
        3: {src: meh, alt: 'Meh', boxSize: '25px'}
    }
    

    return (
    <Image marginTop={1} src={emojiMap[rating].src} alt={emojiMap[rating].alt} boxSize={emojiMap[rating].boxSize} />
  )
}

export default Emoji