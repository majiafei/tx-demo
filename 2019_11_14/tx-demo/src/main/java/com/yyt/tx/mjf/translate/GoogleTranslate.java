package com.yyt.tx.mjf.translate;

import com.google.common.collect.Maps;
import com.sun.swing.internal.plaf.metal.resources.metal;
import com.yyt.tx.mjf.common.util.JsonUtils;
import com.yyt.tx.mjf.utils.HttpClientUtil;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @ClassName: GoogleTranslate
 * @Auther: admin
 * @Date: 2019/9/3 18:08
 * @Description:
 */
public class GoogleTranslate {

    private static final String url = "http://translate.google.cn/translate_a/single";

    public static void translate() {
        RestTemplate restTemplate = new RestTemplate();
        Map<String, Object> map = Maps.newHashMap();
        map.put("client", "gtx");
        map.put("sl", "en");
        map.put("tl", "de");
        map.put("dt", "t");
        map.put("q", "<strong><span style=\"color:#E53333;\">Material: circuit board Colour: Black Size: 43*20*9mm Weight: 16g Product list: 2*4S lithium battery, full 16.8 (blue display) Product features: 1, battery-type power display, display is more intuitive, more beautiful.</span></strong>");
        ResponseEntity<String> forEntity = restTemplate.getForEntity(url, String.class, map);
        System.out.println(forEntity.getBody());
    }

/*    public static void main(String[] args) {
        Map<String, String> map = Maps.newHashMap();
        map.put("client", "gtx");
        map.put("sl", "en");
        map.put("tl", "de");
        map.put("dt", "t");
        map.put("q", "<strong><span style=\"color:#009900;\">\"\"Material:metal\n" +
                "Color: black</span></strong>");
        String s = HttpClientUtil.doGet(url, map);
        List<Object> objectList = JsonUtils.fromJsonToList(s, Object.class);
        System.out.println(objectList);
    }*/

    public static void main(String[] args) {
        System.out.println(0.3 - 0.2 == 0.1);
        System.out.println(0.2 - 0.1 == 0.1);
    }

}
