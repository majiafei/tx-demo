package com.yyt.tx.mjf.designmodel.decorator;

/**
 * @ClassName: AbstracDecorator
 * @Auther: admin
 * @Date: 2019/9/5 11:07
 * @Description:
 */
public abstract class AbstracDecorator extends Person{
    private Person person;

    public AbstracDecorator(Person person) {
        this.person = person;
    }

    @Override
    public void dressUp() {
        person.dressUp();
    }
}
