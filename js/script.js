/*    
Copyright: Holon Create 2020
*/
document.body.style.webkitTouchCallout='none';
var numberTextOne = parseFloat($("#display_text_one").text());
var numberTextTwo = parseFloat($("#display_text_two").text());

var btn01_up = document.getElementById("btn_01_up");
var btn01_down = document.getElementById("btn_01_down");

var btn02_up = document.getElementById("btn_02_up");
var btn02_down = document.getElementById("btn_02_down");

var btn03_up = document.getElementById("btn_03_up");
var btn03_down = document.getElementById("btn_03_down");

var btn04_up = document.getElementById("btn_04_up");
var btn05_down = document.getElementById("btn_04_down");

var btn_main_stop= document.getElementById("btn_main_stop");

var longpress = false;
var presstimer = null;
var longtarget = null;
var btnText01 = parseInt($("#btn_01_text").text());
var btnText02 = parseInt($("#btn_02_text").text());
var btnText03 = parseInt($("#btn_03_text").text());
var btnText04 = parseInt($("#btn_04_text").text());
var CountInThreeVal;
var CountInThreeAfterVal;
var timePress = 0;
var stop_timePress = 0;
var btnTypePress = '';
var btnTypeValue = '';
var stop_longpress = false;
var stop_presstimer = null;
function master_cancel(e) {
    clearInterval(CountInThreeVal);
    clearInterval(CountInThreeAfterVal);
    timePress = 0;
    if (presstimer !== null) {
        clearTimeout(presstimer);
        presstimer = null;
       
    }
}
function master_click(e) {
    if (presstimer !== null) {
        clearTimeout(presstimer);
        presstimer = null;
        
    }
    if (longpress) {
        return false;
    }
}
function master_start(e) {
    if (e.type === "click" && e.button !== 0) {
        return;
    }
    longpress = false;
    presstimer = setTimeout(function () {
        longpress = true;
       
        CountInThreeVal = setInterval(countInThreeSe, 500);
    }, 500);
    return false;
}


function btnStop_cancel(e) {
    stop_timePress = 0;
    if (stop_presstimer !== null) {
        clearTimeout(stop_presstimer);
        stop_presstimer = null;
       
    }
}
function btnStop_click(e) {
    if (stop_presstimer !== null) {
        clearTimeout(stop_presstimer);
        stop_presstimer = null;
       
    }
    if (stop_longpress) {
        return false;
    }
}
function btnStop_start(e) {
    if (e.type === "click" && e.button !== 0) {
        return;
    }
    stop_longpress = false;
    stop_presstimer = setTimeout(function () {
        stop_longpress = true;
       
    }, 500);
    return false;
}


function displayMainTextNumber() {

    if (btnTypeValue == '100' || btnTypeValue == '10') {
        if (btnTypePress == 'up')
            numberTextOne += 1;
        else if (btnTypePress == 'down')
            numberTextOne -= 1;
        $("#display_text_one").text(numberTextOne.toString() + ".");
    }
    else if (btnTypeValue == '1' || btnTypeValue == '0.1') {
        if (btnTypePress == 'up')
            numberTextTwo += 1;
        else if (btnTypePress == 'down')
            numberTextTwo -= 1;
        $("#display_text_two").text(numberTextTwo.toString());
    }

}

