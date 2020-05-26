import React from 'react';
import {Link, HashRouter, Route } from 'react-router-dom';
//import required components
import CreateBook from './CreateBook';
import EditBook from './EditBook';
import BookList from './BookList';
import Login from './Login';
import Register from './Register';
import Home from './Home';


// this is the "main" component which sets up the React Router and respective routes
const App = () => {
  return(
    <HashRouter>
      <div>
          <div className="navbar is-primary ">
                 


                   <a className="navbar-item has-background-primary " href="https://b9222b6a-9766-412c-ac23-c4df5e739ba4.ws-eu01.gitpod.io/mini-browser/workspace/testCA4/bewd_CA4_starter/mern-full-stack/public/images/librarylogo.png">
                        <img src="https://b9222b6a-9766-412c-ac23-c4df5e739ba4.ws-eu01.gitpod.io/mini-browser/workspace/testCA4/bewd_CA4_starter/mern-full-stack/public/images/librarylogo.png" width="224" height="56" alt="library"/>
                    </a>
                    
                    
                    <ul className="navbar-brand is-primary">
                        <li className="navbar-item has-background-primary is-outlined"><Link to="/">Home</Link></li>
                       
                     
                      
                         <li className="navbar-item has-background-primary is-outlined"><Link to="/booklist">BookList</Link></li>
                        <li className="navbar-item has-background-primary is-outlined"><Link to="/edit-book/:id">EditBook</Link></li>
                        <li className="navbar-item has-background-primary is-outlined"><Link to="/create-book">CreateBook</Link></li>
                        
                        
                   <li className="navbar-item has-background-primary is-outlined"><Link to="/Register">Sign up</Link></li>
                    <li className="navbar-item has-background-primary is-outlined"><Link to="/Login">Login</Link></li>     
                      
                    </ul>

                    <div class="navbar-end">
                   <div class="navbar-item">
                   
                   <div class="buttons">
                   
                  <a class="button is-danger" >
                  <Link to="/Register">
                      <strong>Sign up</strong>
                      </Link>
                  </a>
                  
                 <a class="button is-warning " ><Link to="/Login">
                  <strong>Login</strong></Link>
                 </a>


                 </div>
                 </div>
                 
                 </div>
                 
                 </div>
                 
               
                 
        {/*SERVERSIDE: Link the routes to components*/}
        <Route exact path="/" component={Home}/>
         <Route path="/booklist" component={BookList} />
        {/*pass the id through the Editbook component*/}
        <Route path="/edit-book/:id" component={EditBook}/>
        {/*set the path to create a new book to CreateBook component*/}
        <Route path="/create-book" component={CreateBook}/>
         <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        
      </div>
    </HashRouter>
    
  );
};

export default App;
