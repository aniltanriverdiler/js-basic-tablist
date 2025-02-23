function getLondonInfo() {
  let openCityInfoLondon = document.getElementById('tab1-content');
  openCityInfoLondon.classList.remove('d-none');

  let closeCityInfoParis = document.getElementById('tab2-content');
  closeCityInfoParis.classList.add('d-none');

  let closeCityInfoTokyo = document.getElementById('tab3-content');
  closeCityInfoTokyo.classList.add('d-none');
}

function getParisInfo() {
  let openCityInfoParis = document.getElementById('tab2-content');
  openCityInfoParis.classList.remove('d-none');

  let closeCityInfoLondon = document.getElementById('tab1-content');
  closeCityInfoLondon.classList.add('d-none');

  let closeCityInfoTokyo = document.getElementById('tab3-content');
  closeCityInfoTokyo.classList.add('d-none');
}

function getTokyoInfo() {
  let openCityInfoTokyo = document.getElementById('tab3-content');
  openCityInfoTokyo.classList.remove('d-none');

  let closeCityInfoLondon = document.getElementById('tab1-content');
  closeCityInfoLondon.classList.add('d-none');

  let closeCityInfoParis = document.getElementById('tab2-content');
  closeCityInfoParis.classList.add('d-none');
}