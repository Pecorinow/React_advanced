import { atom } from "jotai";

// Cet atom sera réutilisable partout dans l'app.
// -> Ici, on va l'utiliser dans LoginForm pour créer un useAtom(tokenAtom).

// Au chargement de l'app, récupérer le token s'il existe déjà (= si on est déjà connecté mais qu'on a refresh la page) :
export const tokenAtom = atom(localStorage.getItem('token')); 
// null si pas de token = pas connecté

//Et on va rajouter ça  :
// avec un "atom dérivé" qui représente, pas le token mais l'état de connexion (ici, non-null par défaut) :

export const isConnectAtom = atom((get) => {
    const token = get(tokenAtom);
    return token !== null;
});
    // => Là, pas besoin de faire le test pour savoir si tokenAtom est null ou non, s'il est périmé ou non...