const pass_array = ["1","2","3","4","5","6","7","8","9","0","!","*","_","-","."];

//파라미터값
let para = location.search.split("&");
var paracuta = para[0].split("=")[1]
var paracutb = para[1].split("=")[1]
var paracutc = para[2].split("=")[1]
//console.log(paracuta);
//console.log(paracutb);
//console.log(paracutc);

frm.mcerti.value=paracuta;
frm.magree1.value=paracutb;
frm.magree2.value=paracutc;


// 패스워드자판 출력파트
export let num_look = function(){
    document.querySelector("#tb_list").style.display="block";
}
document.querySelector("#mpass").addEventListener("click",num_look);


// 패스워드자판 완료파트
export let num_comp = function(){
    document.querySelector("#tb_list").style.display="none";
}
document.querySelector("#complete").addEventListener("click",num_comp);


//패스워드 자판 입력파트
var data_num = "";
export let ph_num = function(dt){
    
    //부모 기준으로 하위 노드를 확인하는 것.
    var nodes = document.querySelectorAll("#num_table > li");   //li를 싹 가져온다
    console.log(nodes)
    //console.log([].indexOf.call(nodes, dt.target));
    //console.log(Array.from(nodes).indexOf(dt.target));    //엄마 기준에서의 타겟이다.
    var key_node =pass_array[Array.from(nodes).indexOf(dt.target)];
    data_num = data_num + key_node;
    //console.log(data_num)
    document.getElementById("mpass").value=data_num;
    
   /*
    var nodes = document.querySelectorAll("#num_table > li");
    var f;
    for(f=0; f<nodes.length; f++){
        nodes[f].addEventListener("click",function(){
            console.log(f);
        })
    }
   */
   /*
    //console.log([].indexOf.call(nodes, dt.target)); : call은 배열기호 []를 써야한다.
        // casll(자식객체, 부모객체)
        // call은 부모객체 기준으로 자식객체의 배열을 연결하는 형태를 가지고 있습니다.
    //console.log(Array.from(nodes).indexOf(dt.target)); : from은 Array를 써야한다.
        //from(자식객체).indexOf(부모객체)
        //Array.from : 메서드        
   */
  console.log(Array.from("test"))
  //["t","e","s","t"]
}
document.querySelector("#num_table").addEventListener("click",ph_num);


// 입력검토
export let join_ck = function(){
    if(document.getElementById("mid").value==""){
        alert("아이디를 입력해주세요");
        return false;
    }
    else if(document.getElementById("mpass").value==""){
        alert("패스워드를 입력해주세요");
        return false;
    }
    else if(document.getElementById("mname").value==""){
        alert("성함을 입력해주세요");
        return false;
    }
    else if(document.getElementById("memail").value==""){
        alert("이메일을 입력해주세요");
        return false;
    }
    else if(document.getElementById("mhp").value==""){
        alert("연락처를 입력해주세요");
        return false;
    }
    else if(document.getElementById("mnick").value==""){
        alert("닉네임을 입력해주세요");
        return false;
    }
    else{
        if(isNaN(document.getElementById("mhp").value)==true){
            alert("올바른 연락처를 입력해주세요");
        }
        else{
            frm.action="../portfolio/shop/m/m_membership.php";
            frm.method="POST";
            frm.enctype="application/x-www-form-urlencoded";
            return true;
        }
    }
}
document.querySelector("#subbtn").addEventListener("click",join_ck);
