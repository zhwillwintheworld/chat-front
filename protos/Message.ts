/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export enum HeadType {
  /** LOGIN_REQUEST - 登陆请求 */
  LOGIN_REQUEST = 0,
  /** LOGIN_RESPONSE - 登录响应 */
  LOGIN_RESPONSE = 1,
  /** LOGOUT_REQUEST - 退出请求 */
  LOGOUT_REQUEST = 2,
  LOGOUT_RESPONSE = 3,
  /** KEEPALIVE_REQUEST - 心跳请求PING; */
  KEEPALIVE_REQUEST = 4,
  KEEPALIVE_RESPONSE = 5,
  /** MESSAGE_REQUEST - 消息请求; */
  MESSAGE_REQUEST = 6,
  /** MESSAGE_RESPONSE - 消息回执; */
  MESSAGE_RESPONSE = 7,
  /** MESSAGE_NOTIFICATION - 通知消息 */
  MESSAGE_NOTIFICATION = 8,
  UNRECOGNIZED = -1,
}

export function headTypeFromJSON(object: any): HeadType {
  switch (object) {
    case 0:
    case "LOGIN_REQUEST":
      return HeadType.LOGIN_REQUEST;
    case 1:
    case "LOGIN_RESPONSE":
      return HeadType.LOGIN_RESPONSE;
    case 2:
    case "LOGOUT_REQUEST":
      return HeadType.LOGOUT_REQUEST;
    case 3:
    case "LOGOUT_RESPONSE":
      return HeadType.LOGOUT_RESPONSE;
    case 4:
    case "KEEPALIVE_REQUEST":
      return HeadType.KEEPALIVE_REQUEST;
    case 5:
    case "KEEPALIVE_RESPONSE":
      return HeadType.KEEPALIVE_RESPONSE;
    case 6:
    case "MESSAGE_REQUEST":
      return HeadType.MESSAGE_REQUEST;
    case 7:
    case "MESSAGE_RESPONSE":
      return HeadType.MESSAGE_RESPONSE;
    case 8:
    case "MESSAGE_NOTIFICATION":
      return HeadType.MESSAGE_NOTIFICATION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return HeadType.UNRECOGNIZED;
  }
}

export function headTypeToJSON(object: HeadType): string {
  switch (object) {
    case HeadType.LOGIN_REQUEST:
      return "LOGIN_REQUEST";
    case HeadType.LOGIN_RESPONSE:
      return "LOGIN_RESPONSE";
    case HeadType.LOGOUT_REQUEST:
      return "LOGOUT_REQUEST";
    case HeadType.LOGOUT_RESPONSE:
      return "LOGOUT_RESPONSE";
    case HeadType.KEEPALIVE_REQUEST:
      return "KEEPALIVE_REQUEST";
    case HeadType.KEEPALIVE_RESPONSE:
      return "KEEPALIVE_RESPONSE";
    case HeadType.MESSAGE_REQUEST:
      return "MESSAGE_REQUEST";
    case HeadType.MESSAGE_RESPONSE:
      return "MESSAGE_RESPONSE";
    case HeadType.MESSAGE_NOTIFICATION:
      return "MESSAGE_NOTIFICATION";
    default:
      return "UNKNOWN";
  }
}

/**
 * LoginRequest对应的HeadType为Login_Request
 * 消息名称去掉下划线，更加符合Java 的类名规范
 */
export interface LoginRequest {
  /** 用户唯一id */
  uid: string;
  /** 设备ID */
  deviceId: string;
  /** 用户token */
  token: string;
  /** 客户端平台 windows、mac、android、ios、web */
  platform: number;
  /** APP版本号 */
  appVersion: string;
}

/** 登录响应 */
export interface LoginResponse {
  /** true 表示成功，false表示失败 */
  result: boolean;
  /** 错误码 */
  code: number;
  /** 错误描述 */
  info: string;
  /** 错误描述是否提示给用户:1 提示;0 不提示 */
  expose: number;
  /** sessionId */
  sessionId: string;
}

export interface LoginOutRequest {
  /** 用户唯一id */
  uid: string;
  /** 设备ID */
  deviceId: string;
  /** 用户token */
  token: string;
  /** 客户端平台 windows、mac、android、ios、web */
  platform: number;
  /** APP版本号 */
  appVersion: string;
}

