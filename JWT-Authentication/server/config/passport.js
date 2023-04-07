require("dotenv").config();
const User = require("../models/userModel");
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const passport = require("passport");

const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET_KEY;
passport.use(
    new JwtStrategy(opts, async (jwt_payload, done)=>{
        try {
            const user = await User.findOne( { id: jwt_payload._id });
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        } catch (error) {
            return done(err, false);
        }
    })
);
        

// passport.use(
//     new JwtStrategy(opts, async (jwt_payload, done) => {
//       try {
//         const user = await User.findOne({ id: jwt_payload._id });
//         if (!user) {
//           return done(null, false);
//         }
//         return done(null, user);
//       } catch (err) {
//         return done(err, false);
//       }
//     })
//   );