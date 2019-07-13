package com.yyt.tx.mjf.entity;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.util.List;

/**
 * @ClassName: User
 * @Auther: admin
 * @Date: 2019/3/22 13:36
 * @Description:
 */
@Setter
@Getter
@TableName("tb_user")
public class User {

    @TableId("user_id")
    private Long userId;

    @TableField("user_name")
    private String userName;

    @TableField("user_age")
    private Integer useAge;

    @TableField("create_time")
    private Date createTime;

    @TableField(exist = false)
    private List<UserInfo> userInfoList;

}
