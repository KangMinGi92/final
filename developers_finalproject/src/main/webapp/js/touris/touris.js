// 헤더
$(window).ready(function () {
  $(".btn").css("background-color", "transparent");
});

$(".main-menu").mouseover(function () {
  $(".navbar").addClass("drop");
  $("#blurSection").css("display", "block");
});

$(".main-menu").mouseout(function () {
  $("#blurSection").css("display", "none");
});
// /헤더/
// /모달창 js/ 
$(document).ready(function () {
  function openModal() {
    $(".totalmodaldiv").show();
    $(".mainmodaldiv").show();
  }
  function closeModal() {
    $(".totalmodaldiv").hide();
    $(".mainmodaldiv").hide();
  }
  $(".TEXT").on("click", function () {
    openModal();
  });
  $(".mainmodalspan").on("click", function () {
    closeModal();
  });
});

function getContextPath() {
	var hostIndex = location.href.indexOf(location.host) + location.host.length;
	return location.href.substring(hostIndex, location.href.indexOf('/', hostIndex));
};


//-------------------------------------------------------------------------- 첫번재 지도 api
var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
       	center: new kakao.maps.LatLng(latitude, Longitude), // 지도의 중심좌표
        level: 7 // 지도의 확대 레벨
    };

// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
var map = new kakao.maps.Map(mapContainer, mapOption); 
function relayout() {    
    
  // 지도를 표시하는 div 크기를 변경한 이후 지도가 정상적으로 표출되지 않을 수도 있습니다
  // 크기를 변경한 이후에는 반드시  map.relayout 함수를 호출해야 합니다 
  // window의 resize 이벤트에 의한 크기변경은 map.relayout 함수가 자동으로 호출됩니다
  map.relayout();
}

// 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
var mapTypeControl = new kakao.maps.MapTypeControl();

// 지도 타입 컨트롤을 지도에 표시합니다
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);


// 주소-좌표 변환 객체를 생성합니다
var geocoder = new kakao.maps.services.Geocoder();


var overlay;
var previousMarker = null;
var previousOverlay = null;
// 주소로 좌표를 검색합니다
$(document).on('mouseover','.selectlist2', function() {
	const listbox = $(this).find('.listbox');
	const listboximg = listbox.find(".listboximg img").attr("src");
	
	const listtext =  $(this).find('.listtext');
	const listtitletext = listtext.find(".listtitle-text").text();
	const listtitleaddr = listtext.find('.listtitleaddr');
    const textaddr = listtitleaddr.find('.listtitle-textaddr').text();
geocoder.addressSearch(textaddr, function(result, status) {

    // 정상적으로 검색이 완료됐으면 
     if (status === kakao.maps.services.Status.OK) {

        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
		
		//전에 있던 마커와 오버레이 제거
		 if (previousMarker) {
                previousMarker.setMap(null);
                previousOverlay.setMap(null);
            }
        // 결과값으로 받은 위치를 마커로 표시합니다
        var marker= new kakao.maps.Marker({
            map: map,
            position: coords
        });
   		 previousMarker = marker;
		 
        // 인포윈도우로 장소에 대한 설명을 표시합니다
           var content = '<div class="wrap">' + 
            '    <div class="info">' + 
            '        <div class="title">' + 
             			listtitletext+ 
            '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' + 
            '        </div>' + 
            '        <div class="body">' + 
            '            <div class="img">' +
            '                <img src="'+listboximg+'" width="73" height="70">' +
            '           </div>' + 
            '            <div class="desc">' + 
            			'<div class="ellipsis">'+textaddr+'</div>' + 
            '                <div class="jibun ellipsis">(우) 63309 (지번) 영평동 2181</div>' + 
            '                <div><a href="https://www.kakaocorp.com/main" target="_blank" class="link">홈페이지</a></div>' + 
            '            </div>' + 
            '        </div>' + 
            '    </div>' +    
            '</div>'

            // 커스텀 오버레이를 새로 생성하여 마커 위에 표시합니다
            overlay = new kakao.maps.CustomOverlay({
                content: content,
                map: map,
                position: marker.getPosition()       
            });
            previousOverlay = overlay;
        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        map.setCenter(coords);
        
    } 
});
    
});

$(document).on('mouseout', 'ul.listarea-right', function() {
    // Remove the previous marker if exists
    if (previousMarker) {
        previousMarker.setMap(null);
    }

    // Remove the previous overlay if exists
    if (previousOverlay) {
        previousOverlay.setMap(null);
    }
});

/*var imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png', // 마커이미지의 주소입니다    
    imageSize = new kakao.maps.Size(50, 57), // 마커이미지의 크기입니다
    imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
var addedMarkers = []; // 마커 
var linePath = []; // 경로 선 
let markerIndex = 0; // 클로저를 이용하여 클릭한 순서를 기억할 변수 선언
var infowindow; // 숫자를 띄어주는 infowindow
var lastInfoWindow = []; // 숫자를 띄어주는 infowwindow를 넣어줄 배열*/

//관광 경로클릭했을때 생기는 마커
$(document).on('click','.plus-travel', function() {
	$('.center-wrapper').empty();
	if ($('#calander').val() === '') {
		var heartbeat = $("#calander");
		heartbeat.addClass("heartbeat");
		setTimeout(function() {
			heartbeat.removeClass("heartbeat");
		}, 1500);
		
		
		
		 const randomTag = $('<div class="random-tag">여행 가고싶은 날짜를 먼저 추가해주세요</div>');
    $('.center-wrapper').append(randomTag);
// 임의의 태그가 나타남
    $('.center-wrapper').css('display', 'block');
  // 6초 후에 사라짐 (fadeOut 애니메이션)
  setTimeout(function() {
    $('.center-wrapper').fadeOut(function() {
      randomTag.remove();
    });
  }, 1500);
    return; 
  }
	pulastravel();
	pulastravel2();	
});

var imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png', // 마커이미지의 주소입니다    
	imageSize = new kakao.maps.Size(50, 57), // 마커이미지의 크기입니다
	imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
var addedMarkers = []; // 마커 
var linePath = []; // 경로 선 
let markerIndex = 0; // 클로저를 이용하여 클릭한 순서를 기억할 변수 선언
/*var inforwindow = []*/// 숫자를 띄어주는 infowindow
var lastInfoWindow = []; // 숫자를 띄어주는 infowwindow를 넣어줄 배열
var polyline;
var lines = [];
function pulastravel() {
	$(".listarea .selectlist").each(function(index, e) {
		const listtitleTextValue = $(e).find(".listtitle-text").text();
		const textaddr = $(e).find('.listtitle-textaddr').text();
		const srcValue = $(e).find('.listboximg img').attr('src');
		geocoder.addressSearch(textaddr, function(result, status) {
			// 정상적으로 검색이 완료됐으면 
			if (status === kakao.maps.services.Status.OK) {

				var markerPosition = new kakao.maps.LatLng(result[0].y, result[0].x);


				// 결과값으로 받은 위치를 마커로 표시합니다
				var marker = new kakao.maps.Marker({
					map: map,
					position: markerPosition,
					image: markerImage
				});

				/*addmarkers.push(marker);*/
				var iwContent = '<div class="iwcontentarea" style="padding:5px;"><div class="iwcontent" style="color:black;">' + (index + 1) + '</div></div>';
				// 인포윈도우를 생성합니다
				var inforwindow = new kakao.maps.CustomOverlay({
					content: iwContent,
					map: map,
					position: marker.getPosition()
				});

				linePath[index] = markerPosition;
				// 지도에 표시할 선을 생성합니다
				polyline = new kakao.maps.Polyline({
					path: linePath, // 선을 구성하는 좌표배열 입니다
					strokeWeight: 5, // 선의 두께 입니다
					strokeColor: '#FFAE00', // 선의 색깔입니다
					strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
					strokeStyle: 'solid' // 선의 스타일입니다
				});

				$(document).on('click', '.select-delte', function() {
					marker.setMap(null);
					polyline.setMap(null);
					inforwindow.setMap(null);

				});

				lines.push(polyline);
				lastInfoWindow.push(inforwindow);
				addedMarkers.push(marker);
				polyline.setMap(map);
				// 인포윈도우로 장소에 대한 설명을 표시합니다
				kakao.maps.event.addListener(marker, 'click', function() {
					var content = '<div class="wrap">' +
						'    <div class="info">' +
						'        <div class="title">' +
						listtitleTextValue +
						'            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
						'        </div>' +
						'        <div class="body">' +
						'            <div class="img">' +
						'                <img src="' + srcValue + '" width="73" height="70">' +
						'           </div>' +
						'            <div class="desc">' +
						'<div class="ellipsis">' + textaddr + '</div>' +
						'                <div class="jibun ellipsis">(우) 63309 (지번) 영평동 2181</div>' +
						'                <div><a href="https://www.kakaocorp.com/main" target="_blank" class="link">홈페이지</a></div>' +
						'            </div>' +
						'        </div>' +
						'    </div>' +
						'</div>'

					//전에 있던 마커와 오버레이 제거
					if (previousOverlay) {
						previousOverlay.setMap(null);
					}
					// 커스텀 오버레이를 새로 생성하여 마커 위에 표시합니다
					overlay = new kakao.maps.CustomOverlay({
						content: content,
						map: map,
						position: marker.getPosition()
					});
					previousOverlay = overlay;
				});
				// 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
				map.setCenter(markerPosition);


			}

		});

	});

};