/** 登录响应 */
export interface LoginOutResponse {
  /** true 表示成功，false表示失败 */
  result: boolean;
  /** 错误码 */
  code: number;
  /** 错误描述 */
  info: string;
  /** 错误描述是否提示给用户:1 提示;0 不提示 */
  expose: number;
  /** sessionId */
  sessionId: string;
}

/** 聊天消息 */
export interface MessageRequest {
  /** 私聊还是群聊 */
  isPrivate: boolean;
  /** sessionId */
  sessionId: string;
  /** 发送方uId */
  from: string;
  /** 接收方Id */
  to: string;
  /** 消息类型  1：纯文本  2：音频 3：视频 4：地理位置 5：其他 */
  msgType: number;
  /** 消息内容 */
  content: string;
}

/** 聊天响应 */
export interface MessageResponse {
  /** true表示发送成功，false表示发送失败 */
  result: boolean;
  /** 错误码 */
  code: number;
  /** 错误描述 */
  info: string;
  /** 错误描述是否提示给用户:1 提示;0 不提示 */
  expose: number;
  lastBlock: boolean;
  blockIndex: number;
}

/** 通知消息 */
export interface Notification {
  /** 私聊还是群聊 */
  isPrivate: boolean;
  /** 普通消息还是命令消息 */
  isOrder: boolean;
  /** 谁发的 */
  from: string;
  /** 发给谁的 */
  to: string;
  /** 消息类型  1：纯文本  2：音频 3：视频 4：地理位置 5：其他 */
  msgType: number;
  /** 如果是命令消息，消息的名字 */
  orderName: string;
  /** 消息内容 */
  content: string;
  /** 发送时间 */
  timestamp: string;
}

/**
 * 顶层消息是一种嵌套消息，嵌套了各种类型消息
 * 内部的消息类型，全部使用optional字段
 * 根据消息类型 type的值，最多只有一个有效
 */
export interface Message {
  /** 消息类型 */
  type: HeadType;
  /** 消息id */
  sequence: number;
  sessionId: number;
  loginRequest: LoginRequest | undefined;
  loginResponse: LoginResponse | undefined;
  loginOutRequest: LoginOutRequest | undefined;
  loginOutResponse: LoginOutResponse | undefined;
  messageRequest: MessageRequest | undefined;
  messageResponse: MessageResponse | undefined;
  notification: Notification | undefined;
}

const baseLoginRequest: object = {
  uid: "",
  deviceId: "",
  token: "",
  platform: 0,
  appVersion: "",
};

export const LoginRequest = {
  encode(
    message: LoginRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.uid !== "") {
      writer.uint32(10).string(message.uid);
    }
    if (message.deviceId !== "") {
      writer.uint32(18).string(message.deviceId);
    }
    if (message.token !== "") {
      writer.uint32(26).string(message.token);
    }
    if (message.platform !== 0) {
      writer.uint32(32).uint32(message.platform);
    }
    if (message.appVersion !== "") {
      writer.uint32(42).string(message.appVersion);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoginRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLoginRequest } as LoginRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
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
          message.platform = reader.uint32();
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
  },

  fromJSON(object: any): LoginRequest {
    const message = { ...baseLoginRequest } as LoginRequest;
    if (object.uid !== undefined && object.uid !== null) {
      message.uid = String(object.uid);
    } else {
      message.uid = "";
    }
    if (object.deviceId !== undefined && object.deviceId !== null) {
      message.deviceId = String(object.deviceId);
    } else {
      message.deviceId = "";
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = String(object.token);
    } else {
      message.token = "";
    }
    if (object.platform !== undefined && object.platform !== null) {
      message.platform = Number(object.platform);
    } else {
      message.platform = 0;
    }
    if (object.appVersion !== undefined && object.appVersion !== null) {
      message.appVersion = String(object.appVersion);
    } else {
      message.appVersion = "";
    }
    return message;
  },

  toJSON(message: LoginRequest): unknown {
    const obj: any = {};
    message.uid !== undefined && (obj.uid = message.uid);
    message.deviceId !== undefined && (obj.deviceId = message.deviceId);
    message.token !== undefined && (obj.token = message.token);
    message.platform !== undefined && (obj.platform = message.platform);
    message.appVersion !== undefined && (obj.appVersion = message.appVersion);
    return obj;
  },

  fromPartial(object: DeepPartial<LoginRequest>): LoginRequest {
    const message = { ...baseLoginRequest } as LoginRequest;
    if (object.uid !== undefined && object.uid !== null) {
      message.uid = object.uid;
    } else {
      message.uid = "";
    }
    if (object.deviceId !== undefined && object.deviceId !== null) {
      message.deviceId = object.deviceId;
    } else {
      message.deviceId = "";
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    } else {
      message.token = "";
    }
    if (object.platform !== undefined && object.platform !== null) {
      message.platform = object.platform;
    } else {
      message.platform = 0;
    }
    if (object.appVersion !== undefined && object.appVersion !== null) {
      message.appVersion = object.appVersion;
    } else {
      message.appVersion = "";
    }
    return message;
  },
};

