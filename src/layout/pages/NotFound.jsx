export const NotFound = () => {
    return (
        <section className="flex flex-col items-center gap-6 py-4">
            <h1 className="text-main-800 text-9xl font-bold font-chewy">404</h1>
            <h2 className="text-secondary-600 text-4xl font-bold">Rio ne répond plus</h2>
            <h3 className="text-lg">La ressource que vous cherchez n'existe pas.</h3>
            <img src="/images/toad_404.png" alt ="image de crapaud perturbé"></img>
        </section>
    )
}