package com.yyt.tx.mjf.designmodel.decorator;

/**
 * @ClassName: HighHeelsDecorator
 * @Auther: admin
 * @Date: 2019/9/5 11:12
 * @Description:
 */
public class HighHeelsDecorator extends AbstracDecorator {
    public HighHeelsDecorator(Person person) {
        super(person);
    }

    @Override
    public void dressUp() {
        System.out.println("我穿了一个高跟鞋");
        super.dressUp();
    }
}
