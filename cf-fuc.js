import modev from "@/config"
//全局变量为布尔值，此函数是把布尔值转化为class需要的值
function setmodev(pp) {
    //return params ? "false" : "dark"
    //modev = !modev;
    //alert(modev); 
    return pp ? "false" : "dark"
    
  }

  export default setmodev