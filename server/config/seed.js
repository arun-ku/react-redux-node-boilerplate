/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

import User from '../api/user/user.model';

User.find({}).remove()
  .then(() => {
    User.create({
      provider: 'local',
      name: 'dev test',
      email: 'dev@test.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@ttn.com',
      password: 'admin'
    })
    .then(() => {
      console.log('finished populating users');
    });
  });
