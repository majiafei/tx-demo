package com.yyt.tx.mjf.controller;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.yyt.tx.mjf.common.pojo.EasyUITree;
import com.yyt.tx.mjf.entity.User;
import com.yyt.tx.mjf.entity.UserList;
import com.yyt.tx.mjf.service.IUserService;
import com.yyt.tx.mjf.service.impl.UserServiceImpl;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;


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
    private UserServiceImpl userService;

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

    @RequestMapping("/tanchu")
    public String tanchu() {
        return "tanchu/tanchu";
    }

    @RequestMapping("/tanchu2")
    public String tanchu2() {
        return "tanchu/tanchu2";
    }

    @RequestMapping("/table1")
    public String table1() {
        return "table/table1";
    }

    @RequestMapping("/table2")
    public String table2() {
        return "table/table2";
    }

    @RequestMapping("/list")
    @ResponseBody
    public Map listUser(@RequestParam(value = "page", defaultValue = "1") Integer page, Integer limit, User user) {
        Page page1 = new Page(page, limit);
        IPage<User> list = userService.list1(page1, user);

        Map map = new HashMap();
        map.put("count", list.getTotal());
        map.put("data", list.getRecords());
        map.put("code", 0);
        map.put("msg", "");

        return map;
    }

    @RequestMapping("/tree")
    @ResponseBody
    public List<EasyUITree> getTree(@RequestParam(value = "id", defaultValue = "0") Long parentId) {
        List<User> list = userService.list(new Page(1, 10)).getRecords();
        List<EasyUITree> easyUITreeList = new ArrayList<>();

        list.stream().map(user -> {
            EasyUITree easyUITree = new EasyUITree();
            easyUITree.setId(user.getUserId());
            easyUITree.setState("closed");
            easyUITree.setText(user.getUserName());
            easyUITreeList.add(easyUITree);
            return easyUITree;
        }).collect(Collectors.toList());

        return easyUITreeList;
    }

    @RequestMapping("/picture")
    public String picture() {
        return "picture/index";
    }

}
