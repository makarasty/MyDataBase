const 
    nReadlines = require('n-readlines'),
    fs = require("fs")

function ReadIn(line) {
    broadbandLines = new nReadlines('./data.MKY');
    newdata = []
    i = 0
    while (i = broadbandLines.next()) {
        newdata.push(i.toString('UTF-8'))
    }
    return newdata[line]
}

function Reset() {
    fs.writeFileSync("./data.MKY", "Project data-base, by MaKarastY\n"+"undefined\n".repeat(15)+"undefined", function (error) { if (error) throw error })
}

function WriteInTo(line, data) {
    broadbandLines = new nReadlines('./data.MKY');
    dataToWrite = ""
    olddata = []
    newdata = []
    a = null
    b = 0
    c = 0
    while (a = broadbandLines.next()) {
        olddata.push(a.toString('UTF-8'))
    }
    while (b != olddata.length) {
        if (b != line) {
            newdata.push(olddata[b])
            b++
        } else {
            newdata.push(data)
            b++
        }
    }
    while (c != newdata.length) {
        if (c == "0") {
            dataToWrite = newdata[c]
            c++
        } else {
            dataToWrite = dataToWrite + '\n' + newdata[c]
            c++
        }
    }
    fs.writeFileSync("./data.MKY", dataToWrite, function (error) { if (error) throw error })
}

module.exports = { ReadIn, WriteInTo, Reset }