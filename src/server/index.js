import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter, matchPath } from "react-router-dom";
import routes from "../shared/routes";
import App from "../shared/App";
import "isomorphic-fetch";
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static("public"));

app.get("*", (req, res) => {
    const activeRoute = routes.find(route => matchPath(req.url, route));
    const requestInitialdata = 
    activeRoute.component.requestInitialdata && activeRoute.component.requestInitialdata();
    Promise.resolve(requestInitialdata)
        .then(initialData => {
            const context = { initialData };
            const markup = renderToString(
                <StaticRouter location={req.url} context={context}>
                    <App/>
                </StaticRouter> 
            );               
            res.send(`
                <!DOCTYPE html>
                <head>
                    <title>React App</title>
                    <link rel="stylesheet" href="/css/main.css>
                    <script src="/bundle.js" defer></script>
                </head>
                <body>
                    <div id="root">${markup}</div>
                </body>
                </html>
            `);
        })
        .catch(next);    
})



app.listen(PORT, () => {
    console.log('Server is running at PORT:' + PORT);
})