import './App.css';
import { BrowserRouter,Routes,Route} from "react-router-dom"
// import Header from "./container/Header"
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';
import Header from './containers/Header';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetail/>}/>
          <Route>404 not found!</Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
