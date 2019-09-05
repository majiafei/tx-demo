package com.yyt.tx.mjf.designmodel.decorator;

/**
 * @ClassName: ShortSleeveDecorator
 * @Auther: admin
 * @Date: 2019/9/5 11:10
 * @Description:
 */
public class ShortSleeveDecorator extends AbstracDecorator {
    public ShortSleeveDecorator(Person person) {
        super(person);
    }

    @Override
    public void dressUp() {
        System.out.println("我穿了一件上衣，印有一个长颈鹿");
        super.dressUp();
    }
}
