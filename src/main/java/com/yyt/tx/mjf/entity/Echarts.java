package com.yyt.tx.mjf.entity;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

/**
 * @ProjectName: house
 * @Package: com.yyt.tx.mjf.entity
 * @ClassName: Echarts
 * @Author: majiafei
 * @Description:
 * @Date: 2019/6/15 22:29
 */
@TableName("tb_charts")
@Data
public class Echarts {

    @TableId("id")
    private int id;

    @TableField("type")
    private String type;

    @TableField("num")
    private Integer num;

    @TableField("week")
    private String week;

}
