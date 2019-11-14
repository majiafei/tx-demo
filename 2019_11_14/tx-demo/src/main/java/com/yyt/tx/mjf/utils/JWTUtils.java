package com.yyt.tx.mjf.utils;

import com.yyt.tx.mjf.constants.JWTConstants;
import com.yyt.tx.mjf.entity.UserInfo;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.joda.time.DateTime;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.security.*;
import java.security.spec.InvalidKeySpecException;

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
                //.setExpiration(DateTime.now().plusMinutes(expireMinitues).toDate())
                .signWith(SignatureAlgorithm.RS256, privateKey)
                .compact();
    }

    /**
     * 解析token
     * @param publicKey
     * @param token
     * @return
     */
    public static Jws<Claims> parseToken(PublicKey publicKey, String token) {
        return Jwts.parser().setSigningKey(publicKey).parseClaimsJws(token);
    }

    /**
     * 获取用户的信息从token中
     * @param publicKey 公钥
     * @param token token
     * @return 用户信息
     */
    public static UserInfo getUserInfo(PublicKey publicKey, String token) {
        try {
            Jws<Claims> claimsJws = parseToken(publicKey, token);
            Claims body = claimsJws.getBody();
            int userId = ObjectUtils.toInt(body.get(JWTConstants.USER_ID));
            String userName = ObjectUtils.toString(body.get(JWTConstants.USER_NAME));

            return new UserInfo(userId, userName);
        } catch (Exception e) {
            // 解析出错或者token过期
            return null;
        }
    }

    public static void main(String[] args) throws NoSuchAlgorithmException, IOException, InvalidKeySpecException {
/*        UserInfo userInfo = new UserInfo(2, "xiaohong");
        String token = createToken(userInfo, RSAUtils.getPrivateKey("D:/key/private_key.rsa"), 1);
        System.out.println(token);*/

        UserInfo userInfo1 = getUserInfo(RSAUtils.getPublicKey("D:/key/public_key.rsa"), "eyJhbGciOiJSUzI1NiJ9.eyJ1c2VySWQiOjIsInVzZXJOYW1lIjoieGlhb2hvbmciLCJleHAiOjE1NjczNDc2MzZ9.KGi8Cun4q9cgTvdbDeDKad2cLxlcTeUjcHCFXmrp5y7MuqtlyF7C3nQqH_jQcWRvLa8tlVQrXbUvwhdy2gOYEbms-Jvkj8d4Q-tui2bw3xIE7ozyLTRkgxiQjsnBywUz5Rxo3EATieTARjzdqUVLCtyn_0e_FDeMssDaqWbsmw0");
        System.out.println(userInfo1.getId());
        System.out.println(userInfo1.getName());
    }

}