$(document).on('click', '.delete-travel', function() {
// 기존의 마커, 경로, 인포윈도우 제거
    addedMarkers.forEach(function(marker, index) {
        marker.setMap(null);
  });for(var i = 0; i < addmarkers.length; i++){
		addmarkers[i].setMap(null);
	}
  lastInfoWindows.forEach(function(inforwindow, index){
		inforwindow.setMap(null);
	});
   lastInfoWindow.forEach(function(inforwindow, index){
		inforwindow.setMap(null);
	});
	for(var i = 0; i < lines.length; i++){
		lines[i].setMap(null);
	}
	addmarkers = [];
    lastInfoWindows = [];
    addedMarkers = [];
    lastInfoWindow = [];
    linePath = [];
    lines = [];
    pulastravel();
    pulastravel2();
});

function closeOverlay() {
    overlay.setMap(null);     
}

//-------------------------------------------------------------------------- 여기까지 첫번재 지도 api

//모달창 지도 api

var mapContainer2 = document.getElementById('routemap'), // 지도를 표시할 div 
    mapOption2 = { 
      center: new kakao.maps.LatLng(latitude, Longitude), // 지도의 중심좌표
      level: 10 // 지도의 확대 레벨
    };
    
// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
// 지도를 표시하는 div 크기를 변경한 이후 지도가 정상적으로 표출되지 않을 수도 있습니다
  // 크기를 변경한 이후에는 반드시  map.relayout 함수를 호출해야 합니다 
  // window의 resize 이벤트에 의한 크기변경은 map.relayout 함수가 자동으로 호출됩니다
var map2 = new kakao.maps.Map(mapContainer2, mapOption2); 
function relayout() {    
}

// 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
var mapTypeControl2 = new kakao.maps.MapTypeControl();

// 지도 타입 컨트롤을 지도에 표시합니다
map2.addControl(mapTypeControl2, kakao.maps.ControlPosition.TOPRIGHT);


var addmarkers= [];
var lastInfoWindows = [];
//관광 경로클릭했을때 생기는 마커
function pulastravel2() {
	$(".listarea .selectlist").each(function(index, e) {
		const listtitleTextValue = $(e).find(".listtitle-text").text();
		const textaddr = $(e).find('.listtitle-textaddr').text();
		const srcValue = $(e).find('.listboximg img').attr('src');
		geocoder.addressSearch(textaddr, function(result, status) {
			// 정상적으로 검색이 완료됐으면 
			if (status === kakao.maps.services.Status.OK) {

				var markerPosition = new kakao.maps.LatLng(result[0].y, result[0].x);


				// 결과값으로 받은 위치를 마커로 표시합니다
				var marker2 = new kakao.maps.Marker({
					map: map2,
					position: markerPosition,
					image: markerImage
				});

				/*addmarkers.push(marker);*/
				var iwContent = '<div class="iwcontentarea" style="padding:5px;"><div class="iwcontent" style="color:black;">' + (index + 1) + '</div></div>';
				// 인포윈도우를 생성합니다
				var inforwindow = new kakao.maps.CustomOverlay({
					content: iwContent,
					map: map2,
					position: marker2.getPosition()
				});

				linePath[index] = markerPosition;
				// 지도에 표시할 선을 생성합니다
				polyline = new kakao.maps.Polyline({
					path: linePath, // 선을 구성하는 좌표배열 입니다
					strokeWeight: 5, // 선의 두께 입니다
					strokeColor: '#FFAE00', // 선의 색깔입니다
					strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
					strokeStyle: 'solid' // 선의 스타일입니다
				});


				lines.push(polyline);
				lastInfoWindows.push(inforwindow);
				addmarkers.push(marker2);
				polyline.setMap(map2);
				// 인포윈도우로 장소에 대한 설명을 표시합니다
				kakao.maps.event.addListener(marker2, 'click', function() {
					var content = '<div class="wrap">' +
						'    <div class="info">' +
						'        <div class="title">' +
						listtitleTextValue +
						'            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
						'        </div>' +
						'        <div class="body">' +
						'            <div class="img">' +
						'                <img src="' + srcValue + '" width="73" height="70">' +
						'           </div>' +
						'            <div class="desc">' +
						'<div class="ellipsis">' + textaddr + '</div>' +
						'                <div class="jibun ellipsis">(우) 63309 (지번) 영평동 2181</div>' +
						'                <div><a href="https://www.kakaocorp.com/main" target="_blank" class="link">홈페이지</a></div>' +
						'            </div>' +
						'        </div>' +
						'    </div>' +
						'</div>'

					//전에 있던 마커와 오버레이 제거
					if (previousOverlay) {
						previousOverlay.setMap(null);
					}
					// 커스텀 오버레이를 새로 생성하여 마커 위에 표시합니다
					overlay = new kakao.maps.CustomOverlay({
						content: content,
						map: map2,
						position: marker2.getPosition()
					});
					previousOverlay = overlay;
				});
				// 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
				map2.setCenter(markerPosition);


			}

		});

	});

};
$(document).on('click', '.selectdetailsbtn3', function() {
	$(this).parents('.selectroutedetailslist').remove();
   // 기존의 마커, 경로, 인포윈도우 제거
  for(var i = 0; i < addmarkers.length; i++){
		addmarkers[i].setMap(null);
	}
  lastInfoWindows.forEach(function(inforwindow, index){
		inforwindow.setMap(null);
	});
	for(var i = 0; i < lines.length; i++){
		lines[i].setMap(null);
	}
 	addmarkers = [];
    lastInfoWindows = [];
    lines = [];
    updatemarker();
});
function closeOverlay() {
    overlay.setMap(null);     
}

