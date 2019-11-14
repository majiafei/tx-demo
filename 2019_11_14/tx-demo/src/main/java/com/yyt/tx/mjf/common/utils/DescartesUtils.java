package com.yyt.tx.mjf.common.utils;

import com.google.common.collect.Lists;
import com.google.common.collect.Maps;
import com.yyt.tx.mjf.common.util.JsonUtils;
import org.springframework.util.CollectionUtils;

import java.util.*;

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


    private static void descartes(List<List<String>> dimvalue, List<List<String>> result, int layer, List<String> curList) {
        if (layer < dimvalue.size() - 1) {
            if (dimvalue.get(layer).size() == 0) {
                descartes(dimvalue, result, layer + 1, curList);
            } else {
                for (int i = 0; i < dimvalue.get(layer).size(); i++) {
                    List<String> list = new ArrayList<String>(curList);
                    list.add(dimvalue.get(layer).get(i));
                    descartes(dimvalue, result, layer + 1, list);
                }
            }
        } else if (layer == dimvalue.size() - 1) {
            if (dimvalue.get(layer).size() == 0) {
                result.add(curList);
            } else {
                for (int i = 0; i < dimvalue.get(layer).size(); i++) {
                    List<String> list = new ArrayList<String>(curList);
                    list.add(dimvalue.get(layer).get(i));
                    result.add(list);
                }
            }
        }}

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
            List<List<String>> list = new ArrayList<List<String>>();
            List<String> listSub1 = new ArrayList<String>();
            List<String> listSub2 = new ArrayList<String>();
            List<String> listSub3 = new ArrayList<String>();
            listSub1.add("1");
            listSub1.add("2");

            listSub2.add("3");
            listSub2.add("4");

            listSub3.add("a");
            listSub3.add("b");
            listSub3.add("c");

            list.add(listSub1);
            list.add(listSub2);
            list.add(listSub3);
            List<List<String>> result = new ArrayList<List<String>>();
            dikaerji(list, 0, Lists.newArrayList(), result);
            System.out.println(JsonUtils.fromObjectToString(result));
    }

    public static void dikaerji(List<List<String>> data, int layer, List<String> curList, List<List<String>> resultList) {
        if (layer < data.size() - 1) {
            if (data.get(layer).size() == 0) {
                dikaerji(data, layer + 1, curList, resultList);
            } else {
                for (int i = 0; i < data.get(layer).size(); i++) {
                    List<String> temList = Lists.newArrayList(curList);
                    temList.add(data.get(layer).get(i));
                    dikaerji(data, layer + 1, temList, resultList);
                }
            }
        } else {
            if (data.get(layer).size() == 0) {
               resultList.add(curList);
            } else {
                for (int i = 0; i < data.get(layer).size(); i++) {
                    List<String> temList = Lists.newArrayList(curList);
                    temList.add(data.get(layer).get(i));
                    resultList.add(temList);
                }
            }
        }
    }
}
