# 详细步骤 - R571

**思路。** 分两个区域跟踪 $C_H$ 的放电过程。$M_1$ 饱和时，它吸收恒定电流，$V_{out}$ 线性下降；在线性区，平方律电流给出一个非线性微分方程，用分离变量法可以精确求解。总时间等于两段时间之和。

### 第 1 步 — 端口、过驱动电压（overdrive voltage）与器件常数

$t_0$ 之后栅极处于 3 V。电位较低的端口，即接地的输入端，是源极，$V_{out}$ 一端是漏极：

$$V_{GS} = 3\ \mathrm{V}, \qquad V_{DS} = V_{out}, \qquad V_{SB} = 0 ,$$

因此没有体效应，$V_{TH} = 0.7$ V，并且在整个瞬态过程中过驱动电压保持恒定：

$$V_{ov} = V_{GS} - V_{TH} = 3 - 0.7 = 2.3\ \mathrm{V},$$

$$\beta = \mu_nC_{ox}\frac WL = (134\ \mu\mathrm{A/V^2})\times\frac{20}{0.5} = 134\times40\ \mu\mathrm{A/V^2} = 5.36\ \mathrm{mA/V^2}.$$

电容只通过晶体管放电：

$$C_H\frac{dV_{out}}{dt} = -I_D .$$

### 第 2 步 — 第 1 段：饱和区（3 V → 2.3 V）

当 $V_{out} \ge V_{ov} = 2.3$ V 时 $M_1$ 饱和，并且由于 $\lambda = 0$，其电流恒定：

$$I_D = \frac12\beta V_{ov}^2 = \frac12(5.36\ \mathrm{mA/V^2})(2.3\ \mathrm{V})^2 = \frac12(5.36)(5.29)\ \mathrm{mA} = 14.18\ \mathrm{mA}.$$

下降 $\Delta V = 3 - 2.3 = 0.7$ V（$= V_{TH}$）所需的时间为

$$t_1 = \frac{C_H\,\Delta V}{I_D} = \frac{(1\ \mathrm{pF})(0.7\ \mathrm{V})}{14.18\ \mathrm{mA}} = 49.4\ \mathrm{ps},$$

用符号表示为 $t_1 = 2V_{TH}C_H/[\beta(V_{DD} - V_{TH})^2]$。

### 第 3 步 — 第 2 段：线性区方程

当 $V_{out} < 2.3$ V 时，

$$I_D = \beta\left[V_{ov}V_{out} - \frac{V_{out}^2}{2}\right],$$

$$C_H\frac{dV_{out}}{dt} = -\beta\left[V_{ov}V_{out} - \frac{V_{out}^2}{2}\right] = -\frac{\beta}{2}\,V_{out}\,(2V_{ov} - V_{out}).$$

分离变量：

$$\frac{dV_{out}}{V_{out}(2V_{ov} - V_{out})} = -\frac{\beta}{2C_H}\,dt ,$$

利用部分分式

$$\frac{1}{V(2V_{ov} - V)} = \frac{1}{2V_{ov}}\left[\frac1V + \frac{1}{2V_{ov} - V}\right].$$

从线性区的起点（$t = t_1$，$V = V_{ov}$）开始积分：

$$
\begin{aligned}
\frac{1}{2V_{ov}}\left[\ln V - \ln(2V_{ov} - V)\right]_{V_{ov}}^{V_{out}} &= -\frac{\beta}{2C_H}(t - t_1)\\
\ln\frac{V_{out}}{2V_{ov} - V_{out}} - \ln\frac{V_{ov}}{2V_{ov} - V_{ov}} &= -\frac{\beta V_{ov}}{C_H}(t - t_1).
\end{aligned}
$$

第二个对数为 $\ln 1 = 0$。引入归一化时间 $u = \beta V_{ov}(t - t_1)/C_H$：

$$\frac{V_{out}}{2V_{ov} - V_{out}} = e^{-u} \quad\Longrightarrow\quad V_{out}(t) = \frac{2V_{ov}\,e^{-u}}{1 + e^{-u}} .$$

时间单位为

$$\frac{C_H}{\beta V_{ov}} = \frac{1\ \mathrm{pF}}{(5.36\ \mathrm{mA/V^2})(2.3\ \mathrm{V})} = \frac{1\ \mathrm{pF}}{12.33\ \mathrm{mS}} = 81.1\ \mathrm{ps},$$

