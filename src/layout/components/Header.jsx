import { NavLink } from "react-router"

export const Header = ()=> {
    return (
        <header className="flex justify-between py-4 px-8 bg-secondary-100">
            <div className="flex items-center gap-4">
                <img className="w-16" src="/icons/frog-svgrepo-com.svg" alt="logo du site The toad'o list"/>
                {/* Le dossier public est directement accessible, pas besoin de l'écrire ! */}
                <p className="text-main-800 text-3xl font-bold font-chewy">The <span className="text-secondary-600">Toad</span>'o List</p>
            </div>

            <nav className="flex items-center">
                <ul className="flex items-center gap-4 text-lg font-bold text-main-800">
                    <li>
                        <NavLink to="">Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink to="/tasks">Mes tâches</NavLink>
                    </li>
                    
                    <li>
                        <NavLink to="/pomodoro">Pomodoro</NavLink>
                    </li>
                    <li>
                        <NavLink to="/faq">FAQ</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>

                    <li>
                        <NavLink className="btn" to="/auth/login">Me Connecter</NavLink>
                    </li>
                    <li>
                        <NavLink className="btn-2" to="/auth/register">Créer un compte</NavLink>
                    </li>
                    
                </ul>
            </nav>
        </header>
    )

}