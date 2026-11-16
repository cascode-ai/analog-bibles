# 详细步骤 - R063

**思路。** 用带沟道长度调制（channel-length modulation）的平方律模型拟合图中曲线。每段饱和（直线）部分的斜率和外推截距给出 $\lambda$；截距电流的平方根与过驱动电压成正比，由此可以看出 $V_{GS}$ 的等步长；拐点位置（$V_{DS,sat} = V_{GS} - V_{TH}$）确定过驱动电压的绝对值；然后由电流大小得到 $\beta = \mu_nC_{ox}W/L$，再结合计算出的 $C_{ox}$ 求出 $\mu_n$。仅凭图只能确定过驱动电压，而不能确定 $V_{GS}$，因此求 $V_{TH}$ 还需要一个额外的假设。

### 第 1 步 — 要拟合的模型

在饱和区，

$$I_D = \frac12\,\beta\,(V_{GS} - V_{TH})^2(1 + \lambda V_{DS}), \qquad \beta = \mu_nC_{ox}\frac{W}{L},$$

因此每段饱和部分都是关于 $V_{DS}$ 的一条**直线**，其中

$$\text{intercept at } V_{DS} = 0:\ I_{D0} = \tfrac12\beta V_{ov}^2, \qquad \text{slope} = \lambda I_{D0},$$

每条曲线的**拐点**（饱和区边缘）位于 $V_{DS,sat} = V_{ov} = V_{GS} - V_{TH}$。

### 第 2 步 — 从图中读数

把曲线从上到下编号为 1 到 6。读出拐点（曲线变平处）以及 $V_{DS} = 1$ V 处的电流：

| 曲线 | 拐点 $V_{DS}$（V） | 拐点处 $I_D$（mA） | 1 V 处 $I_D$（mA） |
|---|---|---|---|
| 1 | 0.6 | 2.95 | 3.25 |
| 2 | 0.5 | 2.00 | 2.25 |
| 3 | 0.4 | 1.25 | 1.45 |
| 4 | 0.3 | 0.68 | 0.80 |
| 5 | 0.2 | 0.29 | 0.36 |
| 6 | 0.1 | 0.07 | 0.09 |

这些读数有约百分之几毫安的不确定性，因此下面的结果都是估计值。

### 第 3 步 — 由饱和区斜率求 $\lambda$

对于曲线 1，拐点与 $V_{DS} = 1$ V 之间的斜率为

$$\text{slope} = \frac{3.25 - 2.95\ \mathrm{mA}}{1.0 - 0.6\ \mathrm{V}} = \frac{0.30\ \mathrm{mA}}{0.4\ \mathrm{V}} = 0.75\ \mathrm{mA/V}.$$

把直线外推回 $V_{DS} = 0$：

$$I_{D0} = 2.95\ \mathrm{mA} - (0.75\ \mathrm{mA/V})(0.6\ \mathrm{V}) = 2.95 - 0.45 = 2.50\ \mathrm{mA},$$

$$\lambda = \frac{\text{slope}}{I_{D0}} = \frac{0.75\ \mathrm{mA/V}}{2.50\ \mathrm{mA}} = 0.30\ \mathrm{V^{-1}}.$$

对其他曲线采用同样的方法：

| 曲线 | 斜率（mA/V） | $I_{D0}$（mA） | $\lambda$（V⁻¹） |
|---|---|---|---|
| 1 | 0.75 | 2.50 | 0.30 |
| 2 | 0.50 | 1.75 | 0.29 |
| 3 | 0.333 | 1.117 | 0.30 |
| 4 | 0.171 | 0.629 | 0.27 |
| 5 | 0.088 | 0.273 | 0.32 |

因此 $\lambda \approx 0.3\ \mathrm{V^{-1}}$，这是 40 nm 沟道典型的较大值：夹断（pinch-off）位置的微小变化在如此短的沟道中占了很大的比例。

### 第 4 步 — $V_{GS}$ 的步长

**过驱动电压的等步长。** 由 $I_{D0} = \tfrac12\beta V_{ov}^2$，$\sqrt{I_{D0}} = \sqrt{\beta/2}\,V_{ov}$ 与过驱动电压成正比：

