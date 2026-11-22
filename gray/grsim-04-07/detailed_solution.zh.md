# 详细步骤 - grsim-04-07

输出对管 $M_1$–$M_2$ 是一个共源共栅结构，其栅极偏置由 $M_3$–$M_6$ 产生。使 $M_4$ 比其他器件弱，可以把 $M_2$ 的栅极偏置抬高到恰好使 $M_1$ 保持 $V_{DS1}=V_{ov}$，从而输出可以低至 $2V_{ov}$。于是约束 (i) 确定 $V_{ov}$，约束 (iii) 通过 $R_o\approx g_mr_o^2$ 确定最短沟道长度，约束 (ii) 确定 $W/L$。一个简短的面积论证表明这种选择使栅面积最小。

### 第 1 步 — $M_3$–$M_6$ 产生的偏置电压

所有器件都流过 $I=50\ \mu$A。$M_3$ 为二极管连接，故 $V_{GS3}=V_t+V_{ov}$。$(W/L)_4=\tfrac14(W/L)$ 时，同样的电流需要 $M_4$ 具有两倍的过驱动电压：$V_{GS4}=V_t+2V_{ov}$。因此 $M_5$ 的栅极（即 $M_4$ 的栅极）电压为

$$
V_{G5}=V_{GS3}+V_{GS4}=2V_t+3V_{ov}.
$$

$M_5$ 是由 $M_6$（$M_3$ 的镜像，同样为 50 μA）偏置的源极跟随器，压降为 $V_{GS5}=V_t+V_{ov}$，所以 $M_2$ 的栅极位于

$$
V_{G2}=2V_t+3V_{ov}-(V_t+V_{ov})=V_t+2V_{ov}.
$$

$M_2$ 的源极即 $M_1$ 的漏极，比栅极低一个 $V_{GS2}=V_t+V_{ov}$：$V_{DS1}=V_{ov}$，恰好处于 $M_1$ 的饱和边缘。$M_2$ 在 $V_{DS2}\ge V_{ov}$ 时保持有源区，故

$$
V_{OUT(\min)}=V_{DS1}+V_{ov}=2V_{ov}.
$$

### 第 2 步 — 由约束 (i) 确定过驱动电压

$V_{OUT(\min)}=2V_{ov}\le0.2$ V 给出 $V_{ov}\le0.1$ V。取 $V_{ov}=0.1$ V；第 4 步将说明允许的最大过驱动电压使面积最小。于是

$$
g_m=\frac{2I}{V_{ov}}=\frac{2(50\ \mu\mathrm A)}{0.1\ \mathrm V}=1\ \mathrm{mA/V}.
$$

### 第 3 步 — 由约束 (iii) 确定沟道长度

每伏变化小于 50 μA 的 0.02%，要求

$$
R_o\ge\frac{1\ \mathrm V}{(0.0002)(50\ \mu\mathrm A)}=100\ \mathrm{M\Omega}.
$$

由 $\lambda=(dX_d/dV_{DS})/L_{\mathrm{eff}}$，

$$
r_o=\frac1{\lambda I}=\frac{L_{\mathrm{eff}}}{(0.02\ \mu\mathrm m/\mathrm V)(50\ \mu\mathrm A)}=\left(\frac{L_{\mathrm{eff}}}{1\ \mu\mathrm m}\right)1\ \mathrm{M\Omega}.
$$

共源共栅输出电阻为 $R_o=r_{o2}(1+g_{m2}r_{o1})+r_{o1}=r_o(2+g_mr_o)$。记 $x=L_{\mathrm{eff}}/(1\ \mu\mathrm m)$，条件为 $x(2+1000x)\ \mathrm{M\Omega}\ge100\ \mathrm{M\Omega}$：

$$
1000x^2+2x-100\ge0\;\Rightarrow\;x\ge0.315,\qquad L_{\mathrm{eff}}\ge0.315\ \mu\mathrm m .
$$

取 $L_{\mathrm{eff}}=0.32\ \mu$m，即 $L_{\mathrm{drwn}}=0.32+2(0.09)=0.50\ \mu$m，大于 0.4 μm 的最小值。此时 $r_o=320$ kΩ，$R_o=0.32\ \mathrm{M\Omega}\,(2+320)=103$ MΩ。

