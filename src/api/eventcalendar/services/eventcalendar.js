'use strict';

/**
 * eventcalendar service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::eventcalendar.eventcalendar');
