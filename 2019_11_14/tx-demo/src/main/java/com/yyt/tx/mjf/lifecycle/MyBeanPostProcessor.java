package com.yyt.tx.mjf.lifecycle;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.config.BeanPostProcessor;
import org.springframework.stereotype.Component;

/**<p>
 *  bean的后置处理器
 * </p>
 * @ClassName: MyBeanPostProcessor
 * @Auther: admin
 * @Date: 2019/9/4 11:43
 * @Description:
 */
@Component
public class MyBeanPostProcessor implements BeanPostProcessor {

    @Override
    public Object postProcessBeforeInitialization(Object bean, String beanName) throws BeansException {
        if (bean instanceof SpringLifeCycle) {
            System.out.println("SpringLifeCycle初始化之前");
        }
        return bean;
    }

    @Override
    public Object postProcessAfterInitialization(Object bean, String beanName) throws BeansException {
        if (bean instanceof SpringLifeCycle) {
            System.out.println("SpringLifeCycle初始化之后");
        }
        return bean;
    }

}
