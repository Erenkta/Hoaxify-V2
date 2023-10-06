package com.registration.ws.shared;

public record ApiResponse(String message) {
	
}
// kendisi toString() methodu gibi dönüyor
// yani verdiğimiz message otomatik olarak biz bu class'ı döndürünce gelecek
// Sanki toString ile yazmışız gibi
// Pratik bir kullanım