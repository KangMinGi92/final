<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<c:set var="path" value="${pageContext.request.contextPath }" />
<jsp:include page="/WEB-INF/views/common/header.jsp" />
<link rel="stylesheet" href="${path }/css/mypage/mypage.css" />
<link rel="stylesheet" href="${path}/css/mypage/slick.css" />
<link rel="stylesheet" href="${path}/css/mypage/slick-theme.css" />
<script src="sweetalert2.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<link rel="stylesheet" href="sweetalert2.min.css">
<!-- 지도api -->
<script type="text/javascript"
	src="//dapi.kakao.com/v2/maps/sdk.js?appkey=ab598319bacded85b90db7133a8bfffa&libraries=services,clusterer,drawing"></script>
<script src="${path }/js/mypage/slick.min.js"></script>
<section>
	<div class="mypageheader">
		<div class="mypageheaderarea">
			<div class="mypageprofile">
				<div class="profile">
					<span class="boxsize"> <img alt=""
						src="${loginMember.memberImage }">
					</span>
				</div>
				<h2 class="nickname">${loginMember.memberId }</h2>
				<div class="profilemangement">
					<a class="profileatag" id="preId"
						href="${path }/mypage/mypageDetail.do">프로필 관리</a>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none"
						viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
						class="w-6 h-6">
  					<path stroke-linecap="round" stroke-linejoin="round"
							d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
  					<path stroke-linecap="round" stroke-linejoin="round"
							d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
				</svg>
				</div>
			</div>
			<div class="selectarea">
				<div class="selectcontent"></div>

				<div class="selectbtnarea">
					<div class="container">
						<div class="radio-tile-group">
							<div class="input-container" id="moveBtn">
								<input id="walk" class="radio-button" type="radio" name="radio">
								<div class="radio-tile">
									<div class="icon walk-icon">
										<svg xmlns="http://www.w3.org/2000/svg" class="ionicon"
											viewBox="0 0 512 512">
          <path
												d="M256 448l-9-6c-42.78-28.57-96.91-60.86-137-108.32-42.25-50-62.52-101.35-62-157C48.63 114.54 98.46 64 159.08 64c48.11 0 80.1 28 96.92 48.21C272.82 92 304.81 64 352.92 64c60.62 0 110.45 50.54 111.08 112.65.56 55.68-19.71 107-62 157-40.09 47.49-94.22 79.78-137 108.35z" />
          </svg>
									</div>
									<label for="walk" class="radio-tile-label">찜목록</label>
								</div>
							</div>

							<div class="input-container" id="moveBtn1">
								<input id="bike" class="radio-button" type="radio" name="radio">
								<div class="radio-tile">
									<div class="icon bike-icon">
										<svg xmlns="http://www.w3.org/2000/svg" class="ionicon"
											viewBox="0 0 512 512">
          	<path
												d="M407.72 208c-2.72 0-14.44.08-18.67.31l-57.77 1.52L198.06 48h-62.81l74.59 164.61-97.31 1.44L68.25 160H16.14l20.61 94.18c.15.54.33 1.07.53 1.59a.26.26 0 010 .15 15.42 15.42 0 00-.53 1.58L15.86 352h51.78l45.45-55 96.77 2.17L135.24 464h63l133-161.75 57.77 1.54c4.29.23 16 .31 18.66.31 24.35 0 44.27-3.34 59.21-9.94C492.22 283 496 265.46 496 256c0-30.06-33-48-88.28-48zm-71.29 87.9z" />
          </svg>
									</div>
									<label for="bike" class="radio-tile-label">여행일정</label>
								</div>
							</div>
							<div class="input-container" id="moveBtn2">
								<input id="bike" class="radio-button" type="radio" name="radio">
								<div class="radio-tile">
									<div class="icon bike-icon">
										<svg xmlns="http://www.w3.org/2000/svg" class="ionicon"
											viewBox="0 0 512 512">
          <path
												d="M103 464H48v-55L358.14 98.09l55.77 55.78L103 464zM425.72 142L370 86.28l31.66-30.66C406.55 50.7 414.05 48 421 48a25.91 25.91 0 0118.42 7.62l17 17A25.87 25.87 0 01464 91c0 7-2.71 14.45-7.62 19.36zm-7.52-70.83z" /></svg>
									</div>
									<label for="bike" class="radio-tile-label">내가 쓴 글</label>
								</div>
							</div>
							<div class="input-container" id="moveBtn3">
								<input id="walk" class="radio-button" type="radio" name="radio">
								<div class="radio-tile">
									<div class="icon walk-icon">
										<svg xmlns="http://www.w3.org/2000/svg" class="ionicon"
											viewBox="0 0 512 512">
          <path
												d="M32 416a16 16 0 0016 16h416a16 16 0 0016-16V222H32zm66-138a8 8 0 018-8h92a8 8 0 018 8v64a8 8 0 01-8 8h-92a8 8 0 01-8-8zM464 80H48a16 16 0 00-16 16v66h448V96a16 16 0 00-16-16z" /></svg>
									</div>
									<label for="walk" class="radio-tile-label">숙박<br>결제여부
									</label>
								</div>
							</div>
							<div class="input-container">
								<input id="drive" class="radio-button" type="radio" name="radio">
								<div class="radio-tile">
									<div class="icon car-icon">
										<svg xmlns="http://www.w3.org/2000/svg" class="ionicon"
											viewBox="0 0 512 512">
	         <path
												d="M384 352H184.36l-41 35-41-35H16v24c0 30.59 21.13 55.51 47.26 56 2.43 15.12 8.31 28.78 17.16 39.47C93.51 487.28 112.54 496 134 496h132c21.46 0 40.49-8.72 53.58-24.55 8.85-10.69 14.73-24.35 17.16-39.47 13.88-.25 26.35-7.4 35-18.63A61.26 61.26 0 00384 376zM105 320l38.33 28.19L182 320h202v-8a40.07 40.07 0 00-32-39.2c-.82-29.69-13-54.54-35.51-72C295.67 184.56 267.85 176 236 176h-72c-68.22 0-114.43 38.77-116 96.8A40.07 40.07 0 0016 312v8h89z" />
	         <path
												d="M463.08 96h-74.59l8.92-35.66L442 45l-10-29-62 20-14.49 60H208v32h18.75l1.86 16H236c39 0 73.66 10.9 100.12 31.52A121.9 121.9 0 01371 218.07a124.16 124.16 0 0110.73 32.65 72 72 0 0127.89 90.9A96 96 0 01416 376c0 22.34-7.6 43.63-21.4 59.95a80 80 0 01-31.83 22.95 109.21 109.21 0 01-18.53 33c-1.18 1.42-2.39 2.81-3.63 4.15H416c16 0 23-8 25-23l36.4-345H496V96z" />
         </svg>
									</div>
									<label for="drive" class="radio-tile-label">승인여부<br>(맛집)
									</label>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
	</div>
	<div class="selectentire">
		<!-- 나의 맛집 목록 -->
		<div class="lovefoodlistarea">
			<div class="lovefoodtitle">
				<h2>나의 찜 목록</h2>
			</div>
			<div class="input">
				<button class="value" id="tourisheart">
					<svg xmlns="http://www.w3.org/2000/svg" class="ionicon"
						viewBox="0 0 512 512">
				         <path
							d="M384 352H184.36l-41 35-41-35H16v24c0 30.59 21.13 55.51 47.26 56 2.43 15.12 8.31 28.78 17.16 39.47C93.51 487.28 112.54 496 134 496h132c21.46 0 40.49-8.72 53.58-24.55 8.85-10.69 14.73-24.35 17.16-39.47 13.88-.25 26.35-7.4 35-18.63A61.26 61.26 0 00384 376zM105 320l38.33 28.19L182 320h202v-8a40.07 40.07 0 00-32-39.2c-.82-29.69-13-54.54-35.51-72C295.67 184.56 267.85 176 236 176h-72c-68.22 0-114.43 38.77-116 96.8A40.07 40.07 0 0016 312v8h89z" />
				         <path
							d="M463.08 96h-74.59l8.92-35.66L442 45l-10-29-62 20-14.49 60H208v32h18.75l1.86 16H236c39 0 73.66 10.9 100.12 31.52A121.9 121.9 0 01371 218.07a124.16 124.16 0 0110.73 32.65 72 72 0 0127.89 90.9A96 96 0 01416 376c0 22.34-7.6 43.63-21.4 59.95a80 80 0 01-31.83 22.95 109.21 109.21 0 01-18.53 33c-1.18 1.42-2.39 2.81-3.63 4.15H416c16 0 23-8 25-23l36.4-345H496V96z" />
         			</svg>
					관심 관광지
				</button>
				<button class="value" id="foodheart">
					<svg xmlns="http://www.w3.org/2000/svg" class="ionicon"
						viewBox="0 0 512 512">
			          <path
							d="M407.72 208c-2.72 0-14.44.08-18.67.31l-57.77 1.52L198.06 48h-62.81l74.59 164.61-97.31 1.44L68.25 160H16.14l20.61 94.18c.15.54.33 1.07.53 1.59a.26.26 0 010 .15 15.42 15.42 0 00-.53 1.58L15.86 352h51.78l45.45-55 96.77 2.17L135.24 464h63l133-161.75 57.77 1.54c4.29.23 16 .31 18.66.31 24.35 0 44.27-3.34 59.21-9.94C492.22 283 496 265.46 496 256c0-30.06-33-48-88.28-48zm-71.29 87.9z" />
			         </svg>
					관심 맛집
				</button>
				<button class="value" id="hotelheart">
					<svg xmlns="http://www.w3.org/2000/svg" class="ionicon"
						viewBox="0 0 512 512">
						<path
							d="M416 174.74V48h-80v58.45L256 32 0 272h64v208h144V320h96v160h144V272h64l-96-97.26z" />
					</svg>
					관심 숙박업소
				</button>
			</div>
			<div class="favoritselect">
				<div class="favoriteselectarea">
					<div class="favorite">
						<!--  -->
					
					</div>
					<div class="favorite2">
					
					</div>
					<div class="favorite3">
					
					</div>
				</div>
			</div>
		</div>
		<!-- 나의 일정 -->
		<div class="myschedulearea">
			<h2 class="myschedultext" id="preId2">나의 여행 일정</h2>
			<div class="myschedularea"></div>
			<div class="myschedualpagebar"></div>
		</div>
		<!-- 나의 게시글 목록 -->
		<div class="myreviwarea">
			<h2 class="myschedultext">내가 쓴 글 목록</h2>
			<div class="input">
				<button class="value" id="foodreivewcontent">
					<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M357.57 223.94a79.48 79.48 0 0056.58-23.44l77-76.95c6.09-6.09 6.65-16 .85-22.39a16 16 0 00-23.17-.56l-68.63 68.58a12.29 12.29 0 01-17.37 0c-4.79-4.78-4.53-12.86.25-17.64l68.33-68.33a16 16 0 00-.56-23.16A15.62 15.62 0 00440.27 56a16.71 16.71 0 00-11.81 4.9l-68.27 68.26a12.29 12.29 0 01-17.37 0c-4.78-4.78-4.53-12.86.25-17.64l68.33-68.31a16 16 0 00-.56-23.16A15.62 15.62 0 00400.26 16a16.73 16.73 0 00-11.81 4.9L311.5 97.85a79.49 79.49 0 00-23.44 56.59v8.23a16 16 0 01-4.69 11.33l-35.61 35.62a4 4 0 01-5.66 0L68.82 36.33a16 16 0 00-22.58-.06C31.09 51.28 23 72.47 23 97.54c-.1 41.4 21.66 89 56.79 124.08l85.45 85.45A64.79 64.79 0 00211 326a64 64 0 0016.21-2.08 16.24 16.24 0 014.07-.53 15.93 15.93 0 0110.83 4.25l11.39 10.52a16.12 16.12 0 014.6 11.23v5.54a47.73 47.73 0 0013.77 33.65l90.05 91.57.09.1a53.29 53.29 0 0075.36-75.37L302.39 269.9a4 4 0 010-5.66L338 228.63a16 16 0 0111.32-4.69z"/><path d="M211 358a97.32 97.32 0 01-68.36-28.25l-13.86-13.86a8 8 0 00-11.3 0l-85 84.56c-15.15 15.15-20.56 37.45-13.06 59.29a30.63 30.63 0 001.49 3.6C31 484 50.58 496 72 496a55.68 55.68 0 0039.64-16.44L225 365.66a4.69 4.69 0 001.32-3.72v-.26a4.63 4.63 0 00-5.15-4.27A97.09 97.09 0 01211 358z"/></svg>
					맛집 리뷰
				</button>
				<button class="value" id="hotelreviewcontent">
					<svg xmlns="http://www.w3.org/2000/svg" class="ionicon"
						viewBox="0 0 512 512">
						<path
							d="M416 174.74V48h-80v58.45L256 32 0 272h64v208h144V320h96v160h144V272h64l-96-97.26z" />
					</svg>
					숙박 리뷰
				</button>
				<button class="value" id="communtitycontent">
					<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="44" d="M358.62 129.28L86.49 402.08 70 442l39.92-16.49 272.8-272.13-24.1-24.1zM413.07 74.84l-11.79 11.78 24.1 24.1 11.79-11.79a16.51 16.51 0 000-23.34l-.75-.75a16.51 16.51 0 00-23.35 0z"/></svg>
					커뮤니티 게시글
				</button>
			</div>
			<div class="mycommuity">
				
 			</div>
			<!--  -->

			<div class="pagebararea" id="preId3"></div>
		</div>
		<!-- 숙박예약내역  삭제X-->
		<div class="mypagehotelcontentarea">
			<h2 class="myschedultext">나의 숙박 결제내역</h2>
			<div class="input">
				<button class="value ac" id="payListArea">
					<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"
						data-name="Layer 2">
						<path fill="#7D8590"
							d="m1.5 13v1a.5.5 0 0 0 .3379.4731 18.9718 18.9718 0 0 0 6.1621 1.0269 18.9629 18.9629 0 0 0 6.1621-1.0269.5.5 0 0 0 .3379-.4731v-1a6.5083 6.5083 0 0 0 -4.461-6.1676 3.5 3.5 0 1 0 -4.078 0 6.5083 6.5083 0 0 0 -4.461 6.1676zm4-9a2.5 2.5 0 1 1 2.5 2.5 2.5026 2.5026 0 0 1 -2.5-2.5zm2.5 3.5a5.5066 5.5066 0 0 1 5.5 5.5v.6392a18.08 18.08 0 0 1 -11 0v-.6392a5.5066 5.5066 0 0 1 5.5-5.5z"></path></svg>
					결제내역
				</button>
				<button class="value ac" id="beforePayListArea">
					<svg id="Line" viewBox="0 0 32 32"
						xmlns="http://www.w3.org/2000/svg">
						<path fill="#7D8590" id="XMLID_1646_"
							d="m17.074 30h-2.148c-1.038 0-1.914-.811-1.994-1.846l-.125-1.635c-.687-.208-1.351-.484-1.985-.824l-1.246 1.067c-.788.677-1.98.631-2.715-.104l-1.52-1.52c-.734-.734-.78-1.927-.104-2.715l1.067-1.246c-.34-.635-.616-1.299-.824-1.985l-1.634-.125c-1.035-.079-1.846-.955-1.846-1.993v-2.148c0-1.038.811-1.914 1.846-1.994l1.635-.125c.208-.687.484-1.351.824-1.985l-1.068-1.247c-.676-.788-.631-1.98.104-2.715l1.52-1.52c.734-.734 1.927-.779 2.715-.104l1.246 1.067c.635-.34 1.299-.616 1.985-.824l.125-1.634c.08-1.034.956-1.845 1.994-1.845h2.148c1.038 0 1.914.811 1.994 1.846l.125 1.635c.687.208 1.351.484 1.985.824l1.246-1.067c.787-.676 1.98-.631 2.715.104l1.52 1.52c.734.734.78 1.927.104 2.715l-1.067 1.246c.34.635.616 1.299.824 1.985l1.634.125c1.035.079 1.846.955 1.846 1.993v2.148c0 1.038-.811 1.914-1.846 1.994l-1.635.125c-.208.687-.484 1.351-.824 1.985l1.067 1.246c.677.788.631 1.98-.104 2.715l-1.52 1.52c-.734.734-1.928.78-2.715.104l-1.246-1.067c-.635.34-1.299.616-1.985.824l-.125 1.634c-.079 1.035-.955 1.846-1.993 1.846zm-5.835-6.373c.848.53 1.768.912 2.734 1.135.426.099.739.462.772.898l.18 2.341 2.149-.001.18-2.34c.033-.437.347-.8.772-.898.967-.223 1.887-.604 2.734-1.135.371-.232.849-.197 1.181.089l1.784 1.529 1.52-1.52-1.529-1.784c-.285-.332-.321-.811-.089-1.181.53-.848.912-1.768 1.135-2.734.099-.426.462-.739.898-.772l2.341-.18h-.001v-2.148l-2.34-.18c-.437-.033-.8-.347-.898-.772-.223-.967-.604-1.887-1.135-2.734-.232-.37-.196-.849.089-1.181l1.529-1.784-1.52-1.52-1.784 1.529c-.332.286-.81.321-1.181.089-.848-.53-1.768-.912-2.734-1.135-.426-.099-.739-.462-.772-.898l-.18-2.341-2.148.001-.18 2.34c-.033.437-.347.8-.772.898-.967.223-1.887.604-2.734 1.135-.37.232-.849.197-1.181-.089l-1.785-1.529-1.52 1.52 1.529 1.784c.285.332.321.811.089 1.181-.53.848-.912 1.768-1.135 2.734-.099.426-.462.739-.898.772l-2.341.18.002 2.148 2.34.18c.437.033.8.347.898.772.223.967.604 1.887 1.135 2.734.232.37.196.849-.089 1.181l-1.529 1.784 1.52 1.52 1.784-1.529c.332-.287.813-.32 1.18-.089z"></path>
						<path id="XMLID_1645_" fill="#7D8590"
							d="m16 23c-3.859 0-7-3.141-7-7s3.141-7 7-7 7 3.141 7 7-3.141 7-7 7zm0-12c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"></path></svg>
					이전결제내역
				</button>
				<button class="value ac" id="refundListArea">
					<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
						<path fill="#7D8590"
							d="m109.9 20.63a6.232 6.232 0 0 0 -8.588-.22l-57.463 51.843c-.012.011-.02.024-.031.035s-.023.017-.034.027l-4.721 4.722a1.749 1.749 0 0 0 0 2.475l.341.342-3.16 3.16a8 8 0 0 0 -1.424 1.967 11.382 11.382 0 0 0 -12.055 10.609c-.006.036-.011.074-.015.111a5.763 5.763 0 0 1 -4.928 5.41 1.75 1.75 0 0 0 -.844 3.14c4.844 3.619 9.4 4.915 13.338 4.915a17.14 17.14 0 0 0 11.738-4.545l.182-.167a11.354 11.354 0 0 0 3.348-8.081c0-.225-.02-.445-.032-.667a8.041 8.041 0 0 0 1.962-1.421l3.16-3.161.342.342a1.749 1.749 0 0 0 2.475 0l4.722-4.722c.011-.011.018-.025.029-.036s.023-.018.033-.029l51.844-57.46a6.236 6.236 0 0 0 -.219-8.589zm-70.1 81.311-.122.111c-.808.787-7.667 6.974-17.826 1.221a9.166 9.166 0 0 0 4.36-7.036 1.758 1.758 0 0 0 .036-.273 7.892 7.892 0 0 1 9.122-7.414c.017.005.031.014.048.019a1.717 1.717 0 0 0 .379.055 7.918 7.918 0 0 1 4 13.317zm5.239-10.131c-.093.093-.194.176-.293.26a11.459 11.459 0 0 0 -6.289-6.286c.084-.1.167-.2.261-.3l3.161-3.161 6.321 6.326zm7.214-4.057-9.479-9.479 2.247-2.247 9.479 9.479zm55.267-60.879-50.61 56.092-9.348-9.348 56.092-50.61a2.737 2.737 0 0 1 3.866 3.866z"></path></svg>
					환불내역
				</button>
			</div>
			<div class="myschedulcard">
				<div class="myschedulcontent">
					<div class="payListArea"></div>
					<div class="beforePayListArea"></div>
					<div class="refundListArea">
						<div>
							<button class="refundBtn check">진행중</button>
							<button class="refundBtn complete">취소 완료</button>
						</div>

						<div class="refundCheck">
							<h4>예약 취소 진행중</h4>
						</div>

						<div class="refundComplete">
							<h4>예약 취소 완료</h4>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div id="blurReview"></div>
		<div class="reviewWriteCon">
			<div class="reviewBox">
				<input type="hidden" id="acId" value=""> <input
					type="hidden" id="apId" value="">
				<ion-icon class="closeReview" name="close"></ion-icon>
				<h4>"소중한 리뷰를 남겨주세요!"</h4>
				<div class="reviewTitle">
					<img alt="" src="">
					<div>
						<h6 class="reviewAcTitle"></h6>
						<span class="star"> ★★★★★ <span>★★★★★</span> <input
							type="range" oninput="drawStar(this)" value="0" step="0.1"
							min="0" max="5">
						</span>
					</div>
				</div>
				<div class="reviewFile">
					<span>* 이미지 최대 5장 등록가능</span>
					<div class="fileBox">
						<label>
							<div>
								<ion-icon name='images-sharp'></ion-icon>
								<p>이미지 추가</p>
							</div> <input id="arfName" type="file" name="arfName" hidden="true"
							accept="image/*" multiple="true">
						</label>

					</div>
				</div>
				<div class="reviewContent">
					<textarea rows="" cols=""></textarea>
					<span id="contentCheckNum"><span>0</span>/200</span>
				</div>
				<div class="btnCon">
					<button class="insertReview" onclick="checkRegist()">등록하기</button>
				</div>
			</div>
		</div>
		<!-- 숙박예약내역  삭제X-->
		<!-- 내 승인여부(맛집)-->
		
	</div>
	<button class="backbtn gotop">
		<div class="text">
			<span>top</span>
		</div>
		<div class="clone">
			<span>top</span>
		</div>
		<svg width="20px" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6"
			fill="none" viewBox="0 0 24 24" stroke="currentColor"
			stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round"
				d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
    </svg>
	</button>
	<!-- 여행경로 모달창 -->
	<!-- 경로생성 모달창 -->
	<div class="routetotalmodal">

		<div class="routemainmodaldiv">
			<div class="routecenterbar">
				<div class="routepostioncenterbar">
					<h7>
					<b>developers</b></h7>
					<span class="routespan">x</span>
				</div>
			</div>
			<!-- 여기서 부터 메인body -->
			<div class="routetotalbody">
				<!-- 일반비워두기 -->
				<div id="home">
					<div id="routemaparea">
						<div id="routemap"></div>
					</div>
				</div>
			</div>
			<!-- 왼쪽의 작은 사이드바 -->
			<div class="routesmallsidebar">
				<div class="routesmallsidebartimearea">
					<div class="routesamllsiderbarschedule">
						<h7>일정</h7>
					</div>
					<div class="routesamllsiderbartotalschedule">
						<div class="totalscheduletext">
							<h8>전체일정</h8>
						</div>
						<!-- 일자별리스트버튼 -->
						<div class="schedultlisttext">
							<div class="smallschedullisttextarea">
								<div class="smallschedullisttext">
									<h7>DAY1</h7>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
			<!-- 왼쪽 큰 사이드바 -->
			<div class="routebigsidebar">
				<div class="bigsidebararea">
					<div class="bigsidbararea2">
						<!-- 우측확대버튼 -->
						<div class="sidebarexpansion">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none"
								viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
								class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
									d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
          </svg>
						</div>
						<h7 class="bigsidebarcentertitle">
						<b><span class="titlename"></span> " : " <span
							class="schedulecount"></span><span>일 여행</span></b></h7>
					</div>
				</div>
				<div calss="bigsidebartitleimgesarea">
					<div class="bigsidbarimgessize">
						<div class="bigsidebarimagesarea">
							<img
								src="https://png.pngtree.com/png-clipart/20210610/ourmid/pngtree-travel-with-suitcases-png-image_3428889.jpg"
								alt="" width="118" height="46">
						</div>
					</div>
				</div>
				<!-- 전체일정리스트 -->
				<div class="alldaydetailschedule">
					<div class="detailroutetour">
						<div class="alldayinputfield">
							<select id="dayselectbox">

							</select>
						</div>
						<div class="detailroutetext">
							<hs>일차를 누르면 일정 전체 변경이 가능합니다.</hs>
						</div>

						<div class="dailyroutedetaillist">
							<div class="dailyroutecountarea">
								<div class="dailyroutetext">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none"
										viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
										class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
											d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                </svg>
									<div class="dailytext1">3</div>
									<div class="dailytext2">장소</div>
								</div>
							</div>
							<hr class="hr2"></hr>
							<div class="routedatailslists">
								<div class="selectroutedetailslist">
									<div class="arrowarea">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
											fill="currentColor" class="w-5 h-5">
                    <path fill-rule="evenodd"
												d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z"
												clip-rule="evenodd" />
                  </svg>
									</div>
									<div class="selectdetailsroutelist">
										<div class="selectdetailscardarea">
											<div class="selectdetailsimagesarea">
												<div class="selectdetailsicon">
													<svg xmlns="http://www.w3.org/2000/svg" fill="none"
														viewBox="0 0 24 24" stroke-width="1.5"
														stroke="currentColor" class="w-6 h-6" width="10"
														color="white">
                        <path stroke-linecap="round"
															stroke-linejoin="round"
															d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"></path>
                      </svg>
												</div>
												<img class="selectdetailsimage"
													src="https://www.myro.co.kr/getSpotImage/jeju?no=3728"
													alt="Image" loading="lazy">
											</div>

											<div class="selectrighttextarea">
												<div class="selectdetailslisttitletextarea">
													<div class="selectdetailslisttitletext">
														<div class="selectdetailsmaxarea"></div>
														<span class="selectdetailstext">교원스위트호텔</span> <span
															class="selectdetailstextaddress">제주시 </span>
													</div>
													<div class="selectdetailstitleicon">
														<label class="ui-bookmark"> <input type="checkbox">
															<div class="bookmark">
																<svg viewBox="0 0 32 32">
                                <g>
                                  <path
																		d="M27 4v27a1 1 0 0 1-1.625.781L16 24.281l-9.375 7.5A1 1 0 0 1 5 31V4a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4z"></path>
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
								</div>

								<!--여기서부터 하나씩 생성  -->
								<div class="selectroutedetailslist">
									<div class="arrowarea">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
											fill="currentColor" class="w-5 h-5">
                    <path fill-rule="evenodd"
												d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z"
												clip-rule="evenodd" />
                  </svg>
									</div>
									<div class="selectdetailsroutelist">
										<div class="selectdetailscardarea">
											<div class="selectdetailsimagesarea">
												<div class="selectdetailsicon">
													<svg xmlns="http://www.w3.org/2000/svg" fill="none"
														viewBox="0 0 24 24" stroke-width="1.5"
														stroke="currentColor" class="w-6 h-6" width="10"
														color="white">
                        <path stroke-linecap="round"
															stroke-linejoin="round"
															d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"></path>
                      </svg>
												</div>
												<img class="selectdetailsimage"
													src="https://www.myro.co.kr/getSpotImage/jeju?no=3728"
													alt="Image" loading="lazy">
											</div>

											<div class="selectrighttextarea">
												<div class="selectdetailslisttitletextarea">
													<div class="selectdetailslisttitletext">
														<div class="selectdetailsmaxarea"></div>
														<span class="selectdetailstext">교원스위트호텔</span> <span
															class="selectdetailstextaddress">제주시 </span>
													</div>
													<div class="selectdetailstitleicon">
														<label class="ui-bookmark"> <input type="checkbox">
															<div class="bookmark">
																<svg viewBox="0 0 32 32">
                                <g>
                                  <path
																		d="M27 4v27a1 1 0 0 1-1.625.781L16 24.281l-9.375 7.5A1 1 0 0 1 5 31V4a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4z"></path>
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
								</div>
							</div>
							<div class="selectroutedetailslist">
								<div class="arrowarea">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
										fill="currentColor" class="w-5 h-5">
                  <path fill-rule="evenodd"
											d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z"
											clip-rule="evenodd" />
                </svg>
								</div>
								<div class="selectdetailsroutelist">
									<div class="selectdetailscardarea">
										<div class="selectdetailsimagesarea">
											<div class="selectdetailsicon">
												<svg xmlns="http://www.w3.org/2000/svg" fill="none"
													viewBox="0 0 24 24" stroke-width="1.5"
													stroke="currentColor" class="w-6 h-6" width="10"
													color="white">
                      <path stroke-linecap="round"
														stroke-linejoin="round"
														d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"></path>
                    </svg>
											</div>
											<img class="selectdetailsimage"
												src="https://www.myro.co.kr/getSpotImage/jeju?no=3728"
												alt="Image" loading="lazy">
										</div>

										<div class="selectrighttextarea">
											<div class="selectdetailslisttitletextarea">
												<div class="selectdetailslisttitletext">
													<div class="selectdetailsmaxarea"></div>
													<span class="selectdetailstext">교원스위트호텔</span> <span
														class="selectdetailstextaddress">제주시 </span>
												</div>
												<div class="selectdetailstitleicon">
													<label class="ui-bookmark"> <input type="checkbox">
														<div class="bookmark">
															<svg viewBox="0 0 32 32">
                              <g>
                                <path
																	d="M27 4v27a1 1 0 0 1-1.625.781L16 24.281l-9.375 7.5A1 1 0 0 1 5 31V4a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4z"></path>
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
							</div>
							<div class="selectroutedetailslist">
								<div class="arrowarea">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
										fill="currentColor" class="w-5 h-5">
                  <path fill-rule="evenodd"
											d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z"
											clip-rule="evenodd" />
                </svg>
								</div>
								<div class="selectdetailsroutelist">
									<div class="selectdetailscardarea">
										<div class="selectdetailsimagesarea">
											<div class="selectdetailsicon">
												<svg xmlns="http://www.w3.org/2000/svg" fill="none"
													viewBox="0 0 24 24" stroke-width="1.5"
													stroke="currentColor" class="w-6 h-6" width="10"
													color="white">
                      <path stroke-linecap="round"
														stroke-linejoin="round"
														d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"></path>
                    </svg>
											</div>
											<img class="selectdetailsimage"
												src="https://www.myro.co.kr/getSpotImage/jeju?no=3728"
												alt="Image" loading="lazy">
										</div>

										<div class="selectrighttextarea">
											<div class="selectdetailslisttitletextarea">
												<div class="selectdetailslisttitletext">
													<div class="selectdetailsmaxarea"></div>
													<span class="selectdetailstext">교원스위트호텔</span> <span
														class="selectdetailstextaddress">제주시 </span>
												</div>
												<div class="selectdetailstitleicon">
													<label class="ui-bookmark"> <input type="checkbox">
														<div class="bookmark">
															<svg viewBox="0 0 32 32">
                              <g>
                                <path
																	d="M27 4v27a1 1 0 0 1-1.625.781L16 24.281l-9.375 7.5A1 1 0 0 1 5 31V4a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4z"></path>
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
							</div>
							<!--  -->

							<!--  -->
						</div>
					</div>
					<!-- 각 일자별 일정 영역 -->




					<!-- 전체일정리스트 영역 여기까지 -->
					<!-- 전체일정리스트 영역 여기까지 -->
				</div>
				<div class="dailyroutearea"></div>
			</div>
			<div class="routesearcharea">
				<a href="#" class="routesearchmodalbtn" title="장소를 검색하여 일정에 추가">
					<span> <svg viewBox="0 0 24 24" height="17" width="17"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M9.145 18.29c-5.042 0-9.145-4.102-9.145-9.145s4.103-9.145 9.145-9.145 9.145 4.103 9.145 9.145-4.102 9.145-9.145 9.145zm0-15.167c-3.321 0-6.022 2.702-6.022 6.022s2.702 6.022 6.022 6.022 6.023-2.702 6.023-6.022-2.702-6.022-6.023-6.022zm9.263 12.443c-.817 1.176-1.852 2.188-3.046 2.981l5.452 5.453 3.014-3.013-5.42-5.421z"></path></svg>
				</span>
				</a> <a href="#" class="routesearchmodalbtn" title="장소를 검색하여 일정에 추가">
					<span> <svg xmlns="http://www.w3.org/2000/svg" width="20"
							height="20" class="ionicon" viewBox="0 0 512 512">
							<circle cx="256" cy="192" r="32" />
							<path
								d="M256 32c-88.22 0-160 68.65-160 153 0 40.17 18.31 93.59 54.42 158.78 29 52.34 62.55 99.67 80 123.22a31.75 31.75 0 0051.22 0c17.42-23.55 51-70.88 80-123.22C397.69 278.61 416 225.19 416 185c0-84.35-71.78-153-160-153zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z" /></svg>
				</span>
				</a>
			</div>
			<div class="dailyrightarea">
				<span class="dailyrightspan"></span>일차<br> <span><svg
						xmlns="http://www.w3.org/2000/svg" width="14" class="ionicon"
						viewBox="0 0 512 512">
						<path
							d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z" /></svg></span>
				<span class="dailyrightnumber"></span> <span data-langnum="57">개의
					장소</span>
			</div>
			<div class="routesearchmodalarea">
				<div class="routesearchareastyle">
					<div class="routesearchareadeletestyle">x</div>
					<div class="routesearchinputarea">
						<div class="routesearchinput">
							<div class="input-container">
								<input class="searchinputtag2" required=""
									placeholder="장소를 입력해주세요" type="email">
								<button class="invite-btn" type="button">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
										fill="currentColor" class="w-6 h-6">
                  <path fill-rule="evenodd"
											d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
											clip-rule="evenodd"></path>
                </svg>
								</button>
							</div>
						</div>
					</div>
					<div class="makeroutesearcharea">
						<div class="makeroutesearchtext">
							<div class="makeroutesearchtextstyle">
								<hs style="color: #aaa" data-langnum="61">+ 버튼을 누르면 포함되지 않은
								장소에 추가됩니다.</hs>
							</div>
						</div>
						<div class="makeroutesearchlistarea">
							<ul class="makeroutesearchlistul">
								<li class="defaulttext"><span>검색한 관광지가 없습니다.</span> <svg
										xmlns="http://www.w3.org/2000/svg" fill="none"
										viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
										class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round"
											d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
