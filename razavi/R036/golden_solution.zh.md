# Golden Solution - R036

## 参考答案

### 电压跳变

阶跃时 $V_{C1}=V_{in}-V_X$ 保持连续，因此 $V_X(0^-)=-3\ \mathrm{V}$，$V_X(0^+)=0\ \mathrm{V}$。

### 饱和区充电

忽略寄生电容并取 $\lambda=0$。阶跃后 $V_{DS}=V_{GS}=3\ \mathrm{V}-V_X$。$M_1$ 导通时满足饱和条件 $V_{DS}\ge V_{GS}-V_{TH}$。充电方程和初始电流为

$$
C_1\frac{dV_X}{dt}=I_D,\qquad
I_D=\frac{\beta}{2}(V_{GS}-V_{TH})^2,\qquad
I_D(0^+)=\frac{\beta}{2}(2.3\ \mathrm{V})^2=(2.645\ \mathrm{V^2})\beta.
$$

初始斜率为 $I_D(0^+)/C_1$。

### 电压终值

当 $V_{GS}$ 趋于 $V_{TH}$ 时，充电电流趋于零。将 $V_{SB}=V_X$ 代入体效应公式，得到终值方程

$$
V_{DD}-V_{X,\infty}
=V_{TH0}+\gamma\left(
\sqrt{2|\phi_F|+V_{X,\infty}}-\sqrt{2|\phi_F|}
\right).
$$

代入题给参数，$V_X$ 以逐渐减小的斜率上升，趋近 $V_{X,\infty}\approx1.97\ \mathrm{V}$。若取 $\gamma=0$，则终值为 $V_{DD}-V_{TH0}=2.30\ \mathrm{V}$。

![R036 源极跟随器波形](/q/R036/solution-vx.zh.svg)

## 评分说明

- 跳变由 −3 V 到 0 V，随后源极跟随器计入体效应并以逐渐减小的斜率上升，趋近 1.97 V（容差 ±0.05 V），给 +2 分。
- 忽略体效应得到 2.3 V，或其余内容正确但遗漏跳变，给 +1 分。
- 方向正确，但算错终值，给 0 分。
- 断言 $V_X$ 上升到 3 V、阶跃后下降或停在 0 V，给 −2 分。