### 第 4 步 — 由约束 (ii) 确定宽度，以及为何面积最小

$$
\frac W{L_{\mathrm{eff}}}=\frac{2I}{k'V_{ov}^2}=\frac{2(50\ \mu\mathrm A)}{(194\ \mu\mathrm{A/V^2})(0.1\ \mathrm V)^2}=51.5,\qquad W=51.5\times0.32\ \mu\mathrm m=16.5\ \mu\mathrm m .
$$

每个器件的栅面积为 $WL=(W/L)L^2\propto L^2/V_{ov}^2$，因此应取约束 (i) 允许的最大 $V_{ov}$ 和约束 (iii) 允许的最短 $L$。若再缩短 $L$，就需要更大的 $g_m$，即更小的 $V_{ov}$，所增加的面积超过节省的面积。

### 第 5 步 — 设计结果

| 器件 | $W$ | $L_{\mathrm{drwn}}$（$L_{\mathrm{eff}}$） | $W/L_{\mathrm{eff}}$ |
|---|---|---|---|
| $M_1$、$M_2$、$M_3$、$M_5$、$M_6$ | 16.5 μm | 0.50 μm（0.32 μm） | 51.5 |
| $M_4$ | 4.1 μm | 0.50 μm（0.32 μm） | 12.9 |

总栅面积：$(5\times16.5+4.1)\ \mu\mathrm m\times0.50\ \mu\mathrm m\approx43\ \mu\mathrm m^2$。由于 $V_{DS1}=V_{ov}$ 使 $M_1$ 恰好处于饱和边缘，实际设计中可使 $M_4$ 略小于四分之一，给 $M_1$ 留出余量。

### 第 6 步 — SPICE 验证

网表直接使用有效长度，$\lambda=0.02/0.32=0.0625\ \mathrm{V^{-1}}$：

```spice
* grsim-04-07 high-swing cascode mirror design check
VDD  vdd 0 3
IIN  vdd g4 50u
M4   g4 g4 d3 0 nch W=4.125u L=0.32u
M3   d3 d3 0 0 nch W=16.5u L=0.32u
M5   vdd g4 g2 0 nch W=16.5u L=0.32u
M6   g2 d3 0 0 nch W=16.5u L=0.32u
M2   out g2 d1 0 nch W=16.5u L=0.32u
M1   d1 d3 0 0 nch W=16.5u L=0.32u
VOUT out 0 1
.model nch nmos level=1 kp=194u vto=0.6 lambda=0.0625
.control
op
print v(g4) v(d3) v(g2) v(d1)
tf v(d1) VOUT
print all
dc VOUT 0 3 1m
let iout = -i(VOUT)
wrdata iv.txt iout
.endc
.end
```

| 量 | 设计值 | ngspice |
|---|---|---|
| $V_{G2}=V_t+2V_{ov}$ | 0.80 V | 0.799 V |
| $V_{DS1}=V_{ov}$ | 0.10 V | 0.103 V |
| $I_{OUT}$ | 50 μA | 48.2 μA |
| $V_{OUT}=1$ V 处的 $R_o$ | ≥ 100 MΩ | 119 MΩ（`.tf`）；由斜率得 117–135 MΩ |
| 每伏 $\Delta I_{OUT}$ | < 0.02% | 0.015%–0.017% |
| 两管均处于有源区的最低 $V_{OUT}$ | 0.2 V | ≈ 0.2 V（自 0.2 V 起电流变化在 0.001% 以内） |

![所设计共源共栅电流镜在 0 到 3 V 范围内的 ngspice IOUT–VOUT 曲线，约 0.2 V 起平坦](/q/grsim-04-07/solution-iv.zh.svg)

三个约束都得到满足。$I_{OUT}$ 比 50 μA 低 3.6%，原因是沟道长度调制：$M_1$ 工作在 $V_{DS1}=0.10$ V，而参考器件 $M_3$ 的 $V_{DS3}=V_{GS3}=0.70$ V，因此 $I_{OUT}/I_{IN}=(1+0.0625\times0.10)/(1+0.0625\times0.70)=0.964$。若必须精确为 50 μA，可把 $I_{IN}$ 提高到约 51.9 μA。曲线约从 0.2 V 起平坦，低于该电压时两个输出管进入线性区，电流急剧下降。
