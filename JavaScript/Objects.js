// Objects are user defined data types in js in which we can define any type to data variables
const obj={
    name:"Archana", 
    age:22,
    favSubject:["Maths","Science","SST"],
    friends:{
        fav:"raj"
    },
    fun: function(){
        return `${this.friends.fav} I'm function`
    }


}
// to access properties from object
console.log(obj.friends.fav)

// to iterate in objects

// for(let key in obj){
//     console.log("I am Key " + key +" and this is my value :" + obj[key])
// }

// to delete property from object

delete obj.name;
//console.log(obj)

// this keyword is used to access properties within a object by the method . This keyword refers to the calling object

 let str=obj.fun()
 console.log(str)

 // to add properties in object we can direct add

 obj.weight=53;
 console.log(obj)

 //to test weather object has a property aur not we have a build in method

 console.log(obj.hasOwnProperty("task"))