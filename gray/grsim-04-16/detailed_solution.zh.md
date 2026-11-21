# 详细步骤 - grsim-04-16

与简单的有源负载差分对一样，差分跨导 $g_m$ 驱动输出节点，故 $v_o/v_i=g_mR_o$。这里输出节点上下两侧都采用共源共栅（cascode）结构：向下看是叠在 $Q_2$ 上的 npn 共源共栅管 $Q_4$，向上看是 pnp 共源共栅电流镜 $Q_5$–$Q_8$。分别用 $I_{TAIL}$ 表示两侧电阻，将其组合，再在 $I_{TAIL}=100\ \mu$A（以及 10 μA）下用 ngspice 验证。

### 第 1 步 — 用 $I_{TAIL}$ 表示的参数

每个晶体管都流过 $I_{TAIL}/2$：

$$
g_m=\frac{I_{TAIL}}{2V_T},\qquad r_{o,npn}=\frac{2V_{An}}{I_{TAIL}}=\frac{260\ \mathrm V}{I_{TAIL}},\qquad r_{o,pnp}=\frac{2V_{Ap}}{I_{TAIL}}=\frac{100\ \mathrm V}{I_{TAIL}}.
$$

### 第 2 步 — 向下看入 $Q_4$ 的电阻

$Q_4$ 的基极由 1.3 V 电池相对于 $Q_1$/$Q_2$ 的发射极节点固定，而该节点对差模信号是交流地。$Q_4$ 是发射极接 $r_{o2}$ 的共基级。由于 $r_{o2}\gg r_{\pi4}$，负反馈受 $r_{\pi4}$ 限制，共源共栅提升达到最大值，约为 $\beta_nr_{o4}$：

$$
R_{down}\approx\beta_nr_{o4}=\frac{2\beta_nV_{An}}{I_{TAIL}}=\frac{52{,}000\ \mathrm V}{I_{TAIL}}\quad(520\ \mathrm{M\Omega}\text{ at }100\ \mu\mathrm A).
$$

### 第 3 步 — 向上看入 $Q_6$ 的电阻

$Q_5$–$Q_8$ 构成 pnp 共源共栅电流镜：$Q_6$ 的基极由二极管连接的 $Q_5$ 驱动，其电流送入电流镜输入管 $Q_7$。$Q_6$ 基极电流的变化经 $Q_5$ 流入 $Q_7$，再由 $Q_8$ 镜像到 $Q_6$ 的发射极，因此失去一半的 $\beta$ 提升，与双极型共源共栅电流镜完全相同：

$$
R_{up}\approx r_{o6}\left(1+\frac{\beta_p}2\right)=\frac{100\ \mathrm V}{I_{TAIL}}(1+25)=\frac{2600\ \mathrm V}{I_{TAIL}}\approx\frac{\beta_pr_{o6}}2\quad(26\ \mathrm{M\Omega}\text{ at }100\ \mu\mathrm A).
$$

### 第 4 步 — 输出电阻与增益

$$
R_o=R_{down}\parallel R_{up}=\frac{1}{I_{TAIL}}\left(52{,}000\parallel2600\right)\ \mathrm V=\frac{2.48\times10^{3}\ \mathrm V}{I_{TAIL}}\quad(24.8\ \mathrm{M\Omega}\text{ at }100\ \mu\mathrm A),
$$

$$
\frac{v_o}{v_i}=g_mR_o=\frac{I_{TAIL}}{2V_T}\cdot\frac{2476\ \mathrm V}{I_{TAIL}}=\frac{1238\ \mathrm V}{V_T}=+4.8\times10^{4},
$$

与 $I_{TAIL}$ 无关，因为 $g_m$ 和 $1/R_o$ 都与电流成正比。pnp 一侧限制了 $R_o$：由于 $\beta_p$ 较低、$V_{Ap}$ 较低，再加上电流镜反馈带来的 1/2 因子，$R_{up}$ 比 $R_{down}$ 小 20 倍。电流镜的基极电流误差使增益降到约 $4.6\times10^{4}$。

### 第 5 步 — 大信号特性（预期）

- 系统失调：pnp 共源共栅电流镜只提供其输入电流的 $1-(4\beta_p+2)/(\beta_p^2+4\beta_p+2)=0.925$，因此只有当 $Q_1$ 比 $Q_2$ 多流过 8% 的电流时，输出才处于有源范围：$V_I\approx V_T\ln(1/0.925)=+2.0$ mV。
- 宽度：增益为 $4.8\times10^{4}$，1.5 V 的输出摆幅只需约 30 μV 的输入。
- 上限：输出比 $Q_6$ 的基极 $V_{SUP}-2|V_{BE}|\approx1.26$ V 高出零点几伏（约 1.5–1.8 V）时，该管饱和。
- 下限：$Q_4$ 的基极比发射极节点（约 −0.6 V）高 1.3 V，因此其发射极接近 0 V，输出降到约 0.1–0.2 V 时它就饱和。

### 第 6 步 — SPICE 验证

```spice
* grsim-04-16 cascode active-load differential stage, ITAIL = 100 uA
VP   vp 0 2.5
VN   vn 0 -2.5
VI   b1 0 2.00049m
Q1   c1 b1 e npn
Q2   c2 0 e npn
VB   bc e 1.3
Q3   d5 bc c1 npn
Q4   out bc c2 npn
Q5   d5 d5 e7 pnp
Q6   out d5 e8 pnp
Q7   e7 e7 vp pnp
Q8   e8 e7 vp pnp
IT   e vn 100u
.model npn npn is=5e-15 bf=200 vaf=130
.model pnp pnp is=2e-15 bf=50 vaf=50
.control
op
tf v(out) VI
print all
dc VI -10m 10m 1u
wrdata tr.txt v(out)
.endc
.end
```

$V_I=2.00049$ mV 使 $V_O$ 位于有源范围内的 0.80 V，它由 10 nV 步长的扫描求得。用 $I_{TAIL}=10\ \mu$A 重复运行一次。

| 量 | 手算 | ngspice，100 μA | ngspice，10 μA |
|---|---|---|---|
| $v_o/v_i$ | $4.6\times10^{4}$ 至 $4.8\times10^{4}$ | $4.88\times10^{4}$ | $4.90\times10^{4}$ |
| $R_o$ | $2.48\times10^{3}\ \mathrm V/I_{TAIL}$ | 26.4 MΩ | 265 MΩ |
| 使输出居中的输入 | ≈ +2.0 mV | +2.0005 mV | +1.998 mV |

![共源共栅负载差分对在 −10 到 10 mV 范围内的 ngspice VO–VI 曲线：在 +2.0 mV 处有近乎竖直的转变，两端为饱和极限](/q/grsim-04-16/solution-transfer.zh.svg)

仿真的 $R_o$ 比手算高 7%（SPICE 的 $r_o=(V_A+V_{CE})/I_C$ 大于 $V_A/I_C$），因此增益略高。尾电流缩小 10 倍时 $R_o$ 增大 10 倍，增益不变，与预测一致。在传输曲线中，输出在 $V_I\approx+2.0$ mV 处从 0.5 V 变到 1.5 V 只需 21 μV。输出极限是渐变的：底部约 0.1–0.25 V（$Q_4$ 饱和），顶部约 1.7–1.8 V（$Q_6$ 饱和）。
