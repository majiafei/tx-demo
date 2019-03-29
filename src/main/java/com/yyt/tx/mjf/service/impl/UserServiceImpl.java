package com.yyt.tx.mjf.service.impl;

import com.yyt.tx.mjf.entity.User;
import com.yyt.tx.mjf.mapper.UserMapper;
import com.yyt.tx.mjf.service.IUserService;
import lombok.extern.log4j.Log4j2;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.expression.AccessException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * @ClassName: UserServiceImpl
 * @Auther: admin
 * @Date: 2019/3/22 13:40
 * @Description:
 */
@Service
public class UserServiceImpl implements IUserService {

    private static final Logger LOGGER = LoggerFactory.getLogger(UserServiceImpl.class);

    @Autowired
    private UserMapper userMapper;


    @Override
    @Transactional(rollbackFor = Exception.class)
    public void save(User user) throws Exception {
        LOGGER.info("开始插入用户");
        userMapper.insert(user);
        LOGGER.info("插入用户完成");
        //a(user);
    }

    private void a(User user) {
        userMapper.insert(user);
//        int i = 1/0;
    }

}
