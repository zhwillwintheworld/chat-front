import * as $protobuf from "protobufjs";
/** HeadType enum. */
export enum HeadType {
    LOGIN_REQUEST = 0,
    LOGOUT_REQUEST = 1,
    KEEPALIVE_REQUEST = 2,
    MESSAGE_REQUEST = 3,
    RESPONSE = 4,
    MESSAGE_NOTIFICATION = 5
}

/** Platform enum. */
export enum Platform {
    WEB = 0,
    IOS = 1,
    ANDROID = 2,
    PC = 3,
    WECHAT = 4
}

/** MsgType enum. */
export enum MsgType {
    TEXT = 0,
    SOUND = 1,
    VIDEO = 2,
    GEO = 3,
    REF = 4,
    FILE = 5,
    EMOJI = 6
}

/** NotifiType enum. */
export enum NotifiType {
    FRIEND = 0,
    PUSH = 1,
    CIRCLE = 2
}

/** ResponseType enum. */
export enum ResponseType {
    LOGIN = 0,
    LOGOUT = 1,
    KEEPALIVE = 2,
    MESSAGE = 3
}

/** Represents a LoginRequest. */
export class LoginRequest implements ILoginRequest {

    /**
     * Constructs a new LoginRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILoginRequest);

    /** LoginRequest uid. */
    public uid: string;

    /** LoginRequest deviceId. */
    public deviceId: string;

    /** LoginRequest token. */
    public token: string;

    /** LoginRequest platform. */
    public platform: Platform;

    /** LoginRequest appVersion. */
    public appVersion: string;

    /**
     * Creates a new LoginRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LoginRequest instance
     */
    public static create(properties?: ILoginRequest): LoginRequest;

    /**
     * Encodes the specified LoginRequest message. Does not implicitly {@link LoginRequest.verify|verify} messages.
     * @param message LoginRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LoginRequest message, length delimited. Does not implicitly {@link LoginRequest.verify|verify} messages.
     * @param message LoginRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LoginRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LoginRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LoginRequest;

    /**
     * Decodes a LoginRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LoginRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LoginRequest;

    /**
     * Verifies a LoginRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LoginRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LoginRequest
     */
    public static fromObject(object: { [k: string]: any }): LoginRequest;

    /**
     * Creates a plain object from a LoginRequest message. Also converts values to other types if specified.
     * @param message LoginRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LoginRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LoginRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a LogoutRequest. */
export class LogoutRequest implements ILogoutRequest {

    /**
     * Constructs a new LogoutRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILogoutRequest);

    /** LogoutRequest uid. */
    public uid: string;

    /** LogoutRequest token. */
    public token: string;

    /**
     * Creates a new LogoutRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LogoutRequest instance
     */
    public static create(properties?: ILogoutRequest): LogoutRequest;

    /**
     * Encodes the specified LogoutRequest message. Does not implicitly {@link LogoutRequest.verify|verify} messages.
     * @param message LogoutRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILogoutRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LogoutRequest message, length delimited. Does not implicitly {@link LogoutRequest.verify|verify} messages.
     * @param message LogoutRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILogoutRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LogoutRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LogoutRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LogoutRequest;

    /**
     * Decodes a LogoutRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LogoutRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LogoutRequest;

    /**
     * Verifies a LogoutRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LogoutRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LogoutRequest
     */
    public static fromObject(object: { [k: string]: any }): LogoutRequest;

    /**
     * Creates a plain object from a LogoutRequest message. Also converts values to other types if specified.
     * @param message LogoutRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LogoutRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LogoutRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a KeepAliveRequest. */
export class KeepAliveRequest implements IKeepAliveRequest {

    /**
     * Constructs a new KeepAliveRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IKeepAliveRequest);

    /** KeepAliveRequest time. */
    public time: (number|Long);

    /**
     * Creates a new KeepAliveRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns KeepAliveRequest instance
     */
    public static create(properties?: IKeepAliveRequest): KeepAliveRequest;

    /**
     * Encodes the specified KeepAliveRequest message. Does not implicitly {@link KeepAliveRequest.verify|verify} messages.
     * @param message KeepAliveRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IKeepAliveRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified KeepAliveRequest message, length delimited. Does not implicitly {@link KeepAliveRequest.verify|verify} messages.
     * @param message KeepAliveRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IKeepAliveRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a KeepAliveRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns KeepAliveRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): KeepAliveRequest;

    /**
     * Decodes a KeepAliveRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns KeepAliveRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): KeepAliveRequest;

    /**
     * Verifies a KeepAliveRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a KeepAliveRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns KeepAliveRequest
     */
    public static fromObject(object: { [k: string]: any }): KeepAliveRequest;

    /**
     * Creates a plain object from a KeepAliveRequest message. Also converts values to other types if specified.
     * @param message KeepAliveRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: KeepAliveRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this KeepAliveRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a MessageRequest. */
export class MessageRequest implements IMessageRequest {

