//1.

function createIncrement() { 
    let value = 0;

    function increment() { 
        ++value; 
        console.log(value); 
    }

    const msg1= `msg1: ${value}`; 
    
    function log() { 
        const msg2 = `msg2:${value}`; 
        console.log(msg1); 
        console.log(msg2); 
    } 
    
    return [increment, log];

}

const [increment, log] = createIncrement();  // execute line 4, 11, 19; remember 6-9, 13-17
increment(); // 1 // exec 6-9
increment(); // 2 // exec 6-9
log(); // msg1: 0 // exec 13-17
       // msg2: 2

//What’s the console output for the above code?

//Write the output in order and error type if there are any errors.






//2. given an array and print output data at schedule

// let list = [    { value: 'a', delay: 2000 }, 
//                 { value: 'b', delay: 1000 }, 
//                 { value: 'c', delay: 3000 },
//                 ...
//     ];

//We need to output ‘a’ after 2 seconds, output ‘b’ 1 second after ‘a’, and output ‘c’ 3 seconds after ‘b’

function fn1(delay,value){
        return new Promise(resolve=>{
            setTimeout(function(){
                resolve(value)
            },delay);
        });
     }
     async function asyncCall(){
        let list =[
         { value: 'a',delay: 2000},
         { value: 'b',delay: 1000},
         {value: 'c',delay: 3000}];
        for (i = 0; i < list.length; i++) {
       	let result=await fn1(list[i].delay,list[i].value);
       	console.log(result);
       }; 
     }














