package com.yyt.tx.mjf.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * @ClassName: TestController
 * @Auther: admin
 * @Date: 2019/7/5 15:11
 * @Description:
 */
@Controller
public class TestController {

    @GetMapping("/vue")
    public String vue() {
        return "/vue/vue";
    }

}
