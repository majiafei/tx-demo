package com.yyt.tx.mjf.common.util;

import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * @ProjectName: house
 * @Package: com.yyt.tx.mjf.common.util
 * @ClassName: DateUtils
 * @Author: majiafei
 * @Description:
 * @Date: 2019/7/13 15:16
 */
public class DateUtils {

    public static final String dateTimeFormat = "yyyy-MM-dd HH:mm:ss";

    public static String fromDateToStr(Date date, String format) {
        try {
            SimpleDateFormat sdf = new SimpleDateFormat(format);
            return sdf.format(date);
        } catch (Exception e) {
            throw new RuntimeException("解析日期失败");
        }
    }

}
