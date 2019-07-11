package com.yyt.tx.mjf.controller;

import com.google.common.collect.Lists;
import com.yyt.tx.mjf.common.pojo.LayuiResponseResult;
import com.yyt.tx.mjf.entity.User;
import com.yyt.tx.mjf.entity.UserInfo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.PrintWriter;
import java.util.List;
import java.util.Map;

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

    @GetMapping("/test/list")
    @ResponseBody
    public LayuiResponseResult list() {
        List<UserInfo> userInfoList = Lists.newArrayList();
        for (int i = 0; i < 2; i++) {
            UserInfo userInfo = new UserInfo();
            userInfo.setId(i);
            userInfo.setName("xxxx" + i);
            userInfo.setOn(true);
            userInfo.setAge(3);
            userInfoList.add(userInfo);
        }
        List<User> userList = Lists.newArrayList();
        User user = new User();
        user.setUserId(1L);
        user.setUseAge(2);
        user.setUserName("xiaoming");
        user.setUserInfoList(userInfoList);
        userList.add(user);


        User user2 = new User();
        user2.setUserId(2L);
        user2.setUseAge(2);
        user2.setUserName("xiaoming2");
        user2.setUserInfoList(userInfoList);
        userList.add(user2);
        return LayuiResponseResult.build(userList.size(), userList);
    }

    @PostMapping("/update")
    @ResponseBody
    public String update(@RequestBody List<User> userList){
        System.out.println("====");
        return "";
    }


}
