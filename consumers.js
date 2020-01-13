async function init() {
  console.log(1);
  await sleep(1000);
  console.log(2);
}

function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

module.exports = {
  createGrader: function(name, gradingService) {
    gradingService.process(name, async job => {
      console.log(job.data.code);
      //`cham bai o day`
      //`sua khi cham bai thi ghi ket qua vao invitation tuong voi cai challenge`
      // sleep(2000);
    });
  }
};
