package com.yyt.tx.mjf.designmodel.observe;

/**
 * @ClassName: Client
 * @Auther: admin
 * @Date: 2019/9/6 09:19
 * @Description:
 */
public class Client {

    public static void main(String[] args) {
        IHanfeizi hanfeizi = new Hanfeizi();
        Observer lisi = new Lisi();
        ((Hanfeizi) hanfeizi).addObserver(lisi);
        hanfeizi.breakfast();
        hanfeizi.fun();
    }

}