const baseLoginResponse: object = {
  result: false,
  code: 0,
  info: "",
  expose: 0,
  sessionId: "",
};

export const LoginResponse = {
  encode(
    message: LoginResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.result === true) {
      writer.uint32(8).bool(message.result);
    }
    if (message.code !== 0) {
      writer.uint32(16).uint32(message.code);
    }
    if (message.info !== "") {
      writer.uint32(26).string(message.info);
    }
    if (message.expose !== 0) {
      writer.uint32(32).uint32(message.expose);
    }
    if (message.sessionId !== "") {
      writer.uint32(42).string(message.sessionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoginResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLoginResponse } as LoginResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.bool();
          break;
        case 2:
          message.code = reader.uint32();
          break;
        case 3:
          message.info = reader.string();
          break;
        case 4:
          message.expose = reader.uint32();
          break;
        case 5:
          message.sessionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LoginResponse {
    const message = { ...baseLoginResponse } as LoginResponse;
    if (object.result !== undefined && object.result !== null) {
      message.result = Boolean(object.result);
    } else {
      message.result = false;
    }
    if (object.code !== undefined && object.code !== null) {
      message.code = Number(object.code);
    } else {
      message.code = 0;
    }
    if (object.info !== undefined && object.info !== null) {
      message.info = String(object.info);
    } else {
      message.info = "";
    }
    if (object.expose !== undefined && object.expose !== null) {
      message.expose = Number(object.expose);
    } else {
      message.expose = 0;
    }
    if (object.sessionId !== undefined && object.sessionId !== null) {
      message.sessionId = String(object.sessionId);
    } else {
      message.sessionId = "";
    }
    return message;
  },

  toJSON(message: LoginResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = message.result);
    message.code !== undefined && (obj.code = message.code);
    message.info !== undefined && (obj.info = message.info);
    message.expose !== undefined && (obj.expose = message.expose);
    message.sessionId !== undefined && (obj.sessionId = message.sessionId);
    return obj;
  },

  fromPartial(object: DeepPartial<LoginResponse>): LoginResponse {
    const message = { ...baseLoginResponse } as LoginResponse;
    if (object.result !== undefined && object.result !== null) {
      message.result = object.result;
    } else {
      message.result = false;
    }
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    } else {
      message.code = 0;
    }
    if (object.info !== undefined && object.info !== null) {
      message.info = object.info;
    } else {
      message.info = "";
    }
    if (object.expose !== undefined && object.expose !== null) {
      message.expose = object.expose;
    } else {
      message.expose = 0;
    }
    if (object.sessionId !== undefined && object.sessionId !== null) {
      message.sessionId = object.sessionId;
    } else {
      message.sessionId = "";
    }
    return message;
  },
};

const baseLoginOutRequest: object = {
  uid: "",
  deviceId: "",
  token: "",
  platform: 0,
  appVersion: "",
};

