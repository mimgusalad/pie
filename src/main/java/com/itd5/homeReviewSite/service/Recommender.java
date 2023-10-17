package com.itd5.homeReviewSite.service;
import com.itd5.homeReviewSite.model.Address;
import com.itd5.homeReviewSite.repository.AddressRepository;
import com.itd5.homeReviewSite.repository.KeywordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

class CustomComparator implements Comparator<Map.Entry<Integer,Double>>{

    @Override
    public int compare(Map.Entry<Integer, Double> o1, Map.Entry<Integer, Double> o2) {
        return o2.getValue().compareTo(o1.getValue());
    }
}

class CustomComparator2 implements  Comparator<Map.Entry<String,Double>>{

    @Override
    public int compare(Map.Entry<String, Double> o1, Map.Entry<String, Double> o2) {
        return o2.getValue().compareTo(o1.getValue());
    }
}
@Service
public class Recommender {
    @Autowired
    private KeywordRepository keywordRepo;

    public void Recommender(int userId) {
        int n = 10;
        int k = 6;
        List<Object[]> allRecords = new ArrayList<>(keywordRepo.findKeywordAndUserId());

        HashMap<Integer, HashMap<String, Double>> rating_map = new HashMap<>();
        HashMap<Integer, Double> similarity = new HashMap<>();
        for (Object[] obj : allRecords) {
            System.out.println(Arrays.toString(obj));
        }
    }
}
//
//        while (sc1.hasNext()) {
//            int user;
//            String content;
//            double score;
//
//            user = sc1.nextInt();
//            content = sc1.next();
//            score = sc1.nextDouble();
//            HashMap<String, Double> rating = rating_map.get(user);
//            if(rating == null){
//                rating = new HashMap<>();
//            }
//            rating.put(content, score);
//            rating_map.put(user, rating);
//        }
//        for(Map.Entry<Integer, HashMap<String, Double>> entry : rating_map.entrySet()){
//            double total = 0;
//            double size = entry.getValue().size();
//
//            for(Map.Entry<String, Double> innerEntry : entry.getValue().entrySet()){
//                total += innerEntry.getValue();
//            }
//            double avg = total/size;
//            for(Map.Entry<String, Double> innerEntry : entry.getValue().entrySet()){
//                innerEntry.setValue(innerEntry.getValue()-avg);
//            }
//        }
//        HashMap<String, Double> targetEntry = rating_map.get(userId);
//        double calcTarget = 0;
//        for(Double score : targetEntry.values()){
//            calcTarget += score*score;
//        }
//        Set<String> targetContents = targetEntry.keySet();
//        for(Map.Entry<Integer, HashMap<String, Double>> entry : rating_map.entrySet()){
//            if(entry.getKey() == userId) continue;
//            else{
//                double calcSample = 0;
//                double common = 0;
//                for(Map.Entry<String, Double> sampleEntry : entry.getValue().entrySet()){
//                    calcSample += sampleEntry.getValue()*sampleEntry.getValue();
//                    for(String content : targetContents){
//                        if(sampleEntry.getKey().equals(content)){
//                            common += sampleEntry.getValue() * targetEntry.get(content);
//                        }
//                    }
//                }
//                double norm = common / (Math.sqrt(calcTarget)*Math.sqrt(calcSample));
//                similarity.put(entry.getKey(), norm);
//            }
//        }
//
//        List<Map.Entry<Integer,Double>> list = new ArrayList<>(similarity.entrySet());
//        Collections.sort(list, new CustomComparator() );
//        HashMap<String, Double> recommend = new HashMap<>();
//        for(int i=0; i<k; i++){
//            Map.Entry<Integer,Double> sample = list.get(i);
//            for(Map.Entry<String, Double> score : rating_map.get(sample.getKey()).entrySet()){
//                for(String content : targetContents){
//                    if(!score.getKey().equals(content)){
//                        recommend.put(score.getKey(), sample.getValue()*score.getValue());
//                    }
//                }
//            }
//        }
//        List<Map.Entry<String,Double>> list2 = new ArrayList<>(recommend.entrySet());
//        Collections.sort(list2, new CustomComparator2());
//
//        String recId = list2.get(0).getKey();

//    }
//}
