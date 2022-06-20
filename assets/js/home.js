document.addEventListener('DOMContentLoaded', function () {
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
});
