import React from 'react';
import { useContext , createContext} from 'react';
import { CategoryContext } from '../../App';

const Header = (props) => {
    const [category, setCount] = useContext(CategoryContext);
    return (
        <div>
            <h1>This is header: {category}</h1>
            <button onClick={() => setCount(category+1)}>Increment</button>
        </div>
    );
};

export default Header;