const express = require("express");
const path = require("path");
const { createProxyMiddleware } = require("http-proxy-middleware");
const https = require("https");
const fs = require("fs");
const app = express();

app.use(
    '/api',
    createProxyMiddleware({
        target: "http://85.142.162.4:8032",
        changeOrigin: true,
    })
);

if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'build')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
    });
}

const httpsOptions = {
    cert: fs.readFileSync(__dirname + "/../ssl/server.crt"),
    key: fs.readFileSync(__dirname + "/../ssl/server.key")
};

async function start() {
    try {
        https.createServer(httpsOptions, app).listen(443,
            () => console.log("Started with ssl"));
    } catch (e) {
        console.log('Server Error', e.message);
        process.exit(1);
    }
}

start();