import React from 'react';
import ReactDOM from 'react-dom';
//没带后缀名
import Component from 'com/Component';

require("./style.css");

ReactDOM.render(<Component />,document.getElementById("app_container"));

//需要在这里加入代码，进行了整个app热替换
if (module.hot) {
  module.hot.accept('com/Component', () => {
    // 如果你使用了Webpack 2 in ES modules 模式, 你可以
    // 直接使用 <App /> 而不用 require() 一个 <NextApp />.
    const NextApp = require('com/Component').default;
    ReactDOM.render(
      <NextApp />,
      document.getElementById("app_container")
    );
  });
}
