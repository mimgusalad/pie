package com.itd5.homeReviewSite.signup;

import lombok.RequiredArgsConstructor;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Scanner;
import java.util.concurrent.ThreadLocalRandom;

@Service
@RequiredArgsConstructor
public class NicknameGenerator extends DefaultOAuth2UserService {
    private static MemberRepository memberRepository;
    private static List<String> adjectives;
    private static List<String> fruits;

    public static void NicknameGenerator() throws FileNotFoundException, FileNotFoundException {
        Scanner sc = new Scanner(new File("adj.txt"));
        Scanner sc2 = new Scanner(new File("fruits.txt"));
        adjectives = new ArrayList<>();
        fruits = new ArrayList<>();
        while (sc.hasNext()) {
            adjectives.add(sc.next());
        }
        while (sc2.hasNext()) {
            fruits.add(sc2.next());
        }
        sc.close();
        sc2.close();
    }

    public static String generateRandomNickname() {
        int rand1 = ThreadLocalRandom.current().nextInt(0, adjectives.size());
        int rand2 = ThreadLocalRandom.current().nextInt(0, fruits.size());
        String nickname = adjectives.get(rand1)+fruits.get(rand2);
        if(isNickNameAvailable(nickname)) return nickname;
        else return generateRandomNickname();
    }
    public static boolean isNickNameAvailable(String nickname){
        Optional<SocialAuth> member = memberRepository.findByNickname(nickname);
        if(member.isEmpty()) return true;
        else return false;
    }
}