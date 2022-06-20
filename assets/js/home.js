document.addEventListener('DOMContentLoaded', function () {
	const timeSet = 10000;
	const listLh1 = [...document.querySelectorAll('.lh1-radio')];
	const listLh2 = [...document.querySelectorAll('.lh2-radio')];
	const listLh3 = [...document.querySelectorAll('.lh3-radio')];
	const previewLh1 = document.querySelector('#lh1-preview-image');
	const previewLh2 = document.querySelector('#lh2-preview-image');
	const previewLh3 = document.querySelector('#lh3-preview-image');
	listLh1.forEach(o => {
		if (o.checked) {
			previewLh1.setAttribute('src', `./assets/images/${o.getAttribute('preview-image')}`);
		}
		o.addEventListener('change', () => {
			previewLh1.setAttribute('src', `./assets/images/${o.getAttribute('preview-image')}`);
		});
	});

	listLh2.forEach(o => {
		if (o.checked) {
			previewLh2.setAttribute('src', `./assets/images/${o.getAttribute('preview-image')}`);
		}
		o.addEventListener('change', () => {
			previewLh2.setAttribute('src', `./assets/images/${o.getAttribute('preview-image')}`);
		});
	});
	listLh3.forEach(o => {
		if (o.checked) {
			previewLh3.setAttribute('src', `./assets/images/${o.getAttribute('preview-image')}`);
		}
		o.addEventListener('change', () => {
			previewLh3.setAttribute('src', `./assets/images/${o.getAttribute('preview-image')}`);
		});
	});

	setInterval(() => {
		let cIdx1 = listLh1.findIndex(o => o.checked);
		if (cIdx1 + 1 === listLh1.length) {
			listLh1[0].checked = true;
			previewLh1.setAttribute('src', `./assets/images/${listLh1[0].getAttribute('preview-image')}`);
		} else {
			listLh1[cIdx1 + 1].checked = true;
			previewLh1.setAttribute('src', `./assets/images/${listLh1[cIdx1 + 1].getAttribute('preview-image')}`);
		}
		//
		let cIdx2 = listLh2.findIndex(o => o.checked);
		if (cIdx2 + 1 === listLh2.length) {
			listLh2[0].checked = true;
			previewLh2.setAttribute('src', `./assets/images/${listLh2[0].getAttribute('preview-image')}`);
		} else {
			listLh2[cIdx2 + 1].checked = true;
			previewLh2.setAttribute('src', `./assets/images/${listLh2[cIdx2 + 1].getAttribute('preview-image')}`);
		}
		//
		let cIdx3 = listLh3.findIndex(o => o.checked);
		if (cIdx3 + 1 === listLh3.length) {
			listLh3[0].checked = true;
			previewLh3.setAttribute('src', `./assets/images/${listLh3[0].getAttribute('preview-image')}`);
		} else {
			listLh3[cIdx3 + 1].checked = true;
			previewLh3.setAttribute('src', `./assets/images/${listLh3[cIdx3 + 1].getAttribute('preview-image')}`);
		}
	}, timeSet);
});
