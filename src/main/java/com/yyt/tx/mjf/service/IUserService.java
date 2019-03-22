package com.yyt.tx.mjf.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.yyt.tx.mjf.entity.User;

/**
 * @ClassName: IUserService
 * @Auther: admin
 * @Date: 2019/3/22 13:38
 * @Description:
 */
public interface IUserService {

    void save(User user) throws Exception;

}
