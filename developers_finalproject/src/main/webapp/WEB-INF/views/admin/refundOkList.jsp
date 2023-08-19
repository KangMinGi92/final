<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<c:set var="path" value="${pageContext.request.contextPath }" />
<jsp:include page="/WEB-INF/views/admin/common/adminheader.jsp" />
<!-- 본문 내용-->
<div class="container-fluid full-width row">
	<div class="col my-5">
		<h3 class="fs-4 mb-3">환불 관리</h3>
		<ul class="nav nav-tabs" id="myTab" role="tablist">
			<li class="nav-item" role="presentation">
				<button class="nav-link" id="profile-tab" onclick="location='${path}/admin/refundList'">환불대기</button>
			</li>
			<li class="nav-item" role="presentation">
				<button class="nav-link active" id="home-tab" onclick="location='${path}/admin/refundOkList'">환불완료</button>
			</li>
		</ul>

		<div class="tab-content" id="myTabContent">
			<div class="tab-pane fade show active" id="home-tab-pane"
				role="tabpanel" aria-labelledby="home-tab" tabindex="0">
				<table
					class="table bg-white rounded shadow-sm table-hover text-center align-middle">
					<thead>
						<tr>
							<th scope="col">결제번호</th>
							<th scope="col">숙박업소 ID</th>
							<th scope="col">결제자 ID</th>
							<th scope="col">결제자 이름</th>
							<th scope="col">취소 신청 일자</th>
							<th scope="col">취소 승인 일자</th>
							<th scope="col">결제 금액</th>
							<th scope="col">환불 금액</th>
							<th scope="col">환불 상태</th>
							<th scope="col">환불 코멘트</th>
						</tr>
					</thead>
					<tbody>
						<c:forEach var="ap" items="${ap}">
								<tr>
									<td class="acId">${ap.apOrderId }</td>
									<td>${ap.acDetail.acId}</td>
									<td>${ap.member.memberId}</td>
									<td>${ap.member.memberNickname}</td>
									<c:if test="${empty ap.apReDate}">
										<td>-</td>
									</c:if>
									<c:if test="${not empty ap.apReDate }">
										<td>${ap.apReDate}</td>
									</c:if>
									<td>${ap.apCancelDate}</td>
									<td><fmt:formatNumber value="${ap.apPrice}"
											type="currency" currencySymbol="₩" /></td>
									<td><fmt:formatNumber value="${ap.apr.aprPrice}"
											type="currency" currencySymbol="₩" /></td>
									<c:if test="${fn:contains(ap.apCancel,'T')}">
										<td style="color: #20c997">승인</td>
									</c:if>
									<c:if test="${fn:contains(ap.apCancel,'F')}">
										<td style="color: #b31312">반려</td>
									</c:if>
									<c:if test="${not empty ap.apr.aprComment}">
										<td style="color: #b31312">${ap.apr.aprComment}</td>
									</c:if>
								</tr>					
						</c:forEach>
					</tbody>
				</table>
				 <div class="pageBar">
					<c:if test="${not empty pageBar2 }">
	            	${pageBar2}
	           	</c:if> 
				</div>
			</div>
		</div>
	</div>
	<jsp:include page="/WEB-INF/views/admin/common/adminfooter.jsp" />