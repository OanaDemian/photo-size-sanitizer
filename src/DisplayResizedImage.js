import { useState } from "react";
import { ResizedImage } from "./ResizedImage"

export const DisplayResizedImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const imageUploaded = (eve) => {
    setSelectedImage(eve.target.files[0]);
  }

  return (
    <div>
      <h1>Upload and Display Image usign React Hook's</h1>
      {(selectedImage)&&(
        <div>
          <ResizedImage imageToBeResized={selectedImage}/>
          <br />
          <button onClick={() => setSelectedImage(null)}>Remove</button>
        </div>
      )}

      <br />
      <br />
      
      <input
        type="file"
        name="myImage"
        onChange={(event) => imageUploaded(event)}
      />
    
    </div>
  )
}