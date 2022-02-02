/**
 * is-super-admin
 *
 * A simple policy that blocks requests from non-super-admins.
 *
 * For more about how to use policies, see:
 *   https://sailsjs.com/config/policies
 *   https://sailsjs.com/docs/concepts/policies
 *   https://sailsjs.com/docs/concepts/policies/access-control-and-permissions
 */
module.exports = async function (req, res, proceed) {
  if (!req.user) {
    return res.unauthorized();
  }

  // Then check that this user is a "super admin".
  if (req.user.accountType != "admin") {
    return res.forbidden("error.policies.notAdmin");
  } //•

  // IWMIH, we've got ourselves an "admin".
  return proceed();
};
