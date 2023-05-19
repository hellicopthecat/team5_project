const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function() {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '제품명을 입력해 주세요.');
});

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

var position = new naver.maps.LatLng(37.5639, 127.0033);
var map = new naver.maps.Map('map', {
    center: position,
    zoom: 16
});

var markerOptions = {
    position: position,
    map: map,
    icon: {
        url: '/images/pin.png',
        size: new naver.maps.Size(60, 60),
        origin: new naver.maps.Point(0, 0),
        anchor: new naver.maps.Point(11, 35)
    }
};

var marker = new naver.maps.Marker(markerOptions);

var marker = new naver.maps.Marker(markerOptions);

// var map = new naver.maps.Map(document.getElementById('map'), {
//     center: new naver.maps.LatLng(37.5112, 127.0981),
//     zoom: 15
// });