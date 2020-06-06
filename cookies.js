// Hamid Mottaghian
document.querySelector('form').addEventListener('submit', (e) => {
    let checkBox = document.getElementById('checkBox');
    if (checkBox.checked == true){
        const setCookie = (name, age) => {
            document.cookie = "name" + "=" + name + ";" ;
            document.cookie = "age" + "=" + age + ";" ;
        }
        let name = document.getElementById('name').value;
        let age = document.getElementById('age').value;
        setCookie(name, age);
        
        console.log(document.cookie);
        return true;
    } else {
        e.preventDefault();
        return false;
    }
    
})

let cookies = document.cookie
    .split(';')
    .map(cookie => cookie.split('='))
    .reduce((accumulator,[key , value]) =>
        ({...accumulator,[key.trim()]: decodeURIComponent(value)}),{});

let storeName = cookies.name;
let storeAge = cookies.age;

console.log (storeName)
console.log (storeAge)

document.getElementById('result').innerHTML = `name : ${storeName} <br> age : ${storeAge}`;