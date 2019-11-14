package com.yyt.tx.mjf.concurrent;

import org.aspectj.weaver.ast.Var;

import java.util.concurrent.*;

/**
 * @ClassName: MulThreadTest
 * @Auther: admin
 * @Date: 2019/8/28 13:54
 * @Description:
 */
public class MulThreadTest {

    public static void main(String[] args) {
        // 可缓存的线程，如果当前有可用的线程，就用可用的线程，没有就创建
/*        ExecutorService executorService = Executors.newCachedThreadPool();

        for (int i = 0; i < 10; i++) {
            try {
                Thread.sleep(1000);
                System.out.println(Thread.currentThread());
            } catch (InterruptedException e) {
                e.printStackTrace();
            }

            executorService.execute(new Runnable() {
                @Override
                public void run() {
                    System.out.println(Thread.currentThread().getName() +"正在执行");
                }
            });
        }

        executorService.shutdown();*/


        // 可重用的固定个数的线程池
/*        ExecutorService executorService = Executors.newFixedThreadPool(10);
        for (int i = 0; i < 15; i++) {
            executorService.execute(new Runnable() {
                @Override
                public void run() {
                    System.out.println(Thread.currentThread() + "正在执行");
                    try {
                        Thread.sleep(1000);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                }
            });
        }
        executorService.shutdown();*/

        // 创建一个定长线程池，可定时及周期执行
     /*   ScheduledExecutorService scheduledExecutorService = Executors.newScheduledThreadPool(3);

        // 延迟10秒
        scheduledExecutorService.schedule(new Runnable() {
            @Override
            public void run() {
                System.out.println("=================");
            }
        }, 10, TimeUnit.SECONDS);*/

        // 创建一个单线程的线程池
/*        ExecutorService executorService = Executors.newSingleThreadExecutor();
        for (int i = 0; i < 10; i++) {
            final int index = i;
            executorService.execute(new Runnable() {
                @Override
                public void run() {
                    System.out.println(index);
                    try {
                        Thread.sleep(2000);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                }
            });
        }*/


        // 自定义线程池
        BlockingQueue<Runnable> blockingQueue = new ArrayBlockingQueue<>(10);
        ThreadPoolExecutor threadPoolExecutor = new ThreadPoolExecutor(3, 6, 50, TimeUnit.MICROSECONDS, blockingQueue);

        Runnable runnable = new Runnable() {
            @Override
            public void run() {
                System.out.println(Thread.currentThread().getName() + "正在执行");
                try {
                    Thread.sleep(3000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        };

        Runnable runnable2 = new Runnable() {
            @Override
            public void run() {
                System.out.println(Thread.currentThread().getName() + "正在执行");
                try {
                    Thread.sleep(3000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        };

        Runnable runnable3 = new Runnable() {
            @Override
            public void run() {
                System.out.println(Thread.currentThread().getName() + "正在执行");
                try {
                    Thread.sleep(3000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        };

        threadPoolExecutor.execute(runnable);
        threadPoolExecutor.execute(runnable2);
        threadPoolExecutor.execute(runnable3);

        threadPoolExecutor.shutdown();
    }

}