| 曲线 | 6 | 5 | 4 | 3 | 2 | 1 |
|---|---|---|---|---|---|---|
| $\sqrt{I_{D0}}$（$\sqrt{\mathrm{mA}}$） | 0.260 | 0.522 | 0.793 | 1.057 | 1.323 | 1.581 |
| 与曲线 6 之比 | 1 | 2.0 | 3.0 | 4.1 | 5.1 | 6.1 |

这些数值以约 $0.264\ \sqrt{\mathrm{mA}}$ 的等步长增大，比例为 1 : 2 : 3 : 4 : 5 : 6。因此过驱动电压为 $\Delta V, 2\Delta V, \dots, 6\Delta V$：$V_{GS}$ 的步长相等（与题设一致），并且**最下面一条曲线的过驱动电压等于一个步长**。

**由拐点确定绝对大小。** 拐点位于 $V_{DS,sat} = V_{ov} \approx 0.1, 0.2, 0.3, 0.4, 0.5, 0.6$ V。因此

$$6\,\Delta V_{GS} = 0.6\ \mathrm{V} \quad\Longrightarrow\quad \Delta V_{GS} \approx 0.1\ \mathrm{V}.$$

**由线性区独立验证。** 当相邻两条曲线都处于线性区时，它们的差为 $\Delta I_D = \beta\,\Delta V_{GS}\,V_{DS}(1 + \lambda V_{DS})$，对每一对相邻曲线都相同。在 $V_{DS} = 0.2$ V 处，最上面两条曲线的读数约为 1.47 mA 和 1.18 mA，因此 $\beta\Delta V_{GS} \approx 0.29\ \mathrm{mA}/(0.2\times1.06\ \mathrm{V}) = 1.37\ \mathrm{mA/V}$。再结合 $\sqrt{\beta/2}\,\Delta V_{GS} = 0.264\ \sqrt{\mathrm{mA}}$，即 $\tfrac12\beta\Delta V_{GS}^2 = 0.0697$ mA：

$$\Delta V_{GS} = \frac{2\times0.0697\ \mathrm{mA}}{1.37\ \mathrm{mA/V}} \approx 0.10\ \mathrm{V},$$

与由拐点得到的结果一致。

### 第 5 步 — $\beta = \mu_nC_{ox}W/L$

由曲线 1，$V_{ov} = 0.6$ V，$I_{D0} = 2.50$ mA：

$$\beta = \frac{2I_{D0}}{V_{ov}^2} = \frac{2(2.50\ \mathrm{mA})}{(0.6\ \mathrm{V})^2} = \frac{5.0}{0.36}\ \mathrm{mA/V^2} = 13.9\ \mathrm{mA/V^2}.$$

曲线 3 给出 $2(1.117)/0.16 = 14.0\ \mathrm{mA/V^2}$，曲线 4 给出 $2(0.629)/0.09 = 14.0\ \mathrm{mA/V^2}$，因此 $\beta \approx 14\ \mathrm{mA/V^2}$。

**线性区验证。** 对曲线 1，在 $V_{DS} = 0.2$ V 处，$\beta[V_{ov}V_{DS} - V_{DS}^2/2](1 + \lambda V_{DS}) = 13.9[(0.6)(0.2) - 0.02](1.06) = 1.47$ mA，与图相符。

### 第 6 步 — 氧化层电容、宽长比（aspect ratio）与迁移率（mobility）

取 $t_{ox} = 18\ \text{Å} = 1.8\times10^{-9}$ m，并采用绘制尺寸（这是唯一给出的尺寸）：

$$C_{ox} = \frac{\epsilon_{ox}}{t_{ox}} = \frac{3.9\times8.854\times10^{-12}\ \mathrm{F/m}}{1.8\times10^{-9}\ \mathrm{m}} = 1.92\times10^{-2}\ \mathrm{F/m^2}\quad(= 19.2\ \mathrm{fF/\mu m^2}),$$

$$\frac{W}{L} = \frac{5\ \mu\mathrm{m}}{0.04\ \mu\mathrm{m}} = 125 ,$$

$$\mu_nC_{ox} = \frac{\beta}{W/L} = \frac{13.9\times10^{-3}\ \mathrm{A/V^2}}{125} = 1.11\times10^{-4}\ \mathrm{A/V^2} = 111\ \mu\mathrm{A/V^2},$$

