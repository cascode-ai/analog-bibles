# 详细步骤 - R017

**思路：** 以电位较低的输出端作为电学源极，低输入时联立线性区沟道方程与负载 KCL，再用饱和区负载方程求恒定输出。将负载决定的平台与阈值决定的平台上界区分开。

### 1. 端电压方向与模型

输入经沟道向电阻供电，故 $0\le V_{out}\le V_{in}$。在对称长沟道模型中，电学源极为输出端，尽管原图源极箭头画在输入端。衬底接地、两端电压均非负，因此两扩散区与衬底之间的结均无正向偏置。

$$V_{GS}=2\ \mathrm{V}-V_{out},\qquad V_{DS}=V_{in}-V_{out},\qquad V_{SB}=V_{out}.$$

先写体效应通式：

$$V_{TH}=V_{TH0}+\gamma\left(\sqrt{2|\phi_F|+V_{out}}-\sqrt{2|\phi_F|}\right),$$

再代入 $V_{TH0}=0.7\ \mathrm{V}$、$\gamma=0.45\ \mathrm{V^{1/2}}$、$2|\phi_F|=0.9\ \mathrm{V}$。忽略沟道长度调制与栅极电流。负载 KCL 为 $I_D=V_{out}/R_1$。

### 2. 低输入的线性区段

线性区平方律与输出节点 KCL 给出

$$\frac{V_{out}}{R_1}=I_D=\beta\left[(V_{GS}-V_{TH})V_{DS}-\frac{V_{DS}^2}{2}\right].$$

由 $V_{DS}<V_{GS}-V_{TH}$，得 $V_{in}<2\ \mathrm{V}-V_{TH}(V_{out})$，因此

$$\frac{V_{out}}{R_1}=\beta\left[(2\ \mathrm{V}-V_{out}-V_{TH})(V_{in}-V_{out})-\frac{(V_{in}-V_{out})^2}{2}\right].$$

曲线从 $V_{in}=0$、$V_{out}=0$ 出发。当漏源电压远小于过驱动电压时，沟道可近似为电阻 $R_{on}=1/[\beta(2\ \mathrm{V}-V_{out}-V_{TH})]$，给出 $V_{out}\approx V_{in}R_1/(R_1+R_{on})$。在原点，完整方程中乘以 $V_{DS}$ 的微分项均为零，因此

$$\frac{dV_{out}}{R_1}=\beta(2\,\mathrm V-V_{TH0})(dV_{in}-dV_{out}).$$

整理得到初始斜率。

$$\left.\frac{dV_{out}}{dV_{in}}\right|_0=\frac{\beta R_1(2\ \mathrm{V}-V_{TH0})}{1+\beta R_1(2\ \mathrm{V}-V_{TH0})}.$$

斜率小于一，且可能很小。输出上升时，栅极过驱动减小、阈值增大，曲线逐渐弯向平台。接近线性区/饱和区边界时，线性沟道电阻近似已不充分，应使用完整负载方程。

### 3. 饱和区平台与转折点

当 $V_{in}\ge2\ \mathrm{V}-V_{TH}(V_{out})$ 时，饱和区方程为

$$\frac{V_{out,s}}{R_1}=\frac{\beta}{2}[2\ \mathrm{V}-V_{out,s}-V_{TH}(V_{out,s})]^2.$$

应取过驱动为正的根：

$$2\ \mathrm{V}-V_{out,s}-V_{TH}(V_{out,s})=\sqrt{\frac{2V_{out,s}}{\beta R_1}}>0.$$

右侧是维持负载电流所需的过驱动电压。方程不含输入电压，所以在 $\lambda=0$ 下输出恒定，平台起点为

$$V_{in,s}=2\ \mathrm{V}-V_{TH}(V_{out,s}).$$

两区电流公式在边界处相等，对 $V_{in}$ 的斜率也趋于零，因此上升段与平台光滑相接。

平台上界满足 $2\,\mathrm V-V_{out}=V_{TH}(V_{out})$。令 $u=\sqrt{2|\phi_F|+V_{out}}$，代入得

$$u^2+\gamma u=2\,\mathrm V+2|\phi_F|-V_{TH0}+\gamma\sqrt{2|\phi_F|},\qquad V_{out}=u^2-2|\phi_F|.$$

取正根，得到 $V_{out}=1.0918\ \mathrm{V}$，仅在 $\beta R_1\to\infty$ 时趋近。有限正负载与器件尺寸下，平台较低，且可能低很多；当 $\beta R_1\to0$ 时，$V_{out,s}\to0$，$V_{in,s}\to1.3\ \mathrm{V}$。不计体效应时，平台上界为 1.3 V。

### 4. 数值示例与传输曲线

使用未舍入的平方根阈值公式求解：

| $\beta R_1$（V⁻¹） | $V_{out,s}$（V） | $V_{in,s}$（V） |
|---|---|---|
| 1 | 0.3656 | 1.2207 |
| 10 | 0.7581 | 1.1475 |
| 100 | 0.9718 | 1.1112 |

对 $\beta R_1=10\ \mathrm{V^{-1}}$，代入 $V_{out,s}=0.7581\ \mathrm{V}$，得 $V_{TH}=0.8525\ \mathrm{V}$，过驱动为 $0.3894\ \mathrm{V}$。归一化负载方程给出 $\tfrac12(10\ \mathrm{V^{-1}})(0.3894\ \mathrm{V})^2\approx 0.7581\ \mathrm{V}$，与平台数值及单位一致。

![随输入电压变化的传输曲线](/q/R017/solution-transfer.zh.svg)

有限参数曲线均由完整线性区/饱和区方程求出。虚线极限为 $\beta R_1\to\infty$ 时的 $V_{out}=\min(V_{in},1.0918\ \mathrm{V})$，不代表另一只有限尺寸器件。非零沟道长度调制会使平台带有斜率；题给数据不足以计算其大小。
