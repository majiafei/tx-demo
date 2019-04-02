package com.yyt.tx.mjf.controller;

import com.yyt.tx.mjf.entity.User;
import com.yyt.tx.mjf.entity.UserList;
import com.yyt.tx.mjf.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * @ClassName: UserController
 * @Auther: admin
 * @Date: 2019/3/22 13:45
 * @Description:
 */
@Controller
@RequestMapping("/user")
public class UserController {

    @Autowired
    private IUserService userService;

    @RequestMapping("/save")
    @ResponseBody
    public String saveUser(@RequestBody UserList userList) {
        try {
            //userService.save(user);
            System.out.println();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "OK";
    }

    @RequestMapping("/get/{userId}")
    @ResponseBody
    public User saveUser(@PathVariable Integer userId) {
        return userService.getUserById(userId);
    }

    @RequestMapping("/hello")
    public String hello() {
        return "hello";
    }

    @RequestMapping("/mjf")
    public String mjf() {
        return "mjf";
    }

}
