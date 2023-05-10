### Answer of the Question

## What is TypeScript, and how is it different from JavaScript?

Typescript is a superset of javascript and offer static typing rather than dynamic typing.It is converted to js at the end.So typescript is the strictly typed language which helps us to write bug free code and offer more features than js.

## Difference between type and interface

1)type alias is more suitable for function and simple data type whereas interface is suitable for object data
2)type alias can't be extended but interface can be extended to inherit properties from parent
3)typescript compiler merge the interface with similar name.but type alias produce error.

## Can you give an example of how to use generics in TypeScript?
Generic is used to define  single type alias or interfaces or function and use it for different types of data. for example,
 
  type Person<T>=
               {
                   name:string;
                   address:T;
               }


## Difference between any and unknown
 
 unknown type is the type safe counterpart of any type.everything can be assigned to unknown.But unknown isn't assignable to any.The main difference is in term of semantic.


