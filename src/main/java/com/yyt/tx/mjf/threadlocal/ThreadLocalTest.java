package com.yyt.tx.mjf.threadlocal;

/**
 * @ClassName: ThreadLocalTest
 * @Auther: admin
 * @Date: 2019/10/9 09:12
 * @Description:
 */
public class ThreadLocalTest {

    public static void main(String[] args) {
        LocalThread localThread = new LocalThread();
        Thread t = new Thread(localThread);
        t.start();

        Thread t1 = new Thread(localThread);
        t1.start();
    }
}
