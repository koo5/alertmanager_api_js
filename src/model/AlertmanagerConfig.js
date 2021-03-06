/**
 * Alertmanager API
 * API of the Prometheus Alertmanager (https://github.com/prometheus/alertmanager)
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The AlertmanagerConfig model module.
 * @module model/AlertmanagerConfig
 * @version 0.0.1
 */
class AlertmanagerConfig {
    /**
     * Constructs a new <code>AlertmanagerConfig</code>.
     * @alias module:model/AlertmanagerConfig
     * @param original {String} 
     */
    constructor(original) { 
        
        AlertmanagerConfig.initialize(this, original);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, original) { 
        obj['original'] = original;
    }

    /**
     * Constructs a <code>AlertmanagerConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AlertmanagerConfig} obj Optional instance to populate.
     * @return {module:model/AlertmanagerConfig} The populated <code>AlertmanagerConfig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AlertmanagerConfig();

            if (data.hasOwnProperty('original')) {
                obj['original'] = ApiClient.convertToType(data['original'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} original
 */
AlertmanagerConfig.prototype['original'] = undefined;






export default AlertmanagerConfig;

