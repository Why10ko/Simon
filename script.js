document.querySelector(".form_block_button").addEventListener('click', rendering);

function rendering() {
  let name = document.querySelector('.name').value;
  let weight = document.querySelector('.weight').value;
  let speed = document.querySelector('.speed').value;
  let inform = document.querySelector('.inform').value;
  document.querySelector('.add_your_cat').innerHTML = `
  <div class="add_cat-resume">
      <img class="resume_img" src="https://w.forfun.com/fetch/37/37a4388d1f27bf3cb994125648f8ed81.jpeg?h=900&r=0.5" alt="Кот">
      <p>Имя: ${name}</p>
      <p>Вес: ${weight}.</p>
      <p>Скорость: ${speed}</p>
  </div>
  <div class="add_cat-description">
      <p>${inform}</p>
  </div>
  `
}