// 지도 fullscreen하는 함수
// * 전체 화면으로 표시
// * elem: 전체 화면으로 표시할 엘리먼트
// * https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_fullscreen
// */
var elem = document.getElementById('routemap');
function openFullScreen() {
	if(!elem) alert("specify element for full screen.")
	if (elem.requestFullscreen) {
		elem.requestFullscreen();
	} else if (elem.mozRequestFullScreen) { /* Firefox */
		elem.mozRequestFullScreen();
	} else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
		elem.webkitRequestFullscreen();
	} else if (elem.msRequestFullscreen) { /* IE/Edge */
		elem.msRequestFullscreen();
	}
}; 
// 현재 지도를 Full Screen에서 표시합니다.
$(".fullscreen>a").click(function(){
	var mapContainer = document.getElementById('routemap');
    // 사이즈를 정해 줘야 지도의 센터를 설정할 수 있습니다.
	mapContainer.style.width = screen.width + 'px';
	mapContainer.style.height = screen.height + 'px';

	openFullScreen('routemap');
	// 이동할 위도 경도 위치를 생성합니다 
	var moveLatLon = new kakao.maps.LatLng(latitude, Longitude);
	// 지도 레벨 설정( 1~14 낮을 수록 확대)
	map2.setLevel(10); // 현재 맵 보다 확대해서 표시	
	map2.relayout();  // 지도의 레이 아웃을 재 정렬합니다.
	map2.setCenter(moveLatLon); // 지도 중심을 이동 시킵니다
});
// FullScreen에서 ESC할 경우 작동함
document.addEventListener('fullscreenchange', exitHandler);
document.addEventListener('webkitfullscreenchange', exitHandler);
document.addEventListener('mozfullscreenchange', exitHandler);
document.addEventListener('MSFullscreenChange', exitHandler);

function exitHandler() {
	if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
		// 현재 맵
		var mapContainer = document.getElementById('routemap');
		mapContainer.style.width = '100%'; // 원래 사이즈로 복귀
		mapContainer.style.height = '91.5vh';
		// 이동할 위도 경도 위치를 생성합니다 
		var moveLatLon = new kakao.maps.LatLng(latitude, Longitude);
		// 지도 레벨 설정( 1~14 낮을 수록 확대)
		map.setLevel(10);
		map.relayout(); // 지도의 레이아웃을 재 정렬합니다.
		map.setCenter(moveLatLon); // 지도 중심을 이동 시킵니다
	}
}
// 모달창 지도 api
function generateDynamicContent(listtitleTextValue, textaddr, srcValue, hidenid) {
  const newElement = document.createElement('div');
  newElement.classList.add('selectroutedetailslist');
 
  newElement.innerHTML = `
  <div class="test">
  <div class="hiddenlevel"></div>
    <div class="arrowarea">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
        <path fill-rule="evenodd" d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z" clip-rule="evenodd" />
      </svg>                  
    </div>
    <div class="selectdetailsroutelist" id="selectdetailsroutelist" draggable="true">
      <div class="selectdetailscardarea">
      <div class="hiddencontentid" id="hiddenidtag">${hidenid}</div>
        <div class="selectdetailsimagesarea">
          <div class="selectdetailsicon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" width="10" color="white">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"></path>
            </svg>
          </div>
          <img class="selectdetailsimage" src="${srcValue}" alt="Image" loading="lazy">
        </div>
        <div class="selectrighttextarea">
          <div class="selectdetailslisttitletextarea">
            <div class="selectdetailslisttitletext">
              <div class="selectdetailsmaxarea"></div>
              <span class="selectdetailstext">${listtitleTextValue}</span>
              <span class="selectdetailstextaddress">${textaddr}</span>
            </div>
            <div class="selectdetailstitleicon">
              <label class="ui-bookmark">
                <input type="checkbox">
                <div class="bookmark">
                  <svg viewBox="0 0 32 32">
                    <g>
                      <path d="M27 4v27a1 1 0 0 1-1.625.781L16 24.281l-9.375 7.5A1 1 0 0 1 5 31V4a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4z"></path>
                    </g>
                  </svg>
                </div>
              </label>
            </div>
          </div>
          <div class="selectdetailsdeletearea">
            <div class="selectdetailsbtn">시간표</div>
            <div class="selectdetailsbtn2">상세설명</div>
            <div class="selectdetailsbtn3">삭제</div>
          </div>
        </div>
      </div>
    </div>
    </div>`;
  
  			
  return newElement;
}
$(document).on('click', '.makerouteplusbtnarea', function(){
	const textaddr = $(this).parent('.smailspottext').text();
	const listtitleTextValue =  $(this).parent('.smailspottext').parent('.h7').find('.nametext').text();
	const srcValue = ($(this).parents('.makeroutesearchlistli').find('.makeroutesearchlistliimges .makesearchimg').attr('src'));
	const hidenid = $(this).parent('.smailspottext').parent('.h7').find('.hidenidtext').text();
	const newDynamicContent = generateDynamicContent(listtitleTextValue, textaddr, srcValue, hidenid);
	
	const parentElement = $(".routedatailslists");
	const newElement = $(newDynamicContent)[0];
	parentElement[0].appendChild(newElement);
	const lengthindex = $(".routedatailslists .selectroutedetailslist").length;
	const firstdailyindex = $('.dailytext1').eq(0);
	firstdailyindex.empty();
	firstdailyindex.append(lengthindex);
	
	updatemarker();
	
});

