import {useId} from 'react';
import { useNavigate } from 'react-router';

export const RegisterForm = () => {

    const id = useId(); // + id d'accessibilité, le même partout mais qu'en rend unique en y ajoutant plus bas les chaines de caractères correspondant à leur champ (username, firstname...)

    const navigate = useNavigate(); // = méthode quipermet une redirection après l'enregistrement

    //* Les données sont récupérées sous forme d'un formData => Ajouter un name dans les inputs !
    const handleRegisterSubmit = async (formData) => {
        // handleRegisterSubmit = méthode qui 
        // async => permet d'utiliser une fonction asynchrone, sans utiliser de useEffect ???
        
        console.log(formData);

        //* Conversion des données en un objet JS :
            // Attention : se base su rla value des champs, donc si on a des checkbox, cett evalue est "on" ou undefined
        const data = Object.fromEntries(formData.entries());
            // .fromEntries = convertit des entrées de formulaires en objet JS
        console.log('Data', data);
            // Dans notre cas, on transforme le formData en objet JS car le webApi ne s'attend pas à recevoir des données de type formData.

        //* Utiliser le service qui permet de contacter la WebApi Demo_Express :
        await authService.register(data);

        //* Redirection vers la page d'accueil :
        navigate('/'); // = redirige l'utilisateur ver sla page d'accueil après qu'il se soit inscrit
    }
    

    return (

        <form action={handleRegisterSubmit}>
            {/* action = désactive automatiquement le comportemen tpar défaut de la page (le refresh) et met automatiquement le sinfos du formulaire dans formData. Inconvénient : on ne peut pas y ajouter des states, donc pas de messages d'erreur. => On peut faire quelque-chose pour quand-même y ajouter un state  : ... */}
            <div>
                <div>
                    <label htmlFor={id + 'email'}>Email</label>
                    <input id={id + 'username'} type='text' name="username"></input>
                </div>

                <div>
                    <label htmlFor={id + 'firstname'}>Prénom</label>
                    <input id={id + 'firstname'} type='text' name="firstname"></input>
                </div>

                <div>
                    <label htmlFor={id + 'lastname'}>Nom</label>
                    <input id={id + 'lastname'} type='text' name="lastname"></input>
                </div>

                <div>
                    <label htmlFor={id + 'password'}>Mot de passe</label>
                    <input id={id + 'password'} type='text' name="password"></input>
                </div>

                <div>
                    <button type="submit">S'enregistrer 🐸</button>
                </div>

                
            </div>
        </form>
    )

}