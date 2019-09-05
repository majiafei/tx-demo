package com.yyt.tx.mjf.designmodel.decorator;

/**
 * @ClassName: Woman
 * @Auther: admin
 * @Date: 2019/9/5 11:06
 * @Description:
 */
public class Woman extends Person{
    private String name;

    public Woman(String name) {
        this.name = name;
    }


    @Override
    public void dressUp() {
        System.out.println("我是" + name + ",看我打扮的多么漂亮");
    }
}
