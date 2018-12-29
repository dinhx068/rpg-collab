// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  app.get("/inn", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/inn.html"));
  });

  app.get("/unknown", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/game.html"));
  });

  // If no matching route is found default to the intro page
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/intro.html"));
  });
};
