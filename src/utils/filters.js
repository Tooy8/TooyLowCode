/*
 * @Description: 全局过滤器
 */
import Vue from 'vue'

const filters = {
    // 价格显示 分 -> 元  （带两位小数）  
    moneyDec(target) {
        return (target / 100).toFixed(2)
    },

    // 价格显示 分 -> 元
    money(target) {
        return target / 100
    }
}

Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})