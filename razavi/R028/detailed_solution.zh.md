# 详细步骤 - R028

**思路：** 先列两个电容的节点方程。题给电路的两个节点构成浮置孤岛，因此必须明确结电流、寄生电容和电流源顺从范围后才能得到具体波形。

### 理想 KCL 与缺失通路

令 $i_C=C_1\,d(V_X-V_S)/dt$ 从 X 流向 S。仅含沟道的模型给出
$$I_X+i_C=0\quad\text{（X 节点）},\qquad I_X+i_C=I_1\quad\text{（S 节点）}.$$
当 $I_1\ne0$ 时两式矛盾。接地衬底结、对地寄生电容或电流源顺从性必须提供缺失通路。题目没有给出这些参数，因此不能唯一确定两条波形。

### 一个明确的物理补充模型

为给出可复现示例，令 $I_{ch}$ 为从 X 流向 S 的沟道电流，$j_X,j_S$ 为接地衬底注入 X、S 的结电流。加入 $C_{px}$、$C_{ps}$ 对地电容后，
$$
\begin{pmatrix}C_1+C_{px}&-C_1\\-C_1&C_1+C_{ps}\end{pmatrix}
\begin{pmatrix}\dot V_X\\\dot V_S\end{pmatrix}
=
\begin{pmatrix}j_X-I_{ch}\\j_S+I_{ch}-I_1\end{pmatrix}.
$$
本示例取
$$j_X=I_S(e^{-V_X/V_T}-1),\qquad j_S=I_S(e^{-V_S/V_T}-1),$$
并取恒定 $V_{TH}=0.7\,\mathrm V$、$\lambda=0$、$\beta=1\,\mathrm{mA/V^2}$、$V_b=1.5\,\mathrm V$、$I_1=0.1\,\mathrm{mA}$、$C_1=1\,\mathrm{pF}$、$C_{px}=C_{ps}=20\,\mathrm{fF}$、$I_S=10^{-14}\,\mathrm A$、$V_T=25.85\,\mathrm{mV}$。图中的 $I_X$ 定义为进入漏极端的传导电流，
$$I_X=I_{ch}-j_X.$$
若把漏体结电容 $C_{DB}$ 也接入测量端口，则还要按所选符号加入位移电流 $C_{DB}\dot V_X$；题目未给该元件，图中不含此项。

### 示例中的三个物理阶段

开启前 $I_{ch}\approx0$，电流源主要由寄生电容供给，共模快速下降的近似斜率为
$$\dot V_X\approx\dot V_S\approx-\frac{I_1}{C_{px}+C_{ps}}.$$
这是快速初始运动的近似，直到源体通路开始导通。

当 $V_S$ 仍为正且沟道处于饱和区时，
$$V_S\approx V_b-V_{TH}-\sqrt{\frac{2I_1}{\beta}}=0.3528\,\mathrm V,$$
而沟道电流给出
$$\dot V_X\approx-\frac{I_{ch}}{C_1}.$$
随着 $V_S$ 下降，$I_{ch}$ 增大并形成电流脉冲。

进入线性区后，使用
$$I_{ch}=\beta(Ud-d^2/2),\qquad U=V_b-\min(V_X,V_S)-V_{TH},\quad d=|V_X-V_S|,$$
并按较低电位端确定电流方向。局部时间尺度可写为
$$\tau_{\mathrm{tri}}\sim R_{\mathrm{on}}C_1,\qquad R_{\mathrm{on}}\approx[\beta U]^{-1},$$
但它会随 $V_S$、$U$ 和结电流变化。

在上述示例中，$0.45\,\mathrm{ns}$ 时
$V_X=2.203\,\mathrm V$、$V_S=-0.589\,\mathrm V$、$I_X=0.964\,\mathrm{mA}$。直流稳态为
$$V_X=-0.564\,\mathrm V,\quad V_S=-0.586\,\mathrm V,\quad I_X=0,\quad I_{ch}=j_X\approx0.0300\,\mathrm{mA},$$
因此 $C_1$ 保留约 $21.85\,\mathrm{mV}$ 的电压差。漏端总电流为零时，内部沟道电流仍可由漏体结提供。

### 低栅压与电流源限制

若 $3C_1\le V_{TH}C_2$，X 会在沟道开启之前或同时达到 $V_X=0$。此时初始波形为
$$V_X=3\,\mathrm V-\frac{I_1}{C_1}t,\qquad I_X\approx I_1,$$
没有正漏压饱和平台。过零后才可能开启沟道或体结，后续脉冲取决于补充模型。

如果电流源在 $V_S$ 接近 0 V 时失去顺从性，下降过程可能提前停止，电容也可能保留正电压。题给数据不能推出统一终值或二极管钳位。

![V_X 与 V_S 随时间变化](/q/R028/solution-voltage.zh.svg)

![I_X 随时间变化](/q/R028/solution-current.zh.svg)

![负压延拓电流尾部](/q/R028/solution-current-tail.zh.svg)

这些图是一个明确补充模型下的条件示例，不是题目数据唯一决定的波形。
