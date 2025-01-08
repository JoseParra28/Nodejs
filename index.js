// const fs = require("fs")

// fs.writeFile("message.txt", "Hello Jose", (err) => {
//     if (err) throw err
//     console.log('The file has been saved')
// })

// fs.readFile("./test.js", "utf8", (err, data) => {
//     if(err) throw err
//     console.log(data)
// })

import generateName from "sillyname"

const sillyName = generateName();

console.log(`My name is ${sillyName}`)