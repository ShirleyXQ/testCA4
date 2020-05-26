import React, { Component } from 'react';
import axios from 'axios';


export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            message: 'Loading...'
        };
    }

    componentDidMount() {
        axios.get('/api/home')
            .then(response => this.setState({ message: response.data }));
    }

    render() {
        return (
            <section className="hero is-bold is-light is-fullheight-with-navbar ">
                <div className="hero-body container has-background-warning is-fluid">

                <div class="columns  $column-gap is-variable is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-2-fullhd is-half">

                    <div className="columns ">
                        <div className="column is-half">
                            <h1 className="title has-text-weight-bold has-text-primary is-1">{this.state.message}</h1>
                            <h2 className="subtitle has-text-danger">Borrow library System</h2>

                             <figure class="image is-1024x859">

               <img src="https://b9222b6a-9766-412c-ac23-c4df5e739ba4.ws-eu01.gitpod.io/mini-browser/workspace/testCA4/bewd_CA4_starter/mern-full-stack/public/images/librarylogo.png" alt=""></img>

             </figure>
                            
                        </div>
                        <div className="column">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/c/cb/User-welcome.png" />
                        </div>
                    </div>



                      <div class="card  is-three-fifths">

                      <article class="message is-info">
                          <div class="message-header">
                             <p>INFORMATION WALL</p>
                          
                           </div>
                        <div class="message-body">
                      <img src="public/bgr.png" width="500" height="500" alt="library"/>
                 </div>


                  
                 <div class="message-body is-warning">
                 The Flash Book Library Management System gives you the <strong>best choice</strong>, 
                 the <strong>most convenient service</strong>, and the <strong>fastest delivery</strong>.
                  <hr />
                 <strong>Welcome!</strong>
                 please <strong>log in</strong> to access background data information.

                <hr />

                  <button className="button is-danger" type="button">
                 Welcome!
                 </button>


                 <figure class="image is-1024x859">

               <img src="https://b9222b6a-9766-412c-ac23-c4df5e739ba4.ws-eu01.gitpod.io/mini-browser/workspace/testCA4/bewd_CA4_starter/mern-full-stack/public/images/librarylogo.png" alt=""></img>

             </figure>


                  <hr />

                 <progress class="progress is-large is-info" max="100">60%</progress>
                
                 </div>

                  


                   </article>

                   </div>

                   
                   
                   
                   
                   
                   
                   



                  <div class="level  is-one-fifths">

                      <article class="message is-success">
                          <div class="message-header">
                             <p>LIBRARY</p>
                            
                           </div>
                        <div class="message-body">
                      <img src="https://b9222b6a-9766-412c-ac23-c4df5e739ba4.ws-eu01.gitpod.io/mini-browser/workspace/testCA4/bewd_CA4_starter/mern-full-stack/public/images/bgImg.jpg" width="1920" height="700" alt="library backgroud"/>
                 <nav class="panel ">
                   
                   <hr />
                   
                    <p class="panel-heading has-background-danger">
                    Login page
                    </p>
                    <hr />
                   <div class="field">
                    <p class="control has-icons-left has-icons-right">
                    <label className="label">Email</label>
                    <input class="input" type="email" placeholder="Email"></input>
                    <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                    </span>
                    

                    <span class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                     </span>
                    </p>

                     <p className="help">This is a help text</p>

                   
                   <div class="field">
                   <p class="control has-icons-left">
                   <label className="label">Password</label>
                   <input class="input" type="password" placeholder="Password"></input>
                    <span class="icon is-small is-left">
                        <i class="fas fa-lock"></i>
                        </span>
                     </p>

                      <p className="help">This is a help text</p>

                      
                      
                   
                     </div>


                      <hr />


                      


                   <div class="field">
                   
                     <p class="control">
                    <button class="button is-success">
                     Login
                         </button>
                    </p>
                     </div>


                     <hr />


                   




                      <figure class="image is-641x300">

               <img src="https://b9222b6a-9766-412c-ac23-c4df5e739ba4.ws-eu01.gitpod.io/mini-browser/workspace/testCA4/bewd_CA4_starter/mern-full-stack/public/images/%E5%9B%BE%E4%B9%A65.jpg" alt=""></img>

             </figure>


                    

                    



                   </div>
                    </nav>

                 </div>

                 </article>

                   </div>

                     </div>


                </div>
            </section>
            




            
            
        );
    }
}
