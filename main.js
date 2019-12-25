import './index.css';

import{countup} from "./Countup.js"
import{reset} from "./reset.js"
  var count_disp = document.getElementById("disp_count");  
  var count_up_btn = document.getElementById("btn_count_up"); 
  var reset_btn = document.getElementById("btn_reset");
  var count_value = 0;

  // カウントアップボタンクリック処理
  count_up_btn.onclick = function(){
    count_value = countup(count_value)
    count_disp.innerHTML = count_value
  } 


  // リセットボタンのクリック処理
  reset_btn.onclick = function(){
    count_value = reset(count_value)
    count_disp.innerHTML = count_value
  } 
   