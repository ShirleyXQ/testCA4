const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const bodyParser = require('body-parser');


const server = express();


// the value for dbname should match your database name
const dbname = 'booksdb';


// serve files from the dist directory
server.use(express.static('dist'));



// the URL to the DB will be loaded from an env variable or using the MongoDB Clour
const dbroute = process.env.MONGODB_URL || `mongodb+srv://shirley:dorset@borrowing-book-user-management-h2dh9.mongodb.net/test?retryWrites=true&w=majority`;


let db;

// connect to the DB and then start the expres server
MongoClient.connect(dbroute, (err, client) => {
  if (err) throw err;

  db = client.db(dbname);
  // start the express web server listening
  server.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
});

// bodyParser, parses the request body to be a readable json format
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

// DEFINE ENDPOINTS




server.get('/api/home', (req, res) => {
 
    console.log('Welcome!');
    res.send('Welcome!');
  });


// retrieve all book objects from DB
server.get('/api/books', (req, res) => {
  db.collection('books').find().toArray((err, result) => {
    if (err) throw err;

    console.log(result);
    res.send(result);
  });
});

// retrieve user with specific ID from DB
server.get('/api/books/:id', (req, res) => {
  db.collection('books').findOne({_id: new ObjectID(req.params.id) }, (err, result) => {
    if (err) throw err;

    console.log(result);
    res.send(result);
  });
});




// delete book with specific ID from DB
server.delete('/api/books', (req, res) => {
  db.collection('books').deleteOne( {_id: new ObjectID(req.body.id) }, err => {
    if (err) return res.send(err);

    console.log('deleted from database');
    return res.send({ success: true });
  });
});



// create new book based on info supplied in request body
server.post('/api/books', (req, res) => {
  db.collection('books').insertOne(req.body, (err, result) => {
    if (err) throw err;

    console.log('created in database');
    res.redirect('/');
  });
});

// update book based on info supplied in request body
server.put('/api/books', (req, res) => {
  // get the ID of the book to be updated
  const id  = req.body._id;
  // remove the ID so as not to overwrite it when updating
  delete req.body._id;
  // find a book matching this ID and update their details
  db.collection('books').updateOne( {_id: new ObjectID(id) }, {$set: req.body}, (err, result) => {
    if (err) throw err;

    console.log('updated in database');
    return res.send({ success: true });
  });
});


server.get('/api/users', (req, res) => {
  db.collection('users').find().toArray((err, result) => {
    if (err) throw err;

    console.log(result);
    res.send(result);
  });
});


server.get('/api/users/:id', (req, res) => {
  db.collection('users').findOne({_id: new ObjectID(req.params.id) }, (err, result) => {
    if (err) throw err;

    console.log(result);
    res.send(result);
  });
});

// delete movie with specific ID from DB
server.delete('/api/users', (req, res) => {
  db.collection('users').deleteOne( {_id: new ObjectID(req.body.id) }, err => {
    if (err) return res.send(err);

    console.log('onSubmit from database');
    return res.send({ success: true });
  });
});



server.post('/api/users', function(req, res) {
  const { email, password } = req.body;
  User.findOne({ email }, function(err, user) {
    if (err) {
      console.error(err);
      res.status(500)
        .json({
          error: 'Internal error please try again'
        });
    } else if (!user) {
      res.status(401)
        .json({
          error: 'Incorrect email or password'
        });
    } else {
      user.isCorrectPassword(password, function(err, same) {
        if (err) {
          res.status(500)
            .json({
              error: 'Internal error please try again'
            });
        } else if (!same) {
          res.status(401)
            .json({
              error: 'Incorrect email or password'
            });
        } else {}
      });
    }
  });
});
