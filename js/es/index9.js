//배열값은 함수 안에 작성 또는 html에서 script를 이용하여 사용하는 방법 외에는 방법이 없다.
//.js 상단에 출력이 불가능하다.

export let a = function(){
    let words = ["C","F","Z","A","J"];
    words.push("B");    //배열안에 B를 집어넣는 것
    words.sort();       //배열을 알파벳 순서대로 배치
    console.log(words);
}


//문제2. 다음 2개의 배열값을 확인하여 해당 값을 추가한 후 콘솔로 출력하시오.
/*
    const a1 = ["red","blue","green"];
    const a2 = ["black","yellow","orange"];
    해당 2개의 배열을 모두 합치시오
*/
export let b = function(){
    const a1 = ["red","blue","green"];
    const a2 = ["black","yellow","orange"];
/*  
방법1.
    let j=0;
    while(j<3){
        a1.push(a2[j]);
        j++;
    }
*/

/*  
방법2.
    var z;
    for(z in a2){
        a1.push(a2[z]);
    }
*/

// 시니어들이 쓰는 방법.
   Array.prototype.push.apply(a1,a2);
   console.log(a1);
}

// 문제3. 해당 배열값이 있습니다. 해당 배열값을 추가하여 다음과 같은 결과가 되도록 수정하시오
/*
    const c1 = ["lee","kim","park","kang"];
    const c2 = ["jang","sin"];
    
    출력결과 : ["jang","sin","kang","kim","lee","park"]
*/
export let c = function(){
    const c1 = ["lee","kim","park","kang"];
    const c2 = ["jang","sin"];

    c1.sort();
    var z;
    for (z in c1) {
        c2.push(c1[z]);
    }
    console.log(c2);

}

//문제4. 다음 배열값에 추가 정보를 입력되게 하여 배열에 전체적으로 재 나열하는 코딩을 작성
/*
    const c1 = ["a","b","c","d"];
    let data1 = "a3";
    let data2 = "a5";
    let data3 = "a7";
    
    출력결과 : ["a","a3","b","a5","a7","c","d"];
*/
export let d = function(){
    const d1 = ["a","b","c","d"];
    let data1 = "a3";
    let data2 = "a5";
    let data3 = "a7";

    d1.splice(1,0,data1);
    d1.splice(3,0,data2,data3);
    console.log(d1);
}


{
    key1: value,
    key2: value
    key3: value
}