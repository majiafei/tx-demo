package com.yyt.tx.mjf.entity;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

/**
 * @Package: com.yyt.tx.mjf.entity
 * @ClassName: EabyItemEntity
 * @Author: majiafei
 * @Description:
 * @Date: 2019/7/13 19:44
 */
@TableName("ebay_item")
@Data
public class EabyItemEntity {

    @TableField("ID")
    private Integer id;

    @TableField("Title")
    private String title;

    @TableField("Description")
    private String description;

}
