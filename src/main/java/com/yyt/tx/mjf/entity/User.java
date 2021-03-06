package com.yyt.tx.mjf.entity;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

import javax.management.remote.JMXPrincipal;
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
    private Date updateTime;

    @TableField(exist = false)
    private String createTimeStr;

    @TableField(exist = false)
    private String updateTimeStr;

    @TableField(exist = false)
    private List<UserInfo> userInfoList;

    @JsonProperty("layDisabled")
    @TableField(exist = false)
    private Boolean layDisabled;

    public Boolean getLAY_DISABLED() {
        return layDisabled;
    }

    public void setLAY_DISABLED(Boolean LAY_DISABLED) {
        this.layDisabled = LAY_DISABLED;
    }
}
