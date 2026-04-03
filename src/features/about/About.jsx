import { AboutCard } from "./AboutCard";
import about1 from '../../../public/images/about-1.png';
import about2 from '../../../public/images/about-2.png';

export const About = () => {
    return (
        <>
            <section className="py-12 px-44 flex flex-col items-center gap-4">
                
                <h1 className="text-4xl">À propos de<span className="text-main-800 text-3xl font-bold font-chewy"> The <span className="text-secondary-600">Toad</span>'o List</span></h1>

                <div className="flex flex-row justify-center items-start gap-6">
                   <AboutCard
                        title="L'initiative"
                        text={[
                            "Développeuse le jour, collectionneuse de grenouilles la nuit — et désorganisée en permanence. Si vous avez déjà retrouvé votre liste de courses dans vos notes de réunion, on va bien s'entendre.",
                            "L'idée de The Toad'o List est née d'un constat simple : on a de plus en plus de choses à faire, de moins en moins de temps pour les faire, et quelque part entre les deux, on oublie de souffler un peu. Les applications de gestion de tâches existantes sont souvent froides, austères, culpabilisantes. Elles vous rappellent ce que vous n'avez pas fait sans jamais vous féliciter d'avoir survécu à votre journée.",
                            "Moi je voulais quelque chose de différent. Un outil qui soit vraiment utile, sans se prendre au sérieux. Parce qu'une grenouille sur un nénuphar, ça ne stresse pas. Ça attend le bon moment, ça saute quand il faut, et entre les deux, ça profite du soleil.",
                            "The Toad'o List, c'est ça : une façon de s'organiser qui laisse de la place pour rigoler."
                        ]}
                        imgUrl={about1}
                        imgAlt="Les mots \'To do list\' stylisés."
                   
                   />

                   <AboutCard
                        title="La philosophie"
                        text={[
                            "Derrière chaque grenouille, il y a une vision. La Toad'o List repose sur trois convictions simples, forgées à coups de to-do lists ratées et de post-its perdus.",
                            "Sauter au bon moment. Une grenouille ne saute pas n'importe quand — elle observe, elle attend, elle choisit. Pas besoin de tout faire tout de suite. La Toad'o List vous aide à prioriser ce qui compte vraiment, sans vous noyer dans une liste interminable qui donne envie de tout abandonner avant même de commencer.",
                            "Garder la tête hors de l'eau. L'organisation ne devrait pas être une source de stress supplémentaire. On a déjà assez à gérer. La Toad'o List se veut légère, rapide à prendre en main, sans friction. Vous ouvrez, vous notez, vous fermez. Le reste, c'est votre affaire.",
                            "Ne jamais oublier de coasser. Travailler c'est bien, mais vivre c'est mieux. Entre deux tâches cochées, il y a de la place pour un café, un fou rire, une promenade. La Toad'o List ne vous juge pas si vous avez procrastiné toute la matinée — elle est juste là pour vous aider à repartir du bon pied quand vous êtes prêts."
                        ]}
                        imgUrl={about2}
                        imgAlt="Petite grenouille joyeuse sur un nénpuhar."
                   
                   />
                </div>



            </section>
        </>
    )
}