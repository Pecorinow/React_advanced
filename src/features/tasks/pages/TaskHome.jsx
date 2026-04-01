import { NavLink } from "react-router"

export const TaskHome = () => {
    return (
        <>
            <section className="py-6 px-12 flex items-center gap-6">
                <img src="/icons/frog-svgrepo-com.svg" alt="La tête de Toady" className="w-32"></img>
                <h1 className="text-4xl text-main-800">Toutes ces tâches sont pour toi, de rien !</h1>
            </section>
            <section className="flex flex-col px-12">
                {/* Normalement, il y aura des tâches dans l'API, mais pour le moment on va juste faire des liens vers des tâches inexistantes pour comprendre le routing : */}
                 
                <NavLink to="/task/1">
                    Détails tâche 1
                </NavLink>

                <NavLink  to="/task/2">
                    Détails tâche 2
                </NavLink>

                <NavLink  to="/task/3">
                    Détails tâche 3
                </NavLink>
            </section>
        </>
    )
}