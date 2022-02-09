/**
 * Blueprint API Configuration
 * (sails.config.blueprints)
 *
 * For background on the blueprint API in Sails, check out:
 * https://sailsjs.com/docs/reference/blueprint-api
 *
 * For details and more available options, see:
 * https://sailsjs.com/config/blueprints
 */

module.exports.blueprints = {
  /***************************************************************************
   *                                                                          *
   * Automatically expose implicit routes for every action in your app?       *
   *                                                                          *
   ***************************************************************************/

  actions: true,

  /***************************************************************************
   *                                                                          *
   * Automatically expose RESTful routes for your models?                     *
   *                                                                          *
   ***************************************************************************/

  rest: true,

  /***************************************************************************
   *                                                                          *
   * Automatically expose CRUD "shortcut" routes to GET requests?             *
   * (These are enabled by default in development only.)                      *
   *                                                                          *
   ***************************************************************************/

  // shortcuts: true,

  /***************************************************************************
   *                                                                          *
   * An optional mount path for all blueprint routes on a controller,         *
   * including `rest`, `actions`, and `shortcuts`. This allows you to take    *
   * advantage of blueprint routing, even if you need to namespace your API   *
   * methods.                                                                 *
   *                                                                          *
   * (NOTE: This only applies to blueprint autoroutes, not manual routes from *
   * `sails.config.routes`)                                                   *
   *                                                                          *
   ***************************************************************************/

  prefix: "/api",
};
