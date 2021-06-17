

const modalBtns = document.querySelectorAll('.modal-btn');
const modalOverlay = document.getElementById('overlay');
const content = document.getElementById('content');
const closeBtn = document.getElementById('close-modal');


const openModal = (e) => {
    const target = e.target.id;
    switch(target) {
        case 'reps-btn':
            content.innerHTML = `
                <div>
                    <img class="qualificationpics" src="./images/personalTrainingLevel3.jpg"> 
                </div>`
                
                modalOverlay.classList.add('is-active')
                break

            case 'diploma-btn':
                content.innerHTML =`
                <div>
                    <img class="qualificationpics" src="images/btech1.JPG"> 
                    <img class="qualificationpics" src="images/btech2.JPG"> 
                    <img class="qualificationpics" src="images/btech3.JPG">
                    
                </div>
                ` 
                modalOverlay.classList.add('is-active')
                break
            case 'degree-btn':
                content.innerHTML = `
                <div>
                    <img class="degreenpic" src="images/degree1.JPG"> 
                </div>
                `
                modalOverlay.classList.add('is-active')
                break        
   }
}

modalBtns.forEach(button => {
    button.addEventListener('click', openModal)
})
closeBtn.addEventListener('click', () => {
    modalOverlay.classList.remove('is-active')
});




