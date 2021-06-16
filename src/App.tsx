import {defineComponent,onMounted} from 'vue'
import {Message} from "../protos/Message";

export default defineComponent(()=>{
    let ws:WebSocket ;
    const init = ()=>{
        ws = new WebSocket('ws://localhost:8889/ws')
        ws.onclose = close;
        ws.onerror = onError;
        ws.onopen = open;
        ws.onmessage = message;
    }
    const open = ()=>{
        console.log("connect success")
    }
    const message = (me:MessageEvent): void =>{
        let message = Message.decode(me.data);
        console.log(message)
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
