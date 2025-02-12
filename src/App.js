
import "./styles/global.css"
import Footer from './components/footer/Footer1';
import Head from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import Products from './pages/products/Products';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Reports from "./pages/reports/Reports";
import Movements from "./pages/movements/Movements"
import SingleProduct from "./pages/products/SingleProduct";




function App() {
  const Layout = ()=>{
    return(
      <div className="main">
        <Head/>
        <div className="container">
          <div className="menucontainer">
            <Sidebar/>
          </div>
          <div className="contentcontainer">
            <Outlet/>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path:"/",
      element: <Layout/>,
      children:[
        {
          path:"/",
          element: <Home/>
        },
        {
          path:"/products",
          element: <Products/>
        },
        {
          path:"/product/:id",
          element: <SingleProduct/>
        },
        {
          path:"/reports",
          element: <Reports/>
        },
        {
          path:"/movements",
          element: <Movements/>
        },
        
  ]
  
    },
  ]);

  return (
    <div className="App">
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
