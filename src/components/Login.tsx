import {defineComponent, toRaw,ref,reactive,UnwrapRef} from 'vue'
import "../assets/css/login.css"
import {AxiosResponse} from "axios";
import {Login} from '../request/request'
import router from "../router/router";
export default defineComponent(()=>{
    let formRef = ref(); //绑定表单，对提交时触发表单验证规则
    let formState:UnwrapRef<LoginParam> = reactive({
        userName:'', // 默认值 与输入框绑定  如果想输入框能用placeholder, 那么就置为null
        password:'',
        platform:3,
    });
    let rules ={
        userName:[
            {
                required: true,
                message: '请输入账号',
                trigger: 'blur'
            },
        ],
        password:[
            {
                required: true,
                message: '请输入密码',
                trigger: 'blur'
            }
        ]
    };
    const onSubmit = async ()=>{

       let validated = await formRef.value.validate();
       let result:AxiosResponse<Result> = await Login(toRaw(formState));
       if(result.data!=null&&result.data.code === 1){
           localStorage.setItem("token",result.data.data)
           await router.push("/chat")
       }else{

       }

    }
    let labelCol = {span:12,offset:6}

    return ()=>(
        <>
            <div id="content">
                <div id="login">
                    <a-form ref={formRef} model={formState} rules={rules}>
                        <a-form-item label="账号" name="userName">
                            <a-input v-model={[formState.userName,'value']} />
                        </a-form-item>
                        <a-form-item  label="密码" name="password">
                            <a-input v-model={[formState.password,'value']} />
                        </a-form-item>
                        <a-form-item labelCol={labelCol}>
                            <a-button onClick={onSubmit} type="primary" size="large">提交</a-button>
                        </a-form-item>
                    </a-form>
                </div>
            </div>
        </>
    )
})
