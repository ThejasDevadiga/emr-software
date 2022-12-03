const sideBar = document.querySelector(".sidebar")
fetch('../sideBar.html')
.then(res=>res.text())
.then(data =>{
    sideBar.innerHTML = data;
})