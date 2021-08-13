import React, { useEffect, useState, useRef } from "react"
import modev from "@/config"

//import "@/config";

//import { Button } from "/DevProject/strapi-starter-gatsby-corporate-main/my-site/frontend/src/components/elements/button"  
//把点击展开事件变为点击切换事件

// var modev = "false" 这是错的


// var aa = setmodev();
// alert(aa)

var mm = "Light"
//setmodev()
function changemodev() {  //函数定义不能放Switchtry组件里面
  
  modev = !modev
  if(mm === 'Dark'){
    mm='Light';
  }
  else{mm='Dark';}
  //alert( modev )
  alert(mm)
  //forceUpdate()
}
const Switchtry = ({vv,setvv}) => {
  const [ss, setss] = useState(false)
  return (
  
    <button
    //className={`rounded-md bg-${color}-400 dark:bg-gray-800 text-text-base px-3 py-1`}
    className="  dark:bg-primary-600 text-primary-600 border-2 rounded border-primary-600	dark:text-white mr-6 px-3 py-1 ring ring-primary-600 ring-offset-2 ring-offset-primary-100"
    //onClick={() => change()}   
    onClick={() => {changemodev();setss(!ss);setvv(!vv)}
    }
  >
    <span id="sss" className="font-semibold">{mm}</span>  {/* En字符，可换为dark */}
  </button>
      
  )
};
export default Switchtry
