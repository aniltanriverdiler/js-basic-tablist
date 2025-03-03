// London Section
function getLondonInfo() {
  let openCityInfoLondon = document.getElementById('tab1-content');
  openCityInfoLondon.classList.remove('d-none');

  let closeCityInfoParis = document.getElementById('tab2-content');
  closeCityInfoParis.classList.add('d-none');

  let closeCityInfoTokyo = document.getElementById('tab3-content');
  closeCityInfoTokyo.classList.add('d-none');


  let buttonOneActiveBackgroundColor = document.getElementById('tab1-button');
  buttonOneActiveBackgroundColor.classList.add('bg-secondary', 'text-white');

  let buttonTwoDisabledBackgroundColor = document.getElementById('tab2-button');
  buttonTwoDisabledBackgroundColor.classList.remove('bg-secondary', 'text-white');
  
  let buttonThreeDisabledBackgroundColor = document.getElementById('tab3-button');
  buttonThreeDisabledBackgroundColor.classList.remove('bg-secondary', 'text-white');
}

// Paris Section
function getParisInfo() {
  let openCityInfoParis = document.getElementById('tab2-content');
  openCityInfoParis.classList.remove('d-none');

  let closeCityInfoLondon = document.getElementById('tab1-content');
  closeCityInfoLondon.classList.add('d-none');

  let closeCityInfoTokyo = document.getElementById('tab3-content');
  closeCityInfoTokyo.classList.add('d-none');

  
  let buttonTwoActiveBackgroundColor = document.getElementById('tab2-button');
  buttonTwoActiveBackgroundColor.classList.add('bg-secondary', 'text-white');

  let buttonOneDisabledBackgroundColor = document.getElementById('tab1-button');
  buttonOneDisabledBackgroundColor.classList.remove('bg-secondary', 'text-white');
  
  let buttonThreeDisabledBackgroundColor = document.getElementById('tab3-button');
  buttonThreeDisabledBackgroundColor.classList.remove('bg-secondary', 'text-white');
}

// Tokyo Section
function getTokyoInfo() {
  let openCityInfoTokyo = document.getElementById('tab3-content');
  openCityInfoTokyo.classList.remove('d-none');

  let closeCityInfoLondon = document.getElementById('tab1-content');
  closeCityInfoLondon.classList.add('d-none');

  let closeCityInfoParis = document.getElementById('tab2-content');
  closeCityInfoParis.classList.add('d-none');


  let buttonThreeActiveBackgroundColor = document.getElementById('tab3-button');
  buttonThreeActiveBackgroundColor.classList.add('bg-secondary', 'text-white');

  let buttonTwoDisabledBackgroundColor = document.getElementById('tab2-button');
  buttonTwoDisabledBackgroundColor.classList.remove('bg-secondary', 'text-white');
  
  let buttonOneDisabledBackgroundColor = document.getElementById('tab1-button');
  buttonOneDisabledBackgroundColor.classList.remove('bg-secondary', 'text-white');
}

