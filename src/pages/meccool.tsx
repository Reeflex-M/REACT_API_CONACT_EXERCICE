export const Meccool = () => {
    return (
        <div className="flex flex-col items-center p-8">
            <h1 className="text-3xl font-bold mb-6">meccool</h1>
            <img 
                src="/meccool.png" 
                alt="Meccool Image" 
                className="w-[500px] h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
        </div>
    );
};