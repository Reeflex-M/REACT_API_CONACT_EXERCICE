import { Link } from 'react-router-dom';

export const Contacts = () => {
    const users = [1, 2, 3, 4, 5]
    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map(user => (
                    <Link to={`/contact/${user}`} key={user}>
                        <li>
                            <span>NUM USER{user}</span>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    )
};