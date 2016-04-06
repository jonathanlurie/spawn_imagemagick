# spawn_imagemagick
Use a locally installed ImageMagick in Node to resize image at high speed.  
Note that, as its name suggests, it simply spawn a local imagemagick, no low level wrapper here.

## Usage

Copy the **spawn_imagemagick** folder somewhere within you project.

Then:  

```js

var sim = require("./path/to/spawn_imagemagick");

// Input file address
var fileIn = "img.jpg";


// Output file address
var fileOut = "imgOut.jpg";

// When creating a small jpeg file, the quality in percentage is mandatory
var jpegQuality = 80;


// Resize an image using largerSide as the larger side
sim.resizeLargerSide(fileIn, fileOut, largerSide, quality)

// Resize an image using a percentage
sim.resizePercent(fileIn, fileOut, percentSize, quality)

// Resize an image given width and height
// note: proportion might not be kept
sim.resize(fileIn, fileOut, width, height, quality)

// Resize an image giving a width. Height is resized accordingly
sim.resizeWidth(fileIn, fileOut, width, quality)

// Resize an image giving a height. Width is resized accordingly
sim.resizeHeight(fileIn, fileOut, height, quality);

// Resize an image giving a total number of pixel (in millions)
// note: in case of impossibility to reach exact MP due to proportion, the first
// lower MP will be used
sim.resizeAreaMP(fileIn, fileOut, millionPixels, quality);

// Crop the largest inner square at the center of the image and resize it
sim.cropSquare(fileIn, fileOut, size, quality);
```

## Todo

Add optional callbacks for success or failure.
