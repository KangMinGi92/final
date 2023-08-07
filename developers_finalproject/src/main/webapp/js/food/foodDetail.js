function setThumbnail(event) {
	const container = $("#image_container");
	container.children().remove();
	if (event.target.files.length <= 10) {
		for (var image of event.target.files) {
			var reader = new FileReader();
			reader.onload = function(event) {
				const img = $("<img>");
				img.css({
					"width": "100px", "height": "100px", "border-radius": "4px"
					, "margin-right": "10px", "margin-bottom": "10px", "border": "3px"
					, "border-style": "solid", "border-color": "rgb(100, 100, 100)"
					, "border": "1px"
				}).attr("src", event.target.result);
				container.css("margin-bottom", "15px");
				container.append(img);
			};
			console.log(image);
			reader.readAsDataURL(image);
		}
	} else {
		alert("선택한 파일이 " + event.target.files.length + "개 입니다. 사진을 줄여주세요.");
	}
}

function fileDeleteAll() {
	const result = confirm("전체 삭제 하시겠습니까?");
	if (result == true) {
		$('#review_File').val('');
		$("#image_container").children().remove();
	}
}

const drawStar = (target) => {
	console.log($(target).prev().attr('class'));
	if ($(target).prev().attr('class').includes("review_insert_rating")) {
		$(".review_insert_rating").css("width", target.value * 10 + "%");
		$(".star_insert_rating h5").text(target.value / 2 + "/5");
	} else {
		$(".review_update_rating").css("width", target.value * 10 + "%");
		$(".star_update_rating h5").text(target.value / 2 + "/5");
	}
}

$(document).on("click", ".detailFoodInfoBtn button", function(e) {
	console.log("start");
	if ($(".detailFoodInfoCon pre").height() == 100) {
		$(".detailFoodInfoCon pre").animate({ height: "400px" }, 700
		);
		$(this).next().html('<i class="fa-solid fa-angles-down fa-rotate-180" style="color: #000000;"></i>');
		console.log("확대");
	} else {
		$(".detailFoodInfoCon pre").animate({ height: "100px" }, 700
		);
		$(this).next().html('<i class="fa-solid fa-angles-down" style="color: #000000;"></i>');
		console.log("축소");
	}
	console.log("end");
});
