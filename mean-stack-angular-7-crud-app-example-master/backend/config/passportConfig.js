
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
// require(path.join(__dirname, 'strategies', 'local-strategy'));
var User = mongoose.model('User');


passport.use(
  new localStrategy({ usernameField: 'email' },
      (username, password, done) => {
          User.findOne({ email: username },
              (err, user) => {
                  if (err)
                      return done(err);
                  // unknown user
                  else if (!user)
                      return done(null, false, { message: 'Email is not registered' });
                  // wrong password
                  else if (!user.verifyPassword(password))
                      return done(null, false, { message: 'Wrong password.' });
                  // authentication succeeded
                  else
                      return done(null, user);
              });
      })
);



// passport.use({usernameField: 'email'}, new localStrategy(function(username, password, done) {
//     User.findOne({ email: username }, function(err, user) {
//     if (err)
//        return done(err);
//         // unknown user
//     else if (!user)
//         return done(null, false, { message: 'Email is not registered' });
//     // wrong password
//     else if (!user.verifyPassword(password))
//         return done(null, false, { message: 'Wrong password.' });
//     // authentication succeeded
//     else
//         return done(null, user);
//        });
//   }));
  // passport.serializeUser(function(user, done) { 
  //   // please read the Passport documentation on how to implement this. We're now
  //   // just serializing the entire 'user' object. It would be more sane to serialize
  //   // just the unique user-id, so you can retrieve the user object from the database
  //   // in .deserializeUser().
  //   done(null, user);
  // });
  // passport.deserializeUser(function(user, done) { 
  //   // Again, read the documentation.
  //   done(null, user);
  // });
  




