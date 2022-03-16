const express = require('express');
const cors = require('cors');
const router = require('./routes/task.route.js');

class Server{

    constructor(port){
        this.port = port;
        this.api = express();
        this.initRouter();
    }

    initServer(){
        this.api.listen(this.port, ()=>{console.log('init service')});
    }

    initRouter(){
        this.api.use('/api/v1/', router);
    }

};

module.exports = Server;
