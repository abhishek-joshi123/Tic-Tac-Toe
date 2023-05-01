const cont = document.querySelector('.container')
const boxes = cont.querySelectorAll('.box')
const result = document.querySelector('.result')
const res = result.querySelector('span')

const ting = new Audio('Audios/ting.mp3')
const gameover = new Audio('Audios/gameover.mp3')


const arr = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

function CheckWhoWins(boxes) {
    arr.forEach((e) => {
        if((boxes[e[0]].innerText !== '') && (boxes[e[0]].innerText == boxes[e[1]].innerText) && (boxes[e[1]].innerText == boxes[e[2]].innerText)){
            if(res.innerText == ''){
                gameover.play()
                boxes[e[0]].style.cssText = 'background-color: antiquewhite;'
                boxes[e[1]].style.cssText = 'background-color: antiquewhite;'
                boxes[e[2]].style.cssText = 'background-color: antiquewhite;'
                result.classList.add('opac')
                if(boxes[e[0]].innerText == 'X')
                    res.innerText = 'Cross Wins!'
                else
                    res.innerText = 'Zero Wins!'
            }
        }
    })
}

function IsFull() {
    for(let box of boxes) {
        if(box.innerText == '')
            return false;
    }
    return true;
}


let flag = true;

boxes.forEach((box) => {
    box.addEventListener('click', () =>{
        ting.play()
        if(box.innerText == ''){
            if(flag == true){
                box.style.cssText = 'color: rgb(255, 60, 60);'
                box.textContent = 'X'
            }
            else{
                box.style.cssText = '  color: rgb(44, 234, 44);'
                box.textContent = 'O'
            }
            flag = !flag
        }

        CheckWhoWins(boxes)
        if(IsFull()){
            if(res.innerText == ''){
                gameover.play()
                result.classList.add('opac')
                res.innerText = 'Its a Tie!'
            }
        }
    })
})