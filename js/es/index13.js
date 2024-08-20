export let abc = function(){
    let start = null;
    let sleft = null;
    var ani = document.getElementById("box");

    function ccc(times){ // ccc확장함수를 사용할 수 있음 export 안에서는 가능하다.
        start += 0.01;  //계산 수식구
        sleft += 1;
        ani.style.opacity = start;
        ani.style.left = sleft+"px";
        // 1보다 작거나 같을때까지만 애니메이션 프레임을 작동시킨다.
        if(start <= 1){ // requestAnimationFrame를 제어하는 조건문
            window.requestAnimationFrame(ccc);        
        }
        console.log(times);
    }
    window.requestAnimationFrame(ccc);  // 비동기함수(지속적으로 호출) setTimeout에 가까운 형태를 띄고 있다

}
//onclick : id기준, addEventListner : id, class 모두 사용가능
document.querySelector("#btn").onclick = abc;
//document.querySelector("#btn").addEventListener("click",abc);
//document.querySelector(".btn").addEventListener("click",abc);