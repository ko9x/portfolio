const app = Vue.createApp({
    data() {
        return {
            listItemText: 'Hello from the list item'
        };
    },
    methods: {
        myFunction() {
            return this.listItemText;
        }
    }
});
app.mount('#itemList')