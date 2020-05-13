var isActive = false;
var isSort = false;
var pageActive = 0;

window.onload = function() {

		document.querySelector('.header-mobile').onclick = function(){
		
		width = window.innerWidth;
		menu = document.getElementById('header-menu');

		if (width <= 800) {

			if (isActive != true) {

				isActive = true;

				

				menu.setAttribute("style", "display: block; position: absolute; left: calc(66.6vw - 40px); top: 75px; width: 113px; height: 240px; background-color: #01a2a6; z-index: 10; opacity: 0.9;");

				for (var i = menu.children.length - 1; i >= 0; i--) {
					menu.children[i].style.marginLeft = "0";
					menu.children[i].style.width = '113px';
				}
			
			} else {
				isActive = false;

				

				menu.removeAttribute("style");

				
			}

		}


		}


		document.querySelector('.destination-sort-all').onclick = function(){

			all = document.querySelector('.destination-sort-all');
			recomended = document.querySelector('.destination-sort-recomended');

			all.style.fontWeight = 900;
			all.style.color = '#777777';
			recomended.style.fontWeight = 400;
			recomended.style.color = '#aeaeae';
		
		}

		document.querySelector('.destination-sort-recomended').onclick = function(){

			all = document.querySelector('.destination-sort-all');
			recomended = document.querySelector('.destination-sort-recomended');

			all.style.fontWeight = 400;
			all.style.color = '#aeaeae';
			recomended.style.fontWeight = 900;
			recomended.style.color = '#777777';
		
		}

		for (var i = document.getElementsByClassName('pagination').length - 1; i >= 0; i--) {
			document.getElementsByClassName('pagination')[i].addEventListener('click',  function(event){

			page = event.target;
			console.log(page);
			number = page.getAttribute('data-page');
			active = document.getElementsByClassName('pagination')[pageActive];
			active.classList.remove('page-active');
			
			if (number == 5) {
				if(pageActive == 4){
					pageActive = 0;
				} else {
					pageActive++;	
				}
				
				active = document.getElementsByClassName('pagination')[pageActive];
				active.classList.add('page-active');
			} else if (number == 6) {
				if (pageActive == 4) {
					pageActive = 0;
				} else {
					pageActive = 4;
				}
				active = document.getElementsByClassName('pagination')[pageActive];
				active.classList.add('page-active');
			} else {
				page.classList.add('page-active');
				pageActive = number;
			}
		});
		}

		
}

window.onresize = function() {

	if(window.innerWidth > 800){
		menu = document.getElementById('header-menu');
		menu.removeAttribute("style");

		for (var i = menu.children.length - 1; i >= 0; i--) {
			menu.children[i].removeAttribute("style");
		}
	}
}

function allowDrop(e) {
	e.preventDefault();
}

function drag(e) {
	e.dataTransfer.setData('text', e.target.id);
}

function drop(e) {
	e.preventDefault();
	if (e.target.id.match("anti-drag")){
     	data = e.dataTransfer.getData('text');
		e.target.parentElement.parentElement.appendChild(document.getElementById(data));
		return;
	}

	if (e.target.id.match("mega-drag")){
     	data = e.dataTransfer.getData('text');
		e.target.parentElement.parentElement.parentElement.appendChild(document.getElementById(data));
		return;
	}

	if (e.target.id.match("draggable")){
		data = e.dataTransfer.getData('text');
		e.target.parentElement.appendChild(document.getElementById(data));
		return;
	}

	if (e.target.id.match("drag-text")){
		data = e.dataTransfer.getData('text');
		e.target.parentElement.appendChild(document.getElementById(data));
		return;
	}

	data = e.dataTransfer.getData('text');
	e.target.appendChild(document.getElementById(data));
}
