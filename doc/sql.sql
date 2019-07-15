CREATE TABLE `shopee_review_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `discount_id` bigint(20) DEFAULT NULL,
  `change_value` text,
  `change_type` int(255) DEFAULT NULL COMMENT '1代表增加产品，2代表修改折算',
  `review_state` int(11) DEFAULT NULL COMMENT '审核状态',
  `upload_state` int(11) DEFAULT NULL COMMENT '上传状态(1:上传成功，2：上传失败)',
  `remark` varchar(255) DEFAULT NULL COMMENT '备注',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `create_by` varchar(20) DEFAULT NULL COMMENT '创建人',
  `update_time` datetime DEFAULT NULL,
  `update_by` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
