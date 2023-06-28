const arrImage = ['./img/cat1.jpg','./img/cat2.jpeg','./img/cat3.jpg']

function randomImageOfCard(arr) {
	let randomIndex = Math.floor(Math.random() * arr.length)
	return arrImage[randomIndex]
}