import {defineComponent, toRaw, ref, reactive, UnwrapRef} from 'vue'
import '../../assets/css/friendList.css'
import {AppstoreOutlined, CommentOutlined, TeamOutlined} from "@ant-design/icons-vue";

export default defineComponent(() => {
    return () => (
        <>
            <div id="friendList">
                <a-menu id="friend-menu"
                        mode="inline">
                    <a-menu-item key="1">
                        1
                    </a-menu-item>
                    <a-menu-item key="2">
                        2
                    </a-menu-item>
                    <a-menu-item key="3">
                        3
                    </a-menu-item>
                </a-menu>

            </div>
        </>
    )

});