/**
 * Security Settings
 * (sails.config.security)
 *
 * These settings affect aspects of your app's security, such
 * as how it deals with cross-origin requests (CORS) and which
 * routes require a CSRF token to be included with the request.
 *
 * For an overview of how Sails handles security, see:
 * https://sailsjs.com/documentation/concepts/security
 *
 * For additional options and more information, see:
 * https://sailsjs.com/config/security
 */

module.exports.security = {
  cors: {
    /***************************************************************************
     *                                                                          *
     * Allow CORS on all routes by default? If not, you must enable CORS on a   *
     * per-route basis by either adding a "cors" configuration object to the    *
     * route config, or setting "cors:true" in the route config to use the      *
     * default settings below.                                                  *
     *                                                                          *
     ***************************************************************************/

    allRoutes: true,

    /***************************************************************************
     *                                                                          *
     * Which domains which are allowed CORS access? This can be a               *
     * comma-delimited list of hosts (beginning with http:// or https://) or    *
     * "*" to allow all domains CORS access.                                    *
     *                                                                          *
     ***************************************************************************/

    allowOrigins: "*",

    /***************************************************************************
     *                                                                          *
     * Allow cookies to be shared for CORS requests?                            *
     *                                                                          *
     ***************************************************************************/

    // credentials: true,

    /***************************************************************************
     *                                                                          *
     * Which methods should be allowed for CORS requests? This is only used in  *
     * response to preflight requests (see article linked above for more info)  *
     *                                                                          *
     ***************************************************************************/

    //methods: 'GET, POST, PUT, DELETE, OPTIONS, HEAD',

    /***************************************************************************
     *                                                                          *
     * Which headers should be allowed for CORS requests? This is only used in  *
     * response to preflight requests.                                          *
     *                                                                          *
     ***************************************************************************/

    allowRequestHeaders:
      "Content-Type, Authorization, Cache-Control, X-Requested-With",
  },

  /****************************************************************************
   *                                                                           *
   * CSRF protection should be enabled for this application.                   *
   *                                                                           *
   * For more information, see:                                                *
   * https://sailsjs.com/docs/concepts/security/csrf                           *
   *                                                                           *
   ****************************************************************************/

  csrf: false,
};
