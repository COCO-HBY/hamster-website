<template>
    <div id="error-page">
        <img src="../assets/img/404.png" alt="404-error">
        <p><span>{{number}}</span>秒后跳转到主页...</p>
    </div>
</template>
<script>
import mixinLoading from '../mixins/mixin-loading'
export default {
    data(){
        return{
            timer:'',
            timer_push:'',
            number: '',
            interval:''
        }
    },
    mixins:[mixinLoading],
    mounted(){
        let _this = this;
        this.timer_push = setTimeout(() => {
            _this.$router.push('/homePage');
        }, 3000);

        this.number = 3;
        this.interval = setInterval(() => {
            _this.number --;
        }, 1000);
    },
    beforeDestroy(){
        clearTimeout(this.timer_push);
        clearInterval(this.interval);
    }
}
</script>
<style lang="less" scoped>
#error-page{
    text-align: center;
}
</style>