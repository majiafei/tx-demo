package com.yyt.tx.mjf.jsoup;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.io.IOException;

/**
 * @ClassName: Jsoup
 * @Auther: admin
 * @Date: 2019/9/23 09:57
 * @Description:
 */
public class MyJsoup {

    public static final String URL = "https://www.iqiyi.com/dianying_new/i_list_paihangbang.html?type=2";

    /**
     * 请求超时时间，15秒
     */
    private static final int TIMEOUT = 15000;

    public static void main(String[] args) throws IOException {
        Document document = Jsoup.connect(URL).timeout(TIMEOUT).get();

        // 获取高分榜的元数据，先通过data-seq属性的值（高分榜值为2）来定位元素节点，再通过ClassName精确查找出需要的数据
        Elements metaData = document.getElementsByAttributeValue("data-seq", "2")
                .get(1)
                .getElementsByClass("site-title_score");

        for (Element element : metaData) {
            // 通过<span>标签可以获取电影评分
            String score = element.select("span").text();
            // 通过<a>标签可以获取电影名和视频地址
            Element data = element.selectFirst("a");
            // 电影名
            String name = data.text();
            // 视频地址
            String url = data.attr("href");
            System.out.println(name + "\t\t\t" + score + "\t\t\t" + url);
        }


    }

}
