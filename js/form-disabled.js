const adForm = document.querySelector('.ad-form');
const mapFiltersForm = document.querySelector('.map__filters');


const setDisabledStatePage = function() {
  adForm.classList.add('ad-form--disabled');
  adForm.querySelectorAll('fieldset').forEach((it) => it.disabled = true);
  mapFiltersForm.classList.add('map__filters--disabled');
  mapFiltersForm.querySelectorAll('.map__filter').forEach((it) => it.disabled = true);
  mapFiltersForm.querySelectorAll('.map__checkbox').forEach((it) => it.disabled = true);
}
const setActiveStatePage = function() {
  adForm.classList.remove('ad-form--disabled');
  mapFiltersForm.classList.remove('map__filters--disabled');
  adForm.querySelectorAll('fieldset').forEach((it) => it.disabled = false);
  mapFiltersForm.querySelectorAll('.map__filter').forEach((it) => it.disabled = false);
}
setDisabledStatePage();

export {setActiveStatePage, setDisabledStatePage}



