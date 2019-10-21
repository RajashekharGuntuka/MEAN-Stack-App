MEAN Stack App(MongoDB,Express,Angualr and Node)–Employee management system using Angular 7 MEAN stack (CRUD App with Bootstrap 4)

##Node.js, Express.js, MongoDB for backend and Angular 7 for handling frontend.
##employee management system using Angular 7 MEAN stack.

Let us understand what does MEAN stack means.

#Mongo DB – It’s an open-source NoSQL cross-platform document-oriented database.
#Express JS – It’s a web-based application framework work with Node JS, It helps to build web apps and RESTful APIs.
#Angular 7 – Its a TypeScript based complete front-end framework developed by Google team.
#Node JS – It is a free JavaScript run time environment, It executes JavaScript code outside of a browser. It is available for MacOS, Windows, Linux and Unix.

Use following plug-ins and tools to create MEAN Stack app.

Node JS -Install from https://nodejs.org/en/download/
MongoDB -Install from https://www.mongodb.com/download-center/community
Visual Studio Code - Install from https://visualstudio.microsoft.com/downloads/
Mongoose JS
Express JS
Angular CLI 7.2.3


##Schema Definition 

1) For Employees:

let Employee = new Schema({
   name: {
      type: String
   },
   email: {
      type: String
   },
   designation: {
      type: String
   },
   phoneNumber: {
      type: Number
   }
}, {
   collection: 'employees'
})
module.exports = mongoose.model('Employee', Employee)

2) For Users (collection name :users)

var userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: 'Full name can\'t be empty'
    },
    email: {
        type: String,
        required: 'Email can\'t be empty',
        unique: true
    },
    password: {
        type: String,
        required: 'Password can\'t be empty',
        minlength: [4, 'Password must be atleast 4 character long']
    },
    saltSecret: String
});
mongoose.model('User', userSchema)


##DB Connection 
module.exports = {
   db: 'mongodb://localhost:27017/meandatabase'
};

##In first terminal
(In mean-stack-angular-7-crud-app-example-master folder )

1)npm install
2) ng serve -o
It should run without any errors

##In Second terminal
For backend connection
(In mean-stack-angular-7-crud-app-example-master\backend folder)

1)npm install 
2)node server.js(or npm start)


Open http://localhost:4200/ in browser

Mongo shell commands

1)show dbs  // list databases
2)use meandatabase // switch to database
3)coll=db.employees;// switch to collection (here employees)
4)coll2= db.users;//switch to collection (here users)
5)coll.find()//list the objects in collection
6)coll2.find()//list the objects in collection2
