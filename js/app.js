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
// 自动加载工具组件
function loadTools() {
    const tools = [
        {
            name: '数字时钟',
            description: '显示当前时间的数字时钟',
            component: 'digital-clock'
        }
        // 其他工具...
    ];
    
    // 这里可以添加动态加载逻辑
    // 例如使用 fetch 或 AJAX 加载 /tools 目录下的 JS 文件
    // 然后自动注册组件
    
    return tools;
}

// 主 Vue 实例
new Vue({
    el: '#app',
    data: {
        tools: loadTools()
    }
});


