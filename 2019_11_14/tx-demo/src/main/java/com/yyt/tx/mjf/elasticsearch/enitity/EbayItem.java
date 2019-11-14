package com.yyt.tx.mjf.elasticsearch.enitity;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;
import org.springframework.data.elasticsearch.annotations.Field;
import org.springframework.data.elasticsearch.annotations.FieldType;

/**
 * @Package: com.yyt.tx.mjf.elasticsearch
 * @ClassName: EbayItem
 * @Author: majiafei
 * @Description:
 * @Date: 2019/7/13 19:38
 */
@Document(indexName = "richart", type = "ebay_item")
@Data
public class EbayItem {

    @Id
    private Integer id;

    @Field(type = FieldType.Text)
    private String title;

    @Field(type = FieldType.Text)
    private String description;

}
