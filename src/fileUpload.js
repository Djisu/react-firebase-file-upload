import React, { useState } from 'react'
import { storage } from '../firebase'

function ReactFirebaseFileUpload() {
  const [image, setImage] = useState(null)

  const handleChange = (e) => {
    if (e.target.files[0]) {
    }
  }

  const handleUpload = () => {}

  return (
    <div>
      <br />
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  )
}

export default ReactFirebaseFileUpload
