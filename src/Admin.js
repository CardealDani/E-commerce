import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import React, { useState } from 'react'
import { storage } from './firebase'

function Admin() {
    const [imgUrl, setImgUrl] = useState("")
    const [progress, setProgress] = useState(0)

    const handleUpload = (event) =>{
        event.preventDefault()
        
        const file = event.target[0]?.files[0]

        if(!file) return;

        const storageRef = ref(storage,`image/${file.name}`)
        const uploadTask = uploadBytesResumable(storageRef,file)

        uploadTask.on(
            "state_changed",
            snapshot=>{
                const progress = (snapshot.bytesTransferred/snapshot.totalBytes) *100
                setProgress(progress)
            },
            error=>{
                alert(error)
            },
            getDownloadURL(uploadTask.snapshot.ref).then(url=>{
                setImgUrl(url)
            })
        )

    }

  return (
    <div>
        <header>
            <form action=''>
                <input onSubmit={handleUpload} type='file'/>
                <button type='submit'> Enviar </button>
            </form>
        </header>
        {!imgUrl && <progress value={progress} max="100"/>} 
        {imgUrl && <img src={imgUrl} alt='imagem'/>}
    </div>
  )
}

export default Admin