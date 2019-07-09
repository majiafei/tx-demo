package com.yyt.tx.mjf.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * @Package: com.yyt.tx.mjf.controller
 * @ClassName: TestController
 * @Author: majiafei
 * @Description:
 * @Date: 2019/7/8 20:45
 */
@Controller
public class TestController {

    @GetMapping("/discount")
    public String discount() {
        return "shopee_discount/test_discount";
    }

    @GetMapping("/dateTIme")
    public String dateTIme() {
        return "date_time/date_time";
    }

    @GetMapping("/selectImage")
    public String selectImage() {
        return "select_image/index";
    }

    @GetMapping("/loading")
    public String loading() {
        return "loading/index";
    }

    @GetMapping("doLoading")
    @ResponseBody
    public String doLoading() throws InterruptedException {
        Thread.sleep(1000);
        return "hello";
    }

    @GetMapping("/discount2")
    public String discount2() {
        return "discount/discount_list";
    }

    @GetMapping("/discount_add")
    public String discountAdd() {
        return "discount/dicount_add";
    }

    @GetMapping("/nav")
    public String nav() {
        return "nav/nav";
    }

}
