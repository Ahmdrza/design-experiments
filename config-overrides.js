const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: { 
        'primary-color': '#00D8C8', //#FF7E6F
        'heading-color': '#144356', 
        'text-color': '#8E9598',
      },
    },
  }),
);