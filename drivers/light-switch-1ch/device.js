'use strict';

const { CLUSTER } = require('zigbee-clusters');
const { ZigBeeDevice } = require('homey-zigbeedriver');

class Switch extends ZigBeeDevice {

  onNodeInit({ zclNode }) {
    // Register onoff capability
    this.registerCapability('onoff', CLUSTER.ON_OFF);
  }

}

module.exports = Switch;