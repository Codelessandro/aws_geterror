const request = require('request')
describe("wordpress check", function () {

  var originalTimeout;

  beforeEach(function () {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000;
  });


  it("DOM is rendered fully", function (done) {

    request("http://18.223.179.57/yourtraveljobs", function (error, request, body) {
      expect(body.includes("</html>")).toBe(true);
      done()
    })
  });
});


