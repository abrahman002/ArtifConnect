import image1 from '../imges/img-1.png'
import image2 from '../imges/img-2.png'
import image3 from '../imges/img-3.png'
import image4 from '../imges/img-4.png'
import image5 from '../imges/img-5.png'


export const images = [image1, image2, image3, image4,image5]

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex