package com.itd5.homeReviewSite.controller;

import com.itd5.homeReviewSite.model.Message;
import com.itd5.homeReviewSite.model.PhotoFile;
import com.itd5.homeReviewSite.model.succession_article;
import com.itd5.homeReviewSite.repository.FileRepository;
import com.itd5.homeReviewSite.repository.SuccessionRepository;
import com.itd5.homeReviewSite.signup.PrincipalDetails;
import jakarta.servlet.http.HttpServletRequest;
import org.apache.commons.compress.utils.FileNameUtils;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
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
        Long userId = getLoginUserId();
        succession_article successionArticle = successionRepository.findByUserId(userId);
        if(successionArticle == null){
            successionArticle = new succession_article();
            model.addAttribute("succession", successionArticle);

            return "succession/form";
        }
        else{
            Message message = new Message("이미 작성된 승계글이 있습니다." ,"작성된 승계글 페이지로 전환됩니다.", "/succession/detail","/",  RequestMethod.GET, null );
            return showMessageAndRedirect(message, model);
            //return "redirect:/succession/detail?id="+successionArticle.getArticleNo();
        }

    }

    @PostMapping("form")
    public String submitSuccession(HttpServletRequest request,   @RequestParam(value="files", required = false) List<MultipartFile> uploadFiles,
                                   @ModelAttribute succession_article succession) throws Exception{


        // 위도 경도 변환
        Float[] coord = getKakaoApiFromAddress(succession.getAddress());
        if(coord[0] != null){
            succession.setLongitude(coord[0]);
            succession.setLatitude(coord[1]);
        }

        // userId set
        succession.setUserId(getLoginUserId());

        // succession db save
        successionRepository.save(succession);

        // 사진 save
        savePhoto(request, uploadFiles, succession.getArticleNo());

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
    public String detail(Model model){

        succession_article succession;
        Long userId = getLoginUserId();

        succession= successionRepository.findByUserId(userId);

        if(succession == null){
            succession = new succession_article();
        }

        List<PhotoFile> photoFileList = fileRepository.findBySuccessionIdAndArticleType(succession.getArticleNo(), "succession");
        model.addAttribute("succession", succession);
        model.addAttribute("photoFileList", photoFileList);

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

    public Long getLoginUserId(){
        Object principal= SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        PrincipalDetails principalDetails = (PrincipalDetails) principal;
        Long userId = principalDetails.getMember().getId();

        return userId;
    }

    public void savePhoto(HttpServletRequest request, List<MultipartFile> uploadFiles, Long articleNo){

        for (MultipartFile multipartFile : uploadFiles){
            PhotoFile photoFile = new PhotoFile();
            if(!multipartFile.isEmpty()){
                String fileName = multipartFile.getOriginalFilename();
                String filePath = request.getSession().getServletContext().getRealPath("/");
                try {
                    // file save func
                    // save path : /src/main/webapp/succession 에 img download
                    multipartFile.transferTo(new File(filePath+"succession/" + fileName));
                    photoFile.setArticleType("succession");
                    photoFile.setSuccessionId(Long.valueOf(articleNo));
                    photoFile.setSaveFileName(fileName);
                    photoFile.setOriFileName(multipartFile.getOriginalFilename());
                    photoFile.setReviewId(null);

                    fileRepository.save(photoFile);
                } catch (IllegalStateException e) {
                    e.printStackTrace();
                } catch (IOException e) {
                    throw new RuntimeException(e);
                }
            }
        }
    }

    // 사용자에게 메시지를 전달하고, 페이지를 리다이렉트 한다.
    private String showMessageAndRedirect(final Message params, Model model) {
        model.addAttribute("params", params);
        return "messageRedirect";
    }
}
