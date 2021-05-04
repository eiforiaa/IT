const fs = require('fs');
const path = require('path');
const { Op } = require('sequelize');
const Shop = require('../models/Shop');
const upsert = require('../utils/upsert');
const { Iconv } = require('iconv');

const ShopController = () => {
  const sync = async (req, res) => {
    const file = fs.readFileSync(path.join(__dirname, '../../db/data.json'));
    const buffer = Buffer.from(file, 'binary');
    const conv = Iconv('windows-1251', 'utf8');
    const body = conv.convert(buffer).toString();
    const apiData = JSON.parse(body);

    //  eslint-disable-next-line no-restricted-syntax
    apiData.forEach((entry) => {
      upsert({
        model: Shop,
        values: {
          id: entry.global_id,
          objectName: entry.ObjectName,
          address: entry.Address,
          legalAddress: entry.LegalAddress,
          admArea: entry.AdmArea,
          jobType: entry.JobType,
          email: entry.Email,
          nameOfLicensingAuthority: entry.NameOfLicensingAuthority,
        },
        condition: { id: entry.global_id },
      });
    });

    return res.status(200).json(apiData);
  };

  const getAll = async (req, res) => {
    try {
      let shops;

      if (req.query.name) {
      shops = await Shop.findAll({
          where: {
            name: {
              [Op.substring]: req.query.name,
            },
          },
        });
      } else {
        shops = await Shop.findAll();
      }

      return res.status(200).json({ shops });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  return {
    sync,
    getAll,
  };
};

module.exports = ShopController;
