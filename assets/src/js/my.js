// const { data } = require("jquery");

// $(document).ready(function(){
// 	$('input[name="phone"]').mask('+38(099) 999-9999')
// 	// $('.input[name="phoneHead"]').mask('+38(099) 999-9999')
// });
const towns = document.getElementById('towns')
// const data = [
// 	{ id: 0, name: 'Мариуполь'},
// 	{ id: 1, name: 'Донецк'},
// 	{ id: 2, name: 'Днепр'},
// 	{ id: 3, name: 'Краматорск'},
// 	{ id: 4, name: 'Киев'},
// 	{ id: 5, name: 'Одесса'},
// 	{ id: 6, name: 'Харьков'},
// 	{ id: 7, name: 'Волноваха'},
// 	{ id: 8, name: 'Славянск'},
// 	{ id: 9, name: 'Бердянск'},
// ]
// const dataOne = [
// 	{ id: 0, name: 'Мариуполь'},
// 	{ id: 1, name: 'Донецк'},
// 	{ id: 2, name: 'Днепр'},
// 	{ id: 3, name: 'Краматорск'},
// 	{ id: 4, name: 'Киев'},
// 	{ id: 5, name: 'Одесса'},
// 	{ id: 6, name: 'Харьков'},
// 	{ id: 7, name: 'Волноваха'},
// 	{ id: 8, name: 'Славянск'},
// 	{ id: 9, name: 'Бердянск'},
// ]

data.map((elem) => (
	towns.insertAdjacentHTML('beforeend', `
   <div >${elem.name}</div>
`)
))


// const checkBox = document.getElementById('checkBox')
// const check = document.getElementById('check')
// const checkBox1 = document.getElementById('checkBox1')
// const check1 = document.getElementById('check1')
// const checkBox2 = document.getElementById('checkBox2')
// const check2 = document.getElementById('check2')

const inputName = document.getElementById('inputName')
const confirmBtn = document.getElementById('confirmBtn')
const nameValid = document.getElementById('nameValid')

// checkBox.onclick = () => {
// 	check.classList.add('checkBoxActive')
// 	check.classList.remove('checkBoxNone')
// 	check1.classList.add('checkBoxNone')
// 	check2.classList.add('checkBoxNone')
// }

// checkBox1.onclick = () => {
// 	check1.classList.add('checkBoxActive')
// 	check1.classList.remove('checkBoxNone')
// 	check.classList.add('checkBoxNone')
// 	check2.classList.add('checkBoxNone')
// }
// checkBox2.onclick = () => {
// 	check2.classList.add('checkBoxActive')
// 	check2.classList.remove('checkBoxNone')
// 	check.classList.add('checkBoxNone')
// 	check1.classList.add('checkBoxNone')
// }

confirmBtn.onclick = () => {
	if (inputName.value.length <= 2) {
        inputName.style.color = 'red'   
		inputName.style.borderColor = 'red'  
		nameValid.classList.add('valid')
		nameValid.classList.remove('validNone')
	} else {
		inputName.style.color = 'black'   
		inputName.style.borderColor = '#454545'  
		nameValid.classList.remove('valid')
		nameValid.classList.add('validNone')
	}
}