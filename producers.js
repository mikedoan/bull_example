const options = {
  limiter: {
    max: 1, // 1 if only 1 job will be proccessed at once.
    duration: 10
  }
};

module.exports = {
  sendChallenge: function(name, service, data) {
    service.add(name, data, options);
  }
};
