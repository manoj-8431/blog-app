import { Link } from 'react-router-dom';

function NavBar(){
    return (
        <nav class="font-semibold " >
            <Link class="mr-1" to="/">Home</Link> |
            <Link class="ml-1 " to="/create"> Create</Link>
        </nav>
    );
}

export default NavBar;