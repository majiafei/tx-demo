package com.yyt.tx.mjf.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.PaginationInterceptor;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.yyt.tx.mjf.entity.User;
import com.yyt.tx.mjf.mapper.UserMapper;
import com.yyt.tx.mjf.service.IUserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collection;
import java.util.List;

/**
 * @ClassName: UserServiceImpl
 * @Auther: admin
 * @Date: 2019/3/22 13:40
 * @Description:
 */
@Service
public class UserServiceImpl extends ServiceImpl<UserMapper, User> {

    private static final Logger LOGGER = LoggerFactory.getLogger(UserServiceImpl.class);

//    @Autowired
//    private UserMapper userMapper;


/*    @Override
    @Transactional(rollbackFor = Exception.class)
    public void save(User user) throws Exception {
        LOGGER.info("开始插入用户");
        userMapper.insert(user);
        LOGGER.info("插入用户完成");
        //a(user);
    }*/

//    @Override
    public User getUserById(int userId) {
        return this.baseMapper.selectById(userId);
    }

//    @Override
    public IPage<User> list(Page page) {
//        IPage<User> page1 = this.baseMapper.selectPage(page, null);

        return this.baseMapper.selectPage(page, null);
    }

    private void a(User user) {
        this.baseMapper.insert(user);
//        int i = 1/0;
    }

    public IPage<User> list1(Page page, User user) {
        return this.baseMapper.selectPage(page, new QueryWrapper<User>().like("user_name",
                user.getUserName()==null ? "" : user.getUserName()));
    }

}
