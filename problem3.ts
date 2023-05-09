function reverseString<T>(...str:T[]):T[]{
  return  str.reverse()
} 
console.log(reverseString<string>("hello","world"));
console.log(reverseString<string>("hello","world","guys"));