export const LoginOutRequest = {
  encode(
    message: LoginOutRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.uid !== "") {
      writer.uint32(10).string(message.uid);
    }
    if (message.deviceId !== "") {
      writer.uint32(18).string(message.deviceId);
    }
    if (message.token !== "") {
      writer.uint32(26).string(message.token);
    }
    if (message.platform !== 0) {
      writer.uint32(32).uint32(message.platform);
    }
    if (message.appVersion !== "") {
      writer.uint32(42).string(message.appVersion);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoginOutRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLoginOutRequest } as LoginOutRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
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
          message.platform = reader.uint32();
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
  },

  fromJSON(object: any): LoginOutRequest {
    const message = { ...baseLoginOutRequest } as LoginOutRequest;
    if (object.uid !== undefined && object.uid !== null) {
      message.uid = String(object.uid);
    } else {
      message.uid = "";
    }
    if (object.deviceId !== undefined && object.deviceId !== null) {
      message.deviceId = String(object.deviceId);
    } else {
      message.deviceId = "";
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = String(object.token);
    } else {
      message.token = "";
    }
    if (object.platform !== undefined && object.platform !== null) {
      message.platform = Number(object.platform);
    } else {
      message.platform = 0;
    }
    if (object.appVersion !== undefined && object.appVersion !== null) {
      message.appVersion = String(object.appVersion);
    } else {
      message.appVersion = "";
    }
    return message;
  },

  toJSON(message: LoginOutRequest): unknown {
    const obj: any = {};
    message.uid !== undefined && (obj.uid = message.uid);
    message.deviceId !== undefined && (obj.deviceId = message.deviceId);
    message.token !== undefined && (obj.token = message.token);
    message.platform !== undefined && (obj.platform = message.platform);
    message.appVersion !== undefined && (obj.appVersion = message.appVersion);
    return obj;
  },

  fromPartial(object: DeepPartial<LoginOutRequest>): LoginOutRequest {
    const message = { ...baseLoginOutRequest } as LoginOutRequest;
    if (object.uid !== undefined && object.uid !== null) {
      message.uid = object.uid;
    } else {
      message.uid = "";
    }
    if (object.deviceId !== undefined && object.deviceId !== null) {
      message.deviceId = object.deviceId;
    } else {
      message.deviceId = "";
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    } else {
      message.token = "";
    }
    if (object.platform !== undefined && object.platform !== null) {
      message.platform = object.platform;
    } else {
      message.platform = 0;
    }
    if (object.appVersion !== undefined && object.appVersion !== null) {
      message.appVersion = object.appVersion;
    } else {
      message.appVersion = "";
    }
    return message;
  },
};

const baseLoginOutResponse: object = {
  result: false,
  code: 0,
  info: "",
  expose: 0,
  sessionId: "",
};

export const LoginOutResponse = {
  encode(
    message: LoginOutResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.result === true) {
      writer.uint32(8).bool(message.result);
    }
    if (message.code !== 0) {
      writer.uint32(16).uint32(message.code);
    }
    if (message.info !== "") {
      writer.uint32(26).string(message.info);
    }
    if (message.expose !== 0) {
      writer.uint32(32).uint32(message.expose);
    }
    if (message.sessionId !== "") {
      writer.uint32(42).string(message.sessionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoginOutResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLoginOutResponse } as LoginOutResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.bool();
          break;
        case 2:
          message.code = reader.uint32();
          break;
        case 3:
          message.info = reader.string();
          break;
        case 4:
          message.expose = reader.uint32();
          break;
        case 5:
          message.sessionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LoginOutResponse {
    const message = { ...baseLoginOutResponse } as LoginOutResponse;
    if (object.result !== undefined && object.result !== null) {
      message.result = Boolean(object.result);
    } else {
      message.result = false;
    }
    if (object.code !== undefined && object.code !== null) {
      message.code = Number(object.code);
    } else {
      message.code = 0;
    }
    if (object.info !== undefined && object.info !== null) {
      message.info = String(object.info);
    } else {
      message.info = "";
    }
    if (object.expose !== undefined && object.expose !== null) {
      message.expose = Number(object.expose);
    } else {
      message.expose = 0;
    }
    if (object.sessionId !== undefined && object.sessionId !== null) {
      message.sessionId = String(object.sessionId);
    } else {
      message.sessionId = "";
    }
    return message;
  },

  toJSON(message: LoginOutResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = message.result);
    message.code !== undefined && (obj.code = message.code);
    message.info !== undefined && (obj.info = message.info);
    message.expose !== undefined && (obj.expose = message.expose);
    message.sessionId !== undefined && (obj.sessionId = message.sessionId);
    return obj;
  },

  fromPartial(object: DeepPartial<LoginOutResponse>): LoginOutResponse {
    const message = { ...baseLoginOutResponse } as LoginOutResponse;
    if (object.result !== undefined && object.result !== null) {
      message.result = object.result;
    } else {
      message.result = false;
    }
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    } else {
      message.code = 0;
    }
    if (object.info !== undefined && object.info !== null) {
      message.info = object.info;
    } else {
      message.info = "";
    }
    if (object.expose !== undefined && object.expose !== null) {
      message.expose = object.expose;
    } else {
      message.expose = 0;
    }
    if (object.sessionId !== undefined && object.sessionId !== null) {
      message.sessionId = object.sessionId;
    } else {
      message.sessionId = "";
    }
    return message;
  },
};

