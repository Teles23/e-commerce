import {
	BrowserRouter,
	Navigate,
	Outlet,
	Routes as ReactRoutes,
	Route,
} from "react-router-dom";
import AuthProvider from "./contexts/ContextLogin/AuthContextProvider";
import CheckoutPage from "./pages/Checkout";
import LoginPage from "./pages/Login";
import ProductsPage from "./pages/Main";
import ProductDetailPage from "./pages/Product";

interface ProtectedRouteProps {
	redirectTo?: string;
}

function ProtectedRoute({ redirectTo = "/" }: ProtectedRouteProps) {
	const isAuthenticated = false;

	return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />;
}

const Routes = () => {
	return (
		<BrowserRouter>
			<AuthProvider>
				<ReactRoutes>
					<Route path="/">
						<Route index element={<LoginPage />} />
						<Route path="sign-in" element={<LoginPage />} />
					</Route>

					<Route path="/*" element={<ProtectedRoute redirectTo="/" />}>
						<Route path="products" element={<ProductsPage />} />
						<Route path="products/:id" element={<ProductDetailPage />} />
						<Route path="checkout" element={<CheckoutPage />} />
					</Route>
				</ReactRoutes>
			</AuthProvider>
		</BrowserRouter>
	);
};

export default Routes;
