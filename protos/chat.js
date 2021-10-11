/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

/**
 * HeadType enum.
 * @exports HeadType
 * @enum {number}
 * @property {number} LOGIN_REQUEST=0 LOGIN_REQUEST value
 * @property {number} LOGOUT_REQUEST=1 LOGOUT_REQUEST value
 * @property {number} KEEPALIVE_REQUEST=2 KEEPALIVE_REQUEST value
 * @property {number} MESSAGE_REQUEST=3 MESSAGE_REQUEST value
 * @property {number} RESPONSE=4 RESPONSE value
 * @property {number} MESSAGE_NOTIFICATION=5 MESSAGE_NOTIFICATION value
 */
export const HeadType = $root.HeadType = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "LOGIN_REQUEST"] = 0;
    values[valuesById[1] = "LOGOUT_REQUEST"] = 1;
    values[valuesById[2] = "KEEPALIVE_REQUEST"] = 2;
    values[valuesById[3] = "MESSAGE_REQUEST"] = 3;
    values[valuesById[4] = "RESPONSE"] = 4;
    values[valuesById[5] = "MESSAGE_NOTIFICATION"] = 5;
    return values;
})();

/**
 * Platform enum.
 * @exports Platform
 * @enum {number}
 * @property {number} WEB=0 WEB value
 * @property {number} IOS=1 IOS value
 * @property {number} ANDROID=2 ANDROID value
 * @property {number} PC=3 PC value
 * @property {number} WECHAT=4 WECHAT value
 */
export const Platform = $root.Platform = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "WEB"] = 0;
    values[valuesById[1] = "IOS"] = 1;
    values[valuesById[2] = "ANDROID"] = 2;
    values[valuesById[3] = "PC"] = 3;
    values[valuesById[4] = "WECHAT"] = 4;
    return values;
})();

/**
 * MsgType enum.
 * @exports MsgType
 * @enum {number}
 * @property {number} TEXT=0 TEXT value
 * @property {number} SOUND=1 SOUND value
 * @property {number} VIDEO=2 VIDEO value
 * @property {number} GEO=3 GEO value
 * @property {number} REF=4 REF value
 * @property {number} FILE=5 FILE value
 * @property {number} EMOJI=6 EMOJI value
 */
export const MsgType = $root.MsgType = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "TEXT"] = 0;
    values[valuesById[1] = "SOUND"] = 1;
    values[valuesById[2] = "VIDEO"] = 2;
    values[valuesById[3] = "GEO"] = 3;
    values[valuesById[4] = "REF"] = 4;
    values[valuesById[5] = "FILE"] = 5;
    values[valuesById[6] = "EMOJI"] = 6;
    return values;
})();

/**
 * NotifiType enum.
 * @exports NotifiType
 * @enum {number}
 * @property {number} FRIEND=0 FRIEND value
 * @property {number} PUSH=1 PUSH value
 * @property {number} CIRCLE=2 CIRCLE value
 */
export const NotifiType = $root.NotifiType = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "FRIEND"] = 0;
    values[valuesById[1] = "PUSH"] = 1;
    values[valuesById[2] = "CIRCLE"] = 2;
    return values;
})();

/**
 * ResponseType enum.
 * @exports ResponseType
 * @enum {number}
 * @property {number} LOGIN=0 LOGIN value
 * @property {number} LOGOUT=1 LOGOUT value
 * @property {number} KEEPALIVE=2 KEEPALIVE value
 * @property {number} MESSAGE=3 MESSAGE value
 */
export const ResponseType = $root.ResponseType = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "LOGIN"] = 0;
    values[valuesById[1] = "LOGOUT"] = 1;
    values[valuesById[2] = "KEEPALIVE"] = 2;
    values[valuesById[3] = "MESSAGE"] = 3;
    return values;
})();

