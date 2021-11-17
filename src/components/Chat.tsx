import {defineComponent, onMounted,provide} from 'vue'
import {ChatMessage, HeadType, KeepAliveRequest} from "../../protos/chat.js";
import '../assets/css/chat.css';
import {CommentOutlined, TeamOutlined, AppstoreOutlined} from '@ant-design/icons-vue';

export default defineComponent(() => {
    let ws: WebSocket;
    const init = () => {
        ws = new WebSocket('ws://localhost:8889/')
        ws.onclose = close;
        ws.onerror = onError;
        ws.onopen = open;
        ws.onmessage = message;
    }
    const open = () => {
        // 设置接收的二进制为array buffer而不是blob
        ws.binaryType = "arraybuffer";
        console.log("connect success");
        // 开启登录验证
        login();
    }
    let intervalId: NodeJS.Timeout;
    const message = (me: MessageEvent<Uint8Array>): void => {
        let msg = ChatMessage.decode(new Uint8Array(me.data));
        console.log("收到数据", msg)
        if (msg.headType == HeadType.RESPONSE) {
            let response = msg.response;
            let responseType = response.responseType;
            let code = response.code;
            switch (responseType) {
                case 0:
                    // 如果回复为登录回复
                    if (code == 1) {
                        // 发送心跳包
                        if (intervalId == null) {
                            intervalId = setInterval(heartBeat, 10000)
                        }
                    } else {

                    }

                    break;
                default:
            }
        }
    }
    const heartBeat = () => {
        if (ws.readyState > 0) {
            let msg = new ChatMessage();
            let keep = new KeepAliveRequest();
            keep.time = new Date().getTime();
            msg.headType = HeadType.KEEPALIVE_REQUEST;
            msg.keepAliveRequest = keep;
            console.log("发送心跳包")
            ws.send(ChatMessage.encode(msg).finish())
        }
    }

    const close = () => {  //关闭
        if (intervalId != null) {
            clearInterval(intervalId)
        }
        console.log('断开连接');
    }

    const onError = () => {
        console.log('连接异常');
    }
    const login = () => {
        let token = localStorage.getItem("token");
        let loginRequest = {
            "uid": "1",
            token,
            "deviceId": "1",
            "platform": 4,
            "appVersion": "1.0"
        }
        let msg = {
            loginRequest,
            "type": 0,
            "sequence": 1,
        }
        let message = ChatMessage.fromObject(msg);
        console.log("发送登录消息：", message);
        ws.send(ChatMessage.encode(message).finish());

    }
    onMounted(() => {
        init()
    })

    return () => (
        <>
            <div id="main">
                <div id="nav">
                    <a-menu id="nav-munu"
                            theme={"dark"}
                            mode="inline">
                        <a-menu-item key="1" v-slots={{
                            icon: () => <CommentOutlined/>
                        }}>

                        </a-menu-item>
                        <a-menu-item key="2" v-slots={{
                            icon: () => <TeamOutlined/>
                        }}>
                        </a-menu-item>
                        <a-menu-item key="3" v-slots={{
                            icon: () => <AppstoreOutlined/>
                        }}>
                        </a-menu-item>
                    </a-menu>
                </div>
                <div id="gate">
                    <router-view></router-view>

                </div>

            </div>

        </>
    )
})
