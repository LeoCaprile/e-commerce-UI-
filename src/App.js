import { Fragment } from 'react/cjs/react.production.min';
import './App.css';
import Header from './components/header/header.component';
import ProductPage from './pages/ProductPage';
import CartContext from './Contexts/CartContext';
function App() {
	return (
		<Fragment>
			<CartContext>
				<Header />
				<ProductPage />
			</CartContext>
		</Fragment>
	);
}
export default App;
