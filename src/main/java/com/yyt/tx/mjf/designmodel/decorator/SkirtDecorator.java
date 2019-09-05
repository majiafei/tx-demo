package com.yyt.tx.mjf.designmodel.decorator;

/**
 * @ClassName: SkirtDecorator
 * @Auther: admin
 * @Date: 2019/9/5 11:09
 * @Description:
 */
public class SkirtDecorator extends AbstracDecorator {

    public SkirtDecorator(Person person) {
        super(person);
    }

    @Override
    public void dressUp() {
        System.out.println("我穿了一件裙子");
        super.dressUp();
    }
}
