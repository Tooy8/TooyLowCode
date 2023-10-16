
/*
 * @Description: 组件配置混入

 */

import ModeSelect from "@/components/ModeSelect";
import ModeSelectItem from "@/components/ModeSelect/ModeSelectItem";

export default {
    components: {
        ModeSelect,
        ModeSelectItem,
    },
    props: {
        attr: {
            type: Object,
            default: () => { }
        },
        style: {
            type: Object,
            default: () => { }
        },
        value: {
            type: Object,
            default: () => { }
        },
    },
}