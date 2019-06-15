package com.yyt.tx.mjf.test;

import com.yyt.tx.mjf.TxDemoApplication;
import com.yyt.tx.mjf.TxDemoApplicationTests;
import com.yyt.tx.mjf.mapper.UserMapper;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Map;

/**
 * @ProjectName: house
 * @Package: com.yyt.tx.mjf.test
 * @ClassName: UserMapperTest
 * @Author: majiafei
 * @Description:
 * @Date: 2019/6/15 21:42
 */
public class UserMapperTest extends TxDemoApplicationTests {

    @Autowired
    private UserMapper userMapper;

    @Test
    public void testGroupByName() {
        List<Map> maps = userMapper.groupByName();
        System.out.println(maps.size());
    }

}
