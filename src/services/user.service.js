import axios from "axios";
import { getDefaultStore } from "jotai";
import { tokenAtom } from "../atoms/auth.atom";

export const userService = {

    getAll : async() => {

        // Jotai permet un accès au contenu de l'atom en dehors de React, via getDefaultStore() :
            // Pourquoi on fait ça ? Parce que le token est sauvegardé dans un atom de Jotai, qui fonctionne sur React.
            // Or, ici, on est en JS, pas en JSX, donc pas en React => getDefaultStore() donne accès au "store" de Jotai, même hors de React.
        const token = getDefaultStore().get(tokenAtom);

        const response = await axios.get("http://localhost:3000/api/users", {
            headers : {
                Authorization : `Bearer ${token}`
            }
            // headers : Dans Insomnia -> Users -> Headers RIEN COMPRIS
        })

        return response.data.users;
    }

};