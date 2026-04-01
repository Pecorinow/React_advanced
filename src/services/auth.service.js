import axios from 'axios';

export const authService = {

    register: async (userData) => {
        // data pourrait s'écrire n'importe comment, l'important c'est que ça contient les données utilisateur


        // Utilisation d'une requête Ajax pour contacter le serveur webApi (= Demo_Express)
        const response = await axios.post("http://localhost:5173/api/auth/register", userData);
            // = la réponse est constituée de l'url et des données de userData.
    }

}