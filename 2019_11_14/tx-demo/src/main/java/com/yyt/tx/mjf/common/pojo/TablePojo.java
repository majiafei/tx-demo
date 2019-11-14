package com.yyt.tx.mjf.common.pojo;

import lombok.Data;

import java.util.List;

/**
 * @ProjectName: house
 * @Package: com.yyt.tx.mjf.common.pojo
 * @ClassName: TablePojo
 * @Author: majiafei
 * @Description:
 * @Date: 2019/6/22 23:01
 */
@Data
public class TablePojo {
    private String tableName;
    private String primaryKeyName;
    List<ColumnPojo> columnPojoList;
}
