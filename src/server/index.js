import express from "express";
import cors from 'cors';
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter, matchPath } from "react-router-dom";
import routes from "../shared/routes";
import App from "../shared/App";
import { fetchData } from "../shared/api";
import "isomorphic-fetch";
import serialize from "serialize-javascript";
const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());

app.use(express.static("public"));

app.get("*", (req, res, next) => { 
    const activeRoute = routes.find((route) => matchPath(req.url, route)) || {};
    const promise = activeRoute.fetchData 
    ? activeRoute.fetchData(req.path)
    : Promise.resolve()

    promise.then((data) => {
        const context = {data};
        const markup = renderToString(
            <StaticRouter location={req.url} context={context}>
                <App data={data}/>
            </StaticRouter>
        )         
        res.send(`
            <!DOCTYPE html>
            <head>
                <title>React App</title>
                <link rel="stylesheet" href="/css/main.css>
                <script src="/bundle.js" defer></script>
                <script>window.__INITIAL_DATA__=${serialize(data)}</script>
            </head>
            <body>
                <div id="root">${markup}</div>
            </body>
            </html>
        `);
    }).catch(next)    
});



app.listen(PORT, () => {
    console.log('Server is running at PORT:' + PORT);
})