const baseMessageRequest: object = {
  isPrivate: false,
  sessionId: "",
  from: "",
  to: "",
  msgType: 0,
  content: "",
};

export const MessageRequest = {
  encode(
    message: MessageRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.isPrivate === true) {
      writer.uint32(8).bool(message.isPrivate);
    }
    if (message.sessionId !== "") {
      writer.uint32(18).string(message.sessionId);
    }
    if (message.from !== "") {
      writer.uint32(26).string(message.from);
    }
    if (message.to !== "") {
      writer.uint32(34).string(message.to);
    }
    if (message.msgType !== 0) {
      writer.uint32(40).uint32(message.msgType);
    }
    if (message.content !== "") {
      writer.uint32(50).string(message.content);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMessageRequest } as MessageRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isPrivate = reader.bool();
          break;
        case 2:
          message.sessionId = reader.string();
          break;
        case 3:
          message.from = reader.string();
          break;
        case 4:
          message.to = reader.string();
          break;
        case 5:
          message.msgType = reader.uint32();
          break;
        case 6:
          message.content = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MessageRequest {
    const message = { ...baseMessageRequest } as MessageRequest;
    if (object.isPrivate !== undefined && object.isPrivate !== null) {
      message.isPrivate = Boolean(object.isPrivate);
    } else {
      message.isPrivate = false;
    }
    if (object.sessionId !== undefined && object.sessionId !== null) {
      message.sessionId = String(object.sessionId);
    } else {
      message.sessionId = "";
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = String(object.from);
    } else {
      message.from = "";
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = String(object.to);
    } else {
      message.to = "";
    }
    if (object.msgType !== undefined && object.msgType !== null) {
      message.msgType = Number(object.msgType);
    } else {
      message.msgType = 0;
    }
    if (object.content !== undefined && object.content !== null) {
      message.content = String(object.content);
    } else {
      message.content = "";
    }
    return message;
  },

  toJSON(message: MessageRequest): unknown {
    const obj: any = {};
    message.isPrivate !== undefined && (obj.isPrivate = message.isPrivate);
    message.sessionId !== undefined && (obj.sessionId = message.sessionId);
    message.from !== undefined && (obj.from = message.from);
    message.to !== undefined && (obj.to = message.to);
    message.msgType !== undefined && (obj.msgType = message.msgType);
    message.content !== undefined && (obj.content = message.content);
    return obj;
  },

  fromPartial(object: DeepPartial<MessageRequest>): MessageRequest {
    const message = { ...baseMessageRequest } as MessageRequest;
    if (object.isPrivate !== undefined && object.isPrivate !== null) {
      message.isPrivate = object.isPrivate;
    } else {
      message.isPrivate = false;
    }
    if (object.sessionId !== undefined && object.sessionId !== null) {
      message.sessionId = object.sessionId;
    } else {
      message.sessionId = "";
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    } else {
      message.from = "";
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to;
    } else {
      message.to = "";
    }
    if (object.msgType !== undefined && object.msgType !== null) {
      message.msgType = object.msgType;
    } else {
      message.msgType = 0;
    }
    if (object.content !== undefined && object.content !== null) {
      message.content = object.content;
    } else {
      message.content = "";
    }
    return message;
  },
};

const baseMessageResponse: object = {
  result: false,
  code: 0,
  info: "",
  expose: 0,
  lastBlock: false,
  blockIndex: 0,
};

