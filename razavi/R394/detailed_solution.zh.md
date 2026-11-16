# 详细步骤 - R394

**思路。** 在 $M_2$ 的栅极处断开环路：用测试电压 $v_t$ 驱动它（$V_{in} = 0$），追踪信号经 $M_2$、输出节点、$R_F$、$M_1$ 的源极回到 X 的过程；于是 $T = -v_X/v_t$。MOS 管栅极不吸取电流，因此在此处断开环路不会改变任何负载，$T$ 是精确的。然后化简 $g_{21}A_{v,open}$，并逐项比较两者。

### 第 1 步 — 断开的环路

把 $M_1$ 的源极记为节点 S。令 $V_{in} = 0$，且 $\lambda = \gamma = 0$：

- $M_2$：源极接交流地，因此 $v_{sg2} = -v_t$，它向输出节点注入 $-g_{m2}v_t$；
- 输出节点：经 $R_{D2}$ 接地，经 $R_F$ 接到 S；
- 节点 S：经 $R_S$ 接地，并接 $M_1$ 的源极（栅极接交流地），从源极看进去相当于 $1/g_{m1}$；
- $M_1$：从 X 到 S 流过 $-g_{m1}v_S$；$R_{D1}$ 接在 X 与交流地之间。

<!-- diagram: diagram-01.cir -->

从 S 到地的电阻（包括 $M_1$ 的源极）为

$$R_p = R_S\parallel\frac{1}{g_{m1}} = \frac{R_S}{1 + g_{m1}R_S}.$$

### 第 2 步 — 沿环路一周

电流 $-g_{m2}v_t$ 流入 $R_{D2}$ 与 $R_F + R_p$ 的并联；$R_F$ 与 $R_p$ 把输出电压分压到 S；对 X 列基尔霍夫电流定律（KCL）方程（$-v_X/R_{D1} = -g_{m1}v_S$），得到 $M_1$ 的共栅（common-gate）增益：

$$v_{out} = -g_{m2}v_t\left[R_{D2}\parallel(R_F + R_p)\right], \qquad v_S = \frac{R_p}{R_F + R_p}\,v_{out}, \qquad v_X = g_{m1}R_{D1}\,v_S .$$

联立得：

$$v_X = -g_{m1}g_{m2}R_{D1}\left[R_{D2}\parallel(R_F + R_p)\right]\frac{R_p}{R_F + R_p}\,v_t .$$

### 第 3 步 — 环路增益

$$T = -\frac{v_X}{v_t} = g_{m2}R_{D1}\left[R_{D2}\parallel(R_F + R_p)\right]\frac{g_{m1}R_p}{R_F + R_p}.$$

$T > 0$：$v_t$ 升高使 $M_2$ 的电流减小，$V_{out}$ 和 $V_S$ 下降，$M_1$ 导通更强，$V_X$ 下降，因此是负反馈。

代入 $R_p = R_S/(1 + g_{m1}R_S)$，分压因子为

$$\frac{g_{m1}R_p}{R_F + R_p} = \frac{g_{m1}R_S}{R_F(1 + g_{m1}R_S) + R_S} = \frac{g_{m1}R_S}{R_F + R_S + g_{m1}R_FR_S}.$$

若改为把并联组合与分压因子合并，

$$\left[R_{D2}\parallel(R_F + R_p)\right]\frac{R_p}{R_F + R_p} = \frac{R_{D2}R_p}{R_{D2} + R_F + R_p} = \frac{R_{D2}R_S}{(R_{D2} + R_F)(1 + g_{m1}R_S) + R_S},$$

因此

$$T = \frac{g_{m1}g_{m2}R_{D1}R_{D2}R_S}{R_{D2} + R_F + R_S + g_{m1}R_S(R_{D2} + R_F)}.$$

### 第 4 步 — 化简二端口估算式

$$g_{21}A_{v,open} = \frac{R_S}{R_F + R_S}\cdot\frac{R_{D1}}{R_F\parallel R_S + 1/g_{m1}}\cdot g_{m2}\left[R_{D2}\parallel(R_F + R_S)\right].$$

由 $R_F\parallel R_S = R_FR_S/(R_F + R_S)$ 得：

$$\frac{R_{D1}}{R_F\parallel R_S + 1/g_{m1}} = \frac{g_{m1}R_{D1}}{1 + g_{m1}R_FR_S/(R_F + R_S)} = \frac{g_{m1}R_{D1}(R_F + R_S)}{R_F + R_S + g_{m1}R_FR_S},$$

再乘以 $R_S/(R_F + R_S)$：

$$g_{21}A_{v,open} = g_{m2}R_{D1}\left[R_{D2}\parallel(R_F + R_S)\right]\frac{g_{m1}R_S}{R_F + R_S + g_{m1}R_FR_S}.$$

### 第 5 步 — 比较

