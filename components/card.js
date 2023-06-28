class Card {
	constructor(id,image,name,weight,speed,description) {
		this.id = id
		this.image = image
		this.name = name
		this.weight = weight
		this.speed = speed
		this.description = description 
		this.container = null
		this.render = this.render.bind(this)
		this.remove = this.remove.bind(this)
	}

	remove(){
			const cardsStorage = parseStorage('cards')
			const result = cardsStorage.filter(el => el.id !== this.id)

			localStorage.setItem('cards', JSON.stringify(result))
			this.container.classList.add('card_wrapper_dlt')
			setTimeout(() => this.container.remove(),500)
	}

	render(){
		const container = document.createElement('div')
		container.classList.add('card_wrapper')
		container.setAttribute("id", `${this.id}`);
		container.insertAdjacentHTML('beforeend', `
			<div>
				<img class="resume_img" src=${this.image} alt="Кот">
				<p>Имя: ${this.name}</p>
				<p>Вес: ${this.weight} кг.</p>
				<p>Скорость: ${this.speed}</p>
			</div>
			<div class="add_block-description">
				<p class="add_block-description_paragraph">${this.description}</p>
			</div>
			<img src='../img/closeImg.png' class="imgCloseCard"></img>
		`)
		
		this.container = container

		const imgCloseCard = container.querySelector('.imgCloseCard')

		this.id === 25 ? imgCloseCard.remove() : this.id

		imgCloseCard.addEventListener('click', this.remove)
		
		return container
	}
}