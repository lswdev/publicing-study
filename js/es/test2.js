export let a = function(aa){    //aa.target으로 쓸 땐 필요하다. this쓸 때는 필요X
    //console.log(aa.target);
    //console.log(this);
    //console.log(this.querySelector(".onoff"));
    var z = this.querySelector(".onoff");
    z.style.backgroundColor="red";

    /* 
        setAttribute는 값을 집어넣는 것.
        getAttribute는 값을 가져오는 것
    */
    //console.log(z.getAttribute("ids"));
    let getid = z.getAttribute("ids");
    document.getElementById(getid).value="Y";
}

let b = document.querySelectorAll(".btn_bk");   // All은 배열로 들인다.(class썼을 때)
//console.log(b[1]) 배열로 들어가는 것이다.
//[] = Array
Array.from(b).forEach(function(c,index){
    //from(b) 의 b는 document.querySelectorAll(".btn_bk"); 와 같다
    //console.log(index);
    c.addEventListener("click",a);  //핸들링값 자체를 던지는 것이다.
    //지정된 값을 보내고싶을 경우 a(값) 으로 넘기면 된다.
});