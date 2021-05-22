var geoip = require('geoip-lite');

const fetchIP = async (req, res) => {
    const client_ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const getgeo = geoip.lookup(client_ip);
    let country = 'unknown';
    let geo = [-1, -1];
    let address = 'unknown';
    let province = 'unknown';

    var client_location = {
        country,
        geo,
        address,
        province,
    };
    if (getgeo) {
        country = getgeo.country;
        geo = getgeo.ll;
        address = getgeo.city;
        province = getgeo.region;

        client_location = {
            country,
            geo,
            address,
            province,
        };
    }
    res.status(200).json(client_location);
};

module.exports = fetchIP;
