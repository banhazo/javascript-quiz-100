/* 문제1: 배열의 삭제
다음 배열에서 400,500를 삭제하는 code를 입력하세요.
*/

// 방법1
var nums1 = [100, 200, 300, 400, 500];
nums1.pop(nums1.pop());
console.log('nums1:', nums1);

// 방법2
var nums2 = [100, 200, 300, 400, 500];
nums2.splice(3, 2);
console.log('nums2:', nums2);
// 방법3
var nums3 = [100, 200, 300, 400, 500];
nums3.length = 3;
console.log('nums3:', nums3);

/* 문제2: 배열의 내장함수
<pass>부분에 배열 내장함수를 이용하여 코드를 입력하고 다음과 같이 출력되게 하세요.
출력[(200, 100, 10000, 300)];

*/
var arr = [200, 100, 300];
arr.splice(2, 0, 10000); //pass
console.log(arr);

/* 문제3: 변수의 타입
다음 출력 값으로 올바른 것은?
*/
var arr = [100, 200, 300];
console.log(typeof arr);
// 답: 4

/* 문제4: 변수의 타입2
다음 변수 a를 typeof(a)로 넣었을 때 출력될 값과의 연결이 알맞지 않은 것은?
1)  입력 : a =1,   출력 : number
2)  입력 : a = 2.22,   출력 : boolean
3)  입력 : a = 'p',   출력 : string
4)  입력 : a = [1, 2, 3],   출력 : object 
*/
// 답: 2

/* 문제5: for문 계산
다음 코드의 출력 값으로 알맞은 것은?
*/
var a = 10;
var b = 2;

for (var i = 1; i < 5; i += 2) {
  a += i;
}

console.log(a + b);
// 답: 16 (10 + 1 + 3 + 2)
