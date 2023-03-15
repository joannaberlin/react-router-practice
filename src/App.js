import {
	createBrowserRouter,
	// createRoutesFromElements,
	RouterProvider,
	// Route,
} from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import RootLayout from './pages/RootLayout';
import Error from './pages/Error';
import ProductDetail from './pages/ProductDetail';

// const routeDefinitions = createRoutesFromElements(
// 	<Route>
// 		<Route path='/' element={<Home />} />
// 		<Route path='/products' element={<Products />} />
// 	</Route>
// );

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		errorElement: <Error />,
		children: [
			{ index: true, element: <Home /> }, //path: ''
			{ path: 'products', element: <Products /> },
			{ path: 'products/:productId', element: <ProductDetail /> },
		],
	},
]);

// const router = createBrowserRouter(routeDefinitions);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
