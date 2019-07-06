package com.yyt.tx.mjf.common.utils;

import com.google.common.collect.Lists;
import com.google.common.collect.Maps;
import com.yyt.tx.mjf.common.util.JsonUtils;
import org.springframework.util.CollectionUtils;

import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

/**
 * @ClassName: DescartesUtils
 * @Auther: admin
 * @Date: 2019/7/6 14:41
 * @Description:
 */
public class DescartesUtils {
    public static void generate(Map<String, List<String>> dataMap) {
        int total = 1;
        for (Map.Entry<String, List<String>> entry : dataMap.entrySet()) {
            total = total * entry.getValue().size();
        }
        List<Map<String, String>> resultList = Lists.newArrayList();
        for (int i = 0; i < total; i++) {
            resultList.add(Maps.newHashMap());
        }

        for (Map.Entry<String, List<String>> entry : dataMap.entrySet()) {
            List<String> valueList = entry.getValue();
            if (CollectionUtils.isEmpty(valueList)) {
                continue;
            }
            String key = entry.getKey();
            int num = total / valueList.size();
            int init = 0;
            int count = 0;
/*            for (String value : valueList) {
                for (; init < resultList.size(); init++) {
                    if (count == num) {
                        count = 0;
                        break;
                    }
                    count++;
                    resultList.get(init).put(key, value);
                }
            }*/
            for (; init < resultList.size();) {
                for (String value : valueList) {
                    count++;
                    resultList.get(init).put(key, value);
                    init++;
                    if (count == num) {
                        count = 0;
                        break;
                    }
                }
            }
        }

        System.out.println(JsonUtils.fromObjectToString(resultList));
    }

    public static void generate2(Map<String, List<String>> dataMap) {
        Map<String, Object> resultMap = Maps.newHashMap();
        Map<String, String> newMap = null;
        Map tempMap = null;
        int count = 0;
        for (Map.Entry<String, List<String>> entry : dataMap.entrySet()) {
            tempMap = resultMap;
            List<String> valueList = entry.getValue();
            String key = entry.getKey();
            if (!CollectionUtils.isEmpty(valueList)) {
                count++;
                for (String value : valueList) {
                    if (count == 1) {
                        newMap = Maps.newHashMap();
                        newMap.put("isEnd", "true");
                        tempMap.put(value, newMap);
                    } else {
                        Map<String, Object> map = resultMap;
                        for (Map.Entry<String, Object> entry1 : map.entrySet()) {
                            Object isEnd = ((Map) entry1.getValue()).get("isEnd");
                            if (!isEnd.equals("true")) {
                                map = (Map) entry1.getValue();
                                continue;
                            }
                            ((Map) entry1.getValue()).put("isEnd", "false");
                            newMap = Maps.newHashMap();
                            newMap.put("isEnd", "true");
                            ((Map) entry1.getValue()).put(value, newMap);
                        }
                    }
                }
            }
        }
        System.out.println(resultMap);
     }

    public static void main(String[] args) {
        Map<String, List<String>> map = Maps.newHashMap();
        map.put("1", Lists.newArrayList("白色", "黑色"));
        map.put("2", Lists.newArrayList("6GB", "8GB"));
        map.put("3", Lists.newArrayList("128GB", "64GB"));

        generate2(map);
    }
}
