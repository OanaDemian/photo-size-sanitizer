import { useRef } from "react";
import { Canvas } from "./Canvas"

export const ResizedImage = ({imageToBeResized}) => {
  const imageRef = useRef()

  const resizeImage = async (context) => {
    const image = imageRef.current;
    var img = new Image();
    img.src = image.src;
    img.onload = () => {
    context.drawImage(
    img,
    0,
    0,
    600,
    400
  )
  }}

  return (  
      <div>
        <img
          alt={"not found"}
          width={"250px"}
          src={URL.createObjectURL(imageToBeResized)}
          ref={imageRef}
        />
        <Canvas width={600} height={400} draw={resizeImage} />
      </div>
  )
}