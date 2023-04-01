import fs from 'fs'
export default function AddToSearchRequirePhotos(req, res) {
    if (req.method === "POST") {
        addToSrch(req, res)
    }
    if (req.method === "DELETE") {
        clearAllSrches(req, res)
    }

}
const addToSrch = async(req, res) => {
    const { term } = req.body
    const srchArr = []
    const inData = fs.readFileSync('search_require_photos.json')
        // console.log("the initial data ",JSON.parse(inData))
    const objData = JSON.parse(inData)
    const addSrch = [`${term}`]
    for (let key in objData) {
        srchArr.push(objData[key])
    }
    // console.log("the srchArr",srchArr)
    const addingData = srchArr.concat(addSrch)
        // console.log("the finale data is ",addingData)
    fs.writeFileSync('search_require_photos.json', JSON.stringify(addingData), () => {})
    await res.status(201).json({
        success: true,
        message: "Search has been added"
    })

}
const clearAllSrches = async(req, res) => {

    // console.log("the srchArr",srchArr)
    const addingData = []
        // console.log("the finale data is ",addingData)
    fs.writeFileSync('recent_searches.json', JSON.stringify(addingData), () => {})
    await res.status(200).json({
        success: true,
        message: "Search has been cleared"
    })
}