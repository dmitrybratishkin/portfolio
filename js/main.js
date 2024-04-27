
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
}

/* Активация popup 
 Привязка popup qfurs-modal-1 и -2 к триггеру qfurs-trigger-1 и -2 */
document.addEventListener('DOMContentLoaded', function(){
	showModal('.qfurs-trigger-1','#qfurs-modal-1');
	showModal('.qfurs-trigger-2','#qfurs-modal-2');
});
