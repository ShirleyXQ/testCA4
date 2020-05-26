import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//Axios is a lightweight HTTP client based on the $http service within Angular.js
//Axios provides support for request and response interceptors, transformers and auto-conversion to JSON
// Use "npm install axios" command to install
import axios from 'axios';

//Edit Book component that will edit the clicked on book with passed id
class EditBook extends Component {
    constructor(props) {
        super(props);
        // store the related to the book information into the state
        // these should match the book object from the API
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

    // fetch the related user data
    componentDidMount() {
        // get the books API and include the id which is passed via the URL and accessed via props
        axios.get('/api/books/' + this.props.match.params.id)
            .then(response => {
                //on resonse set the state values to match empty state values set in the constructor
                this.setState({
                    _id: response.data._id,
                    title: response.data.title,
                    Author: response.data.Author,
                    Publisher: response.data.Publisher,
                    language: response.data.language,
                    picture: response.data.picture,
                    ReleaseDate: response.data.ReleaseDate,
                    BorrowingDate:response.data.BorrowingDate,
                    ReturnDate:response.data.ReturnDate,
                });
            })
            .catch(error => {
                console.log(error);
            });
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

        // use axios to send a PUT request to the server which includes the updated state information
        axios.put('/api/books', this.state)
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
         



            <div class="card">

              <div class="card-image">


              <figure class="image is-602x300">

               <img src="https://b9222b6a-9766-412c-ac23-c4df5e739ba4.ws-eu01.gitpod.io/mini-browser/workspace/testCA4/bewd_CA4_starter/mern-full-stack/public/images/%E5%9B%BE%E4%B9%A618.jpg" alt=""></img>

             </figure>
            
              <div className="hero-body container has-background-warning is-fluid ">

              <div class="hero-body">

              
            
            <div className="is-fluid">
                {/*on form submit call handleSubmit()*/}
                <form onSubmit={this.handleSubmit}>
                <nav className="navbar has-background-danger is-bold ">
                    <h2 className="navbar-item title is-1 is-danger is-outlined">Editor Book</h2>
                    </nav>



                    <hr />


                    
                   

                    {/*main container for input fields*/}
                    <div className="container ">
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


                 <div className="column">
                  <div class="field has-addons">
                  <div class="control">
                  
                  <input class="input" type="text" placeholder="Find a repository"></input>
                  
                  </div>
                  <div class="control">
                 <a class="button is-info">
                 Search
                </a>
                </div>
               
                 </div>



                  <div class="field has-addons">
               <p class="control">
             <input class="input" type="text" placeholder="Your email"></input>
             </p>
           <p class="control">
             <a class="button is-static">
                @gmail.com
             </a>
            </p>
           </div>

               <div class="field has-addons">
              <div class="control is-expanded">
               <div class="select is-fullwidth">
                  <select name="country">
              <option value="education">education</option>
              <option value="Fiction">Fiction</option>
              <option value="Literature and Art">Literature and Art</option>
              <option value="Youth Literature / Anime · Humor">Youth Literature / Anime · Humor</option>
              <option value="Children's book">Children's book</option>
              <option value="Humanities and Social Sciences">Humanities and Social Sciences</option>
              <option value="Manage">Manage</option>
              <option value="Success / Inspirational">Success / Inspirational</option>
              <option value="life">life</option>
              <option value="Technology">Technology</option>
              <option value="EBooks / Network Literature">EBooks / Network Literature</option>
             <option value="Art and Photography">Art and Photography</option>
             </select>
            </div>
            </div>
            <div class="control">
            <button type="submit" class="button is-primary">Choose</button>
            </div>
            </div>




            <div class="field is-grouped is-grouped-multiline">
  <div class="control">
    <div class="tags has-addons">
      <span class="tag is-dark">npm</span>
      <span class="tag is-info">0.7.0</span>
    </div>
  </div>

  <div class="control">
    <div class="tags has-addons">
      <span class="tag is-dark">build</span>
      <span class="tag is-success">passing</span>
    </div>
  </div>

  <div class="control">
    <div class="tags has-addons">
      <span class="tag is-dark">chat</span>
      <span class="tag is-primary">on gitter</span>
    </div>
  </div>
</div>









             </div>


                 

                

                   </div>

                   

                 <figure class="image is-960x350">

               <img src="https://b9222b6a-9766-412c-ac23-c4df5e739ba4.ws-eu01.gitpod.io/mini-browser/workspace/testCA4/bewd_CA4_starter/mern-full-stack/public/images/%E5%9B%BE%E4%B9%A612.jpg" alt=""></img>

                </figure>
                


                {/*FOOTER*/}
                <footer className="footer has-background-danger is-bold">
                    <div className="content has-text-centered">
                        <p className="has-text-white-bis"><strong>Borrow library management</strong>  styled with Bulma.</p>
                        <p className="has-text-warning"><strong>2020 © copyright by Shirley</strong>@+@</p>
                         <p className="has-text-link"><strong>styled with QIANXU~18557</strong></p>
                    </div>
                </footer>
           

           
            </div>
            </div>
           
           
            </section>
           
        );
    }
}

export default EditBook;