    /**
     * Constructs a new MessageRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMessageRequest);

    /** MessageRequest msgId. */
    public msgId: (number|Long);

    /** MessageRequest from. */
    public from: string;

    /** MessageRequest to. */
    public to: string;

    /** MessageRequest time. */
    public time: (number|Long);

    /** MessageRequest msgType. */
    public msgType: MsgType;

    /** MessageRequest content. */
    public content: string;

    /** MessageRequest json. */
    public json: string;

    /**
     * Creates a new MessageRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MessageRequest instance
     */
    public static create(properties?: IMessageRequest): MessageRequest;

    /**
     * Encodes the specified MessageRequest message. Does not implicitly {@link MessageRequest.verify|verify} messages.
     * @param message MessageRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMessageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified MessageRequest message, length delimited. Does not implicitly {@link MessageRequest.verify|verify} messages.
     * @param message MessageRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMessageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MessageRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MessageRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MessageRequest;

    /**
     * Decodes a MessageRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns MessageRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MessageRequest;

    /**
     * Verifies a MessageRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a MessageRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns MessageRequest
     */
    public static fromObject(object: { [k: string]: any }): MessageRequest;

    /**
     * Creates a plain object from a MessageRequest message. Also converts values to other types if specified.
     * @param message MessageRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: MessageRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this MessageRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a Response. */
export class Response implements IResponse {

    /**
     * Constructs a new Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResponse);

    /** Response success. */
    public success: boolean;

    /** Response code. */
    public code: number;

    /** Response info. */
    public info: string;

    /** Response data. */
    public data: string;

    /** Response responseType. */
    public responseType: number;

    /**
     * Creates a new Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Response instance
     */
    public static create(properties?: IResponse): Response;

    /**
     * Encodes the specified Response message. Does not implicitly {@link Response.verify|verify} messages.
     * @param message Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Response message, length delimited. Does not implicitly {@link Response.verify|verify} messages.
     * @param message Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Response;

    /**
     * Decodes a Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Response;

    /**
     * Verifies a Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Response
     */
    public static fromObject(object: { [k: string]: any }): Response;

    /**
     * Creates a plain object from a Response message. Also converts values to other types if specified.
     * @param message Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a Notification. */
export class Notification implements INotification {

    /**
     * Constructs a new Notification.
     * @param [properties] Properties to set
     */
    constructor(properties?: INotification);

    /** Notification notifiType. */
    public notifiType: NotifiType;

    /** Notification sender. */
    public sender: string;

    /** Notification content. */
    public content: string;

    /** Notification time. */
    public time: (number|Long);

    /**
     * Creates a new Notification instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Notification instance
     */
    public static create(properties?: INotification): Notification;

    /**
     * Encodes the specified Notification message. Does not implicitly {@link Notification.verify|verify} messages.
     * @param message Notification message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: INotification, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Notification message, length delimited. Does not implicitly {@link Notification.verify|verify} messages.
     * @param message Notification message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: INotification, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Notification message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Notification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Notification;

    /**
     * Decodes a Notification message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Notification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Notification;

    /**
     * Verifies a Notification message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Notification message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Notification
     */
    public static fromObject(object: { [k: string]: any }): Notification;

    /**
     * Creates a plain object from a Notification message. Also converts values to other types if specified.
     * @param message Notification
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Notification, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Notification to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a ChatMessage. */
export class ChatMessage implements IChatMessage {

    /**
     * Constructs a new ChatMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: IChatMessage);

    /** ChatMessage headType. */
    public headType: HeadType;

    /** ChatMessage seq. */
    public seq: (number|Long);

    /** ChatMessage loginRequest. */
    public loginRequest?: (ILoginRequest|null);

    /** ChatMessage logoutRequest. */
    public logoutRequest?: (ILogoutRequest|null);

    /** ChatMessage keepAliveRequest. */
    public keepAliveRequest?: (IKeepAliveRequest|null);

    /** ChatMessage messageRequest. */
    public messageRequest?: (IMessageRequest|null);

    /** ChatMessage response. */
    public response?: (IResponse|null);

    /** ChatMessage notification. */
    public notification?: (INotification|null);

    /**
     * Creates a new ChatMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ChatMessage instance
     */
    public static create(properties?: IChatMessage): ChatMessage;

    /**
     * Encodes the specified ChatMessage message. Does not implicitly {@link ChatMessage.verify|verify} messages.
     * @param message ChatMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IChatMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ChatMessage message, length delimited. Does not implicitly {@link ChatMessage.verify|verify} messages.
     * @param message ChatMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IChatMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ChatMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ChatMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ChatMessage;

    /**
     * Decodes a ChatMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ChatMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ChatMessage;

    /**
     * Verifies a ChatMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ChatMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ChatMessage
     */
    public static fromObject(object: { [k: string]: any }): ChatMessage;

    /**
     * Creates a plain object from a ChatMessage message. Also converts values to other types if specified.
     * @param message ChatMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ChatMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ChatMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
