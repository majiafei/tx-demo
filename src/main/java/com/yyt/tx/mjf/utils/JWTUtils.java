package com.yyt.tx.mjf.utils;

import com.yyt.tx.mjf.constants.JWTConstants;
import com.yyt.tx.mjf.entity.UserInfo;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.joda.time.DateTime;

import java.security.PrivateKey;
import java.security.PublicKey;

/**
 * @Package: com.yyt.tx.mjf.utils
 * @ClassName: JWTUtils
 * @Author: majiafei
 * @Description:
 * @Date: 2019/9/1 21:25
 */
public class JWTUtils {

    /**
     * 生成token
     * @param userInfo 用户信息
     * @param privateKey 私钥
     * @param expireMinitues 过期时间
     * @return token
     */
    public static String createToken(UserInfo userInfo, PrivateKey privateKey, int expireMinitues) {
        return  Jwts.builder()
                .claim(JWTConstants.USER_ID, userInfo.getId())
                .claim(JWTConstants.USER_NAME, userInfo.getName())
                .setExpiration(DateTime.now().plusMinutes(expireMinitues).toDate())
                .signWith(SignatureAlgorithm.RS256, privateKey)
                .compact();
    }

    /**
     * 解析token
     * @param publicKey
     * @param token
     * @return
     */
    public Jws<Claims> parseToken(PublicKey publicKey, String token) {
        return Jwts.parser().setSigningKey(publicKey).parseClaimsJws(token);
    }

    /**
     * 获取用户的信息从token中
     * @param publicKey 公钥
     * @param token token
     * @return 用户信息
     */
    public UserInfo getUserInfo(PublicKey publicKey, String token) {
        Jws<Claims> claimsJws = parseToken(publicKey, token);
        Claims body = claimsJws.getBody();
        int userId = ObjectUtils.toInt(body.get(JWTConstants.USER_ID));
        String userName = ObjectUtils.toString(body.get(JWTConstants.USER_NAME));

        return new UserInfo(userId, userName);
    }

}
