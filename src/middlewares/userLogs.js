const fs = require("fs")
const path = require("path")


function middleware(req,res,next){
    fs.appendFileSync(path.join(__dirname,"../logs/userLogs.txt"),req + "\n")
    next()
}

module.exports = middleware