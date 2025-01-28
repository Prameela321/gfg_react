import  './styles/Swiggy.css';
import Header from "./components/Header";
import Footer from './components/Footer';
import Signup from './components/Signup';
import { Outlet } from 'react-router-dom';
// import LoginContextCreate from './components/LoginContextCreate';
import { Provider } from 'react-redux';
import AppStore from './utils/AppStore';
import List from './components/List';
import UseRef from './components/useRef';
function App(){
    return (
        <>
           {/* <Provider store={AppStore}>  
                <loginContext.Provider  value={{ userName : "check"}}>
                    <Header/>    
                </loginContext.Provider>
                <Outlet/>
                <Footer/>
           </Provider> */}
           {/* <LoginContextCreate> */}
                <List/>
                <UseRef/>
           {/* </LoginContextCreate> */}
        </>
    );
}

export default App;