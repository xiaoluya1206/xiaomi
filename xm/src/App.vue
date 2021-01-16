<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<script>
import storage from './storage/index'
    export default{
        data(){
            return{

            }
        },
        mounted(){
            // ***增加测试
            // storage.setItem('a',1)
            /*
            参数1：模块名 key
            参数二：值 value
            参数三：在哪个模块的的下面个添加新模块 module_name
            */
            // storage.setItem('abc',{a:1},'user')


            // ***删除测试
            /* 参数1：添加的值
            参数二：添加在哪个模块 */
            // storage.clear("a")
            // storage.clear("abc","user")
        }
    }
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
