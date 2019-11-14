package com.yyt.tx.mjf.test;

import com.yyt.tx.mjf.TxDemoApplication;
import com.yyt.tx.mjf.TxDemoApplicationTests;
import com.yyt.tx.mjf.entity.User;
import com.yyt.tx.mjf.mapper.UserMapper;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * @ProjectName: house
 * @Package: com.yyt.tx.mjf.test
 * @ClassName: UserMapperTest
 * @Author: majiafei
 * @Description:
 * @Date: 2019/6/15 21:42
 */
public class UserMapperTest extends TxDemoApplicationTests {

    @Autowired
    private UserMapper userMapper;

    @Test
    public void testGroupByName() {
        List<Map> maps = userMapper.groupByName();
        System.out.println(maps.size());
    }
    @Test
    public void testSave() {
        Pattern compile = Pattern.compile("[\ud83c\udc00-\ud83c\udfff]|[\ud83d\udc00-\ud83d\udfff]|[\u2600-\u27ff]", Pattern.UNICODE_CASE | Pattern.CASE_INSENSITIVE);

   /*     User user = new User();
        user.setUserName("\uD83D\uDD25");
        userMapper.insert(user);*/

        Matcher emojiTitle = compile.matcher("\uD83D\uDD25");

        System.out.print(emojiTitle.find());
        System.out.println("\uD83D\uDD25[HOT SALE]\uD83D\uDD25Large Tapestry Wall Hang Towel Beach Yoga Decor".replaceAll("\ud83c\udc00-\ud83c\udfff]|[\ud83d\udc00-\ud83d\udfff]|[\u2600-\u27ff]", ""));
    }

    @Test
    public void testGet() {
        User user = userMapper.selectById(1149506787037179906L);
        System.out.println(user.getUserName());
    }

}
