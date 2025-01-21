let name = prompt('Enter your name ')
checkCookie('name')

function createCookie(name, value, days) {
    var expires;
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    } else {
        expires = "";
    }
    document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = encodeURIComponent(name) + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ')
            c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0)
            return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
    return null;
}


function checkCookie(){
    let currentCookie = readCookie('name');
    let date = new Date();
    date.setTime(date.getTime() + (15 * 60 * 1000)); // add 15 minutes
    if (currentCookie === null){
        createCookie("name", name, date);
        alert('Welcome ' +  readCookie('name') + ' in our math quiz 😊 ');
    }else {
        if (currentCookie !== name) {
            createCookie("name", name, date);
            alert('Welcome ' + readCookie('name') + ' in our math quiz 😊 ');
        } else {
            alert('Welcome back ' + readCookie('name') + ' 😊 ')
        }
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
    $('.btn-1, .btn-2, .btn-3, .btn-4, .btn-5, .btn-6, .btn-7, .btn-8, .btn-9').css('backgroundColor', '#0fc0bb')
    $('.btn-1, .btn-2, .btn-3, .btn-4, .btn-5, .btn-6, .btn-7, .btn-8, .btn-9').css('border', 'none')
    $('.btn-1, .btn-2, .btn-3, .btn-4, .btn-5, .btn-6, .btn-7, .btn-8, .btn-9').css('color', 'white')
    result = 0
}

$(document).ready(function () {
    $('.btn-reset').click(function () {
        reset()
    })
})

function sum() {
    let num1 = Math.floor(Math.random() * 50)
    let num2 = Math.floor(Math.random() * 50)
    let x = Number(prompt('Solve this problem \n' + num1 + '+' + num2 + '=?'))
    if (Number.isNaN(x) === false) {
        result = num1 + num2
        if (result === x) {
            alert('Your answer was correct !')
            $('.btn-1').css('backgroundColor', 'blueviolet')
            $('.btn-1').css('border', '3px solid red')
            $('.btn-1').css('color', 'black')

            return true
        } else {
            alert('The answer was incorrect try again.')
            $('.btn-1').css('backgroundColor', 'red')
            $('.btn-1').css('color', 'white')
            return false
        }
    } else {
        alert('Wrong input! Only numbers are allowed, please enter new number ')
        $('.btn-1').css('backgroundColor', 'red')
        $('.btn-1').css('color', 'white')
        return false
    }
}

function sub() {
    let num2 = Math.floor(Math.random() * 50)
    let num1 = Math.floor(Math.random() * (100 - 51)) + 51
    let x = Number(prompt('Solve this problem \n' + num1 + '-' + num2 + '=?'))
    if (Number.isNaN(x) === false) {
        result = num1 - num2
        if (result === x) {
            alert('Your answer was correct !')
            $('.btn-2').css('backgroundColor', 'blueviolet')
            $('.btn-2').css('border', '3px solid red')
            $('.btn-2').css('color', 'black')
            return true
        } else {
            alert('The answer was incorrect try again.')
            $('.btn-2').css('backgroundColor', 'red')
            $('.btn-2').css('color', 'white')
            return false
        }
    } else {
        alert('Wrong input! Only numbers are allowed, please enter new number')
        $('.btn-2').css('backgroundColor', 'red')
        $('.btn-2').css('color', 'white')
        return false
    }
}

function multi() {
    let num1 = Math.floor(Math.random() * 50)
    let num2 = Math.floor(Math.random() * 50)
    let x = Number(prompt('Solve this problem \n' + num1 + '*' + num2 + '=?'))
    if (Number.isNaN(x) === false) {
        result = num1 * num2
        if (result === x) {
            alert('Your answer was correct !')
            $('.btn-3').css('backgroundColor', 'blueviolet')
            $('.btn-3').css('border', '3px solid red')
            $('.btn-3').css('color', 'black')
            return true
        } else {
            alert('The answer was incorrect try again.')
            $('.btn-3').css('backgroundColor', 'red')
            $('.btn-3').css('color', 'white')
            return false
        }
    } else {
        alert('Wrong input! Only numbers are allowed, please enter new number')
        $('.btn-3').css('backgroundColor', 'red')
        $('.btn-3').css('color', 'white')
        return false
    }
}

function div() {
    let num1 = Math.floor(Math.random() * (100 - 51)) + 51
    let num2 = Math.floor(Math.random() * 50)
    let x = Number(prompt('solve this problem \n' + num1 + '÷' + num2 + '=?'))
    if (Number.isNaN(x) === false) {
        result = (num1 / num2).toPrecision(2)
        if (result === x.toPrecision(2)) {
            alert('Your answer was correct !')
            $('.btn-4').css('backgroundColor', 'blueviolet')
            $('.btn-4').css('border', '3px solid red')
            $('.btn-4').css('color', 'black')
            return true
        } else {
            alert('The answer was incorrect try again.')
            $('.btn-4').css('backgroundColor', 'red')
            $('.btn-4').css('color', 'white')
            return false
        }
    } else {
        alert('Wrong input! Only numbers are allowed, please enter new number')
        $('.btn-4').css('backgroundColor', 'red')
        $('.btn-4').css('color', 'white')
        return false
    }
}

function power() {
    let num1 = Math.floor(Math.random() * 10)
    let num2 = Math.floor(Math.random() * 10)
    let x = Number(prompt('Solve this problem \n' + num1 + '^' + num2 + '=?'))
    if (Number.isNaN(x) === false) {
        if (Number.isNaN(x) === false) {
            result = Math.pow(num1, num2)
            if (result === x) {
                alert('Your answer was correct !')
                $('.btn-5').css('backgroundColor', 'blueviolet')
                $('.btn-5').css('border', '3px solid red')
                $('.btn-5').css('color', 'black')
                return true
            } else {
                alert('The answer was incorrect try again.')
                $('.btn-5').css('backgroundColor', 'red')
                $('.btn-5').css('color', 'white')
                return false
            }
        }
    } else {
        alert('Wrong input! Only numbers are allowed, please enter new number')
        $('.btn-5').css('backgroundColor', 'red')
        $('.btn-5').css('color', 'white')
        return false
    }
}

function exp() {
    let num1 = Math.floor(Math.random() * 50)
    num1 = Math.floor(Math.random() * 10)
    let x = Number(prompt('Solve this problem \n' + 'exp' + num1 + '=?'))
    if (Number.isNaN(x) === false) {
        result = Math.exp(num1)
        console.log(result)
        if (result === x) {
            alert('Your answer was correct !')
            $('.btn-6').css('backgroundColor', 'blueviolet')
            $('.btn-6').css('border', '3px solid red')
            $('.btn-6').css('color', 'black')
            return true
        } else {
            alert('The answer was incorrect try again.')
            $('.btn-6').css('backgroundColor', 'red')
            $('.btn-6').css('color', 'white')
            return false
        }
    } else {
        alert('Wrong input! Only numbers are allowed, please enter new number')
        $('.btn-6').css('backgroundColor', 'red')
        $('.btn-6').css('color', 'white')
        return false
    }
}

function pow2() {
    let num1 = Math.floor(Math.random() * 50)
    num1 = Math.floor(Math.random() * 10)
    let x = Number(prompt('Solve this problem \n' + num1 + '^' + 2 + '=?'))
    if (Number.isNaN(x) === false) {
        result = Math.pow(num1, 2)
        if (result === Number(x)) {
            alert('Your answer was correct !')
            $('.btn-7').css('backgroundColor', 'blueviolet')
            $('.btn-7').css('border', '3px solid red')
            $('.btn-7').css('color', 'black')
            return true
        } else {
            alert('The answer was incorrect try again.')
            $('.btn-7').css('backgroundColor', 'red')
            $('.btn-7').css('color', 'white')
            return false
        }
    } else {
        alert('Wrong input! Only numbers are allowed, please enter new number')
        $('.btn-7').css('backgroundColor', 'red')
        $('.btn-7').css('color', 'white')
        return false
    }
}

function sqrt() {
    let num = Math.floor(Math.random() * 100)
    let x = Number(prompt('Solve this problem \n' + '√' + num + '=?'))
    if (Number.isNaN(x) === false) {
        result = Math.sqrt(num).toPrecision(2)
        if (result === x.toPrecision(2)) {
            alert('Your answer was correct !')
            $('.btn-8').css('backgroundColor', 'blueviolet')
            $('.btn-8').css('border', '3px solid red')
            $('.btn-8').css('color', 'black')
            return true
        } else {
            alert('The answer was incorrect try again.')
            $('.btn-8').css('backgroundColor', 'red')
            $('.btn-8').css('color', 'white')
            return false
        }
    } else {
        alert('Wrong input! Only numbers are allowed, please enter new number')
        $('.btn-8').css('backgroundColor', 'red')
        $('.btn-8').css('color', 'white')
        return false
    }
}

function log() {
    let num = Math.floor(Math.random() * 100)
    let x = Number(prompt('Solve this problem \n' + 'log' + num + '=?'))
    if (Number.isNaN(x) === false) {
        result = Math.log10(num).toPrecision(2)
        if (result === x.toPrecision(2)) {
            alert('Your answer was correct !')
            $('.btn-9').css('backgroundColor', 'blueviolet')
            $('.btn-9').css('border', '3px solid red')
            $('.btn-9').css('color', 'black')
            return true
        } else {
            alert('The answer was incorrect try again.')
            $('.btn-9').css('backgroundColor', 'red')
            $('.btn-9').css('color', 'white')
            return false
        }
    } else {
        alert('Wrong input! Only numbers are allowed, please enter new number')
        $('.btn-9').css('backgroundColor', 'red')
        $('.btn-9').css('color', 'white')
        return false
    }
}
