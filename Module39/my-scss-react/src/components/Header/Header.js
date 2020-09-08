import React from 'react';
import { useContext , createContext} from 'react';
import { CategoryContext } from '../../App';

const Header = (props) => {
    const [category, setCount] = useContext(CategoryContext);
    return (
        <div>
            <h1>This is header: {category}</h1>
            <button onClick={() => setCount('Laptop')}>Laptop</button>
            <button onClick={() => setCount('Mobile')}>Mobile</button>
            <button onClick={() => setCount('Camera')}>Camera</button>
        </div>
    );
};

export default Header;