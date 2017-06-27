"use strict";

process.on("SIGINT", () => {
  process.exit(0);
});

const electrodeConfippet = require("electrode-confippet");

const support = require("electrode-archetype-react-app/support");

support.load()
  .then(() => {
    const config = electrodeConfippet.config;

    require("./express-server")(config);  // eslint-disable-line
  });
