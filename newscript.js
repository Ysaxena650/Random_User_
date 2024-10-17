document.addEventListener("DOMContentLoaded",()=>{
    const url="https://randomuser.me/api/?results=1000";
    let loader=document.querySelector(".loader");

   const setindividual=(user,i)=>{
        document.querySelector(`.card${i} img`).src = user.picture.medium;
        document.querySelector(`.card${i} .namepart`).textContent = `${user.name.first} ${user.name.last}`;
            document.querySelector(`.button${i}`).addEventListener('click',()=>{
            localStorage.setItem('selectedUser', JSON.stringify(user));
            window.location.href = "userinfo.html";
           
         })
      }


     const setdata=()=>{
       try {
        let array=JSON.parse(localStorage.getItem('data'));
        for(let i=1;i<=5;i++){
            
            setindividual(array[i],i);
        }

       } 
       catch (error) {
        console.log(error);
        
       }
        
     }






     const getdata = async ()=>{

      try {
        loader.style. visibility='visible';
        let response=await fetch(url);
        let responsejason=await response.json();
        loader.style. visibility='hidden';
        let userarray=responsejason.results;
        let stringuserarray=JSON.stringify(userarray);
        localStorage.setItem('data',stringuserarray);

        setdata();
       
     } catch (error) {
        console.error(error);
        
      }

     }


     const searchbarinput=()=>{
        try {
            let searchbar=document.getElementById("name");
            let users=JSON.parse(localStorage.getItem('data'));
           
            document.querySelector(".submit").addEventListener('click',(event)=>{
                event.preventDefault();
                let value=searchbar.value;
                let j=1;
                for(let i=0;i<1000;i++){
                    console.log(users[i].name.first);
                    if(value===users[i].name.first){
                        setindividual(users[i],j);
                        j++;
                        loader.style. visibility='visible';
                        setTimeout(()=>{
                            loader.style. visibility='hidden';
                        },200)
                    }

                    else{
                        loader.style. visibility='visible';
                    
                    
                        setTimeout(()=>{
                            loader.style. visibility='hidden';
                        },200)
                    }
                }
                
            })
            
           


        } 
        catch (error) {
            console.log(error);
            
        }
     }

     const arrowclick = () => {
        let rightarrow = document.querySelector(".right");
        let leftarrow = document.querySelector(".left");
        let arr = JSON.parse(localStorage.getItem('data'));
        let count = 0;
      
        rightarrow.addEventListener('click', () => {
          for (let k = 1; k <= 5; k++) {
            if (count < arr.length) {
              setindividual(arr[count], k);
              count++;
            } else {
              break; 
            }
          }
        });
      
        leftarrow.addEventListener('click', () => {
            console.log("hurray");
            
          if (count >= 5) {
           let back=count-5;
            for (let l = 1; l <= 5; l++) {
              if (count < arr.length) {
                setindividual(arr[back], l);
                back++;
              } else {
                break;
              }
            }
          }
        });
      };
      
     arrowclick();
     searchbarinput();
     getdata();
     
})


