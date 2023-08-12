package com.dev.ac.dto;

import java.sql.Date;

import com.dev.member.model.dto.Member;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AcPayList {
	private int apId;
	private int apPrice;
	private Date apDate;
	private Date apReDate;
	private Date checkIn;
	private Date checkOut;
	private int apPeople;
	private char apCancel;
	private String apOrderId;
	private String apKeyId;
	private Accommodation acDetail;
	private Member member;
}