export const LoginRequest = $root.LoginRequest = (() => {

    /**
     * Properties of a LoginRequest.
     * @exports ILoginRequest
     * @interface ILoginRequest
     * @property {string|null} [uid] LoginRequest uid
     * @property {string|null} [deviceId] LoginRequest deviceId
     * @property {string|null} [token] LoginRequest token
     * @property {Platform|null} [platform] LoginRequest platform
     * @property {string|null} [appVersion] LoginRequest appVersion
     */

    /**
     * Constructs a new LoginRequest.
     * @exports LoginRequest
     * @classdesc Represents a LoginRequest.
     * @implements ILoginRequest
     * @constructor
     * @param {ILoginRequest=} [properties] Properties to set
     */
    function LoginRequest(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * LoginRequest uid.
     * @member {string} uid
     * @memberof LoginRequest
     * @instance
     */
    LoginRequest.prototype.uid = "";

    /**
     * LoginRequest deviceId.
     * @member {string} deviceId
     * @memberof LoginRequest
     * @instance
     */
    LoginRequest.prototype.deviceId = "";

    /**
     * LoginRequest token.
     * @member {string} token
     * @memberof LoginRequest
     * @instance
     */
    LoginRequest.prototype.token = "";

    /**
     * LoginRequest platform.
     * @member {Platform} platform
     * @memberof LoginRequest
     * @instance
     */
    LoginRequest.prototype.platform = 0;

    /**
     * LoginRequest appVersion.
     * @member {string} appVersion
     * @memberof LoginRequest
     * @instance
     */
    LoginRequest.prototype.appVersion = "";

    /**
     * Creates a new LoginRequest instance using the specified properties.
     * @function create
     * @memberof LoginRequest
     * @static
     * @param {ILoginRequest=} [properties] Properties to set
     * @returns {LoginRequest} LoginRequest instance
     */
    LoginRequest.create = function create(properties) {
        return new LoginRequest(properties);
    };

    /**
     * Encodes the specified LoginRequest message. Does not implicitly {@link LoginRequest.verify|verify} messages.
     * @function encode
     * @memberof LoginRequest
     * @static
     * @param {ILoginRequest} message LoginRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LoginRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.uid);
        if (message.deviceId != null && Object.hasOwnProperty.call(message, "deviceId"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.deviceId);
        if (message.token != null && Object.hasOwnProperty.call(message, "token"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.token);
        if (message.platform != null && Object.hasOwnProperty.call(message, "platform"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.platform);
        if (message.appVersion != null && Object.hasOwnProperty.call(message, "appVersion"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.appVersion);
        return writer;
    };

    /**
     * Encodes the specified LoginRequest message, length delimited. Does not implicitly {@link LoginRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LoginRequest
     * @static
     * @param {ILoginRequest} message LoginRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LoginRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LoginRequest message from the specified reader or buffer.
     * @function decode
     * @memberof LoginRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LoginRequest} LoginRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LoginRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.LoginRequest();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.uid = reader.string();
                break;
            case 2:
                message.deviceId = reader.string();
                break;
            case 3:
                message.token = reader.string();
                break;
            case 4:
                message.platform = reader.int32();
                break;
            case 5:
                message.appVersion = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a LoginRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LoginRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LoginRequest} LoginRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LoginRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LoginRequest message.
     * @function verify
     * @memberof LoginRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LoginRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.uid != null && message.hasOwnProperty("uid"))
            if (!$util.isString(message.uid))
                return "uid: string expected";
        if (message.deviceId != null && message.hasOwnProperty("deviceId"))
            if (!$util.isString(message.deviceId))
                return "deviceId: string expected";
        if (message.token != null && message.hasOwnProperty("token"))
            if (!$util.isString(message.token))
                return "token: string expected";
        if (message.platform != null && message.hasOwnProperty("platform"))
            switch (message.platform) {
            default:
                return "platform: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
                break;
            }
        if (message.appVersion != null && message.hasOwnProperty("appVersion"))
            if (!$util.isString(message.appVersion))
                return "appVersion: string expected";
        return null;
    };

    /**
     * Creates a LoginRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LoginRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LoginRequest} LoginRequest
     */
    LoginRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.LoginRequest)
            return object;
        let message = new $root.LoginRequest();
        if (object.uid != null)
            message.uid = String(object.uid);
        if (object.deviceId != null)
            message.deviceId = String(object.deviceId);
        if (object.token != null)
            message.token = String(object.token);
        switch (object.platform) {
        case "WEB":
        case 0:
            message.platform = 0;
            break;
        case "IOS":
        case 1:
            message.platform = 1;
            break;
        case "ANDROID":
        case 2:
            message.platform = 2;
            break;
        case "PC":
        case 3:
            message.platform = 3;
            break;
        case "WECHAT":
        case 4:
            message.platform = 4;
            break;
        }
        if (object.appVersion != null)
            message.appVersion = String(object.appVersion);
        return message;
    };

    /**
     * Creates a plain object from a LoginRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LoginRequest
     * @static
     * @param {LoginRequest} message LoginRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LoginRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.uid = "";
            object.deviceId = "";
            object.token = "";
            object.platform = options.enums === String ? "WEB" : 0;
            object.appVersion = "";
        }
        if (message.uid != null && message.hasOwnProperty("uid"))
            object.uid = message.uid;
        if (message.deviceId != null && message.hasOwnProperty("deviceId"))
            object.deviceId = message.deviceId;
        if (message.token != null && message.hasOwnProperty("token"))
            object.token = message.token;
        if (message.platform != null && message.hasOwnProperty("platform"))
            object.platform = options.enums === String ? $root.Platform[message.platform] : message.platform;
        if (message.appVersion != null && message.hasOwnProperty("appVersion"))
            object.appVersion = message.appVersion;
        return object;
    };

    /**
     * Converts this LoginRequest to JSON.
     * @function toJSON
     * @memberof LoginRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LoginRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return LoginRequest;
})();

export const LogoutRequest = $root.LogoutRequest = (() => {

    /**
     * Properties of a LogoutRequest.
     * @exports ILogoutRequest
     * @interface ILogoutRequest
     * @property {string|null} [uid] LogoutRequest uid
     * @property {string|null} [token] LogoutRequest token
     */

    /**
     * Constructs a new LogoutRequest.
     * @exports LogoutRequest
     * @classdesc Represents a LogoutRequest.
     * @implements ILogoutRequest
     * @constructor
     * @param {ILogoutRequest=} [properties] Properties to set
     */
    function LogoutRequest(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * LogoutRequest uid.
     * @member {string} uid
     * @memberof LogoutRequest
     * @instance
     */
    LogoutRequest.prototype.uid = "";

    /**
     * LogoutRequest token.
     * @member {string} token
     * @memberof LogoutRequest
     * @instance
     */
    LogoutRequest.prototype.token = "";

    /**
     * Creates a new LogoutRequest instance using the specified properties.
     * @function create
     * @memberof LogoutRequest
     * @static
     * @param {ILogoutRequest=} [properties] Properties to set
     * @returns {LogoutRequest} LogoutRequest instance
     */
    LogoutRequest.create = function create(properties) {
        return new LogoutRequest(properties);
    };

    /**
     * Encodes the specified LogoutRequest message. Does not implicitly {@link LogoutRequest.verify|verify} messages.
     * @function encode
     * @memberof LogoutRequest
     * @static
     * @param {ILogoutRequest} message LogoutRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LogoutRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.uid);
        if (message.token != null && Object.hasOwnProperty.call(message, "token"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.token);
        return writer;
    };

    /**
     * Encodes the specified LogoutRequest message, length delimited. Does not implicitly {@link LogoutRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LogoutRequest
     * @static
     * @param {ILogoutRequest} message LogoutRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LogoutRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LogoutRequest message from the specified reader or buffer.
     * @function decode
     * @memberof LogoutRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LogoutRequest} LogoutRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LogoutRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.LogoutRequest();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.uid = reader.string();
                break;
            case 2:
                message.token = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a LogoutRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LogoutRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LogoutRequest} LogoutRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LogoutRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LogoutRequest message.
     * @function verify
     * @memberof LogoutRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LogoutRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.uid != null && message.hasOwnProperty("uid"))
            if (!$util.isString(message.uid))
                return "uid: string expected";
        if (message.token != null && message.hasOwnProperty("token"))
            if (!$util.isString(message.token))
                return "token: string expected";
        return null;
    };

    /**
     * Creates a LogoutRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LogoutRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LogoutRequest} LogoutRequest
     */
    LogoutRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.LogoutRequest)
            return object;
        let message = new $root.LogoutRequest();
        if (object.uid != null)
            message.uid = String(object.uid);
        if (object.token != null)
            message.token = String(object.token);
        return message;
    };

    /**
     * Creates a plain object from a LogoutRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LogoutRequest
     * @static
     * @param {LogoutRequest} message LogoutRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LogoutRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.uid = "";
            object.token = "";
        }
        if (message.uid != null && message.hasOwnProperty("uid"))
            object.uid = message.uid;
        if (message.token != null && message.hasOwnProperty("token"))
            object.token = message.token;
        return object;
    };

    /**
     * Converts this LogoutRequest to JSON.
     * @function toJSON
     * @memberof LogoutRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LogoutRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return LogoutRequest;
})();

export const KeepAliveRequest = $root.KeepAliveRequest = (() => {

    /**
     * Properties of a KeepAliveRequest.
     * @exports IKeepAliveRequest
     * @interface IKeepAliveRequest
     * @property {number|Long|null} [time] KeepAliveRequest time
     */

    /**
     * Constructs a new KeepAliveRequest.
     * @exports KeepAliveRequest
     * @classdesc Represents a KeepAliveRequest.
     * @implements IKeepAliveRequest
     * @constructor
     * @param {IKeepAliveRequest=} [properties] Properties to set
     */
    function KeepAliveRequest(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * KeepAliveRequest time.
     * @member {number|Long} time
     * @memberof KeepAliveRequest
     * @instance
     */
    KeepAliveRequest.prototype.time = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Creates a new KeepAliveRequest instance using the specified properties.
     * @function create
     * @memberof KeepAliveRequest
     * @static
     * @param {IKeepAliveRequest=} [properties] Properties to set
     * @returns {KeepAliveRequest} KeepAliveRequest instance
     */
    KeepAliveRequest.create = function create(properties) {
        return new KeepAliveRequest(properties);
    };

    /**
     * Encodes the specified KeepAliveRequest message. Does not implicitly {@link KeepAliveRequest.verify|verify} messages.
     * @function encode
     * @memberof KeepAliveRequest
     * @static
     * @param {IKeepAliveRequest} message KeepAliveRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    KeepAliveRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.time != null && Object.hasOwnProperty.call(message, "time"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.time);
        return writer;
    };

    /**
     * Encodes the specified KeepAliveRequest message, length delimited. Does not implicitly {@link KeepAliveRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof KeepAliveRequest
     * @static
     * @param {IKeepAliveRequest} message KeepAliveRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    KeepAliveRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a KeepAliveRequest message from the specified reader or buffer.
     * @function decode
     * @memberof KeepAliveRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {KeepAliveRequest} KeepAliveRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    KeepAliveRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.KeepAliveRequest();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.time = reader.uint64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a KeepAliveRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof KeepAliveRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {KeepAliveRequest} KeepAliveRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    KeepAliveRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a KeepAliveRequest message.
     * @function verify
     * @memberof KeepAliveRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    KeepAliveRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.time != null && message.hasOwnProperty("time"))
            if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                return "time: integer|Long expected";
        return null;
    };

    /**
     * Creates a KeepAliveRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof KeepAliveRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {KeepAliveRequest} KeepAliveRequest
     */
    KeepAliveRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.KeepAliveRequest)
            return object;
        let message = new $root.KeepAliveRequest();
        if (object.time != null)
            if ($util.Long)
                (message.time = $util.Long.fromValue(object.time)).unsigned = true;
            else if (typeof object.time === "string")
                message.time = parseInt(object.time, 10);
            else if (typeof object.time === "number")
                message.time = object.time;
            else if (typeof object.time === "object")
                message.time = new $util.LongBits(object.time.low >>> 0, object.time.high >>> 0).toNumber(true);
        return message;
    };

    /**
     * Creates a plain object from a KeepAliveRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof KeepAliveRequest
     * @static
     * @param {KeepAliveRequest} message KeepAliveRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    KeepAliveRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            if ($util.Long) {
                let long = new $util.Long(0, 0, true);
                object.time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.time = options.longs === String ? "0" : 0;
        if (message.time != null && message.hasOwnProperty("time"))
            if (typeof message.time === "number")
                object.time = options.longs === String ? String(message.time) : message.time;
            else
                object.time = options.longs === String ? $util.Long.prototype.toString.call(message.time) : options.longs === Number ? new $util.LongBits(message.time.low >>> 0, message.time.high >>> 0).toNumber(true) : message.time;
        return object;
    };

    /**
     * Converts this KeepAliveRequest to JSON.
     * @function toJSON
     * @memberof KeepAliveRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    KeepAliveRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return KeepAliveRequest;
})();

export const MessageRequest = $root.MessageRequest = (() => {

    /**
     * Properties of a MessageRequest.
     * @exports IMessageRequest
     * @interface IMessageRequest
     * @property {number|Long|null} [msgId] MessageRequest msgId
     * @property {string|null} [from] MessageRequest from
     * @property {string|null} [to] MessageRequest to
     * @property {number|Long|null} [time] MessageRequest time
     * @property {MsgType|null} [msgType] MessageRequest msgType
     * @property {string|null} [content] MessageRequest content
     * @property {string|null} [json] MessageRequest json
     */

    /**
     * Constructs a new MessageRequest.
     * @exports MessageRequest
     * @classdesc Represents a MessageRequest.
     * @implements IMessageRequest
     * @constructor
     * @param {IMessageRequest=} [properties] Properties to set
     */
    function MessageRequest(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * MessageRequest msgId.
     * @member {number|Long} msgId
     * @memberof MessageRequest
     * @instance
     */
    MessageRequest.prototype.msgId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * MessageRequest from.
     * @member {string} from
     * @memberof MessageRequest
     * @instance
     */
    MessageRequest.prototype.from = "";

    /**
     * MessageRequest to.
     * @member {string} to
     * @memberof MessageRequest
     * @instance
     */
    MessageRequest.prototype.to = "";

    /**
     * MessageRequest time.
     * @member {number|Long} time
     * @memberof MessageRequest
     * @instance
     */
    MessageRequest.prototype.time = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * MessageRequest msgType.
     * @member {MsgType} msgType
     * @memberof MessageRequest
     * @instance
     */
    MessageRequest.prototype.msgType = 0;

    /**
     * MessageRequest content.
     * @member {string} content
     * @memberof MessageRequest
     * @instance
     */
    MessageRequest.prototype.content = "";

    /**
     * MessageRequest json.
     * @member {string} json
     * @memberof MessageRequest
     * @instance
     */
    MessageRequest.prototype.json = "";

    /**
     * Creates a new MessageRequest instance using the specified properties.
     * @function create
     * @memberof MessageRequest
     * @static
     * @param {IMessageRequest=} [properties] Properties to set
     * @returns {MessageRequest} MessageRequest instance
     */
    MessageRequest.create = function create(properties) {
        return new MessageRequest(properties);
    };

    /**
     * Encodes the specified MessageRequest message. Does not implicitly {@link MessageRequest.verify|verify} messages.
     * @function encode
     * @memberof MessageRequest
     * @static
     * @param {IMessageRequest} message MessageRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MessageRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.msgId != null && Object.hasOwnProperty.call(message, "msgId"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.msgId);
        if (message.from != null && Object.hasOwnProperty.call(message, "from"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.from);
        if (message.to != null && Object.hasOwnProperty.call(message, "to"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.to);
        if (message.time != null && Object.hasOwnProperty.call(message, "time"))
            writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.time);
        if (message.msgType != null && Object.hasOwnProperty.call(message, "msgType"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.msgType);
        if (message.content != null && Object.hasOwnProperty.call(message, "content"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.content);
        if (message.json != null && Object.hasOwnProperty.call(message, "json"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.json);
        return writer;
    };

    /**
     * Encodes the specified MessageRequest message, length delimited. Does not implicitly {@link MessageRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MessageRequest
     * @static
     * @param {IMessageRequest} message MessageRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MessageRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MessageRequest message from the specified reader or buffer.
     * @function decode
     * @memberof MessageRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {MessageRequest} MessageRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MessageRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.MessageRequest();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.msgId = reader.uint64();
                break;
            case 2:
                message.from = reader.string();
                break;
            case 3:
                message.to = reader.string();
                break;
            case 4:
                message.time = reader.uint64();
                break;
            case 5:
                message.msgType = reader.int32();
                break;
            case 6:
                message.content = reader.string();
                break;
            case 7:
                message.json = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a MessageRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MessageRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MessageRequest} MessageRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MessageRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MessageRequest message.
     * @function verify
     * @memberof MessageRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MessageRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.msgId != null && message.hasOwnProperty("msgId"))
            if (!$util.isInteger(message.msgId) && !(message.msgId && $util.isInteger(message.msgId.low) && $util.isInteger(message.msgId.high)))
                return "msgId: integer|Long expected";
        if (message.from != null && message.hasOwnProperty("from"))
            if (!$util.isString(message.from))
                return "from: string expected";
        if (message.to != null && message.hasOwnProperty("to"))
            if (!$util.isString(message.to))
                return "to: string expected";
        if (message.time != null && message.hasOwnProperty("time"))
            if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                return "time: integer|Long expected";
        if (message.msgType != null && message.hasOwnProperty("msgType"))
            switch (message.msgType) {
            default:
                return "msgType: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
                break;
            }
        if (message.content != null && message.hasOwnProperty("content"))
            if (!$util.isString(message.content))
                return "content: string expected";
        if (message.json != null && message.hasOwnProperty("json"))
            if (!$util.isString(message.json))
                return "json: string expected";
        return null;
    };

    /**
     * Creates a MessageRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof MessageRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {MessageRequest} MessageRequest
     */
    MessageRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.MessageRequest)
            return object;
        let message = new $root.MessageRequest();
        if (object.msgId != null)
            if ($util.Long)
                (message.msgId = $util.Long.fromValue(object.msgId)).unsigned = true;
            else if (typeof object.msgId === "string")
                message.msgId = parseInt(object.msgId, 10);
            else if (typeof object.msgId === "number")
                message.msgId = object.msgId;
            else if (typeof object.msgId === "object")
                message.msgId = new $util.LongBits(object.msgId.low >>> 0, object.msgId.high >>> 0).toNumber(true);
        if (object.from != null)
            message.from = String(object.from);
        if (object.to != null)
            message.to = String(object.to);
        if (object.time != null)
            if ($util.Long)
                (message.time = $util.Long.fromValue(object.time)).unsigned = true;
            else if (typeof object.time === "string")
                message.time = parseInt(object.time, 10);
            else if (typeof object.time === "number")
                message.time = object.time;
            else if (typeof object.time === "object")
                message.time = new $util.LongBits(object.time.low >>> 0, object.time.high >>> 0).toNumber(true);
        switch (object.msgType) {
        case "TEXT":
        case 0:
            message.msgType = 0;
            break;
        case "SOUND":
        case 1:
            message.msgType = 1;
            break;
        case "VIDEO":
        case 2:
            message.msgType = 2;
            break;
        case "GEO":
        case 3:
            message.msgType = 3;
            break;
        case "REF":
        case 4:
            message.msgType = 4;
            break;
        case "FILE":
        case 5:
            message.msgType = 5;
            break;
        case "EMOJI":
        case 6:
            message.msgType = 6;
            break;
        }
        if (object.content != null)
            message.content = String(object.content);
        if (object.json != null)
            message.json = String(object.json);
        return message;
    };

    /**
     * Creates a plain object from a MessageRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof MessageRequest
     * @static
     * @param {MessageRequest} message MessageRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    MessageRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            if ($util.Long) {
                let long = new $util.Long(0, 0, true);
                object.msgId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.msgId = options.longs === String ? "0" : 0;
            object.from = "";
            object.to = "";
            if ($util.Long) {
                let long = new $util.Long(0, 0, true);
                object.time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.time = options.longs === String ? "0" : 0;
            object.msgType = options.enums === String ? "TEXT" : 0;
            object.content = "";
            object.json = "";
        }
        if (message.msgId != null && message.hasOwnProperty("msgId"))
            if (typeof message.msgId === "number")
                object.msgId = options.longs === String ? String(message.msgId) : message.msgId;
            else
                object.msgId = options.longs === String ? $util.Long.prototype.toString.call(message.msgId) : options.longs === Number ? new $util.LongBits(message.msgId.low >>> 0, message.msgId.high >>> 0).toNumber(true) : message.msgId;
        if (message.from != null && message.hasOwnProperty("from"))
            object.from = message.from;
        if (message.to != null && message.hasOwnProperty("to"))
            object.to = message.to;
        if (message.time != null && message.hasOwnProperty("time"))
            if (typeof message.time === "number")
                object.time = options.longs === String ? String(message.time) : message.time;
            else
                object.time = options.longs === String ? $util.Long.prototype.toString.call(message.time) : options.longs === Number ? new $util.LongBits(message.time.low >>> 0, message.time.high >>> 0).toNumber(true) : message.time;
        if (message.msgType != null && message.hasOwnProperty("msgType"))
            object.msgType = options.enums === String ? $root.MsgType[message.msgType] : message.msgType;
        if (message.content != null && message.hasOwnProperty("content"))
            object.content = message.content;
        if (message.json != null && message.hasOwnProperty("json"))
            object.json = message.json;
        return object;
    };

    /**
     * Converts this MessageRequest to JSON.
     * @function toJSON
     * @memberof MessageRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    MessageRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return MessageRequest;
})();

export const Response = $root.Response = (() => {

    /**
     * Properties of a Response.
     * @exports IResponse
     * @interface IResponse
     * @property {boolean|null} [success] Response success
     * @property {number|null} [code] Response code
     * @property {string|null} [info] Response info
     * @property {string|null} [data] Response data
     * @property {number|null} [responseType] Response responseType
     */

    /**
     * Constructs a new Response.
     * @exports Response
     * @classdesc Represents a Response.
     * @implements IResponse
     * @constructor
     * @param {IResponse=} [properties] Properties to set
     */
    function Response(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Response success.
     * @member {boolean} success
     * @memberof Response
     * @instance
     */
    Response.prototype.success = false;

    /**
     * Response code.
     * @member {number} code
     * @memberof Response
     * @instance
     */
    Response.prototype.code = 0;

    /**
     * Response info.
     * @member {string} info
     * @memberof Response
     * @instance
     */
    Response.prototype.info = "";

    /**
     * Response data.
     * @member {string} data
     * @memberof Response
     * @instance
     */
    Response.prototype.data = "";

    /**
     * Response responseType.
     * @member {number} responseType
     * @memberof Response
     * @instance
     */
    Response.prototype.responseType = 0;

    /**
     * Creates a new Response instance using the specified properties.
     * @function create
     * @memberof Response
     * @static
     * @param {IResponse=} [properties] Properties to set
     * @returns {Response} Response instance
     */
    Response.create = function create(properties) {
        return new Response(properties);
    };

    /**
     * Encodes the specified Response message. Does not implicitly {@link Response.verify|verify} messages.
     * @function encode
     * @memberof Response
     * @static
     * @param {IResponse} message Response message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Response.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.success != null && Object.hasOwnProperty.call(message, "success"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
        if (message.code != null && Object.hasOwnProperty.call(message, "code"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.code);
        if (message.info != null && Object.hasOwnProperty.call(message, "info"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.info);
        if (message.data != null && Object.hasOwnProperty.call(message, "data"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.data);
        if (message.responseType != null && Object.hasOwnProperty.call(message, "responseType"))
            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.responseType);
        return writer;
    };

    /**
     * Encodes the specified Response message, length delimited. Does not implicitly {@link Response.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Response
     * @static
     * @param {IResponse} message Response message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Response.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Response message from the specified reader or buffer.
     * @function decode
     * @memberof Response
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Response} Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Response.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Response();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.success = reader.bool();
                break;
            case 2:
                message.code = reader.uint32();
                break;
            case 3:
                message.info = reader.string();
                break;
            case 4:
                message.data = reader.string();
                break;
            case 5:
                message.responseType = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Response message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Response
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Response} Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Response.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Response message.
     * @function verify
     * @memberof Response
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Response.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.success != null && message.hasOwnProperty("success"))
            if (typeof message.success !== "boolean")
                return "success: boolean expected";
        if (message.code != null && message.hasOwnProperty("code"))
            if (!$util.isInteger(message.code))
                return "code: integer expected";
        if (message.info != null && message.hasOwnProperty("info"))
            if (!$util.isString(message.info))
                return "info: string expected";
        if (message.data != null && message.hasOwnProperty("data"))
            if (!$util.isString(message.data))
                return "data: string expected";
        if (message.responseType != null && message.hasOwnProperty("responseType"))
            if (!$util.isInteger(message.responseType))
                return "responseType: integer expected";
        return null;
    };

    /**
     * Creates a Response message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Response
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Response} Response
     */
    Response.fromObject = function fromObject(object) {
        if (object instanceof $root.Response)
            return object;
        let message = new $root.Response();
        if (object.success != null)
            message.success = Boolean(object.success);
        if (object.code != null)
            message.code = object.code >>> 0;
        if (object.info != null)
            message.info = String(object.info);
        if (object.data != null)
            message.data = String(object.data);
        if (object.responseType != null)
            message.responseType = object.responseType >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a Response message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Response
     * @static
     * @param {Response} message Response
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Response.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.success = false;
            object.code = 0;
            object.info = "";
            object.data = "";
            object.responseType = 0;
        }
        if (message.success != null && message.hasOwnProperty("success"))
            object.success = message.success;
        if (message.code != null && message.hasOwnProperty("code"))
            object.code = message.code;
        if (message.info != null && message.hasOwnProperty("info"))
            object.info = message.info;
        if (message.data != null && message.hasOwnProperty("data"))
            object.data = message.data;
        if (message.responseType != null && message.hasOwnProperty("responseType"))
            object.responseType = message.responseType;
        return object;
    };

    /**
     * Converts this Response to JSON.
     * @function toJSON
     * @memberof Response
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Response.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Response;
})();

export const Notification = $root.Notification = (() => {

    /**
     * Properties of a Notification.
     * @exports INotification
     * @interface INotification
     * @property {NotifiType|null} [notifiType] Notification notifiType
     * @property {string|null} [sender] Notification sender
     * @property {string|null} [content] Notification content
     * @property {number|Long|null} [time] Notification time
     */

    /**
     * Constructs a new Notification.
     * @exports Notification
     * @classdesc Represents a Notification.
     * @implements INotification
     * @constructor
     * @param {INotification=} [properties] Properties to set
     */
    function Notification(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Notification notifiType.
     * @member {NotifiType} notifiType
     * @memberof Notification
     * @instance
     */
    Notification.prototype.notifiType = 0;

    /**
     * Notification sender.
     * @member {string} sender
     * @memberof Notification
     * @instance
     */
    Notification.prototype.sender = "";

    /**
     * Notification content.
     * @member {string} content
     * @memberof Notification
     * @instance
     */
    Notification.prototype.content = "";

    /**
     * Notification time.
     * @member {number|Long} time
     * @memberof Notification
     * @instance
     */
    Notification.prototype.time = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Creates a new Notification instance using the specified properties.
     * @function create
     * @memberof Notification
     * @static
     * @param {INotification=} [properties] Properties to set
     * @returns {Notification} Notification instance
     */
    Notification.create = function create(properties) {
        return new Notification(properties);
    };

    /**
     * Encodes the specified Notification message. Does not implicitly {@link Notification.verify|verify} messages.
     * @function encode
     * @memberof Notification
     * @static
     * @param {INotification} message Notification message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Notification.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.notifiType != null && Object.hasOwnProperty.call(message, "notifiType"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.notifiType);
        if (message.sender != null && Object.hasOwnProperty.call(message, "sender"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.sender);
        if (message.content != null && Object.hasOwnProperty.call(message, "content"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.content);
        if (message.time != null && Object.hasOwnProperty.call(message, "time"))
            writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.time);
        return writer;
    };

    /**
     * Encodes the specified Notification message, length delimited. Does not implicitly {@link Notification.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Notification
     * @static
     * @param {INotification} message Notification message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Notification.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Notification message from the specified reader or buffer.
     * @function decode
     * @memberof Notification
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Notification} Notification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Notification.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Notification();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.notifiType = reader.int32();
                break;
            case 2:
                message.sender = reader.string();
                break;
            case 3:
                message.content = reader.string();
                break;
            case 4:
                message.time = reader.uint64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Notification message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Notification
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Notification} Notification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Notification.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Notification message.
     * @function verify
     * @memberof Notification
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Notification.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.notifiType != null && message.hasOwnProperty("notifiType"))
            switch (message.notifiType) {
            default:
                return "notifiType: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
        if (message.sender != null && message.hasOwnProperty("sender"))
            if (!$util.isString(message.sender))
                return "sender: string expected";
        if (message.content != null && message.hasOwnProperty("content"))
            if (!$util.isString(message.content))
                return "content: string expected";
        if (message.time != null && message.hasOwnProperty("time"))
            if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                return "time: integer|Long expected";
        return null;
    };

    /**
     * Creates a Notification message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Notification
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Notification} Notification
     */
    Notification.fromObject = function fromObject(object) {
        if (object instanceof $root.Notification)
            return object;
        let message = new $root.Notification();
        switch (object.notifiType) {
        case "FRIEND":
        case 0:
            message.notifiType = 0;
            break;
        case "PUSH":
        case 1:
            message.notifiType = 1;
            break;
        case "CIRCLE":
        case 2:
            message.notifiType = 2;
            break;
        }
        if (object.sender != null)
            message.sender = String(object.sender);
        if (object.content != null)
            message.content = String(object.content);
        if (object.time != null)
            if ($util.Long)
                (message.time = $util.Long.fromValue(object.time)).unsigned = true;
            else if (typeof object.time === "string")
                message.time = parseInt(object.time, 10);
            else if (typeof object.time === "number")
                message.time = object.time;
            else if (typeof object.time === "object")
                message.time = new $util.LongBits(object.time.low >>> 0, object.time.high >>> 0).toNumber(true);
        return message;
    };

    /**
     * Creates a plain object from a Notification message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Notification
     * @static
     * @param {Notification} message Notification
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Notification.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.notifiType = options.enums === String ? "FRIEND" : 0;
            object.sender = "";
            object.content = "";
            if ($util.Long) {
                let long = new $util.Long(0, 0, true);
                object.time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.time = options.longs === String ? "0" : 0;
        }
        if (message.notifiType != null && message.hasOwnProperty("notifiType"))
            object.notifiType = options.enums === String ? $root.NotifiType[message.notifiType] : message.notifiType;
        if (message.sender != null && message.hasOwnProperty("sender"))
            object.sender = message.sender;
        if (message.content != null && message.hasOwnProperty("content"))
            object.content = message.content;
        if (message.time != null && message.hasOwnProperty("time"))
            if (typeof message.time === "number")
                object.time = options.longs === String ? String(message.time) : message.time;
            else
                object.time = options.longs === String ? $util.Long.prototype.toString.call(message.time) : options.longs === Number ? new $util.LongBits(message.time.low >>> 0, message.time.high >>> 0).toNumber(true) : message.time;
        return object;
    };

    /**
     * Converts this Notification to JSON.
     * @function toJSON
     * @memberof Notification
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Notification.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Notification;
})();

export const ChatMessage = $root.ChatMessage = (() => {

    /**
     * Properties of a ChatMessage.
     * @exports IChatMessage
     * @interface IChatMessage
     * @property {HeadType|null} [headType] ChatMessage headType
     * @property {number|Long|null} [seq] ChatMessage seq
     * @property {ILoginRequest|null} [loginRequest] ChatMessage loginRequest
     * @property {ILogoutRequest|null} [logoutRequest] ChatMessage logoutRequest
     * @property {IKeepAliveRequest|null} [keepAliveRequest] ChatMessage keepAliveRequest
     * @property {IMessageRequest|null} [messageRequest] ChatMessage messageRequest
     * @property {IResponse|null} [response] ChatMessage response
     * @property {INotification|null} [notification] ChatMessage notification
     */

    /**
     * Constructs a new ChatMessage.
     * @exports ChatMessage
     * @classdesc Represents a ChatMessage.
     * @implements IChatMessage
     * @constructor
     * @param {IChatMessage=} [properties] Properties to set
     */
    function ChatMessage(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ChatMessage headType.
     * @member {HeadType} headType
     * @memberof ChatMessage
     * @instance
     */
    ChatMessage.prototype.headType = 0;

    /**
     * ChatMessage seq.
     * @member {number|Long} seq
     * @memberof ChatMessage
     * @instance
     */
    ChatMessage.prototype.seq = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * ChatMessage loginRequest.
     * @member {ILoginRequest|null|undefined} loginRequest
     * @memberof ChatMessage
     * @instance
     */
    ChatMessage.prototype.loginRequest = null;

    /**
     * ChatMessage logoutRequest.
     * @member {ILogoutRequest|null|undefined} logoutRequest
     * @memberof ChatMessage
     * @instance
     */
    ChatMessage.prototype.logoutRequest = null;

    /**
     * ChatMessage keepAliveRequest.
     * @member {IKeepAliveRequest|null|undefined} keepAliveRequest
     * @memberof ChatMessage
     * @instance
     */
    ChatMessage.prototype.keepAliveRequest = null;

    /**
     * ChatMessage messageRequest.
     * @member {IMessageRequest|null|undefined} messageRequest
     * @memberof ChatMessage
     * @instance
     */
    ChatMessage.prototype.messageRequest = null;

    /**
     * ChatMessage response.
     * @member {IResponse|null|undefined} response
     * @memberof ChatMessage
     * @instance
     */
    ChatMessage.prototype.response = null;

    /**
     * ChatMessage notification.
     * @member {INotification|null|undefined} notification
     * @memberof ChatMessage
     * @instance
     */
    ChatMessage.prototype.notification = null;

    /**
     * Creates a new ChatMessage instance using the specified properties.
     * @function create
     * @memberof ChatMessage
     * @static
     * @param {IChatMessage=} [properties] Properties to set
     * @returns {ChatMessage} ChatMessage instance
     */
    ChatMessage.create = function create(properties) {
        return new ChatMessage(properties);
    };

    /**
     * Encodes the specified ChatMessage message. Does not implicitly {@link ChatMessage.verify|verify} messages.
     * @function encode
     * @memberof ChatMessage
     * @static
     * @param {IChatMessage} message ChatMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChatMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.headType != null && Object.hasOwnProperty.call(message, "headType"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.headType);
        if (message.seq != null && Object.hasOwnProperty.call(message, "seq"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.seq);
        if (message.loginRequest != null && Object.hasOwnProperty.call(message, "loginRequest"))
            $root.LoginRequest.encode(message.loginRequest, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.logoutRequest != null && Object.hasOwnProperty.call(message, "logoutRequest"))
            $root.LogoutRequest.encode(message.logoutRequest, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.keepAliveRequest != null && Object.hasOwnProperty.call(message, "keepAliveRequest"))
            $root.KeepAliveRequest.encode(message.keepAliveRequest, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.messageRequest != null && Object.hasOwnProperty.call(message, "messageRequest"))
            $root.MessageRequest.encode(message.messageRequest, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.response != null && Object.hasOwnProperty.call(message, "response"))
            $root.Response.encode(message.response, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message.notification != null && Object.hasOwnProperty.call(message, "notification"))
            $root.Notification.encode(message.notification, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ChatMessage message, length delimited. Does not implicitly {@link ChatMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ChatMessage
     * @static
     * @param {IChatMessage} message ChatMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChatMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ChatMessage message from the specified reader or buffer.
     * @function decode
     * @memberof ChatMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ChatMessage} ChatMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChatMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ChatMessage();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.headType = reader.int32();
                break;
            case 2:
                message.seq = reader.uint64();
                break;
            case 3:
                message.loginRequest = $root.LoginRequest.decode(reader, reader.uint32());
                break;
            case 4:
                message.logoutRequest = $root.LogoutRequest.decode(reader, reader.uint32());
                break;
            case 5:
                message.keepAliveRequest = $root.KeepAliveRequest.decode(reader, reader.uint32());
                break;
            case 6:
                message.messageRequest = $root.MessageRequest.decode(reader, reader.uint32());
                break;
            case 7:
                message.response = $root.Response.decode(reader, reader.uint32());
                break;
            case 8:
                message.notification = $root.Notification.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ChatMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ChatMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ChatMessage} ChatMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChatMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ChatMessage message.
     * @function verify
     * @memberof ChatMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ChatMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.headType != null && message.hasOwnProperty("headType"))
            switch (message.headType) {
            default:
                return "headType: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            }
        if (message.seq != null && message.hasOwnProperty("seq"))
            if (!$util.isInteger(message.seq) && !(message.seq && $util.isInteger(message.seq.low) && $util.isInteger(message.seq.high)))
                return "seq: integer|Long expected";
        if (message.loginRequest != null && message.hasOwnProperty("loginRequest")) {
            let error = $root.LoginRequest.verify(message.loginRequest);
            if (error)
                return "loginRequest." + error;
        }
        if (message.logoutRequest != null && message.hasOwnProperty("logoutRequest")) {
            let error = $root.LogoutRequest.verify(message.logoutRequest);
            if (error)
                return "logoutRequest." + error;
        }
        if (message.keepAliveRequest != null && message.hasOwnProperty("keepAliveRequest")) {
            let error = $root.KeepAliveRequest.verify(message.keepAliveRequest);
            if (error)
                return "keepAliveRequest." + error;
        }
        if (message.messageRequest != null && message.hasOwnProperty("messageRequest")) {
            let error = $root.MessageRequest.verify(message.messageRequest);
            if (error)
                return "messageRequest." + error;
        }
        if (message.response != null && message.hasOwnProperty("response")) {
            let error = $root.Response.verify(message.response);
            if (error)
                return "response." + error;
        }
        if (message.notification != null && message.hasOwnProperty("notification")) {
            let error = $root.Notification.verify(message.notification);
            if (error)
                return "notification." + error;
        }
        return null;
    };

    /**
     * Creates a ChatMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ChatMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ChatMessage} ChatMessage
     */
    ChatMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.ChatMessage)
            return object;
        let message = new $root.ChatMessage();
        switch (object.headType) {
        case "LOGIN_REQUEST":
        case 0:
            message.headType = 0;
            break;
        case "LOGOUT_REQUEST":
        case 1:
            message.headType = 1;
            break;
        case "KEEPALIVE_REQUEST":
        case 2:
            message.headType = 2;
            break;
        case "MESSAGE_REQUEST":
        case 3:
            message.headType = 3;
            break;
        case "RESPONSE":
        case 4:
            message.headType = 4;
            break;
        case "MESSAGE_NOTIFICATION":
        case 5:
            message.headType = 5;
            break;
        }
        if (object.seq != null)
            if ($util.Long)
                (message.seq = $util.Long.fromValue(object.seq)).unsigned = true;
            else if (typeof object.seq === "string")
                message.seq = parseInt(object.seq, 10);
            else if (typeof object.seq === "number")
                message.seq = object.seq;
            else if (typeof object.seq === "object")
                message.seq = new $util.LongBits(object.seq.low >>> 0, object.seq.high >>> 0).toNumber(true);
        if (object.loginRequest != null) {
            if (typeof object.loginRequest !== "object")
                throw TypeError(".ChatMessage.loginRequest: object expected");
            message.loginRequest = $root.LoginRequest.fromObject(object.loginRequest);
        }
        if (object.logoutRequest != null) {
            if (typeof object.logoutRequest !== "object")
                throw TypeError(".ChatMessage.logoutRequest: object expected");
            message.logoutRequest = $root.LogoutRequest.fromObject(object.logoutRequest);
        }
        if (object.keepAliveRequest != null) {
            if (typeof object.keepAliveRequest !== "object")
                throw TypeError(".ChatMessage.keepAliveRequest: object expected");
            message.keepAliveRequest = $root.KeepAliveRequest.fromObject(object.keepAliveRequest);
        }
        if (object.messageRequest != null) {
            if (typeof object.messageRequest !== "object")
                throw TypeError(".ChatMessage.messageRequest: object expected");
            message.messageRequest = $root.MessageRequest.fromObject(object.messageRequest);
        }
        if (object.response != null) {
            if (typeof object.response !== "object")
                throw TypeError(".ChatMessage.response: object expected");
            message.response = $root.Response.fromObject(object.response);
        }
        if (object.notification != null) {
            if (typeof object.notification !== "object")
                throw TypeError(".ChatMessage.notification: object expected");
            message.notification = $root.Notification.fromObject(object.notification);
        }
        return message;
    };

    /**
     * Creates a plain object from a ChatMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ChatMessage
     * @static
     * @param {ChatMessage} message ChatMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ChatMessage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.headType = options.enums === String ? "LOGIN_REQUEST" : 0;
            if ($util.Long) {
                let long = new $util.Long(0, 0, true);
                object.seq = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.seq = options.longs === String ? "0" : 0;
            object.loginRequest = null;
            object.logoutRequest = null;
            object.keepAliveRequest = null;
            object.messageRequest = null;
            object.response = null;
            object.notification = null;
        }
        if (message.headType != null && message.hasOwnProperty("headType"))
            object.headType = options.enums === String ? $root.HeadType[message.headType] : message.headType;
        if (message.seq != null && message.hasOwnProperty("seq"))
            if (typeof message.seq === "number")
                object.seq = options.longs === String ? String(message.seq) : message.seq;
            else
                object.seq = options.longs === String ? $util.Long.prototype.toString.call(message.seq) : options.longs === Number ? new $util.LongBits(message.seq.low >>> 0, message.seq.high >>> 0).toNumber(true) : message.seq;
        if (message.loginRequest != null && message.hasOwnProperty("loginRequest"))
            object.loginRequest = $root.LoginRequest.toObject(message.loginRequest, options);
        if (message.logoutRequest != null && message.hasOwnProperty("logoutRequest"))
            object.logoutRequest = $root.LogoutRequest.toObject(message.logoutRequest, options);
        if (message.keepAliveRequest != null && message.hasOwnProperty("keepAliveRequest"))
            object.keepAliveRequest = $root.KeepAliveRequest.toObject(message.keepAliveRequest, options);
        if (message.messageRequest != null && message.hasOwnProperty("messageRequest"))
            object.messageRequest = $root.MessageRequest.toObject(message.messageRequest, options);
        if (message.response != null && message.hasOwnProperty("response"))
            object.response = $root.Response.toObject(message.response, options);
        if (message.notification != null && message.hasOwnProperty("notification"))
            object.notification = $root.Notification.toObject(message.notification, options);
        return object;
    };

    /**
     * Converts this ChatMessage to JSON.
     * @function toJSON
     * @memberof ChatMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ChatMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ChatMessage;
})();

module.exports = $root;
