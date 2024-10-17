let image=document.querySelector("#personimage");
let name=document.querySelector(".realname");
let gender=document.querySelector(".realgender");
let dob=document.querySelector(".realdob");
let info=localStorage.getItem('selectedUser');


let infoarray=JSON.parse(info);
console.log(infoarray);


image.src=infoarray.picture.medium;
name.innerText=`${" "+infoarray.name.title+"."+infoarray.name.first+" "+infoarray.name.last}`;
gender.innerText=`${infoarray.gender}`;
dob.innerText=`${infoarray.dob.date}`;
document.querySelector(".realphone").innerText=infoarray.phone;
document.querySelector(".realage").innerText=infoarray.dob.age;
document.querySelector(".realemail").innerText=infoarray.email;
document.querySelector(".reallocation").innerText=`${infoarray.location.coordinates.latitude+"\n"+infoarray.location.coordinates.latitude}`;
document.querySelector(".realcity").innerText=infoarray.location.city;
document.querySelector(".realcountry").innerText=infoarray.location.country;
document.querySelector(".realpostcode").innerText=infoarray.location.postcode
document.querySelector(".realstreet").innerText=`${infoarray.location.street.number+" "+infoarray.location.street.name}`
document.querySelector(".realtimezone").innerText=infoarray.location.timezone.description;







