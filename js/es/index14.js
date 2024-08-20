
let pos = 0;
let postion = 0;    //이미지 위치값
let startx, endx;   //터치에 대한 pageX의 좌표값
let imgsize = 160;  //이미지 한개당 가로크기
function next(n){   //밑에서 가져온 노드 개수값
    if(pos < n){
        postion -= imgsize;
        //document.querySelector("#images").style.transform = `translateX(${pos}px)`;
        document.querySelector("#images").style.transform = "translateX("+postion+"px)";
        pos += 1;
    }
}
function prev(){
    if(pos > 0){
        postion += imgsize;
        //document.querySelector("#images").style.transform = `translateX(${pos}px)`;
        document.querySelector("#images").style.transform = "translateX("+postion+"px)";
        pos -= 1;
    }
}

export let a = function(e){     // e 인자값 : 핸들링시 이벤트관련 속성 배열이 나열된다.
    //console.log(e)    
    startx = e.touches[0].pageX;
    // touches : 해당 오브젝트를 터치할 경우.(콘솔에 뜸)
    // pageX   : 화면(오브젝트) 가로 기준좌표(콘솔에 뜸)
    // pageY   : 화면(오브젝트) 가로 기준좌표(콘솔에 뜸)
    // screenX : 화면 전체 기준 가로좌표
    // screenY : 화면 전체 기준 세로좌표
    //console.log(startx);
}
export let b = function(e){
    var nodes = document.querySelectorAll("#images > img"); //노드 위치파악
    //nodes.length : 노드 개수가 나오게 된다.
    endx = e.changedTouches[0].pageX;   
    // changedTouches : 해당 오브젝트의 터치가 끝난경우 발생하는 값.(눌렀다 뗐을 때?)
    //console.log(endx);
    if(startx > endx){
        next(nodes.length-1);
    }
    else{
        prev();
    }
}
// 모바일 전용 핸들링 = touchstart/ touchend/ touchmove/ touchcancle
// touchstart : 스왑이 시작될 때.(시작되는 행위?)
// touchend : 스왑이 끝나는 때.(끝나는 행위?)

//document.getElementById("images").ontouchstart = a;
//document.getElementById("images").ontouchend = b;
document.querySelector("#images").addEventListener("touchstart",a);
document.querySelector("#images").addEventListener("touchend",b);