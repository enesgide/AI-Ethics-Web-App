import config from '../config/index'

/**
 * 
 * @param path API subfolder URL
 * @returns {string} Request URL
 */

const getRequestURL = path => {
    return config.host + path;
};

export default {
    getRequestURL
};