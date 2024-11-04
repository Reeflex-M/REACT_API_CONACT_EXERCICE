export const Contacts = () => {
    const users = [1,2,3,4,5]
return (
    <div className="">
        Liste des Utilisateurs
        <ul>
            {users.map(user => <li key={user}>{user}</li>)}
        </ul>
    </div>
)

};