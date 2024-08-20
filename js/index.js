// 하나씩 내보내기
// var, const도 동일
// export let name1, name2;
// export function functionName(){...}
// export class ClassName {...}

// 목록으로 내보내기
// export { name1, name2 };

// 내보내면서 이름 바꾸기
// export { variable1 as name1, variable2 as name2 };

// 비구조화로 내보내기
// export const { name1, name2: bar } = o;

// 기본 내보내기
// export default expression;
// export default function (…) { … } // also class, function*
// export default function name1(…) { … } // also class, function*
// export { name1 as default, … };

// 모듈 조합
// export * from …; // does not set the default export
// export * as name1 from …;
// export { name1, name2, …, nameN } from …;
// export { import1 as name1, import2 as name2, …, nameN } from …;
// export { default } from …;


// export 문은 HTML 안에 작성한 스크립트에서는 사용할 수 없습니다.

import { El, El2, etc } from "./export1.js";

import AmuLearn from "./export2.js";

etc();


console.log(El, El2);
document.getElementById('text').innerText = El;
document.getElementById('text2').innerText = El2;


console.log(AmuLearn());