import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
// antd vite 解析器
import {AntDesignVueResolver} from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
      vue(),
    vueJsx(),
    Components({
      resolvers: [
        AntDesignVueResolver(),
      ]
    }),
  ]
})