// 달력 js
$(function() {
	$('#calander').datepicker({
  dateFormat: 'yy-mm-dd',
  maxDate: 0
});
	function updateSelectBox(startDate, endDate) {
    const selectBox = document.getElementById('dayselectbox');
    const currentDate = startDate.clone(); // Start from the selected start date
    let dayCount = 1;

    selectBox.innerHTML = '';
    
	const alldaydetailscheduleDiv = document.querySelector('.alldaydetailschedule');
    alldaydetailscheduleDiv.innerHTML = '';
    
    // Loop through the dates and create options
    while (currentDate <= endDate) {
      const optionText = dayCount + '일차 ' + currentDate.format('M월 D일 ddd');

      const newOption = document.createElement('option');
      newOption.value = optionText;
      newOption.textContent = optionText;
      selectBox.appendChild(newOption);
      
      
      
      const newElement = document.createElement('div');
      newElement.classList.add('detailroutetour-' + dayCount); // 
      newElement.id = 'detailroutetareaid';
      
      newElement.innerHTML = '<div class="alldayinputfield">' +
  '  <div id="dayselectbox" class="dayselecttag">' +
  		/*'<option>'+optionText+'<option>'*/optionText+
  '  </div>' +
  '</div>' +
  '<div class="detailroutetext"><hs>일차를 누르면 일정 전체 변경이 가능합니다.</hs></div>' +
  '<div class="dailyroutedetaillist">' +
  '  <div class="dailyroutecountarea">' +
  '    <div class="dailyroutetext">' +
  '      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">' +
  '        <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />' +
  '      </svg>' +
  '      <div class="dailytext1"></div>' +
  '      <div class="dailytext2">장소</div>' +
  '    </div>' +
  '  </div>' +
  '  <hr class="hr2"></hr>' +
  '  <div class="routedatailslists" id="routedatails">' +
  '    </div>' +
  '  </div>' +
  '</div>';
      
alldaydetailscheduleDiv.appendChild(newElement);




      dayCount++;
      currentDate.add(1, 'day'); // Move to the next date
    }
  }
	//날짜 갯수 구하기
	function getDateRangeCount(dateRangeString) {
		const dateStrings = dateRangeString.split(' - ');
		const startDate = moment(dateStrings[0], 'YYYY/MM/DD');
		const endDate = moment(dateStrings[1], 'YYYY/MM/DD');
		const duration = moment.duration(endDate.diff(startDate));
		return duration.asDays() + 1; 
	}

  $("ul.listarea-right").on("click", ".plus-travel", function () {
	if ($('#calander').val() === '') {
    return; // 입력 필드가 비어있을 때는 이벤트 핸들러 종료
  }
    var parentLi = $(this).closest("li.selectlist2");
    const immediateParent = $(this).parent();
    const listbox = immediateParent.parent();
    const listtextElement = listbox.find(".listtext");
    const listtitleTextValue = listtextElement.find(".listtitle-text").text();
    const listtitleaddr = listtextElement.find(".listtitleaddr");
    const textaddr = listtitleaddr.find(".listtitle-textaddr").text();
    const srcValue = listbox.find(".listboximg img").attr("src");
	const hidentourisid = parentLi.find(".listbtn");
	const hidenid = hidentourisid.find(".detail-travellist a .tourisidhidden").text();
	const indexnumber = $(".listarea .selectlist").length;
	
    const newDynamicContent = generateDynamicContent(listtitleTextValue, textaddr, srcValue, hidenid);
	
	const parentElement = $(".routedatailslists");
	const newElement = $(newDynamicContent)[0];
	
	// selectroutedetailslist 태그의 개수를 구합니다.
  const selectroutedetailslistCount = parentElement.find('.selectroutedetailslist').length;
  // dailytext1 태그를 선택하고 해당 태그의 텍스트로 selectroutedetailslistCount를 출력합니다.
  // 각 .dailytext1 요소에 대해 개별적으로 설정합니다.
  $(".dailytext1").each(function(index) {
    if (index === 0) {
      // 첫 번째 .dailytext1 요소에만 selectroutedetailslistCount 값을 출력합니다.
      $(this).text(selectroutedetailslistCount + 1);
    } else {
      // 나머지 .dailytext1 요소들은 비워둡니다.
      $(this).text('0');
    }
  });
	parentElement[0].appendChild(newElement);
    
  });
  $('input[name="datefilter"]').daterangepicker({
      autoUpdateInput: false,
      locale: {
          cancelLabel: 'Clear'
      }
  });
  

  $('input[name="datefilter"]').on('apply.daterangepicker', function(ev, picker) {
      $(this).val(picker.startDate.format('YYYY/MM/DD') + ' - ' + picker.endDate.format('YYYY/MM/DD'));
      updateSelectBox(picker.startDate, picker.endDate);
      const dateRangeString = $(this).val();
      const dateRangeCount = getDateRangeCount(dateRangeString);
  	  console.log('날짜 갯수:', dateRangeCount);
  	  $('.schedulecount').text(dateRangeCount);
  	  $('#travels-chedule').text(dateRangeCount +'일');
  $('.schedultlisttext').empty();

  for (let i = 1; i <= dateRangeCount; i++) {
    const smallSchedulListTextArea = $('<div class="smallschedullisttextarea"></div>');
    const smallSchedulListText = $('<div class="smallschedullisttext"></div>');
    const h7 = $(`<h7>${i}일차</h7>`);

    smallSchedulListText.append(h7);
    smallSchedulListTextArea.append(smallSchedulListText);
    $('.schedultlisttext').append(smallSchedulListTextArea);
  
  
  }
  
  
  
  });

  $('input[name="datefilter"]').on('cancel.daterangepicker', function(ev, picker) {
      /*$(this).val('');*/
      $(this).val(picker.startDate.format('YYYY/MM/DD') + ' - ' + picker.endDate.format('YYYY/MM/DD'));
    const selectBox = document.getElementById('dayselectbox');
    selectBox.innerHTML = '';
    
    // Clear the content of the alldaydetailschedule div
    const alldaydetailscheduleDiv = document.querySelector('.alldaydetailschedule');
    alldaydetailscheduleDiv.innerHTML = '';
  });
  /**/
 
// 경로생성 모달창 js
let isCenterWrapperVisible = false;
let isProcessing = false;
  $("#routecreatebtn").on("click", function () {
    // openModal();
if (isProcessing) {
    return; 
  }
    const calandercount = $("#calander").val();
    const datecount = getDateRangeCount(calandercount);
    const selectlistCount = $(".listarea .selectlist").length;
   /* console.log("날짜갯수 : " + datecount);
    console.log("선택한관광지 :" +selectlistCount);
    console.log(selectlistCount < datecount);*/
    if(selectlistCount < datecount && !isCenterWrapperVisible){
		isProcessing = true;
		// 클릭 이벤트 발생 시, 임의의 태그 생성
		    const randomTag = $('<div class="random-tag">선택한 날짜보다 선택한 장소의 갯수가 적을수 없습니다.</div>');
		$('.center-wrapper').append(randomTag);
		// 임의의 태그가 나타남
		$('.center-wrapper').css('display', 'block');
		 isCenterWrapperVisible = true;
		// 6초 후에 사라짐 (fadeOut 애니메이션)
		setTimeout(function() {
			$('.center-wrapper').fadeOut(function() {
				randomTag.remove();
				isCenterWrapperVisible = false;
				isProcessing = false;
			});
		}, 1700);
		return;
	}else if(datecount * 6 < selectlistCount && !isCenterWrapperVisible){
		isProcessing = true;
		// 클릭 이벤트 발생 시, 임의의 태그 생성
		const randomTag = $('<div class="random-tag">선택한 날짜보다 선택한 장소의 갯수가 너무 많습니다.'+'<div>(하루 최대 6개의 장소를 선택할 수 있습니다.)</div>'+'</div>');
		$('.center-wrapper').append(randomTag);
		// 임의의 태그가 나타남
		$('.center-wrapper').css('display', 'block');
		isCenterWrapperVisible = true;
		// 6초 후에 사라짐 (fadeOut 애니메이션)
		setTimeout(function() {
			$('.center-wrapper').fadeOut(function() {
				randomTag.remove();
				isCenterWrapperVisible = false;
				isProcessing = false;
			});
		}, 1700);
		return;
	}else if(calandercount == "" && !isCenterWrapperVisible){
		/*console.log(calandercount == "");*/
		isProcessing = true;
		// 클릭 이벤트 발생 시, 임의의 태그 생성
		const randomTag = $('<div class="random-tag">날짜를 선택해주세요</div>');
		$('.center-wrapper').append(randomTag);
		// 임의의 태그가 나타남
		$('.center-wrapper').css('display', 'block');
		isCenterWrapperVisible = true;
		// 6초 후에 사라짐 (fadeOut 애니메이션)
		setTimeout(function() {
			$('.center-wrapper').fadeOut(function() {
				randomTag.remove();
				isCenterWrapperVisible = false;
				isProcessing = false;
			});
		}, 1700);
		var heartbeat = $("#travelplan-input");
		heartbeat.addClass("heartbeat");
		/*var placeholder = $(".calander").attr("placeholder", "여행할 날짜를 입력해주세요");*/
		setTimeout(function() {
			heartbeat.removeClass("heartbeat");
		}, 1500);
		return;
	}
	isCenterWrapperVisible = false;
  	isProcessing = false;
    $(".routetotalmodal").show();
    $(".routemainmodaldiv").show();
    map2.relayout();
  });
  $(".routespan").on("click", function () {
    $(".routetotalmodal").hide();
    $(".routemainmodaldiv").hide();
  });  	

});
$(document).ready(function(){
  $('input[name="datefilter"]').trigger('click');
});
 // 클릭한 인덱스에 대한 상태 저장 변수
