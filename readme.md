# newsapiorg-demo

Demo repository for NewsAPI.org

## Building

Just run `webpack` on the command line, and you'll get something like:

```Shell
➜  news git:(master) ✗ webpack
Hash: b0306350c1bcfdd2bfdb
Version: webpack 2.7.0
Time: 290ms
    Asset    Size  Chunks             Chunk Names
bundle.js  208 kB       0  [emitted]  main
   [0] (webpack)/buildin/global.js 509 bytes {0} [built]
   [1] (webpack)/~/process/browser.js 5.42 kB {0} [built]
   [2] ./~/newsapi/index.js 4.5 kB {0} [built]
   [3] ./index.js 246 bytes {0} [built]
   [4] ./~/bluebird/js/browser/bluebird.js 179 kB {0} [built]
   [5] ./~/node-fetch/browser.js 230 bytes {0} [built]
   [6] (webpack)/~/querystring-es3/decode.js 2.51 kB {0} [built]
   [7] (webpack)/~/querystring-es3/encode.js 2.54 kB {0} [built]
   [8] (webpack)/~/querystring-es3/index.js 127 bytes {0} [built]
   [9] (webpack)/~/setimmediate/setImmediate.js 6.47 kB {0} [built]
  [10] (webpack)/~/timers-browserify/main.js 2.02 kB {0} [built]
```

## Using

Import `bundle.js` in your HTML file.