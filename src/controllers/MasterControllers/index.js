const {
    MasterUnitDetails,
    MasterAmenitites,
    MasterUtilities,
    MasterCustomiseOptions,
    MasterPricingTables,
    MasterQoutationDetails,
    MasterRevenueTypes,
    UnitGallery,
} = require("../../../models");

const get_unit_details = async (req, res) => {
    try {
        const masterunits = await MasterUnitDetails.findAll({
            where: { is_active: true },
        });
        res.status(200).json(masterunits);
    } catch (error) {
        console.log("Error fetching the units ");
        res.status(500).json({
            message: "Internal server error",
            error: error.message,
        });
    }
};

const get_amenities_details = async (req, res) => {
    try {
        const masterAmenitites = await MasterAmenitites.findAll({
            where: { is_active: true },
        });
        res.status(200).json(masterAmenitites);
    } catch (error) {
        console.log("Error fetching the Amenities");
        res.status(500).json({
            message: "internal server error",
            error: error.message,
        });
    }
};

const get_utilities_details = async (req, res) => {
    try {
        const masterutilities = await MasterUtilities.findAll({
            where: { is_active: true },
        });
        res.status(200).json(masterutilities);
    } catch (error) {
        console.log("Error fetching the Utilities");
        res.status(500).json({
            message: "Internal server error",
            error: error.message,
        });
    }
};

const get_customise_options = async (req, res) => {
    try {
        const masteroptions = await MasterCustomiseOptions.findAll({
            where: { is_active: true },
        });
        res.status(200).json(masteroptions);
    } catch (error) {
        console.log("Error fetching the options");
        res.status(500).json({
            message: "Internal server error",
            error: error.message,
        });
    }
};

const get_pricing_table = async (req, res) => {
    try {
        const masterpricing = await MasterPricingTables.findAll({
            where: { is_active: true },
        });
        res.status(200).json(masterpricing);
    } catch (error) {
        console.log("Error fetiching the pricing table");
        res.status(500).json({
            message: "Internal server error",
            error: error.message,
        });
    }
};

const get_quotation_details = async (req, res) => {
    try {
        const masterquotationsdetails = await MasterQoutationDetails.findAll({
            where: { is_active: true },
        });
        res.status(200).json(masterquotationsdetails);
    } catch (error) {
        console.log("Error fetching the quotation details");
        res.status(500).json({
            message: "Internal server error",
            error: error.message,
        });
    }
};

const get_revenue_type = async (req, res) => {
    try {
        const masterrevenue = await MasterRevenueTypes.findAll({
            where: { is_active: true },
        });
        res.status(200).json(masterrevenue);
    } catch (error) {
        console.log("Error fetching the revenue types");
        res.status(500).json({
            message: "Internal server Error",
            error: error.message,
        });
    }
};

const get_unit_gallery = async (req, res) => {
    const { id } = req.params
    try {
        const mastergallery = await UnitGallery.findAll({
            where: { is_active: true, unit_id: id },
        });
        res.status(200).json({ mastergallery });
    } catch (error) {
        console.log("Error fetching the gallery details");
        res.status(500).json({
            message: "Internal server error",
            error: error.message,
        });
    }
};

const get_unit_id = async (req, res) =>{
    const {id} = req.params
    try{
        const masterunitbyid = await MasterUnitDetails.findAll({
            where:{is_active: true, id : id}
        })
        res.status(200).json(masterunitbyid)
    }
    catch{
        console.log("Error fetching the units");
        res.status(500).json({
            message:"Internal server error",
            error : error.message,
        })
        
    }
}

module.exports = {
    get_unit_details,
    get_amenities_details,
    get_utilities_details,
    get_customise_options,
    get_pricing_table,
    get_quotation_details,
    get_revenue_type,
    get_unit_gallery,
    get_unit_id,
};
