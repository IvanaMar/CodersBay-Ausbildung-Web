let name = prompt('What is your name?')
checkCokkie('name')

function setCookie(cookieKey, cookieContent, daysToExpire){
    let date = new Date();
    date.setDate(daysToExpire);
    document.cookie = `${cookieKey}=${cookieContent};expires=${date}`;
}

function getCookie(cookieKey) {
    cookieKey += '=';
    let decodedCookie = decodeURIComponent(document.cookie);
    let cookieArray = decodedCookie.split(';');
    for (let i = 0; i < cookieArray.length; i++){
        let currentCookie = cookieArray[i];
        while (currentCookie.charAt(0) === " "){
            currentCookie= currentCookie.substring(1);
        }
        if(currentCookie.indexOf(cookieKey) === 0) {
            return currentCookie.substring(cookieKey.length);
        }
    }
    return "";
}

console.log(getCookie("name"));

function checkCokkie(){
    if (getCookie('name') === null){
        setCookie("name", name, 100);
    }else{
        alert('welcome back '+ getCookie('name'))
    }
}



let result
$(document).ready(function () {
    $('.btn-1').click(function () {
        sum()
    })
})
$(document).ready(function () {
    $('.btn-2').click(function () {
        sub()
    })
})
$(document).ready(function () {
    $('.btn-3').click(function () {
        multi()
    })
})

$(document).ready(function () {
    $('.btn-4').click(function () {
        div()
    })
})
$(document).ready(function () {
    $('.btn-5').click(function () {
        power()
    })
})
$(document).ready(function () {
    $('.btn-6').click(function () {
        exp()
    })
})
$(document).ready(function () {
    $('.btn-7').click(function () {
        pow2()
    })
})
$(document).ready(function () {
    $('.btn-8').click(function () {
        sqrt()
    })
})
$(document).ready(function () {
    $('.btn-9').click(function () {
        log()
    })
})

function reset() {
    $('.btn-1, .btn-2, .btn-3, .btn-4, .btn-5, .btn-6, .btn-7, .btn-8, .btn-9').css('backgroundColor', 'darkslategray')
    $('.btn-1, .btn-2, .btn-3, .btn-4, .btn-5, .btn-6, .btn-7, .btn-8, .btn-9').css('color', 'white')
    result = 0
}

$(document).ready(function () {
    $('.btn-11').click(function () {
        reset()
    })
})

function sum() {
    let num1 = Math.floor(Math.random() * 50)
    let num2 = Math.floor(Math.random() * 50)
    let x = Number(prompt('solve this problem \n' + num1 + '+' + num2 + '=?'))
    if (Number.isNaN(x) === false) {
        result = num1 + num2
        if (result === x) {
            $('.btn-1').css('backgroundColor', 'yellow')
            $('.btn-1').css('color', 'black')
            $('.aside').text('The answer was correct you will get a yellow background')
            return true
        } else {
            $('.btn-1').css('backgroundColor', 'red')
            $('.btn-1').css('color', 'white')
            $('.aside').text('The answer was incorrect try again')
            return false
        }
    } else {
        $('.aside').text('Mismatch input! Please enter a number not a letter')
        $('.btn-1').css('backgroundColor', 'red')
        $('.btn-1').css('color', 'white')
        return false
    }
}

function sub() {
    let num2 = Math.floor(Math.random() * 50)
    let num1 = Math.floor(Math.random() * (100 - 51)) + 51
    let x = Number(prompt('solve this problem \n' + num1 + '-' + num2 + '=?'))
    if (Number.isNaN(x) === false) {
        result = num1 - num2
        if (result === x) {
            $('.btn-2').css('backgroundColor', 'yellow')
            $('.btn-2').css('color', 'black')
            $('.aside').text('The answer was correct you will get a yellow background')
            return true
        } else {
            $('.aside').text('The answer was incorrect try again')
            $('.btn-2').css('backgroundColor', 'red')
            $('.btn-2').css('color', 'white')
            return false
        }
    } else {
        $('.aside').text('Mismatch input! Please enter a number not a letter')
        $('.btn-2').css('backgroundColor', 'red')
        $('.btn-2').css('color', 'white')
        return false
    }
}

function multi() {
    let num1 = Math.floor(Math.random() * 50)
    let num2 = Math.floor(Math.random() * 50)
    let x = Number(prompt('solve this problem \n' + num1 + '*' + num2 + '=?'))
    if (Number.isNaN(x) === false) {
        result = num1 * num2
        if (result === x) {
            $('.btn-3').css('backgroundColor', 'yellow')
            $('.btn-3').css('color', 'black')
            $('.aside').text('The answer was correct you get a yellow background')
            return true
        } else {
            $('.aside').text('The answer was incorrect try again')
            $('.btn-3').css('backgroundColor', 'red')
            $('.btn-3').css('color', 'white')
            return false
        }
    } else {
        $('.aside').text('Mismatch input! Please enter a number not a letter')
        $('.btn-3').css('backgroundColor', 'red')
        $('.btn-3').css('color', 'white')
        return false
    }
}

