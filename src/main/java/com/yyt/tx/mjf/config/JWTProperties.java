package com.yyt.tx.mjf.config;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

/**
 * @ClassName: JWTProperties
 * @Auther: admin
 * @Date: 2019/9/4 13:09
 * @Description:
 */
@Component
@ConfigurationProperties(prefix = "jwt")
@Data
public class JWTProperties {
    private String publicKeyPath;

    private String pricateKeyPath;

    private String secret;
}
