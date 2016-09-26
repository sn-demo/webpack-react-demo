import React from 'react';
import ReactDOM from 'react-dom';
//没带后缀名
import Component from 'com/Component';

require("./style.css");

ReactDOM.render(<Component />,document.getElementById("app_container"));

if (module.hot) {
  module.hot.accept('com/Component', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextApp = require('com/Component').default;
    ReactDOM.render(
      <NextApp />,
      document.getElementById("app_container")
    );
  });
}