const clickedIndexes = [];
$(document).on('click', '.smallschedullisttextarea', function() {
	const smallschedullisttextarea = $(this).closest('.smallschedullisttextarea');
	// 선택한 smallschedullisttextarea 요소의 index를 가져옵니다.
	const clickedIndex = smallschedullisttextarea.index();
	console.log("갯수들 :"+ (clickedIndex+1));
	$('.dailyrightspan').text(clickedIndex + 1);
	$('.dailyroutearea').empty();
	// 이미 생성된 리스트인지 확인
	/*const newroutelistExists = clickedIndexes.includes(clickedIndex);*/

	/*if (!newroutelistExists) {*/
	/*	$('.dailyroutearea').each(function(index) {*/
			/*if (clickedIndex === index) {*/
				/*const selectroutedetailslistlength = $(this).find('.selectroutedetailslist').length;*/
				const selectroutedetailslistlength = $(`.detailroutetour-${clickedIndex + 1}`).find('.dailyroutedetaillist').find('.routedatailslists').find('.selectroutedetailslist').length;
				
				$('.dailyrightnumber').text(selectroutedetailslistlength);

				for (let i = 0; i < selectroutedetailslistlength; i++) {
					// 조건에 맞는 .detailroutetour 요소에 접근하여 텍스트를 가져와 출력.
					/*const selectdetailstext = $(this).find('.selectdetailstext').eq(i).text();
					const selectdetailstextaddress = $(this).find('.selectdetailstextaddress').eq(i).text();*/
				const selectdetailstext = $(`.detailroutetour-${clickedIndex + 1}`).find('.selectdetailstext').eq(i).text();
                const selectdetailstextaddress = $(`.detailroutetour-${clickedIndex + 1}`).find('.selectdetailstextaddress').eq(i).text();
					const newroutelist = `
          <div class="dailyroutelists">
            <div class="dailyrouteliststyle">
              <div class="dailyroutecard">
                <div class="dailyroutecardtitle">
                  <span class="dailyroutecardtitletext">STEP${i + 1}</span>
                </div>
              </div>
              <div class="dailyroutecardcontentarea">
                <div class="dailyroutecardcontent-L">
                  <span class="dailyroutecardspan">${selectdetailstext}</span>
                  <div class="dailyroutecardspan">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" class="ionicon" viewBox="0 0 512 512"><path d="M98 190.06l139.78 163.12a24 24 0 0036.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z"/></svg>
                  </div>
                  <span class="dailyroutecardspan">${selectdetailstextaddress}</span>
                </div>
                <div class="dailyroutecardcontent-R">
                  <div class="dailyroutecardcontent-Rtext">상세경로</div>
                </div>
              </div>
            </div>
          </div>`;

					$('.dailyroutearea').append(newroutelist);
					
				}
				// 이미 생성된 리스트로 기억
				clickedIndexes.push(clickedIndex);
		/*	}*/
		/*});*/
	/*}*/
});

 
  // 탭 js
  
    //label 선택 js
    $(function() {

      $('.search-class1').click(function(){
        if( $(this).hasClass('btn-food') ) $(this).removeClass('btn-food');
        if( !$(this).hasClass('btn-search') ) $(this).addClass('btn-search');
        if( $('.food-class1').hasClass('btn-search') ) $('.food-class1').removeClass('btn-search');
        if( !$('.food-class1').hasClass('btn-food') ) $('.food-class1').addClass('btn-food');
      });
      
      $('.food-class1').click(function(){
        if( $(this).hasClass('btn-food') ) $(this).removeClass('btn-food');
        if( !$(this).hasClass('btn-search') ) $(this).addClass('btn-search');
        if( $('.search-class1').hasClass('btn-search') ) $('.search-class1').removeClass('btn-search');
        if( !$('.search-class1').hasClass('btn-food') ) $('.search-class1').addClass('btn-food');
      });
      
      });
      // 태그 생성 태그
        $("ul.listarea-right").on("click", ".plus-travel", function () {
			if ($('#calander').val() === '') {
    return; // 입력 필드가 비어있을 때는 이벤트 핸들러 종료
  }
          	var parentLi = $(this).closest("li.selectlist2");
			const immediateParent = $(this).parent();
			const listbox = immediateParent.parent();
			const listtextElement = listbox.find(".listtext");
			const listtitleTextValue = listtextElement.find(".listtitle-text").text();
			const listtitleaddr = listtextElement.find(".listtitleaddr");
			const textaddr = listtitleaddr.find(".listtitle-textaddr").text();
			const srcValue = listbox.find(".listboximg img").attr("src");
			const hidentourisid = parentLi.find(".listbtn");
			const hidenid = hidentourisid.find(".detail-travellist a .tourisidhidden").text();
			
			var newLi = '<li class="selectlist">' +
				'<div class="listbox">' +
				'<div class="listboximg"><img src="' + srcValue + '" alt=""></div>' +
				'<div class="listicon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" width="10" color="white">' +
				'<path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />' +
				'</svg>' +
				'</div>' +
				'</div>' +
				'<div class="listtext">' +
				'<h7 class="listtitle-text">'+listtitleTextValue+'</h7>' +
				'<h7 class="listtitleaddr">주소 : <h7 class="listtitle-textaddr">'+ textaddr +'</h7></h7>'+
				'</div>' +
				'<div class="listbtn">' +
				'<div class="hiddenid">'+hidenid+'</div>'+
				'<div class="detail-travellist"><a><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6" width="20" height="20" color="#e0e0e0">' +
				'<path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" />' +
				'</svg></a>' +
				'</div>' +
				'<div class="delete-travel"><a><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6" width="20" height="20" color="#b31312">' +
				'<path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd" />' +
				'</svg></a>' +
				'</div>' +
				'</div>' +
				'</li>';
          parentLi.remove();
         // 생성된거 없어지고 생겨지는 함수
          $("ul.listarea").append(newLi);
          var selectListElements = $("ul.listarea li.selectlist");
    
          /*console.log("카운터갯수:", selectListElements.length);*/
          if (selectListElements.length) {
            $(".list-text").hide();
          } else {
            $(".list-text").show();
          }
        });
     
      //태그 삭제 태그
      $("ul.listarea").on("click", ".delete-travel", function () {
          var parentLi = $(this).closest("li.selectlist");
          const test =  $(".routedatailslists .selectroutedetailslist");
          	const immediateParent = $(this).parent();
			const listbox = immediateParent.parent();
			const listtextElement = listbox.find(".listtext");
			const listtitleTextValue = listtextElement.find(".listtitle-text").text();
			const listtitleaddr = listtextElement.find(".listtitleaddr");
			const textaddr = listtitleaddr.find(".listtitle-textaddr").text();
			const srcValue = listbox.find(".listboximg img").attr("src");
			const hidentourisid = parentLi.find(".listbtn");
			const hidenid = hidentourisid.find(".detail-travellist a .tourisidhidden").text();
		  var newLi = '<li class="selectlist2">' +
			  '<div class="listbox">' +
			  '<div class="listboximg"><img src="' + srcValue + '" alt=""></div>' +
			  '<div class="listicon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" width="10" color="white">' +
			  '<path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />' +
			  '</svg></div>' +
			  '</div>' +
			  '<div class="listtext">' +
			  '<h7 class="listtitle-text">'+listtitleTextValue+'</h7>' +
			  '<h7 class="listtitleaddr">주소 : <h7 class="listtitle-textaddr">'+ textaddr +'</h7></h7>'+
			  '</div>' +
			  '<div class="listbtn">' +
			  '<div class="detail-travellist"><a>' +
			  '<div class="tourisidhidden" style="display: none">'+hidenid+'</div>'+
			  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6" width="20" height="20" color="#e0e0e0">' +
			  '<path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" />' +
			  '</svg></a></div>' +
			  '<div class="plus-travel"><a><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6" width="20" height="20" color="black">' +
			  '<path fill-rule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clip-rule="evenodd" />' +
			  '</svg></a></div>' +
			  '</div>' +
			  '</li>';
			  test.remove();
          parentLi.remove();
          
		  const dataItems = [];

		  $("ul.listarea .selectlist").each(function() {
			  const listbox = $(this).find(".listbox");
			  const listtextElement = $(this).find(".listtext");
			  const listtitleTextValue = listtextElement.find(".listtitle-text").text();
			  const listtitleaddr = listtextElement.find(".listtitleaddr");
			  const textaddr = listtitleaddr.find(".listtitle-textaddr").text();
			  const srcValue = listbox.find(".listboximg img").attr("src");
			  const hidentourisid = $(this).find(".hiddenid").text();

			  dataItems.push({
				  listtitleTextValue,
				  textaddr,
				  srcValue,
				  hidentourisid
			  });
		  });

		  // 데이터 배열의 각 항목을 순회하며 동적 요소 생성
		  dataItems.forEach(dataItem => {
			  const newDynamicContent = generateDynamicContent(
				  dataItem.listtitleTextValue,
				  dataItem.textaddr,
				  dataItem.srcValue,
				  dataItem.hidentourisid
			  );
			  const parentElement = $(".routedatailslists");
		  	  const newElement = $(newDynamicContent)[0];
		  	  parentElement[0].appendChild(newElement);
		  	  const lengthindex = $(".routedatailslists .selectroutedetailslist").length;
	const firstdailyindex = $('.dailytext1').eq(0);
	firstdailyindex.empty();
	firstdailyindex.append(lengthindex);
		  });
		  
		   
          // 생성된거 없어지고 생겨지는 함수
          var selectListElements = $("ul.listarea li.selectlist");
    	  /*var newLiElement = $(newLi);*/
          if (selectListElements.length) {
            $(".list-text").hide();
          } else {
            $(".list-text").show();
          }
         $("ul.listarea-right").append(newLi);
        });
        
        // 왼쪽 영역에 있는 태그들 전체 삭제후 오른쪽으로 추가 
