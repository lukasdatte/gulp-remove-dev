# gulp-remove-dev

This gulp plugin enabels you to remove code via gulp. You can combine it with [gulp-if](https://www.npmjs.com/package/gulp-if).

`//<remove end>` removes any code until the end of the file.  
`//<remove beginning>` removes any code up to the beginning of the file.  
`//<remove>` removes any code until you write `//</remove>`

Please note that those commands need a complete line.

## An Example

There is nothing better than an example:

That's in your gulpfile.js:

```js
const removeDev = require('gulp-remove-dev');

gulp.src('./src/file.js')
  .pipe(removeDev())
  .pipe(gulp.dest('./dist'))
```

That's the content of our imaginary file `./src/file.js`:

```js
console.log("Hello");
console.log("Some Code");
//<remove beginning>

more.code1();
more.code2();

//<remove>
debug.code1();
debug.code2();
//</remove>

more.code3();
more.code4();

//<remove end>
console.log("End of file");
console.log("Some Code");

```

That's what our resulting `file.js` becomes at path `./dist`:

```js

more.code1();
more.code2();


more.code3();
more.code4();

```

Please note that this plugin doesn't remove any empty lines which are not explicitly removed by any `//<remove>` commands.
