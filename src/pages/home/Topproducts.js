import { collection, getDocs } from "firebase/firestore";
import { db } from "../../services/firebase_config";

async function data_top_produtos() {
    const top_produtos = [];

    try {
        const querySnapshot = await getDocs(collection(db, 'top_produtos'));

        querySnapshot.forEach((doc) => {
            // Para cada documento, você pode extrair os dados usando doc.data()
            const data = doc.data();
            top_produtos.push(data);
        });

        // Atualiza o estado com os dados obtidos

    } catch (error) {
        console.error('Erro ao obter documentos:', error);
    }
    return top_produtos
}

export default data_top_produtos