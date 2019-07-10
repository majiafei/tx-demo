package com.yyt.tx.mjf.common.pojo;

import lombok.Data;

import java.util.List;

/**
 * @ProjectName: house
 * @Package: com.yyt.tx.mjf.common.pojo
 * @ClassName: LayuiResponseResult
 * @Author: majiafei
 * @Description:
 * @Date: 2019/7/10 21:18
 */
@Data
public class LayuiResponseResult<T> {

    private long total;

    private List<T> data;

    private int code;

    private String msg;

    public LayuiResponseResult(long total, List<T> data) {
        this.total = total;
        this.data = data;
    }

    public static <T> LayuiResponseResult build(long total, List<T> data) {
        return new LayuiResponseResult(total, data);
    }

}
