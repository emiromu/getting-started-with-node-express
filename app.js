import fs from 'fs';
import path from 'path';
import express from 'express';

import authorRouter from './routes/authorRouter.js';
import bookRouter from './routes/bookRouter.js';

const app = express();
const __dirname = path.resolve();

app.use("/authors", authorRouter);
app.use("/books", bookRouter);

app.get("/(index)?", (req, res) => {
    fs.readFile(__dirname+'/index.html', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        }
        else
        {
            res.send(data);
        }
    });
});

app.get("/about", (req, res) => {
    fs.readFile(__dirname+'/about.html', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        }
        else
        {
            res.send(data);
        }
    });
});

app.get("/contact-me", (req, res) => {
    fs.readFile(__dirname+'/contact-me.html', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        }
        else
        {
            res.send(data);
        }
    });
});

app.get("*", (req, res) => {
    res.send("404 Not Found");
  });

app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.statusCode || 500).send(err.message);
  });

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
