package com.yyt.tx.mjf.controller;

import com.yyt.tx.mjf.common.pojo.EchartsPojo;
import com.yyt.tx.mjf.common.pojo.EchartsSeries;
import com.yyt.tx.mjf.entity.Echarts;
import com.yyt.tx.mjf.mapper.EchartsMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.*;

/**
 * @ProjectName: house
 * @Package: com.yyt.tx.mjf.controller
 * @ClassName: EchartsController
 * @Author: majiafei
 * @Description:
 * @Date: 2019/6/15 22:32
 */
@Controller
@RequestMapping("/echarts")
public class EchartsController {

    @Autowired
    private EchartsMapper echartsMapper;

    @GetMapping("/count")
    @ResponseBody
    public EchartsPojo countEcharts() {
        List<Echarts> echartsList = echartsMapper.selectList(null);

/*        Set<String> legend = new LinkedHashSet<>();
        Set<String> xAxis = new LinkedHashSet<>();
        Map<String, Integer> map = new LinkedHashMap<>();
        echartsList.forEach(echarts -> {
            if (map.get(echarts.getWeek()) != null) {
                map.put(echarts.getWeek(), map.get(echarts.getWeek()) + echarts.getNum());
            } else {
                map.put(echarts.getWeek(), echarts.getNum());
            }
        });
        EchartsPojo echartsPojo = EchartsPojo.build();
//        echartsPojo.setLegend(legend);
        echartsPojo.setXAxis(map.keySet());
        List<EchartsSeries> series = new ArrayList<>();
        EchartsSeries echartsSeries = new EchartsSeries();

        List<Integer> data = new ArrayList<>();
        data.addAll(map.values());
        echartsSeries.setData(data);

        series.add(echartsSeries);

        echartsPojo.setSeries(series);*/

        Map<String, Map<String, Integer>> weekTypeMap = new HashMap<>();
        Set<String> xAxis = new LinkedHashSet<>();
        echartsList.forEach(echarts -> {
            xAxis.add(echarts.getWeek());
            if (weekTypeMap.get(echarts.getType()) != null) {
                Map<String, Integer> typeMap = weekTypeMap.get(echarts.getType());
                if (typeMap.get(echarts.getWeek()) != null) {
                    Integer num = typeMap.get(echarts.getWeek());
                    typeMap.put(echarts.getWeek(), num + echarts.getNum());
                } else {
                    typeMap.put(echarts.getWeek(), echarts.getNum());
                }
            } else {
                Map<String, Integer> typeMap = new HashMap<>();
                typeMap.put(echarts.getWeek(), echarts.getNum());
                weekTypeMap.put(echarts.getType(), typeMap);
            }
        });

        EchartsSeries echartsSeries = null;
        List<EchartsSeries> echartsSeriesList = new ArrayList<>();
        List<Integer> data = null;
        Set<String> legend = new LinkedHashSet<>();
        for (Map.Entry<String, Map<String, Integer>> entry : weekTypeMap.entrySet()) {
            echartsSeries = new EchartsSeries();
            echartsSeries.setName(entry.getKey());
            legend.add(entry.getKey());
            data = new ArrayList<>();
            for (String week : xAxis) {
                if (entry.getValue().get(week) != null) {
                    data.add(entry.getValue().get(week));
                } else {
                    data.add(0);
                }
            }
            echartsSeries.setType("line");
//            echartsSeries.setStack("总量");
            echartsSeries.setData(data);
            echartsSeriesList.add(echartsSeries);
        }

        EchartsPojo echartsPojo = EchartsPojo.build();
        echartsPojo.setXAxis(xAxis);
        echartsPojo.setSeries(echartsSeriesList);
        echartsPojo.setLegend(legend);

        return echartsPojo;
    }

}
