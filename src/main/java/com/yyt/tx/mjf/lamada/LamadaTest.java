package com.yyt.tx.mjf.lamada;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

/**
 * @ClassName: LamadaTest
 * @Auther: admin
 * @Date: 2019/8/28 14:47
 * @Description:
 */
public class LamadaTest {
    public static void main(String[] args) {
        // 1.
        new Thread(() -> System.out.println(Thread.currentThread().getName())).start();

        // 2.对列表进行迭代
        List<String> features = Arrays.asList("Lambdas", "Default Method", "Stream API", "Date and Time API");
        features.forEach(n -> System.out.println(n));

        features.forEach(System.out::println);

        List<String> collect1 = features.stream().map(v -> "9").collect(Collectors.toList());
        System.out.println(collect1);
    }
}
