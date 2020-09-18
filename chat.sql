/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 80018
 Source Host           : localhost:3306
 Source Schema         : chat

 Target Server Type    : MySQL
 Target Server Version : 80018
 File Encoding         : 65001

 Date: 18/09/2020 14:13:31
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for chat
-- ----------------------------
DROP TABLE IF EXISTS `chat`;
CREATE TABLE `chat`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `from` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `to` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `content` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `time` bigint(255) NULL DEFAULT NULL,
  `isread` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 53 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of chat
-- ----------------------------
INSERT INTO `chat` VALUES (1, '小李', '小白', '给', 1596795470543, 'true');
INSERT INTO `chat` VALUES (2, '小李', '小白', '123', 1596795511195, 'true');
INSERT INTO `chat` VALUES (3, '小李', '小红', '你好呀', 1596800105828, 'false');
INSERT INTO `chat` VALUES (4, '小红', '小李', 'nihao', 1596802767101, 'true');
INSERT INTO `chat` VALUES (5, '小白', '小李', 'nihao', 1596803768938, 'true');
INSERT INTO `chat` VALUES (6, '小白', '小红', 'nihao', 1596803785754, 'false');
INSERT INTO `chat` VALUES (7, '小李', '小白', '123', 1596803867834, 'true');
INSERT INTO `chat` VALUES (8, '小李', '小白', 'pi', 1596857404247, 'true');
INSERT INTO `chat` VALUES (9, '小白', '小黑', '你好', 1596857505408, 'true');
INSERT INTO `chat` VALUES (10, '小黑', '小白', '12', 1596857513080, 'true');
INSERT INTO `chat` VALUES (11, '小红', '小黑', '你好', 1596857637213, 'true');
INSERT INTO `chat` VALUES (12, '小黑', '小红', '你好', 1596857642509, 'true');
INSERT INTO `chat` VALUES (13, '小白', '小黑', 'abc', 1596871089269, 'true');
INSERT INTO `chat` VALUES (14, '小白', '小黑', 'abc', 1596871124030, 'true');
INSERT INTO `chat` VALUES (15, '小黑', '小白', 'abc', 1596871169778, 'true');
INSERT INTO `chat` VALUES (16, '小白', '小黑', 'yo', 1596872269844, 'true');
INSERT INTO `chat` VALUES (17, '小黑', '小白', 'yoi', 1596872286716, 'true');
INSERT INTO `chat` VALUES (18, '小黑', '小白', '1234', 1596872511288, 'true');
INSERT INTO `chat` VALUES (19, '小黑', '小白', 'fuckyou', 1596872658480, 'true');
INSERT INTO `chat` VALUES (20, '小黑', '小白', '123', 1596872697547, 'true');
INSERT INTO `chat` VALUES (21, '小黑', '小白', 'aaaaaaaaaaaaa', 1596872939983, 'true');
INSERT INTO `chat` VALUES (22, '小黑', '小白', '123', 1596872946619, 'true');
INSERT INTO `chat` VALUES (23, '小黑', '小白', 'kaoyao', 1596873080474, 'true');
INSERT INTO `chat` VALUES (24, '小黑', '小白', 'kylm', 1596873117254, 'true');
INSERT INTO `chat` VALUES (25, '小黑', '小白', 'ky', 1596873694450, 'true');
INSERT INTO `chat` VALUES (26, '小白', '小黑', 'abc', 1596873720677, 'true');
INSERT INTO `chat` VALUES (27, '小黑', '小白', 'nihao', 1596876404307, 'true');
INSERT INTO `chat` VALUES (28, '小黑', '小白', 'yo', 1596876890862, 'true');
INSERT INTO `chat` VALUES (29, '小黑', '小白', 'dot', 1596876940778, 'true');
INSERT INTO `chat` VALUES (30, '小黑', '小白', 'dot-2', 1596877198698, 'true');
INSERT INTO `chat` VALUES (31, '小白', 'home', 'abc', 1596878272001, 'true');
INSERT INTO `chat` VALUES (32, '小白', 'home', '999', 1596878879297, 'true');
INSERT INTO `chat` VALUES (33, '小黑', 'home', '123', 1596878886948, 'true');
INSERT INTO `chat` VALUES (34, '小李', 'home', 're', 1596878931472, 'true');
INSERT INTO `chat` VALUES (35, '小白', '小黑', 'test', 1596878967089, 'true');
INSERT INTO `chat` VALUES (36, '小白', '小黑', 'hello', 1596879848659, 'true');
INSERT INTO `chat` VALUES (37, '小黑', '小李', 'hello', 1596880033283, 'true');
INSERT INTO `chat` VALUES (38, '小黑', '小李', '123', 1596880059842, 'true');
INSERT INTO `chat` VALUES (39, '小红', '小黑', '123', 1596880541570, 'true');
INSERT INTO `chat` VALUES (40, '小黑', '小白', 'hello', 1597055815575, 'true');
INSERT INTO `chat` VALUES (41, '小白', '小黑', 'yo', 1597055844481, 'true');
INSERT INTO `chat` VALUES (42, '小白', '小黑', 'test', 1597062240851, 'true');
INSERT INTO `chat` VALUES (43, '小李', '小白', '你好', 1598959285040, 'true');
INSERT INTO `chat` VALUES (44, '小白', '小李', '你好', 1598959306098, 'true');
INSERT INTO `chat` VALUES (45, '小李', 'home', '大家好', 1598959325886, 'true');
INSERT INTO `chat` VALUES (46, '小李', 'sxt', '233', 1598959342067, 'true');
INSERT INTO `chat` VALUES (47, '小李', 'home', 'hello', 1598960354529, 'true');
INSERT INTO `chat` VALUES (48, '小黑', 'home', 'hello', 1598960365838, 'true');
INSERT INTO `chat` VALUES (49, '小黑', '小李', 'hello', 1598960377293, 'true');
INSERT INTO `chat` VALUES (50, '小黑', 'home', '1223', 1598960406081, 'true');
INSERT INTO `chat` VALUES (51, '小黑', '小红', 'hello', 1599364279522, 'true');
INSERT INTO `chat` VALUES (52, '小白', 'home', '123', 1599364291777, 'true');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `headerimg` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `socketid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `isonline` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `isgroup` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `username`(`username`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, '小红', '/img/1.jpg', NULL, NULL, NULL);
INSERT INTO `user` VALUES (2, '小黑', '/img/2.jpg', NULL, NULL, NULL);
INSERT INTO `user` VALUES (3, '小李', '/img/3.jpg', NULL, NULL, NULL);
INSERT INTO `user` VALUES (4, '小白', '/img/4.jpg', NULL, NULL, NULL);
INSERT INTO `user` VALUES (5, 'home', '/img/5.jpg', 'home', 'true', 'true');
INSERT INTO `user` VALUES (6, 'sxt', '/img/6.jpg', 'sxt', 'true', 'true');

SET FOREIGN_KEY_CHECKS = 1;