$$
\begin{aligned}
T &= g_{m2}R_{D1}\left[R_{D2}\parallel\left(R_F + R_S\parallel\tfrac{1}{g_{m1}}\right)\right]\frac{g_{m1}R_S}{R_F + R_S + g_{m1}R_FR_S},\\
g_{21}A_{v,open} &= g_{m2}R_{D1}\left[R_{D2}\parallel\left(R_F + R_S\right)\right]\frac{g_{m1}R_S}{R_F + R_S + g_{m1}R_FR_S}.
\end{aligned}
$$

两者的输入侧因子**完全相同**；只有输出节点上的负载不同：实际环路中是 $R_F$ 与 $R_S\parallel(1/g_{m1})$ 串联，估算中是 $R_F + R_S$。由于 $R_S\parallel(1/g_{m1}) < R_S$，实际负载更重，因此 $T < g_{21}A_{v,open}$。

**数值算例**（示意性数值）：所有电阻均为 2 kΩ，$g_{m1} = 4.5$ mS，$g_{m2} = 2.8$ mS，因此 $g_{m1}R_S = 9$，$R_p = 2\ \mathrm{k}\Omega/10 = 200\ \Omega$：

$$
\begin{aligned}
T &= \frac{(4.5\ \mathrm{m})(2.8\ \mathrm{m})(2\ \mathrm{k})(2\ \mathrm{k})(2\ \mathrm{k})}{2\ \mathrm{k} + 2\ \mathrm{k} + 2\ \mathrm{k} + 9\,(4\ \mathrm{k})} = \frac{100\,800}{42\,000} = 2.4,\\
g_{21}A_{v,open} &= (2.8\ \mathrm{m})(2\ \mathrm{k})\,(2\ \mathrm{k}\parallel4\ \mathrm{k})\,\frac{9}{4\ \mathrm{k} + 18\ \mathrm{k}} = 5.6\times1333\times4.09\times10^{-4} = 3.05 .
\end{aligned}
$$

此处二端口估算值约偏高 25 %。

### 第 6 步 — 两个结果为何不同

- **在栅极处断开是精确的：** 用测试源代替栅极与 X 的连接不会改变任何阻抗，因此 $T$ 就是真实的回归比。
- **二端口方法把反馈网络当作单向的：** 它对输出端的负载 $g_{11} = 1/(R_F + R_S)$ 是在 S 侧端口**开路**（没有电流流入 $M_1$ 的源极）的条件下计算的，而且忽略了其反向传输 $g_{12}$。
- **实际上**，S 端接的是 $1/g_{m1}$ 与 $R_S$ 的并联，因此 $R_F$ 从输出端吸取更多电流，而且 S 处的信号还会经 $R_F$ 反向传播，使得在相同的 $M_2$ 电流下输出电压更低。
- **并非原因的因素：** 前向放大器是单向的（$\lambda = 0$，无 $C_{GD}$），且 $\gamma = 0$；差异完全来自双向的反馈网络。

### 结果

$$T = \frac{g_{m1}g_{m2}R_{D1}R_{D2}R_S}{R_{D2} + R_F + R_S + g_{m1}R_S(R_{D2} + R_F)} = g_{m2}R_{D1}\left[R_{D2}\,\Big\|\,\left(R_F + R_S\parallel\tfrac{1}{g_{m1}}\right)\right]\frac{g_{m1}R_S}{R_F + R_S + g_{m1}R_FR_S},$$

而

$$g_{21}A_{v,open} = g_{m2}R_{D1}\left[R_{D2}\parallel(R_F + R_S)\right]\frac{g_{m1}R_S}{R_F + R_S + g_{m1}R_FR_S}.$$

输入侧因子相同；输出侧负载不同：实际环路看到的是 $R_F + R_S\parallel(1/g_{m1})$，二端口估算看到的是 $R_F + R_S$。因此 $T < g_{21}A_{v,open}$（例如所有电阻均为 2 kΩ、$g_{m1} = 4.5$ mS、$g_{m2} = 2.8$ mS 时，分别为 2.4 和 3.0）。二端口方法在 $M_1$ 一侧端口开路的条件下计算反馈网络的负载效应，并忽略其反向传输 $g_{12}$；而在栅极处断开环路得到的是精确的回归比。

**常见错误。** 声称两个结果完全相同。只有当 $1/g_{m1} \gg R_S$，或者 $R_F$ 大到输出端负载无关紧要时，两者才一致。

**常见错误。** 把差异归因于沟道长度调制（channel-length modulation）或体效应（body effect），而这两者在本题中都为零。

**常见错误。** 把 $T$ 的符号弄错：$v_t\uparrow$ → $I_{D2}\downarrow$ → $V_{out}\downarrow$ → $V_S\downarrow$ → $I_{D1}\uparrow$ → $V_X\downarrow$，因此是负反馈，$T = -v_X/v_t > 0$。
