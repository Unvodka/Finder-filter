import { v4 as uuidv4 } from 'uuid';

const Images = ({images}) => {

  return (
    <div className="images" >
      {images.map(image => {
        return (
          <div className="item" key={uuidv4()}>
            <img alt={image.category} src={image.src} />
          </div>
        )
      })}
    </div>
  )
}
 export default Images