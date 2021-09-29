// import { Button } from 'antd';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login'
import Admin from './pages/Admin'
import '../node_modules/antd/dist/antd.css'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login' component={Login}></Route>
        <Route path='/' component={Admin}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
