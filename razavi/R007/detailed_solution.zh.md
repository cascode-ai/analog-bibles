# 详细解答 - R007

**思路：** 在 1 V 两侧分别确定源极，结合体效应与工作区条件求解，再按电流箭头确定正负号。

### 模型与源极选择

取 $\beta=\mu_nC_{ox}W/L$，忽略沟道长度调制。沟道两端中电位较低的一端为源极。衬底接地时：

$$V_{TH}=V_{TH0}+\gamma\left(\sqrt{2|\phi_F|+V_{SB}}-\sqrt{2|\phi_F|}\right).$$

正向漏电流与栅跨导正幅值的长沟道关系为：

$$\begin{aligned}
\text{线性区：}\quad&I_D=\beta\left[(V_{GS}-V_{TH})V_{DS}-\tfrac12V_{DS}^2\right],&&g_m=\beta V_{DS},\\
\text{饱和区：}\quad&I_D=\tfrac12\beta(V_{GS}-V_{TH})^2,&&g_m=\beta(V_{GS}-V_{TH}).
\end{aligned}$$

### 1 V 以下：工作区、符号与曲线形状

$V_X$ 端为源极。代入端电压后得到（电压以 V 计）：

$$V_{GS}=1.9-V_X,\qquad V_{DS}=1-V_X,\qquad V_{SB}=V_X,$$
$$V_{TH}=0.7+0.45\left(\sqrt{0.9+V_X}-\sqrt{0.9}\right).$$

线性区条件 $V_{DS}<V_{GS}-V_{TH}$ 化为 $V_{TH}<0.9$ V。阈值从 $0.700$ V 升至 $0.893375$ V，故 $0\le V_X<1$ V 内器件始终导通且处于线性区。

电流从 1 V 端流向 $V_X$ 端，与箭头相反：

$$I_X=-\beta\left[(1.9-V_X-V_{TH})(1-V_X)-\tfrac12(1-V_X)^2\right],\qquad g_m=\beta(1-V_X).$$

代表性代入：$V_X=0.5$ V 时，$V_{TH}=0.80554$ V，得到 $I_X/\beta=-0.17223$ V²、$g_m/\beta=0.5$ V；$V_X=0$ 时两者分别为 $-0.700$ V²、$1$ V。

对有符号电流求导：

$$\frac{dI_X}{dV_X}=\beta\left[V_{GS}-V_{TH}+\frac{\gamma V_{DS}}{2\sqrt{2|\phi_F|+V_{SB}}}\right]>0.$$

括号内两项均随 $V_X$ 增大而减小，因此电流以逐渐减小的斜率上升至零。栅跨导线性下降，与该扫描斜率不同。

### 1 V 以上：短线性区与饱和区

1 V 端变为源极，电流方向与箭头一致：

$$V_{GS}=0.9\ \mathrm V,\quad V_{SB}=1\ \mathrm V,\quad V_{DS}=V_X-1\ \mathrm V,\quad I_X=I_D.$$

阈值公式中代入 $V_{SB}=1$ V，得到 $V_{TH}=0.893375$ V。定义固定过驱动电压 $V_{ov}=V_{GS}-V_{TH}\approx0.006625$ V。当 $0<V_{DS}<V_{ov}$ 时：

$$I_X=\beta\left[V_{ov}(V_X-1)-\tfrac12(V_X-1)^2\right],\qquad g_m=\beta(V_X-1).$$

在 $V_{DS}=V_{ov}$，即 $V_X\approx1.006625$ V 处进入饱和，此后：

$$\frac{I_X}{\beta}=\tfrac12V_{ov}^2\approx2.195\times10^{-5}\ \mathrm{V^2},\qquad \frac{g_m}{\beta}=V_{ov}\approx0.006625\ \mathrm V.$$

两者在 $V_X=1$ V 处均为零，再连续接至微小正平台。过驱动很小，已超出强反型平方律的可靠精度范围；弱反型电流需要更完整的模型。

### 所需曲线与结论

电流和栅跨导各有独立坐标轴，下排放大图显示短线性区。仅绘图刻度采用 $\beta=1\ \mathrm{mA/V^2}$，电流与跨导纵轴数值均随 $\beta$ 成比例缩放。

![R007：电流与栅跨导的完整扫描及转折区放大图](/q/R007/solution-curves.zh.svg)

忽略体效应时，相同工作区判据给出 $V_{ov}=0.200$ V，饱和边界为 $V_X=1.2$ V，平台为 $I_X/\beta=0.020$ V²、$g_m/\beta=0.200$ V；这对应评分说明中的替代结果。
