import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './components/Login';
import 'ant-design-vue/dist/antd.css';
import router from './router/router'

createApp(App).use(router).use(Antd).mount('#app')
