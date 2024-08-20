/*
export let aaa = function(a1,a2){    //ES의 선언함수
    var bb = a1 * a2;
    return bb;
}
*/
export let aaa = (a1,a2) => a1*a2;  //ES 화살표 함수 선언형태

export let bbb = () => "환상의나라 애버랜드로~";    //인자값이 없을 경우 빈 ()라도 넣어줘야한다.