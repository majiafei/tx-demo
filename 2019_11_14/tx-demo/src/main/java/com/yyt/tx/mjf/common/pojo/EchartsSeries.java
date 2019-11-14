package com.yyt.tx.mjf.common.pojo;

import lombok.Data;

import java.util.List;

/**
 * @Package: com.yyt.tx.mjf.common.pojo
 * @ClassName: EchartsSeries
 * @Author: majiafei
 * @Description:
 * @Date: 2019/6/15 22:28
 */
@Data
public class EchartsSeries {

    private String name;

    private String type;

    private String stack;

    private List<?> data;

}
