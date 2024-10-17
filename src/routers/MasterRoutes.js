const express = require('express')
const router = express.Router()

const GetMasterDetails = require('../controllers/MasterControllers')

router.get('/unitdetails', GetMasterDetails.get_unit_details)
router.get('/amenities', GetMasterDetails.get_amenities_details)
router.get('/utilities', GetMasterDetails.get_utilities_details)
router.get('/options', GetMasterDetails.get_customise_options)
router.get('/pricing', GetMasterDetails.get_pricing_table)
router.get('/quotationdetails', GetMasterDetails.get_quotation_details)
router.get('/revenue', GetMasterDetails.get_revenue_type)
router.get('/gallery/:id', GetMasterDetails.get_unit_gallery)
router.get('/unitdetails/:id',GetMasterDetails.get_unit_id)

module.exports= router