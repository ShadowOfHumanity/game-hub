import placeholder from '../assets/placeholder.webp'

const getCroppedImageUrl = (image: string , width: number, height: number) => {
    if(!image) return placeholder

    const target = 'media/'
    const index =  image.indexOf(target) +target.length  // some games dont have images
    
    return image.slice(0, index) + `crop/${width}/${height}/` + image.slice(index) ;
}

export default getCroppedImageUrl;