import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleInputChange(event) {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        });
    }

    onSubmit(event) {
        event.preventDefault();
        axios.post('/api/authenticate', this.state)
            .then(res => {
                if (res.status === 200) {
                    // run the login function in the parent component
                    this.props.handleLogin();
                    // redirect to /
                    this.props.history.push('/');
                } else {
                    const error = new Error(res.error);
                    throw error;
                }
            })
            .catch(err => {
                console.error(err);
                alert('Error logging in please try again');
            });
    }

    render() {
        return (
            <section class="hero is-success is-fullheight">
            <div class="hero-body container has-background-warning is-fluid">
            <form onSubmit={this.onSubmit} className="container is-fluid">
                <h1 className="title has-text-weight-bold has-text-primary is-1">Register Below!</h1>
                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input
                            className="input column is-half"
                            type="email"
                            name="email"
                            placeholder="Enter email"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            required
                        />
                    </div>
                    <p className="help">This is a help text</p>
                </div>
                <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                        <input
                            className="input column is-half"
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            required
                        />
                    </div>
                    <p className="help">This is a help text</p>
                </div>
                <input className="button is-primary" type="submit" value="Submit" />



                    </form>




               <div class="buttons">

               <button class="button is-rounded">education</button>
              <button class="button is-primary is-rounded">Fiction</button>
              <button class="button is-link is-rounded">Literature and Art</button>
             <button class="button is-info is-rounded">Youth Literature / Anime · Humor</button>
              <button class="button is-success is-rounded">Children's book</button>
              <button class="button is-danger is-rounded">Humanities and Social Sciences</button>

              <button class="button is-rounded">Manage</button>
              <button class="button is-primary is-rounded">Success / Inspirational</button>
              <button class="button is-link is-rounded">life</button>
             <button class="button is-info is-rounded">Technology</button>
              <button class="button is-success is-rounded">EBooks / Network Literature</button>
              <button class="button is-danger is-rounded">Art and Photography</button>

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
