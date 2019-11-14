package com.yyt.tx.mjf.designmodel.observe;

/**
 * <p>
 *     观察者的实现类
 * </p>
 * @ClassName: Lisi
 * @Auther: admin
 * @Date: 2019/9/6 09:11
 * @Description:
 */
public class Lisi implements Observer{
    @Override
    public void update(String message) {
        System.out.println("李斯:报告大王，韩非子" + message );
    }
}
