const fill = document.querySelector('.fill')
const emptys = document.querySelectorAll('.empty')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)


for(const empty of emptys){
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)

}

function dragStart(){
    this.className += ' hold'    //IT A WAY TO APPEND THE CLASS HOLD
   setTimeout(() => this.className = 'invisible', 0)
}

function dragEnd(){
    this.className = 'fill'

}

function dragOver(e){
    e.preventDefault()
}

function dragEnter(e){
    e.preventDefault()
    this.className += ' hovered'
}

function dragLeave(){
    this.className = 'empty'
}

function dragDrop(){
    this.className = 'empty'
    this.append(fill)
}