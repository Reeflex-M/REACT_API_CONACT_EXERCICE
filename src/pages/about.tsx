export const About = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-green-800 to-green-900 p-8 bg-[url('/forest-texture.png')] relative">
            <div className="max-w-3xl mx-auto bg-green-50/90 rounded-lg p-8 shadow-xl backdrop-blur-sm border border-green-300">
                <h1 className="text-4xl font-bold mb-6 text-green-800 border-b-2 border-green-600 pb-2">
                    À propos de la forêt
                </h1>
                <p className="text-lg leading-relaxed text-green-700 font-medium">
                    Bienvenue dans notre sanctuaire naturel. Découvrez la magie 
                    et la sérénité de nos forêts ancestrales, où chaque arbre 
                    raconte une histoire et où la nature s'exprime dans toute 
                    sa splendeur.
                </p>
                <div className="mt-6 flex gap-4">
                    <div className="bg-green-700/20 p-4 rounded-lg border border-green-400">
                        <span className="block text-green-800 font-semibold">🌳 Protection</span>
                    </div>
                    <div className="bg-green-700/20 p-4 rounded-lg border border-green-400">
                        <span className="block text-green-800 font-semibold">🌿 Biodiversité</span>
                    </div>
                    <div className="bg-green-700/20 p-4 rounded-lg border border-green-400">
                        <span className="block text-green-800 font-semibold">🍃 Écologie</span>
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 bg-[radial-gradient(circle,_transparent_20%,_rgba(0,50,0,0.4)_100%)] pointer-events-none"></div>
        </div>
    );
}