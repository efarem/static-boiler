/* eslint-env worker */
((global) => {
  global.toolbox.router.get('/(.*)', global.toolbox.fastest, {
    origin: /\.(?:googleapis|gstatic)\.com$/,
  });
})(self);
