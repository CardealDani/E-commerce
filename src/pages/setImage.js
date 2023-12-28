import { storage, db } from "../services/firebase_config";
import { collection, addDoc } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import React, { useEffect, useState } from 'react';

function SetImage() {
    const [imgURL, setImgURL] = useState("");
    const [progressPorcent, setPorgessPorcent] = useState(0);
    const [permissionDenied, setPermissionDenied] = useState(false);

    useEffect(() => {
        const fetchUserData = async () => {
            const email = localStorage.getItem('email');
            const adminEmail = "danicardeal.08@gmail.com"
            if (email !== adminEmail) {
                setPermissionDenied(true);
            }
        };

        fetchUserData();
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const file = event.target[0]?.files[0];
        if (!file || permissionDenied) return;

        const storageRef = ref(storage, `images/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setPorgessPorcent(progress);
            },
            (error) => {
                alert(error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setImgURL(downloadURL);
                    console.log('imagem enviada')

                    addDoc(collection(db, "celulares"), {
                        name: "smartwatch 15",
                        tag: "relogio",
                        price: "$900",
                        image: downloadURL,
                        quantidade: 30
                    });
                });
            }
        );
    };

    return (
        <div className="App">
            <header className="App-header">
                {permissionDenied ? (
                    <h3>Você não tem permissão aqui!</h3>
                ) : (<div>
                    <form onSubmit={handleSubmit}>
                        <input type="file" />
                        <button>Enviar</button>
                    </form>
                    {!imgURL && <p>{progressPorcent}%</p>}
                    {imgURL && <img src={imgURL} alt="Imagem" height={200} />}
                </div>
                )}

            </header>
        </div>
    );
}

export default SetImage;
