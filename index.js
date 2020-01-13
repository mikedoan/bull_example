const Queue = require("bull");
const { createGrader } = require("./consumers");
const { sendChallenge } = require("./producers");
const _ = require("lodash");

const gradingService = new Queue("gradingService", {
  redis: {
    host: "127.0.0.1",
    port: 6379
  }
});

createGrader(`challenge`, gradingService);

_.range(4).map(id => {
  const data = {
    code: `print "Hello world! ${id}"`,
    lang: `python`,
    problemID: _.toString(id)
  };
  console.log(`gui task den bull queue: ${data.code}`);
  sendChallenge(`challenge`, gradingService, data);
});
