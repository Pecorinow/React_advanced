import {useId} from 'react';

export const RegisterForm = () => {

    const id = useId(); // + id d'accessibilité, le même partout mais qu'en rend unique en y ajoutant plus bas les chaines de caractères correspondant à leur champ (username, firstname...)

    return (

        <form action="">
            <div>
                <div>
                    <label htmlFor={id + 'username'}>Nom d'utilisateur</label>
                    <input id={id + 'username'} type='text'></input>
                </div>

                <div>
                    <label htmlFor={id + 'firstname'}>Prénom</label>
                    <input id={id + 'firstname'} type='text'></input>
                </div>

                <div>
                    <label htmlFor={id + 'lastname'}>Nom</label>
                    <input id={id + 'lastname'} type='text'></input>
                </div>

                <div>
                    <label htmlFor={id + 'password'}>Mot de passe</label>
                    <input id={id + 'password'} type='text'></input>
                </div>

                <div>
                    <button type="submit">S'enregistrer 🐸</button>
                </div>

                
            </div>
        </form>
    )

}