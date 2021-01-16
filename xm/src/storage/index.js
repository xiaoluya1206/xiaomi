/**
 * Storage封装
 */
const STORAGE_KEY = 'mall';
export default {
    // 存储值
    setItem(key, value, module_name) {
        if (module_name) {
            let val = this.getItem(module_name);
            val[key] = value;
            // 存入模块
            this.setItem(module_name, val);
        } else {
            // 获取所有值
            let val = this.getStorage();
            // 往里面存值
            val[key] = value;
            // 写入到Storage信息里 因为val得到的是对象 所以需要转为字符串 覆盖STORAGE_KEY
            window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
        }
    },
    // 获取值 获取某个模块下的属性 key是属性user下的userName
    // 例子：{"user":{"userName":"jack","age":30,"sex":1}}
    getItem(key, module_name) {
        if (module_name) {
            let val = this.getItem(module_name);
            // 如果没有key直接返回模块
            if (val) return val[key];
        }
        return this.getStorage()[key];
    },
    // 获取浏览器缓存信息 所有Storage的值
    getStorage() {
        // 如果没有则返回空对象
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');
    },
    // 清空某一个值
    clear(key, module_name) {
        let val = this.getStorage();
        if (module_name) {
            delete val[module_name][key];
        } else {
            delete val[key];
        }
        // 重新写入
        window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
    }
}