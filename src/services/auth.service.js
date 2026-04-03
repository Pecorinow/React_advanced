import axios from 'axios';

export const authService = {

    register: async (userData) => {
        // userData pourrait s'écrire n'importe comment, l'important c'est que ça contient les données utilisateur


        //* Utilisation d'une requête Ajax pour contacter le serveur Demo_Express :
        const response = await axios.post("http://localhost:3000/api/auth/register", userData);
            // = la réponse est constituée de l'url de la DB (celle de notre webAPI, pas celle de notre projet React) et des données de userData.

        return response.data;
    },

    login: async (userData) => {
        const response = await axios.post("http://localhost:3000/api/auth/login", {email, password});
            // {email, password} = destructuring de userData. Même résultat que userData, mais au lieu d'un objet userData qui contient email et password, on obtiendra deux objets : email et password.
            
        return response.data.token;
            //* Ici, pourquoi a-t-on récupéré le token ?
            // -> Car c'est ce qui rappelle constamment à une API RestFull qu'on a le droit de l'utiliser et de rester connecté (l'API RestFull est très bête et ne se souvient de rien) => On va s'en servir ensuite pour signaler aussi à l'appli React qu'on a le droit d'être là.

    }

}