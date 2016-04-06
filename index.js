'use strict';

var path = require("path")
var spawn = require('child_process').spawn

// the binary path, depending on the platform and architecture
var IMAGEMAGICK_PATH = path.join(__dirname, "imagemagick", require('os').platform(), require('os').arch(), "magick");

// Resize an image using largerSide as the larger side
var resizeLargerSide = function(fileIn, fileOut, largerSide, quality) {

    // magick command arguments
    var spawnArgs = [
        fileIn,
        "-resize", largerSide+"x"+largerSide,
        "-auto-orient",
        "-quality", quality,
        fileOut
    ];

    // execute curl using child_process' spawn function
    var imgmck = spawn(IMAGEMAGICK_PATH, spawnArgs);

    // add a 'data' event listener for the spawn instance
    imgmck.stdout.on('data', function(data) {});

    // add an 'end' event listener
    imgmck.stdout.on('end', function(data) {});

    // when the spawn child process exits, check if there were any errors
    imgmck.on('exit', function(code) {
        if (code == 0) {
            console.log('Success');
        }else{
            console.log('Failed: ' + code);
        }
    });
};


// Resize an image using a percentage
var resizePercent = function(fileIn, fileOut, percentSize, quality) {

    // magick command arguments
    var spawnArgs = [
        fileIn,
        "-resize", percentSize+"%",
        "-auto-orient",
        "-quality", quality,
        fileOut
    ];

    // execute curl using child_process' spawn function
    var imgmck = spawn(IMAGEMAGICK_PATH, spawnArgs);

    // add a 'data' event listener for the spawn instance
    imgmck.stdout.on('data', function(data) {});

    // add an 'end' event listener
    imgmck.stdout.on('end', function(data) {});

    // when the spawn child process exits, check if there were any errors
    imgmck.on('exit', function(code) {
        if (code == 0) {
            console.log('Success');
        }else{
            console.log('Failed: ' + code);
        }
    });
};


// Resize an image using largerSide, given width and height
// note: proportion might not be kept
var resize = function(fileIn, fileOut, width, height, quality) {

    // magick command arguments
    var spawnArgs = [
        fileIn,
        "-resize", width+"x"+height+"!",
        "-auto-orient",
        "-quality", quality,
        fileOut
    ];

    // execute curl using child_process' spawn function
    var imgmck = spawn(IMAGEMAGICK_PATH, spawnArgs);

    // add a 'data' event listener for the spawn instance
    imgmck.stdout.on('data', function(data) {});

    // add an 'end' event listener
    imgmck.stdout.on('end', function(data) {});

    // when the spawn child process exits, check if there were any errors
    imgmck.on('exit', function(code) {
        if (code == 0) {
            console.log('Success');
        }else{
            console.log('Failed: ' + code);
        }
    });
};


// Resize an image giving a width. Height is resized with proportion
var resizeWidth = function(fileIn, fileOut, width, quality) {

    // magick command arguments
    var spawnArgs = [
        fileIn,
        "-resize", width,
        "-auto-orient",
        "-quality", quality,
        fileOut
    ];

    // execute curl using child_process' spawn function
    var imgmck = spawn(IMAGEMAGICK_PATH, spawnArgs);

    // add a 'data' event listener for the spawn instance
    imgmck.stdout.on('data', function(data) {});

    // add an 'end' event listener
    imgmck.stdout.on('end', function(data) {});

    // when the spawn child process exits, check if there were any errors
    imgmck.on('exit', function(code) {
        if (code == 0) {
            console.log('Success');
        }else{
            console.log('Failed: ' + code);
        }
    });
};


// Resize an image giving a height. Width is resized with proportion
var resizeHeight = function(fileIn, fileOut, height, quality) {

    // magick command arguments
    var spawnArgs = [
        fileIn,
        "-resize", "x"+height,
        "-auto-orient",
        "-quality", quality,
        fileOut
    ];

    // execute curl using child_process' spawn function
    var imgmck = spawn(IMAGEMAGICK_PATH, spawnArgs);

    // add a 'data' event listener for the spawn instance
    imgmck.stdout.on('data', function(data) {});

    // add an 'end' event listener
    imgmck.stdout.on('end', function(data) {});

    // when the spawn child process exits, check if there were any errors
    imgmck.on('exit', function(code) {
        if (code == 0) {
            console.log('Success');
        }else{
            console.log('Failed: ' + code);
        }
    });
};


// Resize an image giving a total number of pixel (in millions)
var resizeAreaMP = function(fileIn, fileOut, millionPixels, quality) {

    // magick command arguments
    var spawnArgs = [
        fileIn,
        "-resize", millionPixels+"@",
        "-auto-orient",
        "-quality", quality,
        fileOut
    ];

    // execute curl using child_process' spawn function
    var imgmck = spawn(IMAGEMAGICK_PATH, spawnArgs);

    // add a 'data' event listener for the spawn instance
    imgmck.stdout.on('data', function(data) {});

    // add an 'end' event listener
    imgmck.stdout.on('end', function(data) {});

    // when the spawn child process exits, check if there were any errors
    imgmck.on('exit', function(code) {
        if (code == 0) {
            console.log('Success');
        }else{
            console.log('Failed: ' + code);
        }
    });
};



// Crop the largest inner square at the center of the image and resize it
var cropSquare = function(fileIn, fileOut, size, quality) {

    // magick command arguments
    var spawnArgs = [
        fileIn,
        "-resize", size+"x"+size+"^",
        "-auto-orient",
        "-quality", quality,
        "-gravity", "center",
        "-extent", size+"x"+size,
        fileOut
    ];

    // execute curl using child_process' spawn function
    var imgmck = spawn(IMAGEMAGICK_PATH, spawnArgs);

    // add a 'data' event listener for the spawn instance
    imgmck.stdout.on('data', function(data) {});

    // add an 'end' event listener
    imgmck.stdout.on('end', function(data) {});

    // when the spawn child process exits, check if there were any errors
    imgmck.on('exit', function(code) {
        if (code == 0) {
            console.log('Success');
        }else{
            console.log('Failed: ' + code);
        }
    });
};

module.exports.resizePercent = resizePercent;
module.exports.resizeLargerSide = resizeLargerSide;
module.exports.resize = resize;
module.exports.resizeWidth = resizeWidth;
module.exports.resizeHeight = resizeHeight;
module.exports.resizeAreaMP = resizeAreaMP;
module.exports.cropSquare = cropSquare;
