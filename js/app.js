// 注册全局组件或工具
Vue.component('digital-clock', {
    template: '<div class="digital-clock">{{ currentTime }}</div>',
    data() {
        return {
            currentTime: ''
        };
    },
    mounted() {
        this.updateTime();
        setInterval(this.updateTime, 1000);
    },
    methods: {
        updateTime() {
            const now = new Date();
            this.currentTime = now.toLocaleTimeString();
        }
    }
});

// 主 Vue 实例
new Vue({
    el: '#app',
    data: {
        tools: [
            {
                name: '数字时钟',
                description: '显示当前时间的数字时钟',
                component: 'digital-clock'
            }
            // 可以添加更多工具
        ]
    }
});
