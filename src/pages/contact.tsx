import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

interface User {
  id: number;
  profile_picture: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  country: string;
  job: string;
}

export const Contact = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState<{
    user: User | null;
    loading: boolean;
    error: string | null;
  }>({
    user: null,
    loading: true,
    error: null
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.slingacademy.com/v1/sample-data/users/${id}`);
        const data = await response.json();
        setUserData({ user: data.user, loading: false, error: null });
      } catch {
        setUserData({ user: null, loading: false, error: 'Erreur de chargement' });
      }
    };

    fetchData();
  }, [id]);

  if (userData.loading) return <div className="text-center p-4">Chargement...</div>;
  if (userData.error) return <div className="text-center text-red-500 p-4">{userData.error}</div>;
  if (!userData.user) return <div className="text-center p-4">Contact non trouvé</div>;

  const user = userData.user;

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6 mt-4">
      <Link to="/contact" className="text-blue-500 hover:text-blue-700 mb-4 block">
        ← Retour à la liste
      </Link>
      <div className="text-center mb-6">
        <img
          src={user.profile_picture}
          alt={`${user.first_name} ${user.last_name}`}
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h2 className="text-2xl font-bold">{user.first_name} {user.last_name}</h2>
        <p className="text-gray-600">{user.job}</p>
      </div>
      <div className="space-y-3">
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Téléphone:</strong> {user.phone}</p>
        <p><strong>Adresse:</strong> {user.street}</p>
        <p><strong>Ville:</strong> {user.city}</p>
        <p><strong>État:</strong> {user.state}</p>
        <p><strong>Pays:</strong> {user.country}</p>
      </div>
    </div>
  );
};