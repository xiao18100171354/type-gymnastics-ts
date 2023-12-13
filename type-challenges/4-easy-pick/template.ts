//  T 和 K 称之为泛型，就类似于 js 函数中的参数的概念
type MyPick<T, K extends keyof T> = {
  // 在 TS 中，如果 K 是一个联合类型 union，可以使用 in 关键字去遍历它
  [P in K]: T[P];
};

function myPick(todo, keys) {
  const obj = {};

  keys.forEach((key) => {
    if (key in todo) {
      obj[key] = todo[key];
    }
  });

  return obj;
}

// 1. 返回一个对象
// 2. 遍历forEach mapped
// -- https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
// 3. todo[key] 取值 indexed
// -- https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html
// 4. 看看 key 在不在 todo 里面
//    1. keyof lookup
//       -- https://www.typescriptlang.org/docs/handbook/2/keyof-types.html
//    2. extends Generics 类型约束
//       -- https://www.typescriptlang.org/docs/handbook/2/generics.html

// type Point = { x: number, y: number }
// type P = keyof Point
// const p: P = 'y';
interface Todo {
  title: string;
}
type Arrayish = { [n: number]: unknown };
type A = keyof Arrayish;

type Mapish = { [k: string]: boolean };
type M = keyof Mapish;

function identity<Type>(arg: Type): Type {
  return arg;
}
// const a = identity('myString')

// let myIdentity: <Type>(arg: Type) => Type = identity;
// const a = myIdentity<number>(1)

// interface GenericIdentityFn {
//   <Type>(arg: Type): Type
// }

interface GenericIdentityFn<Type> {
  (arg: Type): Type
}
let myIdentity: GenericIdentityFn<number> = identity;
// const a = myIdentity(1)