package com.yyt.tx.mjf.controller;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.fasterxml.jackson.databind.util.JSONPObject;
import com.yyt.tx.mjf.common.pojo.EasyUITree;
import com.yyt.tx.mjf.entity.User;
import com.yyt.tx.mjf.entity.UserList;
import com.yyt.tx.mjf.mapper.UserMapper;
import com.yyt.tx.mjf.service.IUserService;
import com.yyt.tx.mjf.service.impl.UserServiceImpl;
import org.hibernate.service.spi.ServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

    @Autowired
    private IUserService iUserService;

    @Autowired
    private UserMapper userMapper;

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
    public Object listUser(@RequestParam(value = "callback", required = false) String callback, @RequestParam(value = "page", defaultValue = "1") Integer page, Integer limit, User user) {
        Page page1 = new Page(page, limit);
        IPage<User> list = userService.list1(page1, user);

        Map map = new HashMap();
        map.put("count", list.getTotal());
        map.put("data", list.getRecords());
        map.put("code", 0);
        map.put("msg", "");

        if (callback != null) {
           return new JSONPObject(callback, map);
        }

        return map;
    }

    @RequestMapping("/tree")
    @ResponseBody
    public List<EasyUITree> getTree(@RequestParam(value = "id", defaultValue = "0") Long parentId, Integer siteId) {
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

    @RequestMapping("/picture2")
    public String picture2() {
        return "picture/picture2";
    }

    @RequestMapping("/template")
    public String showTempl() {
        return "template/scriptTempl";
    }

    @RequestMapping("engine")
    public String engine() {
        return "engine/engine";
    }

    @RequestMapping("/echarts")
    public String echarts() {
        return "echarts/echarts";
    }
    @RequestMapping("groupByName")
    @ResponseBody
    public Map<String, List> groupByName() {
        List<Map> maps = userMapper.groupByName();
        Map<String, List> resultMap = new HashMap();

        List<String> names = new ArrayList<>();
        List<Long> countList = new ArrayList<>();
        for (Map map : maps) {
            names.add((String) map.get("user_name"));
            countList.add((Long) map.get("num"));
        }

        resultMap.put("categories", names);
        resultMap.put("data", countList);

        return resultMap;
    }

    @RequestMapping(value = "/addUser", method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity addUser(@RequestBody User user) {
        try {
            userService.addUser(user);

            return ResponseEntity.ok().build();
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).build();
        }
    }

    @RequestMapping("/list2")
    @ResponseBody
    public ResponseEntity<IPage<User>> list2(@RequestParam(defaultValue = "1") int current, @RequestParam(defaultValue = "10") int size) {
        Page page = new Page(current, size);
        // 暂时先不分页
        IPage<User> list = iUserService.list(page);

        return ResponseEntity.ok(list);
    }

    @RequestMapping("/delete/{userId}")
    @ResponseBody
    public ResponseEntity<Void> deleteUser(@PathVariable("userId") Long userId) {
        try {
            iUserService.deleteUser(userId);

            return ResponseEntity.ok().build();
        } catch (ServiceException se) {
            se.printStackTrace();
            return ResponseEntity.status(500).build();
        } catch (Exception e) {
            return ResponseEntity.status(500).build();
        }
    }
}
