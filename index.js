const { client } = require('tcp-local-tunnel');
client(
  {
    host: '255.255.255.255', // remote server ip or domain
    port: 8010 // tunnel port
  },
  {
    host: 'localhost',
    port: 3000
  }
);