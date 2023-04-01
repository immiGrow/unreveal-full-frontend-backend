import dbConnect from '../../../mongodb/db'
// import Products from '../../../model/Products'
import Photo from '../../../models/Photo'
dbConnect()

export default async function GetEachPhoto(req, res) {

    const { id } = req.query
    try {

        const docs = await Photo.findOne({ _id: id }).populate("user")
        await res.status(200).json({
            success: true,
            response: {
                results: docs
            }
        })
    } catch (error) {
        await res.status(400).json({
            success: false,
            message: "Couldn't find any photo"
        })
    }


}