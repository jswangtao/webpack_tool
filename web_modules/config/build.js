const fs = require('fs');
const path = require('path');

const envTmp = process.argv[2];


const copyFile = (type) => {
  if (type) {
    fs.writeFileSync(
      path.resolve(__dirname, 'config.js'),
      fs.readFileSync(path.resolve(__dirname, `config-${type}.js`)),
    );
  }
};

copyFile(envTmp);
