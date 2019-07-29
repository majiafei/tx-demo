package com.yyt.tx.mjf.common;

/**
 * @ClassName: Test
 * @Auther: admin
 * @Date: 2019/7/22 11:16
 * @Description:
 */
public class Test {
    private int m;

    /**
     *  0: iconst_0
     *          1: istore_1
     *          2: iload_1
     *          3: iinc          1, 1
     *          6: istore_1
     *          7: aload_0
     *          8: getfield      #2                  // Field m:I
     *         11: iconst_1
     *         12: iadd
     *         13: ireturn
     * @return
     */
    public int inc(){
        int i = 0;
        i = i++;
        System.out.println(i);
        return m+1;
    }

    /**
     *  descriptor: ()V
     *     flags: ACC_PUBLIC
     *     Code:
     *       stack=2, locals=2, args_size=1
     *          0: iconst_0
     *          1: istore_1
     *          2: iinc          1, 1
     *          5: iload_1
     *          6: istore_1
     *          7: getstatic     #2                  // Field java/lang/System.out:Ljava/io/PrintStream;
     *         10: iload_1
     *         11: invokevirtual #3                  // Method java/io/PrintStream.println:(I)V
     */
    public void in2(){
        int i = 0;
        i = ++i;
        System.out.println(i);
    }

    public static void main(String[] args) {
        int i = 0;
        i = i++;
        System.out.println(i);
    }
}
