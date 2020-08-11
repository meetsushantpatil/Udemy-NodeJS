const fs = require('fs')
// fs.writeFileSync('notes.txt',"This is a test file via JS")

fs.appendFileSync('notes.txt', '\nThis is an appended text')