$(document).on('click', '.select-delte', function() {
	var parentLi = $(".listarea").find(".selectlist");
	var newLiElements = [];
	
	parentLi.each(function(i,e) {
		var srcValue = $(e).find(".listbox").find(".listboximg img").attr("src");
		var listtitleTextValue = $(e).find(".listtext").find(".listtitle-text").text();
		var textaddr = $(e).find(".listtext").find(".listtitleaddr").find(".listtitle-textaddr").text();
		console.log($(e).find(".listbtn").find(".hiddenid").text());		
		var newLi = '<li class="selectlist2">' +
			  '<div class="listbox">' +
			  '<div class="listboximg"><img src="' + srcValue + '" alt=""></div>' +
			  '<div class="listicon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" width="10" color="white">' +
			  '<path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />' +
			  '</svg></div>' +
			  '</div>' +
			  '<div class="listtext">' +
			  '<h7 class="listtitle-text">'+listtitleTextValue+'</h7>' +
			  '<h7 class="listtitleaddr">주소 : <h7 class="listtitle-textaddr">'+ textaddr +'</h7></h7>'+
			  '</div>' +
			  '<div class="listbtn">' +
			  '<div class="detail-travellist"><a><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6" width="20" height="20" color="#e0e0e0">' +
			  '<path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" />' +
			  '</svg></a></div>' +
			  '<div class="plus-travel"><a><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6" width="20" height="20" color="black">' +
			  '<path fill-rule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clip-rule="evenodd" />' +
			  '</svg></a></div>' +
			  '</div>' +
			  '</li>';
	 	newLiElements.push(newLi);
    });
    	 parentLi.remove();
	var selectListElements = $("ul.listarea li.selectlist");
    	  /*var newLiElement = $(newLi);*/
          if (selectListElements.length) {
            $(".list-text").hide();
          } else {
            $(".list-text").show();
          }
	 $("ul.listarea-right").append(newLiElements.join(""));

});

    //모달창 띄어주기
      $(document).on("click", ".detail-travellist a", function () {
        $('.modaltdhomepage').empty();
        $('.modaltdaddress').empty();
        $('.modaltdinfo').empty();
        $('.modaltdtel').empty();
        $('.modalimage').empty();
        $('.modalplacetitle').empty();
        $('.modalhidden').empty();
        const tourisid = $(this).find('.tourisidhidden').text();
        
        const tourisdetailesurl ="http://apis.data.go.kr/B551011/KorService1/detailCommon1?serviceKey=0906O7Vl32hAkLceKylOGOAzJuIESMtXTXESfLV%2B%2BobF%2FXFUtduY0IZn4KnJnwSMB3L5HTj7oRuH8PqFhVAQ6w%3D%3D&MobileOS=ETC&MobileApp=AppTest&_type=json&contentId="+tourisid+"&contentTypeId=12&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y&numOfRows=10&pageNo=1";
        $.ajax({
			url: tourisdetailesurl,
	            method: "get",
	            dataType: "json",
			success: function(data) {
				const responseObject = JSON.parse(JSON.stringify(data));
				console.log(responseObject);
				const common = responseObject.response.body.items.item[0];
				console.log(common);
				$('.modaltdhomepage').append(common.homepage);	
				$('.modaltdaddress').append(common.addr1);
				$('.modalplacetitle').append(common.title);
				$('.modalimage').attr('src', common.firstimage);
				$('.modalhidden').append(common.contentid);
				
				
			}
		});
		const introdcutionurl = "https://apis.data.go.kr/B551011/KorService1/detailIntro1?serviceKey=0906O7Vl32hAkLceKylOGOAzJuIESMtXTXESfLV%2B%2BobF%2FXFUtduY0IZn4KnJnwSMB3L5HTj7oRuH8PqFhVAQ6w%3D%3D&MobileOS=ETC&MobileApp=AppTest&_type=json&contentId="+tourisid+"&contentTypeId=12&numOfRows=10&pageNo=1"
        $.ajax({
			url: introdcutionurl,
	            method: "get",
	            dataType: "json",
			success: function(data) {
				const responsejson = JSON.parse(JSON.stringify(data));
				console.log(responsejson);
				const parsing = responsejson.response.body.items.item[0];
				console.log(parsing);
				/*if(parsing.usetime == "") {
					$('.modaltdtime').append(parsing.useseason);
				}else if(parsing.useseason == ""){
					$('.modaltdtime').append(parsing.usetime);
				}else{
					$('.modaltdtime').text("-");
				}*/
				if(parsing.expguide == "" && parsing.infocenter != "") {
					$('.modaltdtel').append(parsing.infocenter);
					$('.modaltdinfo').text("-");
				}else if(parsing.infocenter == "" && parsing.expguide != ""){
					$('.modaltdinfo').append(parsing.expguide);
				}else{
					$('.modaltdinfo').text("-");
				}
				
			
			}
		});
        
        $(".totalmodaldiv").show();
        $(".modaldiv").show();
      });
      $(document).on("click", ".modaldiv .modalspan", function () {
        $(".totalmodaldiv").hide();
        $(".modaldiv").hide();
      });
   
    // 맵에 있는 토글 이벤트
        $(".toggle-header").click(function() {
          $(this).next(".toggle-body").slideToggle();
        });
        
    /*// 경로생성 모달창 js
  $("#routecreatebtn").on("click", function () {
    // openModal();
    const calandercount = $("#calander").val();
    console.log(getDateRangeCount(calandercount));
    $(".routetotalmodal").show();
    $(".routemainmodaldiv").show();
    map2.relayout();
  });
  $(".routespan").on("click", function () {
    $(".routetotalmodal").hide();
    $(".routemainmodaldiv").hide();
  });*/

// 경로모달창에서 화면 확대되게 만들기
$(document).on("click", ".sidebarexpansion", function() {
  
  var alldaydetailschedule = $(".alldaydetailschedule");
  var userguidemenu = $(".userguidemenuarea");
  
  if (alldaydetailschedule.css("display") === "block") {
    alldaydetailschedule.css("display", "flex"); // 현재 display가 block이면 flex로 변경
    userguidemenu.css("right", "67px");
    userguidemenu.css("left", "auto");
    userguidemenu.css("top", "67px");
  } else {
    alldaydetailschedule.css("display", "block"); // 현재 display가 flex이면 block으로 변경
    userguidemenu.css("right", "auto");
    userguidemenu.css("left", "360px");
    userguidemenu.css("top", "40px");
  }
});
// 경로 모달창 검색화면 show, hiden js 
$(document).on("click", ".routesearchmodalbtn", function(){
  var routesearcharea = $(".routesearchmodalarea");

  if(routesearcharea.css("display") ==="none"){
    routesearcharea.css("display", "block");
  }
});
$(document).on("click", ".routesearchareadeletestyle", function(){
  var routesearcharea = $(".routesearchmodalarea");

  if(routesearcharea.css("display") ==="block"){
    routesearcharea.css("display", "none");
  }
});
// 플러스 버튼 누르면 효과나타나기 
$(document).on("click", ".list-texticon", function(){
  var heartbeat = $("#search-traveltitle");
  heartbeat.addClass("heartbeat");
  setTimeout(function() {
    heartbeat.removeClass("heartbeat");
  }, 1500);
 $('.center-wrapper').empty();
    // 클릭 이벤트 발생 시, 임의의 태그 생성
    const randomTag = $('<div class="random-tag">관광지를 추가해주세요</div>');
    $('.center-wrapper').append(randomTag);
// 임의의 태그가 나타남
    $('.center-wrapper').css('display', 'block');
  // 6초 후에 사라짐 (fadeOut 애니메이션)
  setTimeout(function() {
    $('.center-wrapper').fadeOut(function() {
      randomTag.remove();
    });
  }, 1500);
});

