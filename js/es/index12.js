export let txt_btn = function(){
    if(document.getElementById("person_name").value==""){
        alert("고객명을 입력하세요");
        return false;
    }
    else if(document.getElementById("person_pw").value==""){
        alert("패스워드를 입력하세요");
        return false;
    }
    else if(document.getElementById("person_text").value==""){
        alert("댓글 내용을 입력하세요");
        return false;
    }
    else{
        frm.action="http://lovertvtest.dothome.co.kr/es/noticeok.php";
        frm.method="POST";
        return true;
    }
    
    
}
document.getElementById("btn").onclick = txt_btn;