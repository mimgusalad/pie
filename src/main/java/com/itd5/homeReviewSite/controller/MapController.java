package com.itd5.homeReviewSite.controller;

import jakarta.servlet.http.HttpServletRequest;
import org.python.antlr.op.Mod;
import org.python.core.*;
import org.python.util.PythonInterpreter;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/map")
public class MapController {

    private static PythonInterpreter intPre;

    @GetMapping("list")
    public String list() throws IOException, InterruptedException {

//        System.setProperty("python.import.site", "flase");
//        intPre = new PythonInterpreter();
//        PySystemState systemState = Py.getSystemState();
//        systemState.setdefaultencoding("utf-8");
//
//        Process installProcess = Runtime.getRuntime().exec("pip install --upgrade google-api-python-client");
//        int executeCode = installProcess.waitFor();
//        if (executeCode == 0){
//            System.out.println(executeCode);
//            installProcess.destroy();
//            // google-cloud-vision 설치가 너무 오래 걸림... 5분정도 걸리는 중
//            Process installProcess2 = Runtime.getRuntime().exec("pip install --upgrade google-cloud-vision");
//            System.out.println("out run 2");
//            executeCode = installProcess2.waitFor();
//            System.out.println("out out "+ executeCode);
//            if(executeCode == 0){
//                System.out.println(executeCode);
//                installProcess2.destroy();
//                intPre.execfile("c:/Users/chji9/OneDrive/바탕 화면/img2text/main.py");
//                intPre.exec("print('python running')");
//                PyFunction pyFuntion = (PyFunction) intPre.get("detect_text", PyFunction.class);
//                String imgUrl = "c:/Users/chji9/OneDrive/바탕 화면/img2text/test.jpg";
//                PyObject pyobj = pyFuntion.__call__(new PyString(imgUrl));
//                System.out.println(pyobj.toString());
//            }
//        }
        return "map/list";
    }

    @GetMapping("match")
    public String match(@RequestParam(value = "addressKeyword", required = false) String addressKeyword,
                        @RequestParam(value = "firstKeyword", required = false) String firstKeyword,
                        @RequestParam(value = "secondKeyword", required = false) String secondKeyword,
                        @RequestParam(value = "thirdKeyword", required = false) String thirdKeyword,
                        Model model) {

        //전처리
        /* 순차적으로 키워드가 입력되지 않은 경우
           mainPage에서 alert 메시지를 출력하고 map 화면으로 전환되지 않음

           주소 키워드가 입력되지 않은 경우에
           inputAddressKeyword 는 사용자 지정으로
           (비로그인 : 서버에서 알아서 지정)
           (로그인 : 회원에 저장된 관심 지역 중 하나)
         */

        if (addressKeyword != null) {
            model.addAttribute("addressKeyword", addressKeyword);
        }
        if (firstKeyword != null) {
            model.addAttribute("firstKeyword", firstKeyword);
        }
        if (secondKeyword != null) {
            model.addAttribute("secondKeyword", secondKeyword);
        }
        if (thirdKeyword != null) {
            model.addAttribute("thirdKeyword", thirdKeyword);
        }

        return "map/list";
    }

}
