//package com.itd5.homeReviewSite.signup;
//
//import java.security.SecureRandom;
//import java.util.Base64;
//
//public class JwtSecretGenerator {
//
//    public static void main(String[] args) {
//        // 256비트(32바이트) 길이의 랜덤 바이트 배열 생성
//        byte[] secretBytes = new byte[32];
//        SecureRandom secureRandom = new SecureRandom();
//        secureRandom.nextBytes(secretBytes);
//
//        // 바이트 배열을 Base64로 인코딩하여 문자열로 변환
//        String jwtSecret = Base64.getEncoder().encodeToString(secretBytes);
//
//        // 생성된 JWT Secret Key 출력
//        System.out.println("Generated JWT Secret Key: " + jwtSecret);
//    }
//}

// 랜덤 키값 생성용 코드, 키값 이미 생성했으니 변경할떄 말곤 필요 x