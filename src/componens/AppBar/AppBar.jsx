import { NavLink } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';
export const AppBar = () => {

    return (
        <header>
         <Navigation />
         <NavLink to= "/"></NavLink>
        </header>
    )
}