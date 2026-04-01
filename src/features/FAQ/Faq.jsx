import FaqAPI from './FaqAPI.json'
import { FAQCard } from './FaqCard'


export const FAQ = () => {

     return (
        <>
            <section className="py-12 px-44 flex flex-col gap-20 items-start">
                <div className='flex items-end gap-6'>
                    <img src="/images/confus.png" alt="utilisateur au regard sceptique et confus" className="w-24"/>
                    <div className='flex flex-col items-start gap-2'>
                        <h1 className="text-4xl">FAQ</h1>
                        <h2 className="text-2xl">Là où les questions trouvent leurs réponses</h2>
                    </div>
                    
                </div>
                
                

                
                <ul className='flex flex-col gap-6'>
                    {/* Ici, mettre le FaqCard */}
                    {
                        FaqAPI.map(faq => (<FAQCard key={faq.id} faq={faq}/>))    
                    }
                </ul>

            </section>
        </>
     )
}