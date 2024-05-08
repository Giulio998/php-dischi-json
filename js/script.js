const { createApp } = Vue;

const app = createApp({
    data(){
        return{
            discList: [],
            apiUrl: "server.php",
        }
    },
    created(){
        axios.get(this.apiUrl).then((resp) =>{
            this.discList = resp.data;
            console.log(this.discList);
        });
    }
})
app.mount('#app');