function countInThreeSe() {
    if (btnTypePress == 'up' && btnTypeValue == '100' && btnText01 < 100) {
        if (timePress < 3000) {
            btnText01 += 1;
            timePress += 500;
            $("#btn_01_text").text(btnText01);
            displayMainTextNumber();
            if (timePress == 3000) {
                clearInterval(CountInThreeVal);
                CountInThreeAfterVal = setInterval(countInThreeSeAfter, 100);

            }

        }
    }
    if (btnTypePress == 'down' && btnTypeValue == '100' && btnText01 > 10) {
       
        if (timePress < 3000) {
             btnText01 -= 1;
            timePress += 500;
            $("#btn_01_text").text(btnText01);
            displayMainTextNumber();
            if (timePress == 3000) {
                clearInterval(CountInThreeVal);
                CountInThreeAfterVal = setInterval(countInThreeSeAfter, 100);

            }

        }
    }

    // button 2
    if (btnTypePress == 'up' && btnTypeValue == '10' && btnText02 < 10) {
       
        if (timePress < 3000) {
            btnText02 += 1;
            $("#btn_02_text").text(btnText02);
            displayMainTextNumber();
            timePress += 500;
            if (timePress == 3000) {
                clearInterval(CountInThreeVal);
                CountInThreeAfterVal = setInterval(countInThreeSeAfter, 100);

            }

        }
    }
    if (btnTypePress == 'down' && btnTypeValue == '10' && btnText02 > 1) {
        
        if (timePress < 3000) {
            btnText02 -= 1;
            $("#btn_02_text").text(btnText02);
            displayMainTextNumber();
            timePress += 500;
            if (timePress == 3000) {
                clearInterval(CountInThreeVal);
                CountInThreeAfterVal = setInterval(countInThreeSeAfter, 100);

            }

        }
    }
    // button 3
    if (btnTypePress == 'up' && btnTypeValue == '1' && stop_longpress == true && btnText03 < 99) {
        
        if (timePress < 3000) {
            btnText03 += 1;
            $("#btn_03_text").text(btnText03);
            displayMainTextNumber();
            timePress += 500;
            if (timePress == 3000) {
                clearInterval(CountInThreeVal);
                CountInThreeAfterVal = setInterval(countInThreeSeAfter, 100);

            }

        }
    }
    if (btnTypePress == 'down' && btnTypeValue == '1' && stop_longpress == true && btnText03 > 1) {
        
        if (timePress < 3000) {
            btnText03 -= 1;
            $("#btn_03_text").text(btnText03);
            displayMainTextNumber();
            timePress += 500;
            if (timePress == 3000) {
                clearInterval(CountInThreeVal);
                CountInThreeAfterVal = setInterval(countInThreeSeAfter, 100);

            }

        }
    }


}
function countInThreeSeAfter() {

    // button 1
    if (btnTypePress == 'up' && btnTypeValue == '100' && btnText01 < 100) {
        btnText01 += 1;
        $("#btn_01_text").text(btnText01);
        displayMainTextNumber();
        if (btnText01 == 100) {
            clearInterval(CountInThreeAfterVal);

        }
    }
    if (btnTypePress == 'down' && btnTypeValue == '100' && btnText01 > 10) {
       
        btnText01 -= 1;
        $("#btn_01_text").text(btnText01);
        displayMainTextNumber();
        if (btnText01 == 10) {
            clearInterval(CountInThreeAfterVal);

        }
    }
    // button 2
    if (btnTypePress == 'up' && btnTypeValue == '10' && btnText02 < 10) {
        btnText02 += 1;
        $("#btn_02_text").text(btnText02);
        displayMainTextNumber();
        if (btnText02 == 10) {
            clearInterval(CountInThreeAfterVal);

        }
    }
    if (btnTypePress == 'down' && btnTypeValue == '10' && btnText02 > 1) {
       
        btnText02 -= 1;
        $("#btn_02_text").text(btnText02);
        displayMainTextNumber();
        if (btnText02 == 1) {
            clearInterval(CountInThreeAfterVal);

        }
    }
    // button 3
    if (btnTypePress == 'up' && btnTypeValue == '1' && stop_longpress == true && btnText03 < 99) {
        btnText03 += 1;
        $("#btn_03_text").text(btnText03);
        displayMainTextNumber();
        if (btnText03 == 99) {
            clearInterval(CountInThreeAfterVal);

        }
    }
    if (btnTypePress == 'down' && btnTypeValue == '1' && stop_longpress == true && btnText03 > 1) {
       
        btnText03 -= 1;
        $("#btn_03_text").text(btnText03);
        displayMainTextNumber();
        if (btnText03 == 1) {
            clearInterval(CountInThreeAfterVal);

        }
    }

}
// button 1
var btn01_up_cancel = function (e) {
    btnTypePress = 'up'
    btnTypeValue = '100';
    master_cancel(e);
};

var btn01_up_click = function (e) {
    btnTypePress = 'up'
    btnTypeValue = '100';
    master_click(e);
};

var btn01_up_start = function (e) {
    btnTypePress = 'up'
    btnTypeValue = '100';
    master_start(e)
};

var btn01_down_cancel = function (e) {
    btnTypePress = 'down'
    btnTypeValue = '100';
    master_cancel(e);
};

var btn01_down_click = function (e) {
    btnTypePress = 'down'
    btnTypeValue = '100';
    master_click(e);
};

var btn01_down_start = function (e) {
    btnTypePress = 'down'
    btnTypeValue = '100';

    master_start(e)
};

// Button 2

var btn02_up_cancel = function (e) {
    btnTypePress = 'up'
    btnTypeValue = '10';
    master_cancel(e);
};

var btn02_up_click = function (e) {
    btnTypePress = 'up'
    btnTypeValue = '10';
    master_click(e);
};

var btn02_up_start = function (e) {
    btnTypePress = 'up'
    btnTypeValue = '10';
    master_start(e)
};

var btn02_down_cancel = function (e) {
    btnTypePress = 'down'
    btnTypeValue = '10';
    master_cancel(e);
};