export const MessageResponse = {
  encode(
    message: MessageResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.result === true) {
      writer.uint32(8).bool(message.result);
    }
    if (message.code !== 0) {
      writer.uint32(16).uint32(message.code);
    }
    if (message.info !== "") {
      writer.uint32(26).string(message.info);
    }
    if (message.expose !== 0) {
      writer.uint32(32).uint32(message.expose);
    }
    if (message.lastBlock === true) {
      writer.uint32(40).bool(message.lastBlock);
    }
    if (message.blockIndex !== 0) {
      writer.uint32(53).fixed32(message.blockIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMessageResponse } as MessageResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.bool();
          break;
        case 2:
          message.code = reader.uint32();
          break;
        case 3:
          message.info = reader.string();
          break;
        case 4:
          message.expose = reader.uint32();
          break;
        case 5:
          message.lastBlock = reader.bool();
          break;
        case 6:
          message.blockIndex = reader.fixed32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MessageResponse {
    const message = { ...baseMessageResponse } as MessageResponse;
    if (object.result !== undefined && object.result !== null) {
      message.result = Boolean(object.result);
    } else {
      message.result = false;
    }
    if (object.code !== undefined && object.code !== null) {
      message.code = Number(object.code);
    } else {
      message.code = 0;
    }
    if (object.info !== undefined && object.info !== null) {
      message.info = String(object.info);
    } else {
      message.info = "";
    }
    if (object.expose !== undefined && object.expose !== null) {
      message.expose = Number(object.expose);
    } else {
      message.expose = 0;
    }
    if (object.lastBlock !== undefined && object.lastBlock !== null) {
      message.lastBlock = Boolean(object.lastBlock);
    } else {
      message.lastBlock = false;
    }
    if (object.blockIndex !== undefined && object.blockIndex !== null) {
      message.blockIndex = Number(object.blockIndex);
    } else {
      message.blockIndex = 0;
    }
    return message;
  },

  toJSON(message: MessageResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = message.result);
    message.code !== undefined && (obj.code = message.code);
    message.info !== undefined && (obj.info = message.info);
    message.expose !== undefined && (obj.expose = message.expose);
    message.lastBlock !== undefined && (obj.lastBlock = message.lastBlock);
    message.blockIndex !== undefined && (obj.blockIndex = message.blockIndex);
    return obj;
  },

  fromPartial(object: DeepPartial<MessageResponse>): MessageResponse {
    const message = { ...baseMessageResponse } as MessageResponse;
    if (object.result !== undefined && object.result !== null) {
      message.result = object.result;
    } else {
      message.result = false;
    }
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    } else {
      message.code = 0;
    }
    if (object.info !== undefined && object.info !== null) {
      message.info = object.info;
    } else {
      message.info = "";
    }
    if (object.expose !== undefined && object.expose !== null) {
      message.expose = object.expose;
    } else {
      message.expose = 0;
    }
    if (object.lastBlock !== undefined && object.lastBlock !== null) {
      message.lastBlock = object.lastBlock;
    } else {
      message.lastBlock = false;
    }
    if (object.blockIndex !== undefined && object.blockIndex !== null) {
      message.blockIndex = object.blockIndex;
    } else {
      message.blockIndex = 0;
    }
    return message;
  },
};

const baseNotification: object = {
  isPrivate: false,
  isOrder: false,
  from: "",
  to: "",
  msgType: 0,
  orderName: "",
  content: "",
  timestamp: "",
};

