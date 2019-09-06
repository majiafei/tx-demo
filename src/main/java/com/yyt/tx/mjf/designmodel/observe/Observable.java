package com.yyt.tx.mjf.designmodel.observe;

/**
 * <p>
 *     被观察者的接口
 * </p>
 * @ClassName: Observable
 * @Auther: admin
 * @Date: 2019/9/6 09:13
 * @Description:
 */
public interface Observable {

    void addObserver(Observer observer);

    void removeObserver(Observer observer);

    void notifyObserver(String message);
}
