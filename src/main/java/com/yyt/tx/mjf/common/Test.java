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
        return m+1;
    }
}