function div() {
    let num1 = Math.floor(Math.random() * 50)
    let num2 = Math.floor(Math.random() * 50)
    let x = Number(prompt('solve this problem \n' + num1 + '÷' + num2 + '=?'))
    if (Number.isNaN(x) === false) {
        result = (num1 / num2).toPrecision(2)
        console.log(result)
        if (result === x.toPrecision(2)) {
            $('.btn-4').css('backgroundColor', 'yellow')
            $('.btn-4').css('color', 'black')
            $('.aside').text('The answer was correct you get a yellow background')
            return true
        } else {
            $('.btn-4').css('backgroundColor', 'red')
            $('.btn-4').css('color', 'white')
            $('.aside').text('The answer was incorrect try again')
            return false
        }
    } else {
        $('.aside').text('Mismatch input! Please enter a number not a letter')
        $('.btn-4').css('backgroundColor', 'red')
        $('.btn-4').css('color', 'white')
        return false
    }
}

function power() {
    let num1 = Math.floor(Math.random() * 10)
    let num2 = Math.floor(Math.random() * 10)
    let x = Number(prompt('solve this problem \n' + num1 + '^' + num2 + '=?'))
    if (Number.isNaN(x) === false) {
        if (Number.isNaN(x) === false) {
            result = Math.pow(num1, num2)
            if (result === x) {
                $('.btn-5').css('backgroundColor', 'yellow')
                $('.btn-5').css('color', 'black')
                $('.aside').text('The answer was correct you get a yellow background')
                return true
            } else {
                $('.btn-5').css('backgroundColor', 'red')
                $('.btn-5').css('color', 'white')
                $('.aside').text('The answer was incorrect try again')
                return false
            }
        }
    } else {
        $('.aside').text('Mismatch input! Please enter a number not a letter')
        $('.btn-5').css('backgroundColor', 'red')
        $('.btn-5').css('color', 'white')
        return false
    }
}

function exp() {
    let num1 = Math.floor(Math.random() * 50)
    num1 = Math.floor(Math.random() * 10)
    let x = Number(prompt('solve this problem \n' + 'exp' + num1 + '=?'))
    if (Number.isNaN(x) === false) {
        result = Math.exp(num1)
        if (result === x) {
            $('.btn-6').css('backgroundColor', 'yellow')
            $('.btn-6').css('color', 'black')
            $('.aside').text('The answer was correct you get a yellow background')
            return true
        } else {
            $('.btn-6').css('backgroundColor', 'red')
            $('.btn-6').css('color', 'white')
            $('.aside').text('The answer was incorrect try again')
            return false
        }
    } else {
        $('.aside').text('Mismatch input! Please enter a number not a letter')
        $('.btn-6').css('backgroundColor', 'red')
        $('.btn-6').css('color', 'white')
        return false
    }
}

function pow2() {
    let num1 = Math.floor(Math.random() * 50)
    num1 = Math.floor(Math.random() * 10)
    let x = Number(prompt('solve this problem \n' + num1 + '^' + 2 + '=?'))
    if (Number.isNaN(x) === false) {
        result = Math.pow(num1, 2)
        if (result === Number(x)) {
            $('.btn-7').css('backgroundColor', 'yellow')
            $('.btn-7').css('color', 'black')
            $('.aside').text('The answer was correct you get a yellow background')
            return true
        } else {
            $('.btn-7').css('backgroundColor', 'red')
            $('.btn-7').css('color', 'white')
            $('.aside').text('The answer was incorrect try again')
            return false
        }
    } else {
        $('.aside').text('Mismatch input! Please enter a number not a letter')
        $('.btn-7').css('backgroundColor', 'red')
        $('.btn-7').css('color', 'white')
        return false
    }
}

function sqrt() {
    let num = Math.floor(Math.random() * 100)
    let x = Number(prompt('solve this problem \n' + '√' + num + '=?'))
    if (Number.isNaN(x) === false) {
        result = Math.sqrt(num).toPrecision(2)
        if (result === x.toPrecision(2)) {
            $('.aside').text('The answer was correct you get a yellow background')
            $('.btn-8').css('backgroundColor', 'yellow')
            $('.btn-8').css('color', 'black')
            return true
        } else {
            $('.btn-8').css('backgroundColor', 'red')
            $('.btn-8').css('color', 'white')
            $('.aside').text('The answer was incorrect try again')
            return false
        }
    } else {
        $('.aside').text('Mismatch input! Please enter a number not a letter')
        $('.btn-8').css('backgroundColor', 'red')
        $('.btn-8').css('color', 'white')
        return false
    }
}

function log() {
    let num = Math.floor(Math.random() * 100)
    let x = Number(prompt('solve this problem \n' + 'log' + num + '=?'))
    if (Number.isNaN(x) === false) {
        result = Math.log10(num).toPrecision(2)
        if (result === x.toPrecision(2)) {
            $('.aside').text('The answer was correct you get a yellow background')
            $('.btn-9').css('backgroundColor', 'yellow')
            $('.btn-9').css('color', 'black')
            return true
        } else {
            $('.btn-9').css('backgroundColor', 'red')
            $('.btn-9').css('color', 'white')
            $('.aside').text('The answer was incorrect try again')
            return false
        }
    } else {
        alert('Mismatch input! Please enter a number not a letter')
        $('.btn-9').css('backgroundColor', 'red')
        $('.btn-9').css('color', 'white')
        return false
    }
}
