// Ce composant va utiliser le token de login pour savoir à quel utilisateur on attribue les tâches :

import { useEffect, useState } from "react"
import { userService } from "../../../services/user.service";


// Le composant TaskuserSelector permet de sélectionner un utilisateur.
    // La props onUserSelected permet de transmettre l'objet "user" au parent
    // La valeur par défaut "() => {}" de la props permet d'éviter les bugs si le comoposant parent n'utilise pas la props. Cette valeur se surnomme "NOOP" pour "No operation".

export const TaskUserSelector = ({onUserSelected = () => {} }) => {

    // Charger le liste des utilisateurs via l'API (en passant par userService) :
        // 3 states : un state de chargement, un state de données, un state d'erreur :
    const [isLoading, setIsLoading] = useState(true); // Pourquoi true ? évite un re-rendu inutile ??? Pas compris
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Restauration des valeurs par défaut :
            // (surtout utile si on n'avait pas un tableau vide [] au bout du useEffect, et qu'il faudrait rétablir les valeurs de base après chaque déclenchement du useEffect)
        setIsLoading(true);
        setData(null);
        setError(null);

        // Utilisation du userService pour envoyer la requête :
        userService.getAll()
            .then((users) => {
                console.log(users);
                setData(users);
                setIsLoading(false);
            })
            .catch((error)  => {
                console.log(error);
                setError(error);
                setIsLoading(false);
        });

    }, [])

    // State pour sauvegarder l'id de l'utilisateur sélectionné :
    const [userIdSelected, setUserIdSelected] = useState(null);
        // null car, par défaut, au chargement de la page, aucun user n'est encore sélectionné.

    // Mise à jour du state : Méthode déclenchée au clic sur un nom d'utilisateur :
    const handleUserClick = (user) => {
        // = au clic, la value du state devient userId :
        // Attention : Le "user" pourrait s'écrire n'importe comment, c'est juste le nom qu'on donne à la value envoyée par le handleUserClick du return.

        // Sauvegarde de l'utilisateur sélectionné :
        setUserIdSelected(user._id);

        // Via les props (entre les () tout en haut), on prévient le parent qu'on a sélectionné un utilisateur :
        onUserSelected(user);
    }


    return (
        <div className="bg-main-50 shadow-md rounded-lg p-12">
            <p>À qui souhaitez-vous attribuer une tâche ?</p>

            {/* Si le chargement des données est en cours,=> afficher "Chargement en cours" */}
            {isLoading ? (

                <p>Chargement en cours...</p>
            
            // Sinon, si des data ont été chargées => les afficher :
            ) : (data !== null) ? (
                    <ul>
                    {data.map(user => (
                        <li key={user._id} 
                        className={user._id === userIdSelected ? 'text-secondary-600' : 'text-main-800'}
                        onClick={() => handleUserClick(user)}> 
                            {/* la fonction fléchée devant le handle empèche le comportement automatique du bouton au chargement du composant. Si on ne la met pas, le clic se fera automatiquement à chaque refresh. */}

                            {user.firstname} {user.lastname}

                        </li>
                    ))}
                </ul>
            
            // Sinon, si rien ne se passe => afficher une erreur :
            ) : ( 

                <p>Oups, il y a eu un bug</p>

            )}

            
        </div>       
    )
}