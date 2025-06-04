// 这是一个独立的数字时钟组件
// 在 app.js 中已经全局注册，这里作为独立组件示例
const DigitalClock = {
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
};

// 注册组件
Vue.component('digital-clock', DigitalClock);
