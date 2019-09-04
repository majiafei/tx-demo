package com.yyt.tx.mjf.utils;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.security.*;
import java.security.spec.InvalidKeySpecException;
import java.security.spec.PKCS8EncodedKeySpec;
import java.security.spec.X509EncodedKeySpec;

/**
 * @ProjectName: house
 * @Package: com.yyt.tx.mjf.utils
 * @ClassName: RSAUtils
 * @Author: majiafei
 * @Description:
 * @Date: 2019/9/1 22:02
 */
public class RSAUtils {

    public static void generateKey(String publicKeyPath, String privateKeyPath, String secret) throws Exception {
        KeyPairGenerator keyPairGenerator = KeyPairGenerator.getInstance("RSA");
        SecureRandom secureRandom = new SecureRandom(secret.getBytes());
        keyPairGenerator.initialize(1024, secureRandom);
        KeyPair keyPair = keyPairGenerator.genKeyPair();

        // 获取公钥
        byte[] publicKey = keyPair.getPublic().getEncoded();
        writeFile(privateKeyPath, publicKey);

        // 获取秘钥
        byte[] privateKey = keyPair.getPrivate().getEncoded();
        writeFile(privateKeyPath, privateKey);
    }

    private static void writeFile(String path, byte[] bytes) throws IOException {
        File publicFile = new File(path);
        if (!publicFile.exists()) {
            publicFile.createNewFile();
        }
        Files.write(publicFile.toPath(), bytes);
    }

    public static PublicKey getPublicKey(String publicKeyFilePath) throws IOException, InvalidKeySpecException, NoSuchAlgorithmException {
        byte[] bytes = readFile(publicKeyFilePath);
        return getPublicKey(bytes);
    }

    public static PrivateKey getPrivateKey(String privateKeyFilePath) throws IOException, InvalidKeySpecException, NoSuchAlgorithmException {
        byte[] bytes = readFile(privateKeyFilePath);
        return getPrivateKey(bytes);
    }

    public static PublicKey getPublicKey(byte[] bytes) throws NoSuchAlgorithmException, InvalidKeySpecException {
        X509EncodedKeySpec keySpec = new X509EncodedKeySpec(bytes);
        KeyFactory rsa = KeyFactory.getInstance("RSA");
        return rsa.generatePublic(keySpec);
    }

    public static PrivateKey getPrivateKey(byte[] bytes) throws NoSuchAlgorithmException, InvalidKeySpecException {
        PKCS8EncodedKeySpec spec = new PKCS8EncodedKeySpec(bytes);
        KeyFactory factory = KeyFactory.getInstance("RSA");
        return factory.generatePrivate(spec);
    }

    public static byte[] readFile(String filePath) throws IOException {
        return Files.readAllBytes(new File(filePath).toPath());
    }

    public static PublicKey generatePublicKey(String secret) throws NoSuchAlgorithmException, InvalidKeySpecException {
        KeyPairGenerator keyPairGenerator = KeyPairGenerator.getInstance("RSA");
        SecureRandom secureRandom = new SecureRandom(secret.getBytes());
        keyPairGenerator.initialize(1024, secureRandom);
        KeyPair keyPair = keyPairGenerator.genKeyPair();
        byte[] publicKey = keyPair.getPublic().getEncoded();

        X509EncodedKeySpec keySpec = new X509EncodedKeySpec(publicKey);
        KeyFactory rsa = KeyFactory.getInstance("RSA");
        return rsa.generatePublic(keySpec);
    }

    public static PrivateKey generatePrivateKey(String secret) throws NoSuchAlgorithmException, InvalidKeySpecException {
        KeyPairGenerator keyPairGenerator = KeyPairGenerator.getInstance("RSA");
        SecureRandom secureRandom = new SecureRandom(secret.getBytes());
        keyPairGenerator.initialize(1024, secureRandom);
        KeyPair keyPair = keyPairGenerator.genKeyPair();

        // 获取秘钥
        byte[] privateKey = keyPair.getPrivate().getEncoded();
        PKCS8EncodedKeySpec spec = new PKCS8EncodedKeySpec(privateKey);
        KeyFactory factory = KeyFactory.getInstance("RSA");
        return factory.generatePrivate(spec);
    }

}
