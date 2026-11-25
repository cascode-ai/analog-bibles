# 详细步骤 - R027

**思路：** 开关断开后，电路形成浮置的双节点孤岛。先列理想 KCL，再给出一个明确的寄生补充模型和分阶段近似。

### 理想孤岛与电流定义

令 $i_C=C_1\,d(V_X-V_S)/dt$ 从 X 流向 S。只含沟道、没有对地通路时，
$$I_X+i_C=0\quad\text{（X 节点）},\qquad I_X+i_C=I_1\quad\text{（S 节点）}.$$
当 $I_1\ne0$ 时两式矛盾，因此题给数据不能唯一确定 $V_X(t)$ 和 $I_X(t)$。

这里 $I_X$ 定义为进入 MOS 漏端的传导电流，不包含额外漏体电容的位移电流。若探头把 $C_{DB}$ 也计入，则
$$I_{X,\mathrm{pin}}=I_X+C_{DB}\frac{dV_X}{dt}.$$
开关瞬间两种定义可能给出不同的电流跳变。

### 一个明确的物理补充模型

加入 X、S 对地寄生电容 $C_{px}$、$C_{ps}$，以及接地衬底向节点注入的结电流 $j_X,j_S$。令 $I_{ch}$ 从 X 流向 S，则
$$
\begin{pmatrix}C_1+C_{px}&-C_1\\-C_1&C_1+C_{ps}\end{pmatrix}
\begin{pmatrix}\dot V_X\\\dot V_S\end{pmatrix}
=
\begin{pmatrix}j_X-I_{ch}\\j_S+I_{ch}-I_1\end{pmatrix},
$$
并取
$$j_X=I_S(e^{-V_X/V_T}-1),\qquad j_S=I_S(e^{-V_S/V_T}-1),\qquad I_X=I_{ch}-j_X.$$
采用电位较低端为源极的对称平方律沟道。示例参数为
$$V_b=1.5\,\mathrm V,\ I_1=0.10\,\mathrm{mA},\ C_1=1\,\mathrm{pF},\ C_{px}=C_{ps}=20\,\mathrm{fF},$$
$$\beta=1\,\mathrm{mA/V^2},\ V_{TH}=0.7\,\mathrm V,\ I_S=10^{-14}\,\mathrm A,\ V_T=25.85\,\mathrm{mV},\ \lambda=0.$$

### 分阶段近似与复核

浮置节点开始快速移动前，沟道所需电流约为 $I_1$。初始源极估计为
$$V_S(0)\approx V_b-V_{TH}-\sqrt{2I_1/\beta}=0.353\,\mathrm V,$$
所以 $V_X(0)=V_S(0)+3\,\mathrm V$。开关断开后，共模斜率主要由小寄生电容决定：
$$\dot V_{\mathrm{cm}}\approx-\frac{I_1}{C_{px}+C_{ps}}=-2.5\,\mathrm{V/ns}.$$
随后结电流和沟道电流重新分配电流，有限 $C_1$ 使 $V_X-V_S$ 连续。

源极下降使过驱动增大。饱和阶段可用
$$I_{ch}\approx\frac{\beta}{2}(V_b-V_S-V_{TH})^2,\qquad \dot V_X\approx-\frac{I_{ch}}{C_1}.$$
进入线性区后，
$$R_{\mathrm{on}}\approx\frac{1}{\beta(V_b-V_S-V_{TH})},\qquad \tau\approx R_{\mathrm{on}}C_1.$$
这些是所选补充模型的阶段估计，不是题目唯一给出的波形。

数值积分该示例，在 $0.45\,\mathrm{ns}$ 时得到 $V_X=2.203\,\mathrm V$、$V_S=-0.589\,\mathrm V$、$I_X=0.964\,\mathrm{mA}$。示例直流点为
$$V_X=-0.564\,\mathrm V,\quad V_S=-0.586\,\mathrm V,\quad I_X=0,\quad I_{ch}=j_X\approx0.0300\,\mathrm{mA},$$
因此 $C_1$ 保留约 $21.85\,\mathrm{mV}$ 压差。内部沟道电流非零时，漏端总电流仍可为零。

### 顺从电压与低栅压限制

若电流源在 $V_S$ 接近 0 V 时失去顺从能力，源极可能提前停止下降。若相关源电压下 $V_b\le V_{TH}$，沟道可能保持截止，此时响应由结和寄生通路决定。题目没有给出这两种分支的参数。

![答案曲线：电压](/q/R027/solution-voltage.zh.svg)

![答案曲线：电流](/q/R027/solution-current.zh.svg)

### 图形适用范围

四张图是一个明确参数补充模型的示例。结面积、寄生电容、正向体效应、电流源顺从范围以及原图中电流探头的精确位置未给出，因此不能由题目唯一确定脉冲、钳位、终值或晚期电流。
