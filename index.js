const Queue = require("bull");
const { createGrader } = require("./consumers");
const { sendChallenge } = require("./producers");
const _ = require("lodash");

const gradingService = new Queue("gradingService", {
  // Bao fai chi redis rieng cua em. ca'i nay la localhost cua anh.
  redis: `rediss://default:dmrezdxikxatz7ze@db-redis-sfo2-97643-do-user-4182007-0.db.ondigitalocean.com:25061`
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
