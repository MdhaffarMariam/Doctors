import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SignUpDoctor from './components/doctor/SignUpDoctor';
import SignInDoctor from './components/doctor/SignInDoctor';
import ProfileDoctor from './components/doctor/ProfileDoctor';
import Dashboard from './components/dashboard/Dashboard';
import SignIn from './components/user/SignIn';
import SignUp from './components/user/SignUp';
import Profile from './components/user/Profile';
import DoctorList from './components/Doctor list/DoctorList';
import Home from './components/home/Home';
import Dentist from './components/dentists/Dentist';
import Genyco from './components/genyco/Genyco';
import Pediatre from './components/Pédiatre/Pediatre';
import Calender from './components/calender/Calender';


function App() {
  return (
    <div className="App">
 
   <Router>
    <Dashboard/>

    <Switch>
      <Route exact path ='/signindoctor' component={SignInDoctor}/>
      <Route exact  path='/signin'component={SignIn}/>
      <Route exact  path='/signup' component ={SignUp}/>
      <Route exact  path='/signupdoctor' component={SignUpDoctor}/>
      <Route exact  path='/Profile' component = {Profile}/>
      <Route exact  path='/Profiledoctor' component = {ProfileDoctor}/>
      <Route exact  path='/doctors' component = {DoctorList}/>
      <Route exact  path='/' component = {Home}/>
      <Route exact  path ='/Dentist' component={Dentist}/>
      <Route exact  path ='/genyco' component={Genyco}/>
      <Route exact  path ='/pediatre' component={Pediatre}/>
      <Route exact path ='/calender' component={Calender}/>
    
    </Switch>
    
    </Router> 
    </div>
  );
}

export default App;
