var geoip = require('geoip-lite');

const fetchIP = async (req, res) => {
    const client_ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const getgeo = geoip.lookup(client_ip);
    res.status(200).json(getgeo);
};

module.exports = fetchIP;
