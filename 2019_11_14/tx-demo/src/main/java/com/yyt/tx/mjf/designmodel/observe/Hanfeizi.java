package com.yyt.tx.mjf.designmodel.observe;

import com.google.common.collect.Lists;

import java.util.List;

/**
 * @ClassName: Hanfeizi
 * @Auther: admin
 * @Date: 2019/9/6 09:15
 * @Description:
 */
public class Hanfeizi implements IHanfeizi, Observable {

    private List<Observer> observerList = Lists.newArrayList();

    @Override
    public void breakfast() {
        System.out.println("我开始吃饭了");
        this.notifyObserver("开始吃饭了");
    }

    @Override
    public void fun() {
        System.out.println("娱乐");
        this.notifyObserver("娱乐");
    }

    @Override
    public void addObserver(Observer observer) {
        observerList.add(observer);
    }

    @Override
    public void removeObserver(Observer observer) {
        observerList.remove(observer);
    }

    @Override
    public void notifyObserver(String message) {
        for (Observer observer : observerList) {
            observer.update(message);
        }
    }
}
