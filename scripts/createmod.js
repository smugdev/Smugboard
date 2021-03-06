var sio = require('../common/sio.js');
var serverAddress = require('../common/settings.js').serverAddress;
var password = require('../common/settings.js').password;
var port = 3010;

if (process.argv.length < 3){
    console.error('node createmod.js <SERVER>');
    process.exit();
}

var server = process.argv[2];

sio.sendPost(serverAddress + ':' + port, {
    mode: 'mod',
    type: 'create',
    password: password,
    title: 'Pockets the Mod',
    server: server
}).then(console.log).catch(console.error);