var btn02_down_click = function (e) {
    btnTypePress = 'down'
    btnTypeValue = '10';
    master_click(e);
};

var btn02_down_start = function (e) {
    btnTypePress = 'down'
    btnTypeValue = '10';
    master_start(e)
};

// Button 3

var btn03_up_cancel = function (e) {
    btnTypePress = 'up'
    btnTypeValue = '1';
    master_cancel(e);
};

var btn03_up_click = function (e) {
    btnTypePress = 'up'
    btnTypeValue = '1';
    master_click(e);
};

var btn03_up_start = function (e) {
    btnTypePress = 'up'
    btnTypeValue = '1';
    master_start(e)
};

var btn03_down_cancel = function (e) {
    btnTypePress = 'down'
    btnTypeValue = '1';
    master_cancel(e);
};

var btn03_down_click = function (e) {
    btnTypePress = 'down'
    btnTypeValue = '1';
    master_click(e);
};

var btn03_down_start = function (e) {
    btnTypePress = 'down'
    btnTypeValue = '1';
    master_start(e)
};

// Button Stop
var btn_main_stop_cancel = function (e) {
    
    btnStop_cancel(e);
};

var btn_main_stop_click = function (e) {
   
     btnStop_click(e);
};

var btn_main_stop_start = function (e) {
  
    btnStop_start(e)
};

// button 1
btn01_up.addEventListener("mousedown", btn01_up_start);
btn01_up.addEventListener("touchstart", btn01_up_start);
btn01_up.addEventListener("click", btn01_up_click);
btn01_up.addEventListener("mouseout", btn01_up_cancel);
btn01_up.addEventListener("touchend", btn01_up_cancel);
btn01_up.addEventListener("touchleave", btn01_up_cancel);
btn01_up.addEventListener("touchcancel", btn01_up_cancel);

btn01_down.addEventListener("mousedown", btn01_down_start);
btn01_down.addEventListener("touchstart", btn01_down_start);
btn01_down.addEventListener("click", btn01_down_click);
btn01_down.addEventListener("mouseout", btn01_down_cancel);
btn01_down.addEventListener("touchend", btn01_down_cancel);
btn01_down.addEventListener("touchleave", btn01_down_cancel);
btn01_down.addEventListener("touchcancel", btn01_down_cancel);

// button 2
btn02_up.addEventListener("mousedown", btn02_up_start);
btn02_up.addEventListener("touchstart", btn02_up_start);
btn02_up.addEventListener("click", btn02_up_click);
btn02_up.addEventListener("mouseout", btn02_up_cancel);
btn02_up.addEventListener("touchend", btn02_up_cancel);
btn02_up.addEventListener("touchleave", btn02_up_cancel);
btn02_up.addEventListener("touchcancel", btn02_up_cancel);

btn02_down.addEventListener("mousedown", btn02_down_start);
btn02_down.addEventListener("touchstart", btn02_down_start);
btn02_down.addEventListener("click", btn02_down_click);
btn02_down.addEventListener("mouseout", btn02_down_cancel);
btn02_down.addEventListener("touchend", btn02_down_cancel);
btn02_down.addEventListener("touchleave", btn02_down_cancel);
btn02_down.addEventListener("touchcancel", btn02_down_cancel);

// button 3
btn03_up.addEventListener("mousedown", btn03_up_start);
btn03_up.addEventListener("touchstart", btn03_up_start);
btn03_up.addEventListener("click", btn03_up_click);
btn03_up.addEventListener("mouseout", btn03_up_cancel);
btn03_up.addEventListener("touchend", btn03_up_cancel);
btn03_up.addEventListener("touchleave", btn03_up_cancel);
btn03_up.addEventListener("touchcancel", btn03_up_cancel);

btn03_down.addEventListener("mousedown", btn03_down_start);
btn03_down.addEventListener("touchstart", btn03_down_start);
btn03_down.addEventListener("click", btn03_down_click);
btn03_down.addEventListener("mouseout", btn03_down_cancel);
btn03_down.addEventListener("touchend", btn03_down_cancel);
btn03_down.addEventListener("touchleave", btn03_down_cancel);
btn03_down.addEventListener("touchcancel", btn03_down_cancel);


// Button Stop
btn_main_stop.addEventListener("mousedown", btn_main_stop_start);
btn_main_stop.addEventListener("touchstart", btn_main_stop_start);
btn_main_stop.addEventListener("click", btn_main_stop_click);
btn_main_stop.addEventListener("mouseout", btn_main_stop_cancel);
btn_main_stop.addEventListener("touchend", btn_main_stop_cancel);
btn_main_stop.addEventListener("touchleave", btn_main_stop_cancel);
btn_main_stop.addEventListener("touchcancel", btn_main_stop_cancel);



