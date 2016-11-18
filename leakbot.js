(function() {

  /*** Memory usage inspection ***/
  var util = require('util');

  function printMemoryFootprint() {
    console.log(`[${new Date().toISOString()}] MEMORY_USAGE: ${util.inspect(process.memoryUsage())}`);
  }

  printMemoryFootprint();
  setInterval(printMemoryFootprint, 5 * 1000);
  /*** Memory usage inspection ***/



  var slack = require('@slack/client');
  var variables = require('./variables.js');

  var rtm = new slack.RtmClient(variables.SLACK_API_TOKEN);
  rtm.start();

}());
