const initOverlay = require('./openseadragon-fabricjs-overlay')
const OpenSeadragon = require('./openseadragon/openseadragon');
const fabric = require('./fabric/fabric.adapted').fabric;

module.exports = {
  initOverlay,
  OpenSeadragon,
  fabric,
};
