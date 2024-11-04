export const Contacts = () => {
    const users = [1,2,3,4,5]
    return (
        <div className="min-h-screen bg-gradient-to-b from-red-500 to-red-700 p-8">
            <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-2xl p-6 border-8 border-blue-500">
                <h1 className="text-3xl font-bold text-center mb-6 text-yellow-400 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                    Pokédex des Dresseurs
                </h1>
                <ul className="space-y-4">
                    {users.map(user => (
                        <li 
                            key={user}
                            className="bg-gradient-to-r from-red-100 to-red-200 p-4 rounded-lg flex items-center gap-4 hover:scale-105 transition-transform duration-200 shadow-md"
                        >
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-4 border-red-500">
                                <div className="w-6 h-6 bg-red-500 rounded-full"></div>
                            </div>
                            <span className="text-gray-700 font-semibold">NUM USER{user}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
};