let displays = document.getElementById('display');

let Buttons = Array.from(document.getElementsByTagName('button'));

// Buttons.map( num => {
//     num.addEventListener('click', (e) => {
//         //console.log('e.target.innerText');
//         switch(e.target.innerText){
//             case 'C':
//                 displays.value = ''
//                 break
//             case '=':
//                 try{
//                     displays.value = eval(displays.value)               
//                 }
//                 catch{
//                     displays.value = 'Invalid Value'
//                 }
//                 break
//             case 'Console Log':
//                     console.log(displays.value)
//                     break
//             default:
//                 displays.value += e.target.innerText;
//         }
//     })
// })


