 function A(){
     return 1;
 }

 function B(){
     return A() + 1;
 }

 function C(){
     
     return B() +1;
 }
 console.log(C())

function async(a,b,cb){
    console.log('hi')
    setTimeout(() => {
        const res2 = a+b;
        cb(res2)
    },3000)
}

async(1,3, (res) =>{
    console.log("res===>" +res)
})
 
 function a (a, b, cb) {
     setTimeout(() => {
        
        const res = a+b;
         cb(res)
        
         return res
     }, 1000)
 }
 console.log("코드 끝")

 function b ( a ,cb1){
     setTimeout(() =>{
        const res1 = a * 2;
        cb1(res1)
         return res1
     }, 100)
    
 }
 function c (a, cb){
     setTimeout(() =>{
         const res = a * -1;
         cb(res)
         return res;
     }, 3000)
 }
 a(4,5,(a_res) =>{
     console.log("a" +a_res);
     b(a_res,(b_res)=>{
         console.log("b"+b_res)
         c(b_res,(c_res) =>{
            console.log("c"+ c_res)
         })
     })
    
   
 }); 

/*  function isPositive(number, resolve, reject){
     setTimeout(() => {
        if(typeof number === 'number'){
            //성공 -> resolve
            resolve(number >= 0 ? '양수': '음수')
        }else{
            //실패
        reject("주어진 값이 숫자가 아니다.")
        }
     }, 2000)
 }

 isPositive(
     []
    , (res)=>{
     console.log('성공적 수행 '+ res)
 }, (err) => {
     console.log('실패' + err)
 }) 

 */
 function isPositiveP(number){
     const executor = (resolve, reject) => {
         setTimeout(() =>{
            if(typeof number === 'number'){
                //성공 -> resolve
                resolve(number >= 0 ? '양수': '음수')
                console.log(number);
            }else{
                //실패
                reject("주어진 값이 숫자가 아니다.")
            }
         }, 1000)
     }
     /* async 선언하면서 promise객체 생성해 실행자 힘수인 executor */
    const asyncTask = new Promise(executor);
    return asyncTask;

 }
    const res = isPositiveP([])
    res
        .then((res) => 
        {console.log("reslove==>"+ res)}
        )
        .catch((err) => 
        {console.log("reject ==> "+err)}
        )
 
//callback 지옥 
 
    function a(a,b){
        /* 이게 const executorA = new Promise(executorA)와 같다. */
        return new Promise((resolve,reject) =>{
            setTimeout(() =>{
                const res = a+b;
               resolve(res)
            },1000)
        })
      
    }
    function b(a){
        return new Promise((resolve,reject) =>{
            setTimeout(() =>{
                const res = a *2;
                resolve(res)
            },2000)
        })
      
    }
    function c(a){
        return new Promise((resolve,reject)=>{
            setTimeout(() =>{
                const res = a * -1;
                resolve(res)
            },3000)
        })
      
    }

/*     a(5,1).then((a_res)=>{
        console.log('a'+ a_res)
        b(a_res).then((b_res)=>{
            console.log('b'+ b_res)
            c(b_res).then((c_res)=>{
                console.log('c'+ c_res)
            })
        })
    }) =====callback식
    */
   //then chaning -->callback을 promise로 해결할 때
  const bProimse = a(5,4)
   .then((a_res) =>{
       console.log('a'+a_res);
       return b(a_res);
   });

   console.log("bProimse")
   console.log("bProimse")
   console.log("bProimse")
   console.log("bProimse")
   console.log("bProimse")
   console.log("bProimse")

   bProimse.then((b_res)=>{
       console.log('b'+ b_res)
       return c(b_res);
   })
   .then((c_res)=>{
       console.log('c'+ c_res)
      
   })
    
   /* 일반 callback 
    a(3,4,(a_res)=>{
        console.log('a: '+ a_res);
        b(a_res, (b_res) =>{ 
            console.log('b:'+ b_res);
            c(b_res, (c_res) =>{
                console.log("c:" + c_res)
            });
        });
    }); */