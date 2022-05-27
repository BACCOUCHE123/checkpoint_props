import React from 'react'
import myWonderfulImage from "./imagedeprofil.jpg"

function Image(props) {
  return (
    <div>
<h1>
   {props.children}</h1>
<img src={myWonderfulImage} alt ='myImage' />
    </div>
  )
}

export default Image

