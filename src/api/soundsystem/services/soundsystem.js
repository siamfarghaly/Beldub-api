'use strict';

/**
 * soundsystem service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::soundsystem.soundsystem');
