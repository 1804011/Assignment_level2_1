function print(param:unknown):void{
    if(typeof param==="string")
      console.log(param);
    else console.log("This is not a string");

}
print("Hello");
print(666);