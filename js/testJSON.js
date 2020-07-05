const json = require('./PhoneCompare.json')
const fs = require('fs')
let newObj = json.result.extractorData.data[0].group
let newJson = [];
newObj.forEach((value,index) => {
    newJson.push({
        Image : value["Image"][0].src ,
        title: value["Image"][0].alt,
        BestPrice: value["Store Price 1"][0].text,
        BestStore: value["Store Logo 1"][0].src,
        StoreLink: value["Store Logo 1"][0].alt,
    })
})

console.log(newJson);
//console.log(JSON.stringify(newJson))
// fs.writeFileSync('phoneData.json', JSON.stringify(newJson))

const items = document.getElementsByClassName('item-image');
console.log(items);