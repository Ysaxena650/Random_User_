document.addEventListener("DOMContentLoaded", () => {
    const url = "https://randomuser.me/api/?results=100";
    let loader = document.querySelector(".loader");
  
    function getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
  
    const getdata = async () => {
      try {
        loader.style.visibility = 'visible';
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
  
        loader.style.visibility = 'hidden';
        let stringdata = JSON.stringify(data.results);
        localStorage.setItem('data', stringdata);
        setdata();
      } catch (error) {
        console.log(error, "error in server");
      }
    };
  
    const setindividual = (user, i) => {
      document.querySelector(`.card${i} img`).src = user.picture.medium;
      document.querySelector(`.card${i} .namepart`).textContent = `${user.name.first} ${user.name.last}`;
      document.querySelector(`.button${i}`).addEventListener('click', () => {
        localStorage.setItem('selectedUser', JSON.stringify(user));
        window.location.href = "userinfo.html";
      });
    };
  
    const setdata = () => {
      try {
        let dataarray = localStorage.getItem('data');
        let propdataarray = JSON.parse(dataarray);
  
        for (let i = 1; i <= 5; i++) {
          let a = getRandomNumber(0, 1000);
          let user = propdataarray[a];
  
          setindividual(user, i);
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    const searchbarinput = () => {
      let searchbar = document.getElementById("name");
      let user = JSON.parse(localStorage.getItem('data'));
      let names = [];
  
      for (let i = 0; i < 100; i++) {
        names[i] = user[i].name.first + " " + user[i].name.last;
      }
  
      localStorage.setItem('names', JSON.stringify(names));
  
      document.querySelector(".submit").addEventListener("click", (event) => {
        event.preventDefault();
        let value = searchbar.value;
        let naamsarray = JSON.parse(localStorage.getItem('names'));
        let j = 1;
  
        for (let i = 0; i < 1000; i++) {
          if (value === naamsarray[i]) {
            console.log(`Name at ${i} is ${names[i]}`);
            setindividual(user[i], j);
            j++;
            loader.style.visibility = 'visible';
            setTimeout(() => {
              loader.style.visibility = 'hidden';
            }, 200);
          } else {
            loader.style.visibility = 'visible';
            setTimeout(() => {
              loader.style.visibility = 'hidden';
            }, 200);
          }
        }
      });
    };
  
    searchbarinput();
    getdata();
  });
  