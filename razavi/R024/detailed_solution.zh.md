# 详细步骤 - R024

**思路：** 使用二极管连接的饱和区方程积分电容电压。

### 模型与积分

$V_{GS}=V_{DS}=V_X$，且 $V_{TH}=0.7\,\mathrm V$。取 $\lambda=0$，

$$C_1\dot V_X=-\frac{\beta}{2}(V_X-V_{TH})^2.$$

令 $u=V_X-0.7\,\mathrm V$、$u_0=2.3\,\mathrm V$，

$$\frac1u=\frac1{u_0}+\frac{\beta t}{2C_1}.$$

定义 $T=2C_1/(\beta u_0)$，图示函数为

$$V_X=0.7\,\mathrm V+\frac{2.3\,\mathrm V}{1+t/T},\qquad I_X=\frac{(2.645\,\mathrm V^2)\beta}{(1+t/T)^2}.$$

### 波形与模型边界

初始电流为 $(2.645\,\mathrm V^2)\beta$；电压在有限时间内不会到达 0.7 V，而是按双曲线形式趋近。实际亚阈值电流可能继续使电压低于 0.7 V，但题目未给出相关参数。

![答案曲线：电压](/q/R024/solution-voltage.zh.svg)

![答案曲线：电流](/q/R024/solution-current.zh.svg)
