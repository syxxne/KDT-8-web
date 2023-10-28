let num: number = 1;
// num = "str" number형에 string이 할당되어 오류 뜸
let str: string = "str";
let isTrue: boolean = true;
let undef: undefined;
let empty: null = null;

// array
// array : 길이를 미리 명시할 필요 X, elements의 type은 명시 필요 O
let arr: string[];
const numArr: number[] = [1, 2, 3, 4, 5];
let strArr: Array<string> = ["apple", "tomato"];

// 배열에 여러 개의 타입 넣기
// 1. number or string 배열 arr1
let arr1: (number | string)[] = [1, 2, 3, "one", "two", "three"];

// 2. boolean or null or number[] 배열 arr2
let arr2: Array<boolean | null | number[]> = [true, null, [10, 20]];

// 3. 어떤 자료형이든 상관없이 들어갈 수 있는 배열 arrAny
let arrAny: any[] = [1, 2, "str", true];

//object
let object: object = {
  name: "hi",
  age: 10,
};

console.log(object);
