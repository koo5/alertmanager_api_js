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
 * The PeerStatus model module.
 * @module model/PeerStatus
 * @version 0.0.1
 */
class PeerStatus {
    /**
     * Constructs a new <code>PeerStatus</code>.
     * @alias module:model/PeerStatus
     * @param name {String} 
     * @param address {String} 
     */
    constructor(name, address) { 
        
        PeerStatus.initialize(this, name, address);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, address) { 
        obj['name'] = name;
        obj['address'] = address;
    }

    /**
     * Constructs a <code>PeerStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PeerStatus} obj Optional instance to populate.
     * @return {module:model/PeerStatus} The populated <code>PeerStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PeerStatus();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
PeerStatus.prototype['name'] = undefined;

/**
 * @member {String} address
 */
PeerStatus.prototype['address'] = undefined;






export default PeerStatus;
