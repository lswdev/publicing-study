/*
export let abc = function(){
    frm.method="POST";
    //frm.action="https://naver.com";
    frm.action="./index6.html";
    frm.submit();

}
//document.getElementById("btn").onclick=abc;
*/

export let login_btn = function(){

    var id = document.getElementById("mid").value;
    var pw = document.getElementById("mpass").value;
    if(id==""){
        alert("아이디를 입력");
    }
    else if(pw==""){
        alert("패스워드를 입력");
    }
    else{
        frm.method="POST";            
        frm.action="./index6.html";
        frm.submit();
    }
}
document.getElementById("login_btn").onclick = login_btn;


//select
export let mails = function(aa){
    document.getElementById("email").value = aa;
}
document.querySelector("#selectbox").addEventListener("change",function(){
    var z = this.value; // addEventListener에서 해당 값에 대한 this.value를 사용할 수 있음.
    //console.log(z);
    mails(z);
});

/* onclick이나 onchange 일 경우 해당 함수로 이동은 가능하나, 함수에 인자값을 적용하기는 힘들다. */
// click, change, keypress, mouseenter,mouseleave, mouseout, mouseover, keyup, keydown