package com.itd5.homeReviewSite.controller;

import com.itd5.homeReviewSite.model.PhotoFile;
import com.itd5.homeReviewSite.model.succession_article;
import com.itd5.homeReviewSite.repository.FileRepository;
import com.itd5.homeReviewSite.repository.SuccessionRepository;
import jakarta.servlet.http.HttpServletRequest;
import org.apache.commons.compress.utils.FileNameUtils;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;
import java.net.URLEncoder;
import java.util.List;

@Controller
@RequestMapping("succession")
public class SuccessionController {

    @Autowired
    SuccessionRepository successionRepository;
    @Autowired
    FileRepository fileRepository;
    @GetMapping("form")
    public String form(Model model){
        model.addAttribute("succession", new succession_article());
        return "succession/form";
    }

    @PostMapping("form")
    public String submitSuccession(HttpServletRequest request, @RequestPart MultipartFile files, @ModelAttribute succession_article succession) throws Exception{

        // 작성한 날짜 설정
        java.util.Date utilDate = new java.util.Date();
        java.sql.Timestamp sqlDate = new java.sql.Timestamp(utilDate.getTime());
        succession.setRegDate(sqlDate);

        // 사진 업로드
        PhotoFile photoFile = new PhotoFile();
        String sourceFileName = files.getOriginalFilename();
        String sourcedFileNameExtension = FileNameUtils.getExtension(sourceFileName).toLowerCase();
        File destinationFile;
        String destinationFileName;

        String fileUrl = request.getSession().getServletContext().getRealPath("/reviewUploadImg");
        System.out.println(fileUrl);
        do{
            destinationFileName = RandomStringUtils.randomAlphanumeric(32)+"."+ sourcedFileNameExtension;
            destinationFile = new File(fileUrl+destinationFileName);
        } while(destinationFile.exists());

        destinationFile.getParentFile().mkdirs();
        files.transferTo(destinationFile);

        photoFile.setFileName(destinationFileName);
        photoFile.setFileOriName(sourceFileName);
        photoFile.setFileUrl(fileUrl);

        // 위도 경도 변환
        Float[] coord = getKakaoApiFromAddress(succession.getAddress());
        if(coord[0] != null){
            succession.setLongitude(coord[0]);
            succession.setLatitude(coord[1]);
            System.out.println(coord[0] + "  " + coord[1]);
        }

        successionRepository.save(succession);
        fileRepository.save(photoFile);
        return "redirect:/succession/detail?id="+succession.getArticleNo();
    }

    @GetMapping("list")
    public String list(Model model){
        List<succession_article> successionList = successionRepository.findAll();
        model.addAttribute("totalCnt", successionList.size());
        model.addAttribute("successionList", successionList);
        model.addAttribute("sortSuccessionList", successionList);
        return "succession/list";
    }
    @GetMapping("detail")
    public String detail(Model model, @RequestParam(required = false)Long id){

        succession_article succession;
        if(id == null){
            succession = new succession_article();
        }
        /*Succession succession = successionRepository.findById(id).orElse(null);*/

        succession= successionRepository.findById(id).orElse(null);
        model.addAttribute("succession", succession);

        return "succession/detail";
    }
    public Float[] getKakaoApiFromAddress(String roadFullAddr) {
        String apiKey = "04519b1d8946746a4ea4438360fe8418";
        String apiUrl = "https://dapi.kakao.com/v2/local/search/address.json";
        String jsonString = null;
        Float[] coord = new Float[2];

        try {
            roadFullAddr = URLEncoder.encode(roadFullAddr, "UTF-8");

            String addr = apiUrl + "?query=" + roadFullAddr;

            URL url = new URL(addr);
            URLConnection conn = url.openConnection();
            conn.setRequestProperty("Authorization", "KakaoAK " + apiKey);

            BufferedReader rd = null;
            rd = new BufferedReader(new InputStreamReader(conn.getInputStream(), "UTF-8"));
            StringBuffer docJson = new StringBuffer();

            String line;

            while ((line=rd.readLine()) != null) {
                docJson.append(line);
            }

            jsonString = docJson.toString();
            String tmp = jsonString.substring(jsonString.lastIndexOf("x"), jsonString.lastIndexOf("meta"));
            // x = long
            // y = lati
            coord[0] = Float.parseFloat(tmp.substring(tmp.indexOf("x")+4, tmp.indexOf("y")-4));
            coord[1] = Float.parseFloat(tmp.substring(tmp.indexOf("y")+4, tmp.indexOf("}")-1));

            rd.close();

        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        } catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return coord;
    }
}