// 장소등록 모달창 띄어주기 js #registspot

$(document).on("click", "#registspot", function () {
  $(".regspot").show();
  $(".smallmodal").show();
});
$(document).on("click", ".header-delete", function () {
  $(".regspot").hide();
  $(".smallmodal").hide();
});
// 장소등록 검색리스트 모달창 띄어주기 js .footera ".black-delteicon",
$(document).on("click", ".footera", function () {
  $(".reqsearchlist").show();
  $(".reqsearchlistmodalarea").show();
});
$(document).on("click", ".reqsearchdeltebtn", function () {
  $(".reqsearchlist").hide();
  $(".reqsearchlistmodalarea").hide();
});
$(document).on("click", ".black-delteicon", function () {
  $(".reqsearchlist").hide();
  $(".reqsearchlistmodalarea").hide();
});

// 경로 모달창 에서 일정별로 선택하는 js smallschedullisttextarea, totalscheduletext
$(document).on("click", ".smallschedullisttextarea", function(){
  var dailyroutearea = $(".dailyroutearea");
  var alldaydetailschedule = $(".alldaydetailschedule");
  var sidebarexpansionsvg = $(".sidebarexpansion svg");
  var dailyrightarea = $(".dailyrightarea");
  var routesearcharea = $(".routesearcharea");

  dailyroutearea.css("display", "block");
  alldaydetailschedule.css("display", "none");
  sidebarexpansionsvg.css("display", "none");
  dailyrightarea.css("display", "block");
  dailyrightarea.addClass("blink-1");
  routesearcharea.css("display", "none");
  
});
// 전체일정 버튼 js
$(document).on("click", ".totalscheduletext", function(){
  var alldaydetailschedule = $(".alldaydetailschedule");
  var dailyroutearea = $(".dailyroutearea");
  var sidebarexpansionsvg = $('.sidebarexpansion svg');
  var dailyrightarea = $(".dailyrightarea");
  var routesearcharea = $(".routesearcharea");

  alldaydetailschedule.css("display","block");
  dailyroutearea.css("display", "none");
  sidebarexpansionsvg.css("display", "block");
  dailyrightarea.css("display", "none");
  routesearcharea.css("display", "block");
});

// 관광지 검색 ajax
$(document).on('keyup', '#searchtouirsinput', function(event) {
  if (event.keyCode === 13) { 
    searchTouris();
  }
});

$(document).on('click', '.invite-btn1 svg', function(){
 searchTouris2();
});
$(document).on('keyup', '.searchinputtag2', function(event) {
  if (event.keyCode === 13) { 
    searchTouris2();
  }
});

$(document).on('click', '.invite-btn svg', function(){
  searchTouris();
});

function searchTouris() {
  const inputval = $("#searchtouirsinput").val().trim();
  /*console.log(inputval);
  console.log(tourisAreaid);*/
  $.ajax({
    url: path+"/touris/searchtouris",
    method: "get",
    data: {
      'text': inputval,
      'tourisAreaid': tourisAreaid
    },
    success: function(data) {
      console.log(data);
      if (data.trim() === '') {
        $('.listarea-right').html('<li class="defaulttext"><span>검색한 관광지가 없습니다.</span>' +
          '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">' +
          '<path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />' +
          '</svg>' +
          '</li>');
      } else {
        $('.listarea-right').html(data);
      }
    }
  });
}
// 두번째 검색 input 태그
function searchTouris2() {
  const inputval = $(".searchinputtag2").val().trim();
  /*console.log(inputval);
  console.log(tourisAreaid);*/
  $.ajax({
    url: path+"/touris/searchtouris2",
    method: "get",
    data: {
      'text': inputval,
      'tourisAreaid': tourisAreaid
    },
    success: function(data) {
      console.log(data);
      if (data.trim() === "") {
        $('.listarea-right').html('<li class="defaulttext"><span>검색한 관광지가 없습니다.</span>' +
          '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">' +
          '<path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />' +
          '</svg>' +
          '</li>');
      } else {
        $('.makeroutesearchlistarea').html(data);
      }
    }
  });
}
var today = new Date();

var year = today.getFullYear();
var month = ('0' + (today.getMonth() + 1)).slice(-2);
var day = ('0' + today.getDate()).slice(-2);

var registrationDate = year+'년' +' '+month+'월'+' '+day+'일';
// 경로 저장 ajax
function saveRoute() {
	const routeurl=path+"/touris/inserttourisroute";
	const dayselectbox = $(".dayselecttag").text();
	const calandertext = $("#calander").val();
	const dayselecttag = $(".dayselecttag").text();
	const indexLevels = $(".dayselecttag").length;
	const dateEntries = dayselecttag.match(/(\d+)일차 (\d+)월 (\d+)일 ([A-Za-z]+)/g);
	const hiddencontentid = $('.hiddencontentid').text();
	const dateRange = calandertext.split(" - "); // 날짜 범위를 시작과 끝으로 나눔

	var tourismemberdata;
	var tustartDate;
	var tuendDate;
	const routedata = [];
	if (dateRange.length === 2) { // 정확히 2개의 날짜가 있는 경우
		const startDateString = dateRange[0];
		const endDateString = dateRange[1];

		const startDate = new Date(startDateString); // 날짜 문자열을 날짜 객체로 변환
		const endDate = new Date(endDateString);

		/*// 날짜 형식 변경 (예: 2023년 8월 9일)
		const options = { year: 'numeric', month: 'long', day: 'numeric' };
		const formattedStartDate = startDate.toLocaleDateString('ko-KR', options);
		const formattedEndDate = endDate.toLocaleDateString('ko-KR', options);*/
		tustartDate = `${startDate.getFullYear()}/${(startDate.getMonth() + 1).toString().padStart(2, '0')}/${startDate.getDate().toString().padStart(2, '0')}`;
        tuendDate = `${endDate.getFullYear()}/${(endDate.getMonth() + 1).toString().padStart(2, '0')}/${endDate.getDate().toString().padStart(2, '0')}`;
		
		/*console.log("시작 날짜:", tustartDate);
		console.log("끝 날짜:", tuendDate);*/

		/*tourismemberdata.push({
			tustartDate, tuendDate, loginmemberid
		});*/
		
	} else {
		console.log("올바른 날짜 범위가 아닙니다.");
	}

	if (dateEntries) {
		const dates = dateEntries.map(entry => {
			console.log(entry);
			/*const [day, month, dayOfMonth, dayOfWeek] = entry.match(/(\d+)일차 (\d+)월 (\d+)일 ([A-Za-z]+)/);*/
			/*const day = entry.match(/(\d+)일차 (\d+)월 (\d+)일/);*/

			return entry;
		});

		

		for (let i = 1; i <= indexLevels; i++) {
			const hiddenLevels = $(".detailroutetour-" + i);
			hiddenLevels.find(".test").each(function() {
				const hiddenLevelText = $(this).find(".hiddenlevel").text();
				const hiddentourisid = $(this).find(".hiddencontentid").text();
				const dateIndex = i - 1;
				const dateInfo = dates[dateIndex];

				routedata.push({
					tourisrouteLevel: hiddenLevelText,
					tourisesId: hiddentourisid,
					tourisrouteDate: dateInfo
				});
			});
		}
		} else {
		console.log("날짜 정보를 찾을 수 없습니다.");
	}
console.log("시작 날짜:", tustartDate);
		console.log("끝 날짜:", tuendDate);
		/*console.log(tourismemberdata);*/
		$.ajax({
			url: routeurl,
			type: "POST",
			contentType: "application/json;", 
			data: JSON.stringify({routedata : routedata, 
			loginmemberid: loginmemberid,
			tustartDate: tustartDate, 
			tuendDate: tuendDate,
			registrationDate: registrationDate
			}),
			success: function(response) {
				alert("경로가 저장되었습니다.");
				 window.location.href = path+"/";
			},
			error: function() {
				alert("오류가 발생했습니다. 관리자에게 문의하세요");
			}
		});
	
	console.log(routedata);
}



