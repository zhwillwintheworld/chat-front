import {defineComponent,onMounted} from 'vue'

export default defineComponent(()=>{
    let ws:WebSocket ;
    const init = ()=>{
        ws = new WebSocket('ws://localhost:8888')
        ws.onclose = close;
        ws.onerror = onError;
        ws.onopen = open;
        ws.onmessage = message;
    }
    const open = ()=>{
        console.log("connect success")
    }
    const message = ()=>{
        console.log("收到消息")
    }

    const close = ()=>{  //关闭
        console.log('断开连接');
    }

    const onError = ()=>{
        console.log('连接异常');
    }
    const sendMessage = ()=>{
        const loginRequest = {
            "uid":"1",
            "token":"1",
            "deviceId":"1",
            "platform":4,
            "appVersion":"1.0"
        }
        let str =JSON.stringify(loginRequest);
        console.log(str)
        ws.send(str);

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