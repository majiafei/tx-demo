package com.yyt.tx.mjf.designmodel.decorator;

/**
 * @ClassName: Master
 * @Auther: admin
 * @Date: 2019/9/5 11:10
 * @Description:
 */
public class Master {
    public static void main(String[] args) {
        Person women = new Woman("小红");
        AbstracDecorator skirtDecorator = new SkirtDecorator(women);
        AbstracDecorator shortSleeveDecorator = new ShortSleeveDecorator(skirtDecorator);
        HighHeelsDecorator highHeelsDecorator = new HighHeelsDecorator(shortSleeveDecorator);
        highHeelsDecorator.dressUp();
    }
}