$$\mu_n = \frac{\mu_nC_{ox}}{C_{ox}} = \frac{1.11\times10^{-4}\ \mathrm{A/V^2}}{1.92\times10^{-2}\ \mathrm{F/m^2}} = 5.8\times10^{-3}\ \mathrm{m^2/(V\,s)} = 58\ \mathrm{cm^2/(V\,s)}.$$

（单位：$\mathrm{A/V^2}$ 除以 $\mathrm{F/m^2} = \mathrm{A\,s/(V\,m^2)}$ 得到 $\mathrm{m^2/(V\,s)}$，且 $1\ \mathrm{m^2} = 10^4\ \mathrm{cm^2}$。）这远低于长沟道电子迁移率的几百 cm²/(V·s)：对 40 nm 器件拟合平方律，会把速度饱和（velocity saturation）和纵向电场引起的迁移率退化（mobility degradation）都归并到一个“有效”迁移率中。若忽略沟道长度调制，并用曲线 1 的拐点电流（2.95 mA）代替截距，则得到约 68 cm²/(V·s)；根据对 $\lambda$ 的处理方式不同，估计值在 55–70 cm²/(V·s) 范围内。

### 第 7 步 — 阈值电压（threshold voltage）

图中没有给出任何一条曲线的 $V_{GS}$ 绝对值；数据只确定了过驱动电压，从最下面曲线的 0.1 V 到最上面曲线的 0.6 V，因此

$$V_{TH} = V_{GS,\text{lowest curve}} - 0.1\ \mathrm{V} = V_{GS,\text{top curve}} - 0.6\ \mathrm{V}.$$

$V_{DS}$ 轴的终点为 1 V，这暗示电源电压为 1 V。假设最上面的曲线对应 $V_{GS} = 1$ V，则各曲线位于 $V_{GS} = 0.5, 0.6, \dots, 1.0$ V，且

$$V_{TH} \approx 1.0 - 0.6 = 0.4\ \mathrm{V}.$$

### 结果

- $V_{GS}$ 步长：$\approx 0.1$ V；六条曲线的过驱动电压约为 0.1、0.2、…、0.6 V（拐点位于这些 $V_{DS}$ 处，且 $\sqrt{I_{D0}}$ 之比为 1 : 2 : … : 6）。
- $\lambda \approx 0.3\ \mathrm{V^{-1}}$（饱和部分的斜率除以截距，例如 0.75 mA/V ÷ 2.50 mA）。
- $\beta = \mu_nC_{ox}W/L \approx 14\ \mathrm{mA/V^2}$；由 $C_{ox} = 19.2\ \mathrm{fF/\mu m^2}$ 和 $W/L = 125$ 得 $\mu_nC_{ox} \approx 111\ \mu\mathrm{A/V^2}$，$\mu_n \approx 58\ \mathrm{cm^2/(V\,s)}$（根据对 $\lambda$ 的处理不同，约为 55–70）。
- $V_{TH} = V_{GS,lowest} - 0.1$ V；若最上面的曲线对应 $V_{GS} = 1$ V，则 $V_{TH} \approx 0.4$ V。

**常见错误。** 把步长当成电流的间隔，或者从 $V_{DS}$ 轴上读出 $V_{TH}$。$V_{GS}$ 的步长是**过驱动电压**的步长，由拐点位置和 $\sqrt{I_D}$ 揭示；曲线起始或弯折处的 $V_{DS}$ 本身并不能说明 $V_{TH}$。

**常见错误。** $\mu_n$ 的单位错误，例如 $C_{ox}$ 用 fF/µm² 而 $\beta$ 用 A/V²，或者 $L$ 用 µm 而 $W$ 用 nm。应当用国际单位制计算（$C_{ox} = 0.0192\ \mathrm{F/m^2}$，$W/L = 125$），最后再换算（$1\ \mathrm{m^2/(V\,s)} = 10^4\ \mathrm{cm^2/(V\,s)}$）。

**常见错误。** 只用斜率估计 $\lambda$，或者除以了错误的电流。$\lambda$ 是斜率除以外推到 $V_{DS} = 0$ 处的电流（单位为 V⁻¹），这里约为 0.3 V⁻¹。
