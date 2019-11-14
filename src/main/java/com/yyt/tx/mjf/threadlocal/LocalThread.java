package com.yyt.tx.mjf.threadlocal;

/**
 * @ClassName: LocalThread
 * @Auther: admin
 * @Date: 2019/10/9 09:12
 * @Description:
 */
public class LocalThread implements Runnable {

    private ThreadLocal<String> threadLocal = new ThreadLocal<>();

    @Override
    public void run() {
        threadLocal.set(Thread.currentThread().getName());
        System.out.println("当前线程：" + Thread.currentThread().getName() + "输出的值:" + threadLocal.get());
    }
}
