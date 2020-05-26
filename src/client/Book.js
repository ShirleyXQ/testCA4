import React from 'react';
import ReactDOM from 'react-dom';
//import the Link component to use for linking prop information
import { Link } from 'react-router-dom';

// define one single book card component
class Book extends React.Component {
  render() {
    return (
      <div className="column is-2" style={{ padding: "20px" }}>
        <div className="card" style={{ borderRadius: "50px" }}>
          <div className="card-">
            <figure className="image is-4by3">
              <img alt="Profile" src={this.props.image} />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-6 has-text-grey-darker"><strong>Title:</strong></p>
                <p className="title is-7 has-text-primary"> {this.props.title}</p>
                <hr/>
                <p className="title is-6 has-text-grey-darker"><strong>Author:</strong></p>
                <p className="title is-5 has-text-success">{this.props.Author}</p>
                <hr/>
                <p className="title is-6 has-text-link"><strong>Publisher:</strong></p>
                <p className="subtitle is-size-6">{this.props.Publisher}</p>

                <p className="title is-6 has-text-link"><strong>language:</strong></p>
                <p className="subtitle is-size-6">{this.props.language}</p>

                <p className="title is-6 has-text-link"><strong>ReleaseDate:</strong></p>
                <p className="subtitle is-size-6">{this.props.ReleaseDate}</p>

                <p className="title is-6 has-text-link"><strong>BorrowingDate:</strong></p>
                <p className="subtitle is-size-6">{this.props.BorrowingDate}</p>

                <p className="title is-6 has-text-link"><strong>ReturnDate:</strong></p>
                <p className="subtitle is-size-6">{this.props.ReturnDate}</p>

               

              

                {/*delete the prop with requested id from the function invoked in the parent component*/}
                <button className="button is-danger" type="button" onClick={() => {this.props.handleDelete(this.props.id);}}>
                  Delete
                </button>
                {/*load the EditBook component via React Router and send the id over to the EditBook component*/}
                <Link to={`/edit-book/${this.props.id}`}>
                  <button className="button is-primary" type="button">
                  Edit
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Book;
