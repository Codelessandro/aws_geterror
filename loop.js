var sys = require('sys')
var exec = require('child_process').exec;
var fs = require('fs')



String.prototype.replaceAll = function(search, replacement) {
  var target = this;
  return target.split(search).join(replacement);
};

function puts(error, stdout, stderr) { sys.puts(stdout) }



preparePluginList()



function preparePluginList() {
  fs.readFile('plugins.txt', 'utf8', function (err, contents) {
    var regexp = /\"[a-z\-\_]+\//gi;
    erg = JSON.stringify(contents.match(regexp))

    erg = erg.replaceAll("/", "")
    erg = erg.replaceAll("\\", "")
    erg = erg.replaceAll("\"", "")

    erg = erg.replaceAll("[", "")
    erg = erg.replaceAll("]", "")

    erg = erg.split(",")

    const plugins = erg



    function checkPlugin(n=0) {
      var exec_ = "wp plugin activate --path=/var/www/html/yourtraveljobs ";
      var exec__ = exec_.concat(plugins[n])
      console.log(exec__)
      //exec(exec__, puts);

      exec("jasmine", function (err, stdout, stderr) {
        console.log(stdout);
        if (n < plugins.length)
          checkPlugin(n + 1)
      });

    }

    checkPlugin()

  })
}






