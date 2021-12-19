import React, { createContext, useState } from 'react';

export const contextCart = createContext();

const CartContext = (props) => {
	const [ items, setItems ] = useState([]);
	const [ total, setTotal ] = useState(0);
	const [ count, setCount ] = useState(1);

	return (
		<contextCart.Provider value={{ items, setItems, count, setCount, setTotal, total }}>
			{props.children}
		</contextCart.Provider>
	);
};

export default CartContext;
