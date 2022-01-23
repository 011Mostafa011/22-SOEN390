/**
 * is-immigration-officer
 *
 * A simple policy that allows any request from an authenticated user.
 * A simple policy that blocks requests from non-doctors.
 */

 module.exports = async function (req, res, proceed) {
    //send request, if not a user, respond back with .unauthorized();
   if (!req.user) {
     return res.unauthorized();
   }
 
   // Then check that this user is a "immigration officer".
   if (req.user.accountType != "patient") {
     return res.forbidden();
   }
 
   // IWMIH, we've got ourselves a "immigration officer".
   return proceed();
 };
 
