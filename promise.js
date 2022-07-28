// 1. Write one example explaining how you can write a callback function ?

const getEmpId = () =>{
    setTimeout(() =>{
        console.log("Fetching the ID's");
        let id = [1,2,3,4,5];
        console.log(id);
        },2000);  
}
getEmpId();

// 2."Write callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 
// Explain callback hell.
// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7"

const printNum = () => {
    let numbers = [1,2,3,4,5,6,7];
      console.log(numbers);
    
    setTimeout(()=>{
       console.log(numbers[0]);

        setTimeout(()=>{
           console.log(numbers[1]);
          
           setTimeout(()=>{
              console.log(numbers[2]);
      
              setTimeout(()=>{
                console.log(numbers[3]);

                setTimeout(()=>{
                    console.log(numbers[4]);

                    setTimeout(()=>{
                        console.log(numbers[5]);

                        setTimeout(()=>{
                            console.log(numbers[6]);
                        },7000);
                    },6000);
                },5000);
              },4000);
           },3000);
        },2000);
    },1000);         
}
printNum();

// 3."Write promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7"

const printNumOne = new Promise((res,rej) => {

    res();
})

printNumOne  
.then(() => {
    setTimeout(()=>{
        console.log("1");
    },1000);
})

.then(() => {
    setTimeout(()=>{
        console.log("2");
    },2000);
})
.then(() => {
    setTimeout(()=>{
        console.log("3");
    },3000);
})
.then(() => {
    setTimeout(()=>{
        console.log("4");
    },4000);
})
.then(() => {
    setTimeout(()=>{
        console.log("5");
    },5000);
})
.then(() => {
    setTimeout(()=>{
        console.log("6");
    },6000);
})
.then(() => {
    setTimeout(()=>{
        console.log("7");
    },7000);
});

//4. Create a promise function accepting a argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved, and if nothing is passed then it should go to reject state and catch the error and print Promise Rejected 

const demoArgu = new Promise((resolve,reject) => {  
      setTimeout(() => {
            resolve();
            reject();       
        },2000);
    })
   demoArgu        
    .then((data) => {
        console.log("the promise resolved");
    })
    .catch((error) => {
        console.log("the promise rejected");
    });

// 5.Create examples to explain callback function

const callBackFun = () =>{
    let num = ["1","2","3","4","5"];
        console.log(num); 
} 
setTimeout(callBackFun,2000);


// 6.Create examples to explain callback hell function

const callBackHellFun = () =>{
    setTimeout(()=>
    {
        let alpha = ["Aa","Bb","Cc","Dd","Ee"];
        console.log(`the alphabets are ${alpha}`);
    },3000);
} 
callBackHellFun();

// 7.Create examples to explain promises function

const promiseFun = new Promise((resolve,reject)=>{
    setTimeout(()=>{
       let petNames = ["holi","goli","doli"];
       resolve(petNames);
       reject();
    },3000);
})
promiseFun
.then((names)=>{
    console.log("promise names",names);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("resolved promise !");
});

//8.Create examples to explain async await function
const oneHello = async () =>{
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res ("hello one");
            rej();
        },5000);
    })
}
const twoHello = () =>{
    return ("hello two");
}
const Hello = async ()=>{
    let roman = await oneHello();
    console.log(roman);

    let italy = twoHello();
    console.log(italy);
}
Hello();

//9.Create examples to explain promise.all function

let p1 = Promise.resolve(50);
let p2 = 200;
let p3 = new Promise(function(resolve, reject) {
    resolve("promise all");
    reject();
});

Promise.all([p1, p2, p3])
.then(function(values) {
    setTimeout(()=>{
        console.log(values);
    },2000)    
});