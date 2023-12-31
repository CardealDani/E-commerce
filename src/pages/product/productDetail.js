import { collection, getDocs } from "firebase/firestore";
import { db } from "../../services/firebase_config";

async function data_celulares() {
    const celularesData = [];

    try {
        const querySnapshot = await getDocs(collection(db, 'celulares'));

        querySnapshot.forEach((doc) => {
            // Para cada documento, você pode extrair os dados usando doc.data()
            const data = doc.data();
            celularesData.push(data);
        });

        // Atualiza o estado com os dados obtidos

    } catch (error) {
        console.error('Erro ao obter documentos:', error);
    }
    return celularesData
}

export default data_celulares