// const { data } = require("jquery");

// $(document).ready(function(){
// 	$('input[name="phone"]').mask('+38(099) 999-9999')
// 	// $('.input[name="phoneHead"]').mask('+38(099) 999-9999')
// });
const towns = document.getElementById('towns')
const data = [
	{
		id: 0,
		name: 'Mariupol'
	},
	{
		id: 1,
		name: 'Donetsck'
	},
	{
		id: 2,
		name: 'Berdiansk'
	},
	{
		id: 3,
		name: 'Odessa'
	},
]

data.map((elem) => (
	towns.insertAdjacentHTML('beforeend', `
   <div >${elem.name}</div>
`)
))


const checkBox = document.getElementById('checkBox')
const check = document.getElementById('check')
const checkBox1 = document.getElementById('checkBox1')
const check1 = document.getElementById('check1')
const checkBox2 = document.getElementById('checkBox2')
const check2 = document.getElementById('check2')

checkBox.onclick = () => {
	check.classList.add('checkBoxActive')
	check.classList.remove('checkBoxNone')
	check1.classList.add('checkBoxNone')
	check2.classList.add('checkBoxNone')
}

checkBox1.onclick = () => {
	check1.classList.add('checkBoxActive')
	check1.classList.remove('checkBoxNone')
	check.classList.add('checkBoxNone')
	check2.classList.add('checkBoxNone')
}
checkBox2.onclick = () => {
	check2.classList.add('checkBoxActive')
	check2.classList.remove('checkBoxNone')
	check.classList.add('checkBoxNone')
	check1.classList.add('checkBoxNone')
}