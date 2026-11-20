# 详细解答 - R006

**思路：** 先由二极管连接判断工作区，再由体效应阈值求电流和栅跨导，最后用导数说明曲线形状。

### 第 1 步 — 端电压与工作区

$V_X$ 端始终低于 3 V，因此是源极；衬底接地：

$$V_{GS}=V_{DS}=V_{DD}-V_X,\qquad V_{SB}=V_X,\qquad I_X=I_D.$$

栅漏短接，且阈值为正，因此只要导通就满足 $V_{DS}\ge V_{GS}-V_{TH}$，处于饱和区。

### 第 2 步 — 体效应阈值

$$V_{TH}=V_{TH0}+\gamma\left(\sqrt{2|\phi_F|+V_{SB}}-\sqrt{2|\phi_F|}\right).$$

代入题给参数，得到（数值式中的电压以 V 计）：

$$V_{TH}(V_X)=0.7+0.45\left(\sqrt{0.9+V_X}-\sqrt{0.9}\right).$$

随源极电位升高，源衬反偏增大，阈值从 0.700 V 升至约 0.970 V。

### 第 3 步 — 电流与栅跨导

忽略 CLM，取 $\beta=\mu_nC_{ox}W/L$：

$$I_D=\frac12\beta(V_{GS}-V_{TH})^2,\qquad g_m=\left.\frac{\partial I_D}{\partial V_{GS}}\right|_{V_{DS},V_{SB}}=\beta(V_{GS}-V_{TH}).$$

代入端电压，得到：

$$\frac{I_X}{\beta}=\frac12[V_{DD}-V_X-V_{TH}(V_X)]^2,\qquad
\frac{g_m}{\beta}=V_{DD}-V_X-V_{TH}(V_X).$$

过驱动电压随 $V_X$ 单调减小，最小值出现在扫描终点，为 0.530 V，仍大于零。因此整个扫描范围内始终导通且饱和。归一化电流从 2.645 V² 降至 0.140 V²，归一化跨导从 2.300 V 降至 0.530 V；无需假设器件尺寸。

### 第 4 步 — 扫描斜率与栅跨导的区别

扫动源极同时改变 $V_{GS}$ 和 $V_{SB}$。由阈值公式及链式法则：

$$\frac{dV_{TH}}{dV_X}=\frac{\gamma}{2\sqrt{2|\phi_F|+V_X}},$$
$$\frac{dI_X}{dV_X}=-g_m\left(1+\frac{\gamma}{2\sqrt{2|\phi_F|+V_X}}\right)<0,$$
$$\frac{dg_m}{dV_X}=-\beta\left(1+\frac{\gamma}{2\sqrt{2|\phi_F|+V_X}}\right)<0.$$

所以两条曲线均下降。$g_m$ 的斜率变化较小，近似为直线；$I_X$ 的下降逐渐变缓，向上弯曲。负的 $dI_X/dV_X$ 不是器件的正栅跨导 $g_m$。

### 第 5 步 — 曲线与关键点

![R006：归一化电流与栅跨导曲线](/q/R006/review-curves.svg)

图中纵轴为 $I_X/\beta$（V²）和 $g_m/\beta$（V）；曲线的起点、终点及下降趋势与上述公式一致。

### 第 6 步 — 扫描范围之外的截止点

截止条件为 $V_{GS}=V_{TH}$，即：

$$V_{DD}-V_X=V_{TH0}+\gamma\left(\sqrt{2|\phi_F|+V_X}-\sqrt{2|\phi_F|}\right).$$

代入题给参数，求根得到 $V_X\approx1.965$ V，高于题目扫描终点 1.5 V，进一步确认扫描内没有截止。忽略体效应时，截止点为 $V_X=V_{DD}-V_{TH0}=2.3$ V；在 1.5 V 处，$I_X/\beta=0.320$ V²、$g_m/\beta=0.800$ V。体效应使终点电流减小了一半以上。
