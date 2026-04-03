import {useId} from 'react';
import { useNavigate } from 'react-router';
import { authService } from '../../../services/auth.service';

export const LoginForm = () => {

    const id = useId();

     const navigate = useNavigate();

    const handleRegisterSubmit = async (formData) => {
        console.log(formData);

        const data = Object.fromEntries(formData.entries());

        console.log('Data', data);

        const response = await authService.login(data);

        console.log(response);
            // => Response contient les infos de l'user tels que présentés dans la DB dans Insomnia, dans Auth -> Login : id, firstname, lastname, token.

        

        navigate('/');
    }

    return (
        <form action={handleRegisterSubmit}>
            {/* ATTENTION : pour le login, changer le action de RegisterForm.jsx en onSubmit POURQUOI ?? */}
             <div>
                <div className='flex flex-col justify-center gap-1'>
                    <label htmlFor={id + 'email'}>Email</label>
                    <input id={id + 'email'} type='text' name="email" className='outline-2 p-1 rounded-md outline-secondary-600 hover:bg-secondary-50 target:bg-secondary-50'></input>
                </div>


                <div className='flex flex-col justify-center gap-1'>
                    <label htmlFor={id + 'password'}>Mot de passe</label>
                    <input id={id + 'password'} type='password' name="password" className='outline-1 p-1 rounded-md'></input>
                </div>

                <div>
                    <button type="submit" className='btn-2'>Se connecter 🐸</button>
                </div>

                
            </div>
        </form>
    )
}