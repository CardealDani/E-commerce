// import { collection, getDocs } from "firebase/firestore";
// import { useEffect, useState } from "react";
// import { db } from "../../services/firebase_config";

// const Productdetail = () => {


//     const [celulares, setCelulares] = useState([]);
//     console.log('opa')
//     useEffect(() => {
//         async function fetchCelulares() {
//             try {
//                 const querySnapshot = await getDocs(collection(db, 'celulares'));
//                 const celularesData = [];

//                 querySnapshot.forEach((doc) => {
//                     // Para cada documento, você pode extrair os dados usando doc.data()
//                     const data = doc.data();
//                     celularesData.push(data);
//                 });

//                 // Atualiza o estado com os dados obtidos
//                 setCelulares(celularesData);
//                 console.log(celulares)

//             } catch (error) {
//                 console.error('Erro ao obter documentos:', error);
//             }
//         }

//         // Chama a função para buscar os documentos quando o componente montar
//         fetchCelulares();
//     }, []);

//     return celulares

// }


// export default Productdetail