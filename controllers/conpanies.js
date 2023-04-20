const Companies = require('../models/Companies');

exports.postCompany = async (req, res) => {
    const { _id, name, url } = req.body;
    try {
        const newCompany = new Companies({ _id, name, url });
        await newCompany.save();
        res.status(200).json(`New Company "${newCompany.name}" registrated.`);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.postCompanyMany = async (req, res) => {
    try {
        Companies.insertMany(req.body);
        res.status(200).json(`New Companies registrated.`);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.getCompany = async (req, res) => {
    const companyId = req.params.id;
    try {
        const company = await Companies.findOne({ _id: companyId});
        !company && res.status(404).json("Not Found!");

        company && res.status(200).json(company);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.getCompanies = async (req, res) => {
    try {
        const companies = await Companies.find();
        !companies && res.status(404).json(companies);

        companies && res.status(200).json(companies);
    } catch (error) {
        res.status(500).json(error);
    }
}