const formBlockInputs = document.forms.formBlock; // получаем форму по ее имени
const formElements = formBlockInputs.elements; // получаю елементы формы

const cardContainer = document.querySelector('.render_container') // получаем контейнер куда будем делать вывод

formBlockInputs.addEventListener('submit', renderСard); // навешиваем событие

const inputsForm = Array.from(formElements).filter(el => el.name)

inputsForm.forEach(el => el.addEventListener('input', onChange))

const errorHidden = 'error_hidden'
const errorBlock = 'error_block'
const inputRedBorder = 'input_red_border'
const inputGreenBorder = 'input_green_border'

const addClassFunc = (el,message) => el.classList.add(message)
const removeClassFunc = (el,message) => el.classList.remove(message)

function onChange(e) {	
	const errorEl = document.getElementById(`error-${this.name}`)
	
	if(!e.target.value) {
		addClassFunc(errorEl,errorBlock)
		addClassFunc(this,inputRedBorder)
	} else {
		removeClassFunc(errorEl,errorBlock)
		addClassFunc(errorEl,errorHidden)
		removeClassFunc(this,inputRedBorder)
		addClassFunc(this,inputGreenBorder)
	}
}

function validation() {
	let result = true;

	inputsForm.forEach(el => {					
    if (!el.value.trim()) {
			result = false
			
			const errorElement = document.getElementById(`error-${el.name}`)

			if (errorElement.classList.contains(errorHidden)) {
				removeClassFunc(errorElement,errorHidden)
				addClassFunc(errorElement,errorBlock)
			}
			
			el.classList.add(inputRedBorder)
						
    }  				
  })
	
	return result
}


function renderСard(e) {
	e.preventDefault()

		const id = Math.random()
		const	image = randomImageOfCard(arrImage)
		const	nickname = formElements.nickname.value
		const	weight = formElements.weight.value
		const	speed = formElements.speed.value
		const	textarea = formElements.textarea.value
		
		if (validation()) {

			const cardsStorage = parseStorage('cards')	
			localStorage.setItem('cards', JSON.stringify([...cardsStorage, {id,image,nickname,weight,speed,textarea}]))			
			
			let card
			if(nickname.toLowerCase() === 'марсель') {
				card = new Card(id,'./img/Марсель.png',nickname,weight,speed,textarea) 
			} else {
				card = new Card(id,image,nickname,weight,speed,textarea)
			}

			cardContainer.append(card.render())
					
			inputsForm.forEach(el => el.classList.remove('input_green_border'))
			formBlockInputs.reset() 
		} 

}

const cardOfMyCat = new Card(25,'./img/Безымянный.png','Simon','4','звуковая','Про кота...') 
cardContainer.append(cardOfMyCat.render())

function parseStorage(key) {
	return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : []
}

const cardsStorage = parseStorage('cards')

cardsStorage.forEach(i => { 
	const {id,image,nickname,weight,speed,textarea} = i
	let card
	if(nickname.toLowerCase() === 'марсель') {
		card = new Card(id,'./img/Марсель.png',nickname,weight,speed,textarea) 
	} else {
		card = new Card(id,image,nickname,weight,speed,textarea)
	} 
	cardContainer.append(card.render())
})