export const Notification = {
  encode(
    message: Notification,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.isPrivate === true) {
      writer.uint32(8).bool(message.isPrivate);
    }
    if (message.isOrder === true) {
      writer.uint32(16).bool(message.isOrder);
    }
    if (message.from !== "") {
      writer.uint32(26).string(message.from);
    }
    if (message.to !== "") {
      writer.uint32(34).string(message.to);
    }
    if (message.msgType !== 0) {
      writer.uint32(40).uint32(message.msgType);
    }
    if (message.orderName !== "") {
      writer.uint32(50).string(message.orderName);
    }
    if (message.content !== "") {
      writer.uint32(58).string(message.content);
    }
    if (message.timestamp !== "") {
      writer.uint32(66).string(message.timestamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Notification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseNotification } as Notification;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isPrivate = reader.bool();
          break;
        case 2:
          message.isOrder = reader.bool();
          break;
        case 3:
          message.from = reader.string();
          break;
        case 4:
          message.to = reader.string();
          break;
        case 5:
          message.msgType = reader.uint32();
          break;
        case 6:
          message.orderName = reader.string();
          break;
        case 7:
          message.content = reader.string();
          break;
        case 8:
          message.timestamp = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Notification {
    const message = { ...baseNotification } as Notification;
    if (object.isPrivate !== undefined && object.isPrivate !== null) {
      message.isPrivate = Boolean(object.isPrivate);
    } else {
      message.isPrivate = false;
    }
    if (object.isOrder !== undefined && object.isOrder !== null) {
      message.isOrder = Boolean(object.isOrder);
    } else {
      message.isOrder = false;
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = String(object.from);
    } else {
      message.from = "";
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = String(object.to);
    } else {
      message.to = "";
    }
    if (object.msgType !== undefined && object.msgType !== null) {
      message.msgType = Number(object.msgType);
    } else {
      message.msgType = 0;
    }
    if (object.orderName !== undefined && object.orderName !== null) {
      message.orderName = String(object.orderName);
    } else {
      message.orderName = "";
    }
    if (object.content !== undefined && object.content !== null) {
      message.content = String(object.content);
    } else {
      message.content = "";
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = String(object.timestamp);
    } else {
      message.timestamp = "";
    }
    return message;
  },

  toJSON(message: Notification): unknown {
    const obj: any = {};
    message.isPrivate !== undefined && (obj.isPrivate = message.isPrivate);
    message.isOrder !== undefined && (obj.isOrder = message.isOrder);
    message.from !== undefined && (obj.from = message.from);
    message.to !== undefined && (obj.to = message.to);
    message.msgType !== undefined && (obj.msgType = message.msgType);
    message.orderName !== undefined && (obj.orderName = message.orderName);
    message.content !== undefined && (obj.content = message.content);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    return obj;
  },

  fromPartial(object: DeepPartial<Notification>): Notification {
    const message = { ...baseNotification } as Notification;
    if (object.isPrivate !== undefined && object.isPrivate !== null) {
      message.isPrivate = object.isPrivate;
    } else {
      message.isPrivate = false;
    }
    if (object.isOrder !== undefined && object.isOrder !== null) {
      message.isOrder = object.isOrder;
    } else {
      message.isOrder = false;
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    } else {
      message.from = "";
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to;
    } else {
      message.to = "";
    }
    if (object.msgType !== undefined && object.msgType !== null) {
      message.msgType = object.msgType;
    } else {
      message.msgType = 0;
    }
    if (object.orderName !== undefined && object.orderName !== null) {
      message.orderName = object.orderName;
    } else {
      message.orderName = "";
    }
    if (object.content !== undefined && object.content !== null) {
      message.content = object.content;
    } else {
      message.content = "";
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = object.timestamp;
    } else {
      message.timestamp = "";
    }
    return message;
  },
};

const baseMessage: object = { type: 0, sequence: 0, sessionId: 0 };

export const Message = {
  encode(
    message: Message,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.sequence !== 0) {
      writer.uint32(16).uint64(message.sequence);
    }
    if (message.sessionId !== 0) {
      writer.uint32(29).fixed32(message.sessionId);
    }
    if (message.loginRequest !== undefined) {
      LoginRequest.encode(
        message.loginRequest,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.loginResponse !== undefined) {
      LoginResponse.encode(
        message.loginResponse,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.loginOutRequest !== undefined) {
      LoginOutRequest.encode(
        message.loginOutRequest,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.loginOutResponse !== undefined) {
      LoginOutResponse.encode(
        message.loginOutResponse,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.messageRequest !== undefined) {
      MessageRequest.encode(
        message.messageRequest,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.messageResponse !== undefined) {
      MessageResponse.encode(
        message.messageResponse,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.notification !== undefined) {
      Notification.encode(
        message.notification,
        writer.uint32(82).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Message {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMessage } as Message;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.sequence = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.sessionId = reader.fixed32();
          break;
        case 4:
          message.loginRequest = LoginRequest.decode(reader, reader.uint32());
          break;
        case 5:
          message.loginResponse = LoginResponse.decode(reader, reader.uint32());
          break;
        case 6:
          message.loginOutRequest = LoginOutRequest.decode(
            reader,
            reader.uint32()
          );
          break;
        case 7:
          message.loginOutResponse = LoginOutResponse.decode(
            reader,
            reader.uint32()
          );
          break;
        case 8:
          message.messageRequest = MessageRequest.decode(
            reader,
            reader.uint32()
          );
          break;
        case 9:
          message.messageResponse = MessageResponse.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.notification = Notification.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Message {
    const message = { ...baseMessage } as Message;
    if (object.type !== undefined && object.type !== null) {
      message.type = headTypeFromJSON(object.type);
    } else {
      message.type = 0;
    }
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = Number(object.sequence);
    } else {
      message.sequence = 0;
    }
    if (object.sessionId !== undefined && object.sessionId !== null) {
      message.sessionId = Number(object.sessionId);
    } else {
      message.sessionId = 0;
    }
    if (object.loginRequest !== undefined && object.loginRequest !== null) {
      message.loginRequest = LoginRequest.fromJSON(object.loginRequest);
    } else {
      message.loginRequest = undefined;
    }
    if (object.loginResponse !== undefined && object.loginResponse !== null) {
      message.loginResponse = LoginResponse.fromJSON(object.loginResponse);
    } else {
      message.loginResponse = undefined;
    }
    if (
      object.loginOutRequest !== undefined &&
      object.loginOutRequest !== null
    ) {
      message.loginOutRequest = LoginOutRequest.fromJSON(
        object.loginOutRequest
      );
    } else {
      message.loginOutRequest = undefined;
    }
    if (
      object.loginOutResponse !== undefined &&
      object.loginOutResponse !== null
    ) {
      message.loginOutResponse = LoginOutResponse.fromJSON(
        object.loginOutResponse
      );
    } else {
      message.loginOutResponse = undefined;
    }
    if (object.messageRequest !== undefined && object.messageRequest !== null) {
      message.messageRequest = MessageRequest.fromJSON(object.messageRequest);
    } else {
      message.messageRequest = undefined;
    }
    if (
      object.messageResponse !== undefined &&
      object.messageResponse !== null
    ) {
      message.messageResponse = MessageResponse.fromJSON(
        object.messageResponse
      );
    } else {
      message.messageResponse = undefined;
    }
    if (object.notification !== undefined && object.notification !== null) {
      message.notification = Notification.fromJSON(object.notification);
    } else {
      message.notification = undefined;
    }
    return message;
  },

  toJSON(message: Message): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = headTypeToJSON(message.type));
    message.sequence !== undefined && (obj.sequence = message.sequence);
    message.sessionId !== undefined && (obj.sessionId = message.sessionId);
    message.loginRequest !== undefined &&
      (obj.loginRequest = message.loginRequest
        ? LoginRequest.toJSON(message.loginRequest)
        : undefined);
    message.loginResponse !== undefined &&
      (obj.loginResponse = message.loginResponse
        ? LoginResponse.toJSON(message.loginResponse)
        : undefined);
    message.loginOutRequest !== undefined &&
      (obj.loginOutRequest = message.loginOutRequest
        ? LoginOutRequest.toJSON(message.loginOutRequest)
        : undefined);
    message.loginOutResponse !== undefined &&
      (obj.loginOutResponse = message.loginOutResponse
        ? LoginOutResponse.toJSON(message.loginOutResponse)
        : undefined);
    message.messageRequest !== undefined &&
      (obj.messageRequest = message.messageRequest
        ? MessageRequest.toJSON(message.messageRequest)
        : undefined);
    message.messageResponse !== undefined &&
      (obj.messageResponse = message.messageResponse
        ? MessageResponse.toJSON(message.messageResponse)
        : undefined);
    message.notification !== undefined &&
      (obj.notification = message.notification
        ? Notification.toJSON(message.notification)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Message>): Message {
    const message = { ...baseMessage } as Message;
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = object.sequence;
    } else {
      message.sequence = 0;
    }
    if (object.sessionId !== undefined && object.sessionId !== null) {
      message.sessionId = object.sessionId;
    } else {
      message.sessionId = 0;
    }
    if (object.loginRequest !== undefined && object.loginRequest !== null) {
      message.loginRequest = LoginRequest.fromPartial(object.loginRequest);
    } else {
      message.loginRequest = undefined;
    }
    if (object.loginResponse !== undefined && object.loginResponse !== null) {
      message.loginResponse = LoginResponse.fromPartial(object.loginResponse);
    } else {
      message.loginResponse = undefined;
    }
    if (
      object.loginOutRequest !== undefined &&
      object.loginOutRequest !== null
    ) {
      message.loginOutRequest = LoginOutRequest.fromPartial(
        object.loginOutRequest
      );
    } else {
      message.loginOutRequest = undefined;
    }
    if (
      object.loginOutResponse !== undefined &&
      object.loginOutResponse !== null
    ) {
      message.loginOutResponse = LoginOutResponse.fromPartial(
        object.loginOutResponse
      );
    } else {
      message.loginOutResponse = undefined;
    }
    if (object.messageRequest !== undefined && object.messageRequest !== null) {
      message.messageRequest = MessageRequest.fromPartial(
        object.messageRequest
      );
    } else {
      message.messageRequest = undefined;
    }
    if (
      object.messageResponse !== undefined &&
      object.messageResponse !== null
    ) {
      message.messageResponse = MessageResponse.fromPartial(
        object.messageResponse
      );
    } else {
      message.messageResponse = undefined;
    }
    if (object.notification !== undefined && object.notification !== null) {
      message.notification = Notification.fromPartial(object.notification);
    } else {
      message.notification = undefined;
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
