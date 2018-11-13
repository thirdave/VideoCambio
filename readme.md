# Video-Cambio

Apply filters and effects to videos

### tl;dr
* Prerequisite: video-cambio requires `ffmpeg` installed locally on the server or computer. 
* Install by executing `npm install video-cambio`.
* `videoCambio.glow('path/to/video.mp4', 'output/location/glow.mp4')`
* `videoCambio.[filterName](input, output[optional])`


### Usage
Here is an example of basic usage:

``` 
const videoCambio = require('video-cambio');

(async () => {
  try {
    await videoCambio.glow('1.mp4'); // no output given, default to output.mp4
    await videoCambio.sepia('1.mp4','output/sepia.mp4'); 
  } catch (err) {
    console.log(err);
  }
} )()
```

### Effects and filters
* glow
* sepia
* bAndWhite
* vertigo
* sobel
* vignette
* pixeliz0r
* invert0r
* rbgNoise
* distort0r
* blur
* nervous
* reverse
* slowdown
* speedup
