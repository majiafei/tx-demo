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

    private long count;

    private List<T> data;

    private int code;

    private String msg;

    public LayuiResponseResult(long count, List<T> data) {
        this.count = count;
        this.data = data;
    }

    public static <T> LayuiResponseResult build(long count, List<T> data) {
        return new LayuiResponseResult(count, data);
    }

}
