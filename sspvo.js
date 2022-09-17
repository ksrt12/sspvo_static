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

app.use('/', express.static(path.join(__dirname, 'build')));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

async function start() {
    try {
        if (process.env.NODE_ENV === 'production') {
            https.createServer({
                cert: fs.readFileSync(__dirname + "/../ssl/server.crt"),
                key: fs.readFileSync(__dirname + "/../ssl/server.key")
            }, app).listen(443, () => console.log("Started with ssl"));
        } else {
            app.listen(8000, () => console.log("Started on port 8000"));
        }
    } catch (e) {
        console.log('Server Error', e.message);
        process.exit(1);
    }
}

start();