// 드래그 앤 드롭
$(function () {
  // 드래그 앤 드롭 기능을 이벤트 위임으로 적용
  $(document).on("sortstart", ".selectdetailsroutelist", function (event, ui) {
    // 정렬이 시작될 때 호출되는 콜백 함수
    // 필요한 작업 수행
    var ElementCount = $(this).parents(".routedatailslists").find(".selectroutedetailslist").length;
    console.log(".selectroutedetailslist 영역의 자식 요소 개수: " +ElementCount);
    updatemarker(event.target);
  });

  $(document).on("sortstop", ".routedatailslists", function (event, ui) {
    // 정렬이 끝날 때 호출되는 콜백 함수
    // 필요한 작업 수행
     var childElementCount = $(this).find('.test').length;
    /*console.log(".routedatailslists 영역의 자식 요소 개수: " + childElementCount);*/
     $(this).parents('.dailyroutedetaillist').find('.dailyroutecountarea').find('.dailyroutetext').find('.dailytext1').text(childElementCount);
    var targetArea = ui.item.parents('.dailyroutedetaillist');
    var targetCountElement = targetArea.find('.dailyroutecountarea').find('.dailyroutetext').find('.dailytext1');
    var targetChildCount = targetArea.find('.test').length;
    targetCountElement.text(targetChildCount);
    
    for(var i = 0; i < lines.length; i++){
		lines[i].setMap(null);
	}
    lines = [];
    
    updatemarker();
  });

  // 동적으로 생성된 요소들에 드래그 앤 드롭 기능 적용
  $(document).on("mouseover", ".routedatailslists", function () {
    // 요소가 마우스 오버되었을 때, sortable 메서드를 호출하여 드래그 앤 드롭 기능 적용
     $(this).sortable({
      connectWith: ".routedatailslists", // 드롭 가능한 대상 영역 지정
      // sortable 옵션 설정
    }).disableSelection();
  });
});


function updatemarker() {
   /*	var addmarkers = []; // 생성된 마커를 추적하는 배열
    const lastInfoWindow = []; // 인포윈도우 추적하는 배열*/
    const lasthiddenlevle=[];
    const linePath = []; // 각 영역별 경로표시 추적하는 배열
 // 각 마커에 사용할 색상을 정의한 배열
     const strokeColors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00'];
     const backgroundColors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00']; // 인포윈도우색상 배열
    $('.alldaydetailschedule #detailroutetareaid').each(function(routedayIndex, routeday) {
        const $routeday = $(routeday);
        const $testElements = $routeday.find('.test');
		
        $testElements.each(function(testIndex, element) {
			
            const selectdetailstextaddress = $(element).find('.selectdetailstextaddress');
            const listtitleTextValue = $(element).find('.selectdetailstext').text();
            const srcValue = $(element).find('.selectdetailsimagesarea img').attr('src');
            const textaddr = selectdetailstextaddress.text();
            
            geocoder.addressSearch(textaddr, function(result, status) {
                if (status === kakao.maps.services.Status.OK) {
                    const markerPosition = new kakao.maps.LatLng(result[0].y, result[0].x);
                    const marker = new kakao.maps.Marker({
                        map: map2,
                        position: markerPosition,
                        image: markerImage
                    });
                    addmarkers.push(marker); // 새로운 마커를 배열에 추가
					
					
					
					// 이전 경로 제거
          if (linePath[routedayIndex] && linePath[routedayIndex][testIndex] && linePath[routedayIndex][testIndex].polyline) {
                linePath[routedayIndex][testIndex].polyline.setMap(null);
            }
            
            const bgColor = backgroundColors[routedayIndex % backgroundColors.length]; // 순환하여 색상 선택
            const strokeColor = strokeColors[routedayIndex % strokeColors.length];
                    // 나머지 마커 및 인포윈도우 관련 코드도 동일한 방식으로 처리
					// 인포윈도우 내용을 설정
					 $(element).find(".hiddenlevel").empty();
					
					const level = $(element).find(".hiddenlevel").append(testIndex+1);
					lasthiddenlevle[testIndex] = level;
					var iwContent = '<div class="iwcontentarea" style="padding:5px;  background-color: ' + bgColor + '"><div class="iwcontent" style="color:white;">' + (testIndex+1) + '</div></div>';// 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
					// 인포윈도우를 생성합니다
					inforwindow = new kakao.maps.CustomOverlay({
						content: iwContent,
						map: map2,
						position: marker.getPosition()
					});
					lastInfoWindows[testIndex] = inforwindow;
					// 해당 영역의 경로 배열에 좌표 추가
					if (!linePath[routedayIndex]) {
						linePath[routedayIndex] = [];
					}
					linePath[routedayIndex].push(markerPosition);
               var polyline = new kakao.maps.Polyline({
                    path: linePath[routedayIndex], // 처음 좌표 설정
                    strokeWeight: 5,
                    strokeColor: strokeColor,
                    strokeOpacity: 1,
                    strokeStyle: 'solid'
                })
           /*	linePath[routedayIndex][testIndex] = polyline;*/
           	  lines.push(polyline);
            polyline.setMap(map2);
            lastInfoWindows[testIndex] = inforwindow;
                    /*// 해당 영역의 경로 배열에 좌표 추가
                    if (!linePaths[routedayIndex]) {
                        linePaths[routedayIndex] = [];
                    }
                    linePaths[routedayIndex].push(markerPosition);*/
                    	// 인포윈도우로 장소에 대한 설명을 표시합니다
					kakao.maps.event.addListener(marker, 'click', function() {
						var content = '<div class="wrap">' +
							'    <div class="info">' +
							'        <div class="title">' +
							listtitleTextValue +
							'            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
							'        </div>' +
							'        <div class="body">' +
							'            <div class="img">' +
							'                <img src="' + srcValue + '" width="73" height="70">' +
							'           </div>' +
							'            <div class="desc">' +
							'<div class="ellipsis">' + textaddr + '</div>' +
							'                <div class="jibun ellipsis">(우) 63309 (지번) 영평동 2181</div>' +
							'                <div><a href="https://www.kakaocorp.com/main" target="_blank" class="link">홈페이지</a></div>' +
							'            </div>' +
							'        </div>' +
							'    </div>' +
							'</div>'

						//전에 있던 마커와 오버레이 제거
						if (previousOverlay) {
							previousOverlay.setMap(null);
						}
						// 커스텀 오버레이를 새로 생성하여 마커 위에 표시합니다
						overlay = new kakao.maps.CustomOverlay({
							content: content,
							map: map2,
							position: marker.getPosition()
						});
						previousOverlay = overlay;
					});

                    map2.setCenter(markerPosition);
                }
            });
        });
    });

}





