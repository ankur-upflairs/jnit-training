import os from 'node:os'
import fs from 'node:fs'
// console.log(os.freemem())
// console.log(os.tmpdir())

let data= fs.readFileSync('sample.txt','utf-8')
// fs.writeFileSync('sample2.txt','kdjfkdjfkdjfkdfjkfj')
fs.appendFileSync('sample2.txt','\n good afternoon')
console.log(data)
let a=34;
console.log(a)
/* how to read a dir in node js */
/* how to delete a file in node js */
/* create 10 files with table 2 -10  with the help of loop*/
/* fienamed - log.txt with data "hello everyone"
in this file replace hello with good afternoon */
/* path.join() */