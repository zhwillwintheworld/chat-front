import {defineComponent,onMounted} from 'vue'
import {Message} from "../protos/Message";

export default defineComponent(()=>{
    let ws:WebSocket ;
    const init = ()=>{
        ws = new WebSocket('ws://localhost:8889/')
        ws.onclose = close;
        ws.onerror = onError;
        ws.onopen = open;
        ws.onmessage = message;
    }
    const open = ()=>{
        // 设置接收的二进制为array buffer而不是blob
        ws.binaryType = "arraybuffer";
        console.log("connect success")
    }
    const message = (me:MessageEvent<Uint8Array>): void =>{
        console.log("收到数据")
        console.log(Message.decode(new Uint8Array(me.data)));
    }

    const close = ()=>{  //关闭
        console.log('断开连接');
    }

    const onError = ()=>{
        console.log('连接异常');
    }
    const sendMessage = ()=>{
        let  loginRequest = {
            "uid":"1",
            "token":"123456",
            "deviceId":"1",
            "platform":4,
            "appVersion":"1.0"
        }
        let msg = {
            loginRequest,
            "type":1,
            "sequence":1,
        }
        let message = Message.fromJSON(msg);
        console.log("发送消息：",message);
        ws.send(Message.encode(message).finish());

    }
    onMounted(()=>{
        init();

    })

    return ()=>(
        <>
            <a-button onclick={sendMessage}>tijiao</a-button>
        </>
    )
})
