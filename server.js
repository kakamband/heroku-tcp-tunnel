
const { proxyServer } = require('tcp-local-tunnel');
 
proxyServer({
  proxyPort: 8888, // remote port to access exposed local machine
  tunnelPort: 8010 // tunnel port
});