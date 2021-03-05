/* 当前项目使用临时存储 */
export const setItem = (key,value)=>{
    if(key&&value){
        // localStorage.setItem(key,value);
        sessionStorage.setItem(key,value);
        return true;
    }else{
        return false;
    }
}
export const getItem = (key)=>{
    if(key){
        // return localStorage.getItem(key);
        return sessionStorage.getItem(key);
    }else{
        return false;
    }
}