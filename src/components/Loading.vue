<template>
  <div id="loading" v-show="isLoad">
    <div class="loading-content">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            isLoading: true
        }
    },
    props:["isLoad"]
}
</script>
<style lang="less" scoped>
div#loading {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
}
.loading-content{
    width: 120px;
    height: 120px;
    // background-color: pink;
    position: relative;
}
.loading-content div{
    width: 40%;
    height: 40%;
    border-radius: 50%;
    position: absolute;
    animation: loading 2s ease infinite;
}
.loading-content :nth-child(1){
    background-color: #a6cb26;
}
.loading-content :nth-child(2){
    background-color: #f3e5ae;
    animation-delay: -0.5s;
}
.loading-content :nth-child(3){
    background-color: #625e48;
    animation-delay: -1s;
}
.loading-content :nth-child(4){
    background-color: #eec333;
    animation-delay: -1.5s;
}


// donghua
@keyframes loading {
    0%, 100%{
        transform: translate(0,0);
    }
    25%{
        transform: translate(150%,0);
    }
    50%{
        transform: translate(150%,150%);
    }
    75%{
        transform: translate(0,150%);
    }
}
</style>