即 $R_{on}C_H$，其中 $R_{on} = 1/(\beta V_{ov}) = 81.1\ \Omega$ 为深线性区的导通电阻（on-resistance）。当 $V_{out}$ 较小时，$V_{out} \approx 2V_{ov}e^{-u}$，是以此为时间常数的纯指数函数。

### 第 4 步 — 下降到 1 mV 所需的时间

$$
\begin{aligned}
e^{-u} &= \frac{0.001}{4.6 - 0.001} = \frac{0.001}{4.599} = 2.174\times10^{-4},\\
u &= -\ln(2.174\times10^{-4}) = 8.434,\\
t - t_1 &= u\cdot\frac{C_H}{\beta V_{ov}} = 8.434\times81.1\ \mathrm{ps} = 684\ \mathrm{ps}.
\end{aligned}
$$

$t_0$ 之后的总时间为

$$t_{total} = t_1 + (t - t_1) = 49.4\ \mathrm{ps} + 684\ \mathrm{ps} \approx 733\ \mathrm{ps} \approx 0.73\ \mathrm{ns},$$

直接对 $C_H\,dV_{out}/dt = -I_D(V_{out})$ 进行数值积分，也得到同样的 733 ps。

### 第 5 步 — 波形的形状

| $t_0$ 之后的时间 | 工作区 | $V_{out}$ |
|---|---|---|
| 0 | 饱和区 | 3.00 V |
| 49 ps | 线性区边缘 | 2.30 V |
| 130 ps ($u = 1$) | 线性区 | 1.24 V |
| 212 ps ($u = 2$) | 线性区 | 0.55 V |
| 293 ps ($u = 3$) | 线性区 | 0.22 V |
| 455 ps ($u = 5$) | 线性区 | 0.031 V |
| 733 ps ($u = 8.43$) | 线性区 | 0.001 V |

$V_{out}$ 先沿直线下降，然后弯入时间常数为 $R_{on}C_H = 81$ ps 的指数拖尾；拖尾占用了大部分时间，约 8.4 个时间常数。

**比较。** 若在整个瞬态过程中用固定电阻 $R_{on} = 81.1\ \Omega$，得到 $81.1\ \mathrm{ps}\times\ln(3\ \mathrm{V}/1\ \mathrm{mV}) = 81.1\times8.01 = 649$ ps，约 0.65 ns。这低估了所需时间，因为在 $V_{DS}$ 较大时，实际器件的电流小于 $V_{out}/R_{on}$。

### 结果

在 $t_0$ 之后约 **0.73 ns**（饱和区中 ≈ 49 ps，加上线性区中 ≈ 684 ps）：

- $\beta = 5.36$ mA/V²，$V_{DD} - V_{TH} = 2.3$ V。源极是接地的输入端，因此 $V_{SB} = 0$，没有体效应。
- 饱和区（$V_{out}$ 从 3 V 降到 2.3 V）：恒定电流 $\tfrac12\beta(2.3\ \mathrm{V})^2 = 14.2$ mA，所以 $t_1 = 0.7\ \mathrm{V}\times1\ \mathrm{pF}/14.2\ \mathrm{mA} = 49.4$ ps。
- 线性区：$V_{out} = \dfrac{2(V_{DD} - V_{TH})e^{-u}}{1 + e^{-u}}$，其中 $u = \beta(V_{DD} - V_{TH})(t - t_1)/C_H$，$C_H/[\beta(V_{DD} - V_{TH})] = 81.1$ ps。在 $u = 8.43$ 时 $V_{out} = 1$ mV，即 $t - t_1 = 684$ ps。

**常见错误。** 认为 $M_1$ 始终饱和，即一直以 14.2 mA 放电，得到约 0.21 ns。在 $V_{out} = 2.3$ V 以下，器件处于线性区，其电流随 $V_{out}$ 成比例减小，从而形成长长的指数拖尾。

**常见错误。** 在饱和区或线性区电流中漏掉 ½，或者用 $V_{DD}$ 而不是 $V_{DD} - V_{TH}$ 作为过驱动电压。每个错误都会使时间尺度改变 30 % 或更多（用 3 V 代替 2.3 V 会使线性区时间常数缩短为 62 ps）。

**常见错误。** 引入体效应。源极是接地的输入端，衬底也接地，因此 $V_{SB} = 0$，并且始终有 $V_{TH} = 0.7$ V。
