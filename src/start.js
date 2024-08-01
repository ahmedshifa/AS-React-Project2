const detect = require('detect-port');
const { exec } = require('child_process');

const port = process.env.PORT || 3000;

detect(port, (err, _port) => {
  if (err) {
    console.log(err);
  }

  if (port == _port) {
    console.log(`Port: ${port} was available`);
  } else {
    console.log(`Port: ${port} was occupied, trying port: ${_port}`);
    process.env.PORT = _port;
  }

  exec('react-scripts start', (err, stdout, stderr) => {
    if (err) {
      console.error(err);
    }
    console.log(stdout);
  });
});
