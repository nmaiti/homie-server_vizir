'use strict';

import {EventEmitter} from 'events';

class Dispatcher extends EventEmitter {
  constructor () {
    super();
    this.entities = {};
    this.ready = false;
  }

  attach (name, entity) {
    this.entities[name] = entity;
  }

  start () {
    this.entities.mqtt.on('homieMessage', (parsed) => {
	console.log(`NBM_iN3 `);
      this.emit('homieMessage', parsed);
    });

    this.entities.infrastructure.on('update', (update) => {
      this.entities.gui.emitToWebsocket('infrastructureUpdate', update);
    });

    // WebSocket connect handler

    this.entities.gui.on('connection', (socket) => {
	  console.log(`NBM_A1 `);
      socket.emit('infrastructure', this.entities['infrastructure'].getRepresentation());
      socket.emit('mqttClientStatus', this.entities.mqtt.getConnectionStatus());

      this.entities.mqtt.on('connection', () => {
	  	console.log(`NBM_A2 `);
        this.entities.gui.emitToWebsocket('mqttClientStatus', true);
      });

      this.entities.mqtt.on('disconnection', () => {
	  	console.log(`NBM_A3 `);
        this.entities.gui.emitToWebsocket('mqttClientStatus', false);
      });

      socket.on('setPropertyE', (data) => {
		console.log(`NBM_L2 `);
		console.log("nodeId:" + data.nodeId);
        this.entities.infrastructure.sendProperty(data);
      });
    });

    this.emit('ready');
    this.ready = true;
  }

  publishMqttMessage (packet) {
    console.log(`NBM_L3 `);
    this.entities.mqtt.publish(packet);
  }

  isReady () {
    return this.ready;
  }
}

export default new Dispatcher();
