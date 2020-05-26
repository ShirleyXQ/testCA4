import React, { Component } from 'react';
//import the Link component to handle React Router
import { Link } from 'react-router-dom';
import Book from './Book';
//Axios is a lightweight HTTP client based on the $http service within Angular.js
//Axios provides support for request and response interceptors, transformers and auto-conversion to JSON
// Use "npm install axios" command to install
import axios from 'axios';
import './app.css';
// import stylesheet 
//MAKE SURE TO INSTALL USING npm install bulma
import 'bulma/css/bulma.css';

// this component will handle all elements in the users array
class BookList extends Component {
    constructor(props) {
        super(props);
        // store the books array in the state
        this.state = { books: [] };

        //this binding is necessary to make `this` work in the callback
        //generally, if you refer to a method without () after it, such as onClick={this.handleClick}, you should bind that method
        this.updateBooks = this.updateBooks.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    // fetch all book data from the server when the component mounts
    componentDidMount() {
        this.updateBooks();
    }

    //
    updateBooks() {
        // get the books API using axios GET request to the server 
        axios.get('api/books')
            .then(response => {
                //store the response in the state
                this.setState({ books: response.data });
            })
            .catch(error => {
                console.log(error);
            });
    }

    handleDelete(bookId) {
        // make a DELETE request to the server which will handle the removal of the book with the specific bookId
        axios
            .delete('api/books', {
                data: {
                    id: bookId
                }
            })
            .then(response => {
                //if the deletion was successful then re-render the list of books
                this.updateBooks();
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        // produce a Book component for each user object
        const bookList = this.state.books.map(b => (
            //map through each element in the array and set to the value received from the server
            <Book
                key={b._id}
                id={b._id}
                title={b.title}
                Author ={b.Author}
                Publisher={b.Publisher}
                image={b.picture}
                language={b.language}
                ReleaseDate={b.ReleaseDate}
                BorrowingDate={b.BorrowingDate}
                ReturnDate={b.ReturnDate}
                //you must include the handleDelete method to use in child components
                handleDelete={this.handleDelete}
            />
        ));

        //return the list of books
        return (
            <div className="is-fluid">
                {/*Navigation bar*/}
                  <div className="hero-body container has-background-info is-fluid">

                <nav className="navbar has-background-danger is-bold">
                    <h1 className="navbar-item title is-1 is-danger is-outlined"><strong>LIST OF BOOKS</strong></h1>

                    

                    {/*when this button is pressed, CreateUser component will be rendered by using React Router*/}
                    <Link to={'/create-book'} className="navbar-item navbar-end">
                        <button className="button is-warning" type="button">Create new book</button>
                    </Link>
                </nav>

                


                <hr />

                {/*BOOK LIST*/}
                
                <div>
                    <div className="columns is-multiline">
                        {bookList}
                    </div>
                </div>
             




                <hr />

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

        );
    }
}

export default BookList;
