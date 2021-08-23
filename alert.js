"use strict"
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

  let my = {
      sbor: 10,
      penya: 5,
      nam: "Anton"
  };

  function umnj(obj) {
    for(let kay in obj){
        if( typeof obj[kay] == 'number'){
            obj[kay] *= 2;
        }
    }
  }
umnj(menu);

alert(menu["width"]);
alert(menu["title"]);

alert(my["sbor"]);

umnj(my);

alert(my["sbor"]);
alert(my["nam"]);
