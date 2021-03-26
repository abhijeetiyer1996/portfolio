import React, {Component} from 'react';
import classes from './App.module.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Projects from './Components/Projects/Projects';
import Whoops404 from './Components/404NotFound/404NotFound';
import {VscNote,VscClose} from 'react-icons/vsc';
import {motion} from 'framer-motion';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
}
class App extends Component {
  state = {
    renderMenu: false
  }
   
  renderSideBar = () => {
    let doesShow = this.state.renderMenu;
    this.setState({renderMenu:!doesShow});

  }
  render (){
    let menu = null;
    let color = '#fff';
    let icon=null;
    if(this.state.renderMenu){
      menu = (<Navbar/>);
      icon = (<VscClose color="#5b5b67" size={25} />);
    }
    else{
      icon = (<VscNote color="#FFF" size={25}/>);
    }
    return (
    <Router>
      <div className={classes.container}>
        <motion.button variants={variants} type="button" className={classes.closeBtn} onClick={this.renderSideBar}>{icon}</motion.button>
        {menu}
        <Switch>
          <Route path="/" exact  component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path='/contact' component={Contact}></Route>
          <Route path='/projects' component={Projects}></Route>
          <Route component={Whoops404}></Route>
        </Switch>
      </div>
    </Router>
    )
  }
}

export default App;