</svg></li>
							</ul>
							<!--  -->

						</div>
					</div>
				</div>
			</div>
			<div class="userguidemenuarea">
				<a class="userguidemenu" href="#"><h7>이용방법</h7></a> <a
					class="userguidemenu" href="#"><h7>수정저장</h7></a> <a
					class="userguidemenu" href="#"><h7>수정삭제</h7></a> <a
					class="userguidemenu" href="#" onclick="saveRoute()"><h7>경로저장</h7></a>
			</div>
			<div class="fullscreen">
				<a href="#" class="routesearchmodalbtn2" title="전체화면"> <span>
						<svg xmlns="http://www.w3.org/2000/svg" height="17" width="17"
							class="ionicon" viewBox="0 0 512 512">
							<path
								d="M336 448h56a56 56 0 0056-56v-56M448 176v-56a56 56 0 00-56-56h-56M176 448h-56a56 56 0 01-56-56v-56M64 176v-56a56 56 0 0156-56h56"
								fill="none" stroke="currentColor" stroke-linecap="round"
								stroke-linejoin="round" stroke-width="32" /></svg>
				</span>
				</a>
			</div>
			<!--  -->
		</div>
	</div>
</section>
<script type="text/javascript">
	$(document).ready(function() {
		$("#moveBtn").on("click", function(event) {

			var offset = $("#preId").offset();

			$("html body").animate({
				scrollTop : offset.top
			}, 10);

		});
	});

	$(document).ready(function() {
		$("#moveBtn1").on("click", function(event) {

			var offset = $("#preId1").offset();

			$("html body").animate({
				scrollTop : offset.top
			}, 10);

		});
	});

	$(document).ready(function() {
		$("#moveBtn2").on("click", function(event) {

			var offset = $("#preId2").offset();

			$("html body").animate({
				scrollTop : offset.top
			}, 10);

		});
	});

	$(document).ready(function() {
		$("#moveBtn3").on("click", function(event) {

			var offset = $("#preId3").offset();

			$("html body").animate({
				scrollTop : offset.top
			}, 10);

		});
	});
</script>
<script src="${path }/js/accommodation/mypageHSH.js"></script>
<script src="${path }/js/mypage/mypage.js"></script>
<jsp:include page="/WEB-INF/views/common/footer.jsp" />
