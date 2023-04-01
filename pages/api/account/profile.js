import Authenticated from "../../../middleware/Authenticated";
import Users from "../../../models/Users";
export default function handlerOfProfile(req, res) {
    if (req.method === "POST") {
        updateUserProfile(req, res);
    }
    if (req.method === "GET") {
        fetchUserProfile(req, res);
    }
    if (req.method === "DELETE") {
        deleteAccount(req, res);
    }
}
const updateUserProfile = Authenticated(async(req, res) => {
    const {
        firstName,
        lastName,
        country,
        city,
        email,
        about,
        profile_image,
        website,
        facebook,
        instagram,
        youtube,
        twitter
    } = req.body;
    try {
        const userProfile = await Users.findOneAndUpdate({ _id: req.user }, {
            $set: {
                firstName,
                lastName,
                country,
                city,
                email,
                about,
                profile_image,
                website,
                facebook,
                instagram,
                youtube,
                twitter
            },
        }, {
            new: true
        });
        await res.status(200).json({
            success: true,
            userProfile
        })
    } catch (error) {
        await res.status(400).json({
            success: false,
            message: "Couldn't update profile"
        })
    }

});

const fetchUserProfile = Authenticated(async(req, res) => {

    const fetchProfile = await Users.findOne({ _id: req.user })
    await res.status(200).json({
        success: true,
        userProfile: fetchProfile
    })

})

const deleteAccount = Authenticated(async(req, res) => {
    try {

        await Users.findOneAndDelete({ _id: req.user })
        await res.status(200).json({ success: true, message: "Successfully deleted account" })

    } catch (error) {
        await res.status(400).json({
            success: false,
            message: "Couldn't delete the account"
        })
    }

})