import { NavLink, useParams } from "react-router"

export const TaskDetails = () => {
    //* Pour récupérer les paramètres de routes :
    // useParams() = une hook qui renvoie un objet contenant tous les paramètres de la route actuelle
    // On doit en extraire celui qui nous intéresse via le nom qu'on lui a donné après les ":" dans notre fichier routes :
    const {id} = useParams();

    return (
        <>
        <section>
        <NavLink className="text-secondary-600" to="/tasks">Revenir à ma liste de tâches</NavLink>
            
            {/* Utiliser ici le paramètre extrait par useParams() : */}
            <h1 className="text-4xl text-main-800 text-3xl font-bold">Tâche n° {id} </h1>
        </section>
        </>
    )
}