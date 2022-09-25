/*
 * @Author: wangtao
 * @Date: 2022-09-25 15:44:12
 * @LastEditors: 汪滔
 * @LastEditTime: 2022-09-25 17:22:57
 * @Description: file content
 */
import React from "react";
import styles from "@/assets/css/style.module.scss";

export default function Hello() {
  return (
    <div>
      hello webpack111311
      <p className={styles.hello}>Hello webpack</p>
      <img src={require("@/assets/images/1.png")} />
    </div>
  );
}
