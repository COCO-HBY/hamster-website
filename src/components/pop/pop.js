import Vue from 'vue'
import Pop from './pop.vue'


const PopupBox = Vue.extend(Pop);

Pop.install = function(data){
    let instance = new PopupBox({
        data
    }).$mount();

    document.body.appendChild(instance.$el);

    Vue.nextTick(()=>{
        instance.show = true
    })
}

export default Pop