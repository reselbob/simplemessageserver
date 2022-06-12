const express = require('express');
const app = express();
const fs = require('fs');

// define routes here..
app.get('/', function (req, res) {
    res.send(getHTML());
});

const server = app.listen(3001, function () {
    console.log('Node server is running on port 3001');
});

const getHTML = () =>{
    const color = 'color:white';
    const bgColor = 'background-color:red';
    const height = 'height:140px'
    const padding='padding:20px'
    const fontSize = 'font-size:40px';
    const fontFamily = 'font-family:helvetica';

    const str = `<html><body><div style="${color};${bgColor};${padding};${fontSize};${height};${fontFamily};">${getMessage()}</div></body></boddy></html>`;
    return str;
}

const getMessage = () => {
    const data = fs.readFileSync('./message.txt', 'UTF-8');
    let lines = "";
    data.split(/\r?\n/).forEach(line =>  {
        if(line && line.length > 1){
            lines = lines + `<li>${line}</li>`;
        }

    });
    return `<ul>${lines}</ul>`
}