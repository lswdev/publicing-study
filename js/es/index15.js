let k0="off";
let k1="off";
let k2="off";
export let btns_move = function(n){
    switch(n){
        case 1:
            if(k0 == "off"){
                k0="on"
                t_member.mcerti.value="Y";
                document.getElementById("s_btns"+n).style.left="50px";
                document.getElementById("t_back"+n).style.backgroundColor = "maroon";
                document.getElementById("s_btns"+n).innerText = "ON";
            }
            else if(k0 =="on"){
                t_member.mcerti.value="N";
                document.getElementById("s_btns"+n).style.left="";
                document.getElementById("t_back"+n).style.backgroundColor = "";
                document.getElementById("s_btns"+n).innerText = "OFF";
                k0="off";
            }
        break;
        case 2:
            if(k1 == "off"){
                k1="on";
                t_member.magree1.value="Y";
                document.getElementById("s_btns"+n).style.left="50px";
                document.getElementById("t_back"+n).style.backgroundColor = "maroon";
                document.getElementById("s_btns"+n).innerText = "ON";
            }
            else if(k1 =="on"){
                t_member.magree1.value="N";
                document.getElementById("s_btns"+n).style.left="";
                document.getElementById("t_back"+n).style.backgroundColor = "";
                document.getElementById("s_btns"+n).innerText = "OFF";
                k1="off";
            }
        break;
        case 3:
            if(k2 == "off"){
                k2="on";
                t_member.magree2.value="Y";
                document.getElementById("s_btns"+n).style.left="50px";
                document.getElementById("t_back"+n).style.backgroundColor = "maroon";
                document.getElementById("s_btns"+n).innerText = "ON";
            }
            else if(k2 =="on"){
                t_member.magree2.value="N";
                document.getElementById("s_btns"+n).style.left="";
                document.getElementById("t_back"+n).style.backgroundColor = "";
                document.getElementById("s_btns"+n).innerText = "OFF";
                k2="off";
            }
        break;
    }
}
document.getElementById("s_btns1").addEventListener("click",function(){
    btns_move(1)
});
document.getElementById("s_btns2").addEventListener("click",function(){
    btns_move(2)
});
document.getElementById("s_btns3").addEventListener("click",function(){
    btns_move(3)
});

export let memberships = function(){
    console.log(t_member.mcerti.value)
    if(t_member.mcerti.value !="Y"){
      alert("이용약관에 동의해주세요")
    }
    else if(t_member.magree1.value !="Y"){
      alert("이메일 수신약관에 동의해주세요")
    }
    else if(t_member.magree2.value !="Y"){
        alert("SNS 수신약관에 동의해주세요");
    }
    else {
        t_member.method = "GET";
        t_member.action = "http://lswhobby.dothome.co.kr/es/index16.html";
        t_member.submit();
    }

}

document.querySelector("#agree_btns").addEventListener("click",memberships);


