import {defineComponent, onMounted} from 'vue'
import {ChatMessage, HeadType} from "../message/message";

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
        let msg = ChatMessage.decode(new Uint8Array(me.data));
        console.log("收到数据",msg)
        if(msg.headType == HeadType.RESPONSE){
            intervalId = setInterval(heartBeat,10000)
        }
    }
    let intervalId:NodeJS.Timeout;
    const heartBeat = ()=>{
        console.log("连接的状态是",ws.readyState)
        if(ws.readyState>0){
            let heartbeat = {
                "type":4,
                "sequence":1,
            }
            let msg = ChatMessage.fromObject(heartbeat);
            console.log("发送心跳包")
            ws.send(ChatMessage.encode(msg).finish())
        }
    }

    const close = ()=>{  //关闭
        if(intervalId!=null) {
            clearInterval(intervalId)
        }
        console.log('断开连接');
    }

    const onError = ()=>{
        console.log('连接异常');
    }
    const sendMessage = ()=>{
        let token = localStorage.getItem("token");
        let  loginRequest = {
            "uid":"1",
            token,
            "deviceId":"1",
            "platform":4,
            "appVersion":"1.0"
        }
        let msg = {
            loginRequest,
            "type":0,
            "sequence":1,
        }
        let message = ChatMessage.fromObject(msg);
        console.log("发送消息：",message);
        ws.send(ChatMessage.encode(message).finish());

    }
    onMounted(()=>{
         init()

    })

    return ()=>(
        <>
123
        </>
    )
})
