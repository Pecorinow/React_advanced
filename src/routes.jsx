import App from './App.jsx'
import { About } from './features/about/About.jsx'
import { Register } from './features/auth/pages/Register.jsx'
import {Login} from './features/auth/pages/Login.jsx'
import { FAQ } from './features/FAQ/Faq.jsx'
// import { FAQCard } from './features/FAQ/FaqCard.jsx'
import { TaskDetails } from './features/tasks/pages/TaskDetails.jsx'
import { TaskHome } from './features/tasks/pages/TaskHome.jsx'
import { Home } from './layout/pages/Home.jsx'
import { NotFound } from './layout/pages/NotFound.jsx'
import { ProtectedPage } from './features/auth/components/PageProtected.jsx'


/**
 * @type { import( react-router ).RouteObject}
 */

// Ce truc au-dessus : indique au document qu'on va créer un tableau de type RouteObject, pour qu'on ait l'autocomplétion.


export const routes = [
    {
        path : '/',
        element : <App/>,
        children : [
            {
                index:true,
                    // indique que lélément est l'accueil du path, son chemin est le même que path juste ici au-dessus.
                element: <Home/>
            },
            {
                path : 'tasks',
                    // = quand le chemin contient tasks, afficher element :
                element: <TaskHome/>
            },
            // Pour créer une route dynamique :
                // = une route dont le dernier élément sera variable
            {
                path:'task/:id',
                element : <ProtectedPage> <TaskDetails/> </ProtectedPage>
                // Composant TaskDetails est protégé par le ProtectedPage tant qu'on n'est pas connecté.
            },
            
            {
                path:'faq',
                element : <FAQ/>
            },
            {
                path:'about',
                element : <About/>
            },
            // {
            //     path: '<faq/faqcards',
            //     element : <FAQCard/>
            // }
            {
                path: 'auth',
                children : [
                    {
                        path: 'register',
                        element: <Register/>
                    },
                    {
                        path: 'login',
                        element: <Login/>
                    }
                ]
            },

            // ATTENTION : ce dernier chemin '*' signifie "si aucun des chemins au-dessus ne correspond", donc toujours le mettre en dernier :
            {
                path: '*',
                element : <NotFound/>
            }
        ]
    }
]