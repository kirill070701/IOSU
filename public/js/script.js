let positionFon
let sizeFon
$(document).ready(function() {

	//$('.ball').offset({top: 100})
    //$('.ball').css({'top': '50%'})

    positionFon = getPositionObject($('.fon'));
    sizeFon = getSizeObject($('.fon'));
    //positionFon.top += (sizeFon.height / 2)-25
    //setPositionObject($('.ball'), positionFon);
    let sinPosition = sinPositionObject();
    setPositionObject($('.ball'), sinPosition, positionFon);


    
});

function getPositionObject(object){
    let position = object.offset();
    return(position);
}

function getSizeObject(object){
    let size = {
        width: object.width(), 
        height: object.height()
    }
    return(size);
}
function setPositionObject(object, sinPosition, positionFon){
    let p = 0;
    for (let i = 0; i < sinPosition.length; i++) {
            object.animate({
                top: sinPosition[i]+'px',
                left: p + 'px'
            },20)  
            console.log(sinPosition[i]+'px')  
        
        p += 0.5;
    }

    
    /*object.offset({
        top: Math.abs(sinPosition),
        left: 100
    } );*/
}

function setSizeObject(object, width, height){
    object.width(width), 
    object.height(height)
}
function sinPositionObject(){
    let a       = sizeFon.height/2-25;
    let t       = 1.0;
    let cik     = 0.055;
    let faza    = 1;

    let positionObject = [];

    for (let i = 0; i < (sizeFon.width / 0.5); i++) {
        positionObject[i] = (a * Math.cos(cik * t - faza)) + sizeFon.height/2-25;
        t += 0.5;
    }
    console.log(positionObject)
    return(positionObject);   
}




function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
