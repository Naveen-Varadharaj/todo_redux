import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import Router from './routes/Router';
import { useEffect,createContext,useState } from 'react';
import axios from 'axios';
import store from './redux/store';
import { Provider } from 'react-redux';
export const UserContext = createContext();
function App() {
  const [productlist, setProductlist]=useState([]);
  
  useEffect(()=>{   
      axios.get('https://dummyjson.com/products')
      .then(json => setProductlist(json.data.products));
      
        },[]);
        
  return (
    <Provider store={store}>
    <UserContext.Provider value={productlist}>
    <div className="App">
    <Router />
    </div>
    </UserContext.Provider>
    </Provider>
  );
}

export default App;
