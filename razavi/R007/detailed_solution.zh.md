# 详细解答 - R007

**思路：** 在 $V_X=1$ V 处分段，分别确定源极、体效应阈值及工作区，再按电流箭头确定正负号。

### 第 1 步 — 源极与阈值

NMOS 的低电位端为源极：$V_X<1$ V 时源极是 $V_X$ 端，$V_X>1$ V 时源极是 1 V 端。衬底接地，阈值由下式决定：

$$V_{TH}=V_{TH0}+\gamma\left(\sqrt{2|\phi_F|+V_{SB}}-\sqrt{2|\phi_F|}\right).$$

代入题给参数，得到（数值式中的电压以 V 计）：

$$V_{TH}=0.7+0.45\left(\sqrt{0.9+V_{SB}}-\sqrt{0.9}\right).$$

### 第 2 步 — 1 V 以下的工作区

$$V_{GS}=1.9-V_X,\qquad V_{DS}=1-V_X,\qquad V_{SB}=V_X.$$

线性区条件 $V_{DS}<V_{GS}-V_{TH}$ 化为 $V_{TH}<0.9$ V。阈值随 $V_X$ 单调升高，且：

$$V_{TH}(0)=0.700\ \mathrm V,\qquad V_{TH}(1\ \mathrm V)=0.893375\ \mathrm V<0.9\ \mathrm V.$$

所以 $0\le V_X<1$ V 内始终导通并处于线性区。

### 第 3 步 — 1 V 以下的电流与跨导

线性区的通用关系为：

$$I_D=\beta\left[(V_{GS}-V_{TH})V_{DS}-\frac12V_{DS}^2\right],\qquad g_m=\beta V_{DS}.$$

沟道电流从 1 V 端流向 $V_X$ 端，与 $I_X$ 箭头相反，故：

$$I_X=-I_D=-\beta[(1.9-V_X-V_{TH})(1-V_X)-\tfrac12(1-V_X)^2],$$
$$g_m=\beta(1-V_X).$$

代入题给参数，关键点见参考答案的小表；其中 $V_X=0.75$ V 时，$I_X/\beta=-0.043468\ldots$ V²，舍入为 −0.04347 V²。

**曲线形状：** 对有符号电流求导：

$$\frac{dI_X}{dV_X}=\beta\left[V_{GS}-V_{TH}+\frac{\gamma V_{DS}}{2\sqrt{2|\phi_F|+V_{SB}}}\right]>0.$$

随 $V_X$ 增大，括号内两项均减小，因此电流从负值上升至零，斜率逐渐减小；$g_m$ 线性下降至零。这里的 $g_m$ 为器件栅跨导的正幅值，不是有符号 $I_X$ 的扫描斜率。

### 第 4 步 — 源漏互换后的短线性区和饱和区

$V_X>1$ V 时：

$$V_{GS}=0.9\ \mathrm V,\qquad V_{SB}=1\ \mathrm V,\qquad V_{DS}=V_X-1\ \mathrm V.$$

因此阈值固定，过驱动电压 $V_{ov}=V_{GS}-V_{TH}\approx0.006625$ V 也固定。先有 $0<V_{DS}<V_{ov}$ 的短线性区：

$$I_X=\beta\left[V_{ov}(V_X-1)-\frac12(V_X-1)^2\right],\qquad g_m=\beta(V_X-1).$$

当 $V_{DS}\ge V_{ov}$，即 $V_X\gtrsim1.006625$ V 时，进入饱和区：

$$I_X=\frac12\beta V_{ov}^2,\qquad g_m=\beta V_{ov}.$$

代入后平台值为 $I_X/\beta\approx2.195\times10^{-5}$ V²、$g_m/\beta\approx0.006625$ V。它们虽小但不为零；过驱动仅约 6.6 mV，平方律在此只是形式估算，不能据此精确预测实际亚阈值电流。

### 第 5 步 — 曲线与无体效应比较

![R007：归一化电流与栅跨导曲线](/q/R007/review-curves.svg)

完整扫描曲线保留 1 V 处过零、其上的短线性区和微小正平台；后两者在主图比例下很小，以分段公式为准。

忽略体效应时，固定过驱动为 0.200 V，饱和边界变为 1.2 V，平台电流和跨导分别为 $I_X/\beta=0.020$ V²、$g_m/\beta=0.200$ V。
