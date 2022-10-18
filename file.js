const fs = require('fs')
const path = require('path')

module.exports = file = class file {
    constructor({folder, fileName, ext, data}) {
        this.folder = folder
        this.file = fileName
        this.ext = ext
        this.data = data.toString()
    }
    create = () => {
        const dirPath = path.join(__dirname, this.folder)
        const filePath = path.join(dirPath, `${this.file}.${this.ext}`)

        fs.mkdir(dirPath, err => {
            if (err) { throw err }
            fs.writeFile(filePath, this.data , (err) => {
                if (err) { throw err }
            })
        })
        
        return filePath
    }
}

