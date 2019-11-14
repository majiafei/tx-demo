package com.yyt.tx.mjf.mapper;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.yyt.tx.mjf.common.mapper.TxBaseMapper;
import com.yyt.tx.mjf.entity.User;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

/**
 * @ClassName: UserMapper
 * @Auther: admin
 * @Date: 2019/3/22 13:36
 * @Description:
 */
public interface UserMapper extends TxBaseMapper<User> {

    Page<User> listUser(@Param("page") Page page);

    List<Map> groupByName();

}
