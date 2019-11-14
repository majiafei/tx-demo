package com.yyt.tx.mjf.elasticsearch.repisitory;

import com.yyt.tx.mjf.elasticsearch.enitity.EbayItem;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * @Package: com.yyt.tx.mjf.elasticsearch.repisitory
 * @ClassName: EbayItemRepository
 * @Author: majiafei
 * @Description:
 * @Date: 2019/7/13 19:38
 */
public interface EbayItemRepository extends ElasticsearchRepository<EbayItem, Integer> {
}
