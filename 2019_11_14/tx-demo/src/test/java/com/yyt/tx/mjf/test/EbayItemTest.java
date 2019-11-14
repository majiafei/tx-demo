package com.yyt.tx.mjf.test;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.yyt.tx.mjf.TxDemoApplicationTests;
import com.yyt.tx.mjf.elasticsearch.enitity.EbayItem;
import com.yyt.tx.mjf.elasticsearch.repisitory.EbayItemRepository;
import com.yyt.tx.mjf.entity.EabyItemEntity;
import com.yyt.tx.mjf.mapper.EbayItemMapper;
import org.junit.Assert;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * @Package: com.yyt.tx.mjf.test
 * @ClassName: EbayItemTest
 * @Author: majiafei
 * @Description:
 * @Date: 2019/7/13 19:46
 */
public class EbayItemTest extends TxDemoApplicationTests {

    @Autowired
    private EbayItemMapper ebayItemMapper;

    @Autowired
    private EbayItemRepository ebayItemRepository;

    @Test
    public void testGet() {
        EabyItemEntity eabyItemEntity = ebayItemMapper.selectById(509794);

        EbayItem ebayItem = null;
        for (int  i = 6060606;i < 10000000; i++) {
            ebayItem = new EbayItem();
            ebayItem.setId(i);
            ebayItem.setTitle(eabyItemEntity.getTitle());
            ebayItem.setDescription(eabyItemEntity.getDescription());

            ebayItemRepository.save(ebayItem);
        }

        Assert.assertNotNull(eabyItemEntity);
    }

    @Test
    public void testGetByPage() {
        IPage<EabyItemEntity> page = new Page<>(70, 5000);
        IPage<EabyItemEntity> entityIPage = null;
        EbayItem ebayItem = null;
        int i = 70;
        do {
            entityIPage = ebayItemMapper.selectPage(page, null);
            for (EabyItemEntity eabyItemEntity : entityIPage.getRecords()) {
                ebayItem = new EbayItem();
                ebayItem.setId(eabyItemEntity.getId());
                ebayItem.setTitle(eabyItemEntity.getTitle());
                ebayItem.setDescription(eabyItemEntity.getDescription());

                ebayItemRepository.save(ebayItem);
            }
            i++;
            page.setCurrent(i);
        } while (entityIPage != null && entityIPage.getRecords().size() > 0);
    }

}
