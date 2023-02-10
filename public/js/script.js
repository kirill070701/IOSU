"use strict";

$(document).ready(function() {
    $('.startSin').on('click',()=>{
        let coefficients    = new Сoefficients();
        let sizeFon         = getSizeObject($('.fon'));
        let sinPosition     = sinPositionObject(sizeFon, coefficients);
        setPositionObject($('.ball'), sinPosition, coefficients);
        console.log(coefficients);
    })
});
/* конторль значений */
function controlPosition(posY, coefficients) {
    let min = getPositionObject($('.fon')).top
    let maxAcceptable = (min / (coefficients.max - coefficients.min)) * Math.abs(coefficients.maxAcceptable)
    let minAcceptable = (min / (coefficients.max - coefficients.min)) * (Math.abs(coefficients.maxAcceptable) + Math.abs(coefficients.minAcceptable))

    console.log(posY)
    console.log(maxAcceptable)
    console.log(minAcceptable)

    if (posY >= maxAcceptable || posY <= minAcceptable) {
        $('.ball').css({background: 'green'})
        console.log('ok')
    }else{
        $('.ball').css({background: 'red'})
        console.log('no')
    }
}

/*констроктор вводимых данных */
function Сoefficients() {
    this.frequency          = parseFloat(getDataInput($('#frequency')));
    this.speed              = parseFloat(getDataInput($('#speed')));
    this.max                = parseFloat(getDataInput($('#max')));
    this.min                = parseFloat(getDataInput($('#min')));
    this.maxAcceptable      = parseFloat(getDataInput($('#maxAcceptable')));
    this.minAcceptable      = parseFloat(getDataInput($('#minAcceptable')));
}

/* получение значений ввода*/
function getDataInput(objectInput){
    let data = objectInput.val();
    return data;
}

/*Получение позиции объекта */
function getPositionObject(object){
    let position = object.offset();
    return(position);
}
/* Получение размера объекта */
function getSizeObject(object){
    let size = {
        width: object.width(), 
        height: object.height()
    }
    return(size);
}

/* Изминение позиции объекта */
function setPositionObject(object, sinPosition, coefficients){
    let posX = 0;
    let speed = coefficients.speed

    let min = getPositionObject($('.fon')).top
    let maxAcceptable = (min / (coefficients.max - coefficients.min)) * Math.abs(coefficients.maxAcceptable)
    let minAcceptable = (min / (coefficients.max - coefficients.min)) * (Math.abs(coefficients.maxAcceptable) + Math.abs(coefficients.minAcceptable))

    console.log(maxAcceptable)

    for (let i = 0; i < sinPosition.length; i++) {
        object.animate({
            top: sinPosition[i]+'px',
            left: posX + 'px'
        },20, 'linear', ()=>{
            if ((sinPosition[i] <= maxAcceptable) || (sinPosition[i] >= minAcceptable)) {
                $('.ball').css({background: 'red'})
                console.log('ok')
            }else{
                $('.ball').css({background: 'blue'})
                console.log('no')
            }
            
        });  
        posX += speed; //1.95
        //controlPosition(sinPosition[i], coefficients)
    }
    
}

/* изминение размера объекта */
function setSizeObject(object, width, height){
    object.width(width); 
    object.height(height);
}

/* Расчет позиций объекта */
function sinPositionObject(sizeFon, coefficients){
    let a       = sizeFon.height/2-25;
    let t       = 1.0;
    let cik     = coefficients.frequency; //частота 0.055                    скорость 1.95
    let faza    = 1;

    let positionObject = [];

    for (let i = 0; i < ((sizeFon.width / coefficients.speed)-(50 / coefficients.speed)); i++) {
        positionObject[i] = (a * Math.cos(cik * t - faza)) + sizeFon.height/2-25;
        t += 0.5;
    }

    return(positionObject);   
}
  
