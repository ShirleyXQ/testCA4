import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//Axios is a lightweight HTTP client based on the $http service within Angular.js
//Axios provides support for request and response interceptors, transformers and auto-conversion to JSON
// Use "npm install axios" command to install
import axios from 'axios';

//Create Book component that will create a new book card
class CreateBook extends Component {
    constructor(props) {
        super(props);
        // the form fields are stored in a state
        this.state = { 
            title: '',
            Author: '',
            Publisher: '',
            language: '',
            picture: '',
            ReleaseDate: '',
            BorrowingDate:'',
            ReturnDate:''

        };

        //this binding is necessary to make `this` work in the callback
        //generally, if you refer to a method without () after it, such as onClick={this.handleClick}, you should bind that method
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //once the input boxes are changed, update the state to match the value
    handleChange(event) {
        //name of the input boxes must match the property names in the state
        const name = event.target.name;
        const value = event.target.value;

        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        //preventDefault() is called on the event when it occurs to prevent a browser reload/refresh
        event.preventDefault();

        //use axios to send a POST request to the server which includes the state information for the new user to be created
        axios.post('/api/books', this.state)
            //on success go to home
            .then(res => this.props.history.push('/'))
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        // remember that the name of the input fields should match the state
        return (
            <section className="hero is-bold is-light is-fullheight-with-navbar ">
             <div className="hero-body container has-background-warning is-fluid ">

              
             <div class="columns ">


             

              


              <figure class="image is-500x500">

               <img src="https://b9222b6a-9766-412c-ac23-c4df5e739ba4.ws-eu01.gitpod.io/mini-browser/workspace/testCA4/bewd_CA4_starter/mern-full-stack/public/images/%E5%9B%BE%E4%B9%A617.jpg" alt=""></img>

             </figure>

            

             

            



             
              
            <div className="is-fluid ">
                {/*on form submit call handleSubmit()*/}
                <form onSubmit={this.handleSubmit}>
                

                <nav className="navbar has-background-danger is-bold ">
                    
                <h2 className="navbar-item title is-1 is-danger is-outlined"><strong>Create New Book</strong></h2>

                    </nav>



                    <hr />




                    {/*main container for input fields*/}
                    <div className="container is-widescreen">
                    {/*FIRST COLUMN*/}
                    <div className="columns">
                        <div className="column is-half">
                            <div className="field">
                                <label className="label"> Title: </label>
                                <div className="control">
                                    <input className="input is-small" type="text" name="title" value={this.state.title} onChange={this.handleChange} id="form" />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label"> Author: </label>
                                <div className="control">
                                    <input className="input is-small" type="text" name="Author" value={this.state.Author} onChange={this.handleChange} id="form" />
                                </div>
                            </div>
                             <div className="field">
                                <label className="label"> Picture: </label>
                                <div className="control">
                                    <input className="input is-small" type="text" name="picture" value={this.state.picture} onChange={this.handleChange} id="form" />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label"> Publisher: </label>
                                <div className="control">
                                    <input className="input is-small" type="text" name="Publisher" value={this.state.Publisher} onChange={this.handleChange} id="form" />
                                </div>
                            </div>
                        </div>

                        {/*SECOND COLUMN*/}
                        <div className="column">
                            
                            <div className="field">
                                <label className="label"> language: </label>
                                <div className="control">
                                    <input className="input is-small" type="text" name="language" value={this.state.language} onChange={this.handleChange} id="form" />
                                </div>
                            </div>
                            <div className="field">
                                    <label className="label"> ReleaseDate: </label>
                                    <div className="control">
                                        <input className="input is-small" type="text" name="ReleaseDate" value={this.state.ReleaseDate} onChange={this.handleChange} id="form" />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label"> BorrowingDate: </label>
                                    <div className="control">
                                        <input className="input is-small" type="text" name="BorrowingDate" value={this.state.BorrowingDate} onChange={this.handleChange} id="form" />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label"> ReturnDate: </label>
                                    <div className="control">
                                        <input className="input is-small" type="text" name="ReturnDate" value={this.state.ReturnDate} onChange={this.handleChange} id="form" />
                                    </div>
                                </div>
                        </div>
                    </div>


                     <hr />

                    {/*SUBMIT BUTTON*/}
                    <input className="button is-primary" type="submit" value="Submit" />
                    </div>
                </form>


               

                </div>


                 
                 
                 
                

              
            </div>
            </div>



              
            
            
              {/*FOOTER*/}
                <footer className="footer has-background-danger is-bold">
                    <div className="content has-text-centered">
                        <p className="has-text-white-bis"><strong>Borrow library management</strong>  styled with Bulma.</p>
                        <p className="has-text-warning"><strong>2020 © copyright by Shirley</strong>@+@</p>
                         <p className="has-text-link"><strong>styled with QIANXU~18557</strong></p>
                    </div>
                </footer>
                
                </section>
            
        );
    }
}

export default CreateBook;
