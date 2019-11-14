package com.yyt.tx.mjf.lifecycle;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.*;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

/**
 * <p>
 *     spring的bean的生命周期
 * </p>
 * @ClassName: SpringLifeCycle
 * @Auther: admin
 * @Date: 2019/9/4 11:34
 * @Description:
 */
@Component
public class SpringLifeCycle implements BeanFactoryAware, BeanNameAware, ApplicationContextAware, InitializingBean{
    @Override
    public void setBeanFactory(BeanFactory beanFactory) throws BeansException {
        System.out.println("设置bean工厂");
    }

    @Override
    public void setBeanName(String name) {
        System.out.println("设置beanname:" + name);
    }

    @Override
    public void afterPropertiesSet() throws Exception {
        System.out.println("调用初始化方法");
    }

    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        System.out.println("设置setApplicationContext");
    }

    @PostConstruct
    public void iiiii() {
        System.out.println("iiiiiiiiii");
    }

    /**
     * 执行的结果:
     * 设置beanname:springLifeCycle
     * 设置bean工厂
     * 设置setApplicationContext
     * 调用初始化方法
     * 初始化之前后置处理
     * 初始化之后的后置处理
     * 初始化之前后置处理
     */
}
