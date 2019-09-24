package com.yyt.tx.mjf.service;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.IService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.yyt.tx.mjf.entity.User;

import java.util.List;

/**
 * @ClassName: IUserService
 * @Auther: admin
 * @Date: 2019/3/22 13:38
 * @Description:
 */
public interface IUserService extends IService<User> {

//    void save(User user) throws Exception;

    User getUserById(int userId);

    IPage<User> list(Page page);

    void save();

    void addUser(User user);

}
