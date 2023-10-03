import {test} from "./student.js"
import Student from "./student.js"
import fs from 'fs'
import path from 'path'
import http from 'http'


// const std = new Student('alamin');
// console.log(std.getname());
// test();
// let abc = "c:///sfhsd///sdfs\\\sfsdf/sf.js";
// console.log(path.normalize(abc));

const server = new http.createServer((req, res)=>{
    if(req.url == '/'){
        res.end('<h1>test</h1>');
    }
});

server.listen(3000, ()=>{console.log("server started at 3000...")});