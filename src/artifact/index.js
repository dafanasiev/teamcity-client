/**
 * @author https://github.com/acvetkov
 * @see https://confluence.jetbrains.com/display/TCD9/REST+API
 * @overview Get artifact data by criteria
 */

import {contentUrl, metaUrl, childrenUrl, archivedUrl} from './url';

export default class Artifact {

    /**
     * @param {HttpClient} httpClient
     */
    constructor (httpClient) {
        this.httpClient = httpClient;
    }

    /**
     * Download artifact content
     * @param locator
     * @param {String} path
     * @returns {Promise<Stream>}
     */
    content (locator, path) {
        return this.httpClient.read(contentUrl(locator, path));
    }

    /**
     * Get artifact meta info
     * @param {Object} locator
     * @param {String} path
     * @returns {Promise<Object>}
     */
    meta (locator, path) {
        return this.httpClient.readJSON(metaUrl(locator, path));
    }

    /**
     * List of artifact children for directories and archives
     * @param {Object} locator
     * @param {String} path
     * @returns {Promise<Object>}
     */
    children (locator, path) {
        return this.httpClient.readJSON(childrenUrl(locator, path));
    }

    /**
     *
     * @param {Object} locator
     * @param {String} path
     * @param {String} [wildcard]
     * @param {String} [responseType] Result Type: buffer (default if not set) | stream | json
     * @returns {Promise<Buffer|Stream|Object>}
     */
    archived (locator, path, wildcard, responseType) {
        return this.httpClient.read(archivedUrl(locator, path, wildcard), undefined, undefined, responseType);
    }
}
