
/* SHOW-CLOSE MODAL */
function showModal (openTrigger, modalContent){
	let openBtn = document.querySelectorAll(openTrigger);
	let modalContainer = document.querySelector(modalContent);
	
	if ( openBtn && modalContainer ){
		
		/* show modal */
		for ( let i = 0; i < openBtn.length; i++ ){
			openBtn[i].addEventListener('click', function(){
				modalContainer.classList.add('qfurs-show-modal');
			});
		}
		
		/* close modal */
		let qfurs_closeBtn = modalContainer.querySelector('.qfurs-close-modal');
		
		qfurs_closeBtn.addEventListener('click', function(){
			modalContainer.classList.remove('qfurs-show-modal');
		});
	}
	console.log('openModal');
}

/* Активация popup 
 Привязка popup qfurs-modal-1 и -2 к триггеру qfurs-trigger-1 и -2 */
document.addEventListener('DOMContentLoaded', function(){
	showModal('.qfurs-trigger-1','#qfurs-modal-1');
	showModal('.qfurs-trigger-2','#qfurs-modal-2');
});

document.addEventListener('DOMContentLoaded', function() {
	var myModal = document.getElementById('myModal');
	var myInput = document.getElementById('myInput');

	myModal.addEventListener('shown.bs.modal', function () {
		if (myInput) {
			myInput.focus();
		}
	});
});

document.addEventListener('DOMContentLoaded', function() {
	var myModals = document.getElementById('myModals');
	var myInputs = document.getElementById('myInputs');

	myModals.addEventListener('shown.bs.modal', function () {
		if (myInputs) {
			myInputs.focus();
		}
	});
});

document.addEventListener('DOMContentLoaded', function() {
	var myModalCamp = document.getElementById('myModalCamp');
	var myInputCamp = document.getElementById('myInputCamp');

	myModalCamp.addEventListener('shown.bs.modal', function () {
		if (myInputCamp) {
			myInputCamp.focus();
		}
	});
});

const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: false,
  
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
  
	// And if we need scrollbar
	scrollbar: {
	  el: '.swiper-scrollbar',
	},
  });