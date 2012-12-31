
var grunt = require('grunt');
var hashFile = require('../tasks/lib/common').hashFile;
var s3 = require('../tasks/lib/s3').init(grunt);

module.exports = {
  testDownload : function (test) {
    test.expect(1);

    var dest = __dirname + '/files/a.txt';
    var src = __dirname + '/../s3/127/a.txt/.fakes3_metadataFFF/content';

    s3.download('a.txt', dest)
      .done(function () {
        test.ok(hashFile(src) === hashFile(dest), 'File downloaded successfully.');
      })
      .always(function () {
        test.done();
      })
  }
};
