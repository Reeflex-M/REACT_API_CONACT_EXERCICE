import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

interface User {
    id: number;
    first_name: string;
    last_name: string;
    profile_picture: string;
}

export const Contacts = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch('https://api.slingacademy.com/v1/sample-data/users?limit=10')
            .then(response => {
                if (!response.ok) throw new Error('Erreur réseau');
                return response.json();
            })
            .then(data => setUsers(data.users))
            .catch(error => setError(error.message))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <div className="text-center p-4">Chargement...</div>;
    if (error) return <div className="text-center text-red-500 p-4">{error}</div>;

    return (
        <div className="max-w-2xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Liste des contacts</h1>
            <ul className="space-y-2">
                {users.map(user => (
                    <li key={user.id}>
                        <Link
                            to={`/contact/${user.id}`}
                            className="flex items-center p-3 border rounded hover:bg-gray-50"
                        >
                            <img
                                src={user.profile_picture}
                                alt={`${user.first_name} ${user.last_name}`}
                                className="w-10 h-10 rounded-full mr-3"
                            />
                            {user.first_name} {user.last_name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};