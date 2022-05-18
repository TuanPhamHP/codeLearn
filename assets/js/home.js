const advanceFilterBtn = document.querySelector('#advance-filter-btn');
const advanceFilter = document.querySelector('#advance-filter');

advanceFilterBtn.addEventListener('click', () => {
	if (advanceFilterBtn.classList.contains('collapsed')) {
		advanceFilterBtn.classList.remove('collapsed');
		advanceFilter.classList.add('show-advance-filter');
	} else {
		advanceFilterBtn.classList.add('collapsed');
		advanceFilter.classList.remove('show-advance-filter');
	}
});
