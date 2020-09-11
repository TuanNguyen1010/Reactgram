import React from 'react'
import useFirestore from '../hooks/useFirestore'

const ImageGrid = () => {
  const { doc } = useFirestore('images')
  console.log(doc)
  
  return (
    <div className='img-grid'> 
    images
    </div>
  )
}

export default ImageGrid