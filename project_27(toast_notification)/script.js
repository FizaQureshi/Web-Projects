const button= document.getElementById('button')
const toasts= document.getElementById('toasts')

const messages=[
   ' message one',
    'message two',
    'message three',
    'message four',
    'message five'
]
const types=['info','success','error']

button.addEventListener('click',()=> createnotification())

function createnotification (message=null,type=null)
{
    const notif=document.createElement('div')
       notif.classList.add('toast')
       notif.classList.add(type?type:getRandomTypes())
       notif.innerHTML=message?message:getRandomMessage()
       toasts.appendChild(notif)

       setTimeout(()=> {
         notif.remove()
       },3000)
}
function getRandomMessage()
{
    return messages[Math.floor(Math.random()*messages.length)]
}
function getRandomTypes()
{
    return types[Math.floor(Math.random()*types.length)]
}
