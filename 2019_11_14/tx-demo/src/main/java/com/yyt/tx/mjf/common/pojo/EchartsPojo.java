package com.yyt.tx.mjf.common.pojo;

import lombok.Data;

import java.util.List;
import java.util.Set;

/**
 * @ProjectName: house
 * @Package: com.yyt.tx.mjf.common.pojo
 * @ClassName: EchartsPojo
 * @Author: majiafei
 * @Description:
 * @Date: 2019/6/15 22:24
 */
@Data
public class EchartsPojo {

    private Set<String> legend;

    private Set<String> xAxis;

    private List<EchartsSeries> series;

    public static EchartsPojo build() {
        return new EchartsPojo();
    }

}
