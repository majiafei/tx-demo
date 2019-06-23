package com.yyt.tx.mjf.test;

import com.yyt.tx.mjf.TxDemoApplicationTests;
import com.yyt.tx.mjf.service.IUserService;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * @Package: com.yyt.tx.mjf.test
 * @ClassName: UserServiceSTest
 * @Author: majiafei
 * @Description:
 * @Date: 2019/6/23 21:10
 */
public class UserServiceSTest extends TxDemoApplicationTests {

    @Autowired
    private IUserService userService;

    @Test
    public void testSave() {
        userService.save();
    }

}
