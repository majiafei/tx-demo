package com.yyt.tx.mjf.entity;

import lombok.Data;
import org.omg.CORBA.PRIVATE_MEMBER;

/**
 * @ProjectName: house
 * @Package: com.yyt.tx.mjf.entity
 * @ClassName: UserInfo
 * @Author: majiafei
 * @Description:
 * @Date: 2019/7/10 21:21
 */
@Data
public class UserInfo {
    private int id;

    private String name;

    private String sex;

    private boolean on;

    private int age;


}