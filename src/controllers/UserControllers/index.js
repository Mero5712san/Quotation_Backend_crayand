const {MasterUserDetails} = require('../../../models');

const get_user_details = async (req, res) => {
    try {
        const masterUsers = await MasterUserDetails.findAll({
            // attributes: ['id', 'name'],
            // where: { is_active: true },
        });
        res.status(200).json(masterUsers);
    } catch (error) {
        console.error("Error fetching the users ");
        res.status(500).json({
            message: "Internal server error",
            error: error.message,
        });
    }
};

module.exports = {
    get_user_details
}