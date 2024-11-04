export const Meccool = () => {
    return (
        <div className="flex flex-col items-center p-8 min-h-screen bg-black bg-opacity-90 bg-[url('/stars.png')] relative">
            <h1 className="text-4xl font-bold mb-8 text-yellow-400 tracking-widest uppercase animate-pulse">
                meccool
            </h1>
            <div className="relative">
                <img 
                    src="/meccool.png" 
                    alt="Meccool Image" 
                    className="w-[500px] h-auto rounded-lg border-2 border-yellow-400 shadow-[0_0_30px_rgba(234,179,8,0.5)] hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent rounded-lg pointer-events-none"></div>
            </div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none"></div>
        </div>
    );
};