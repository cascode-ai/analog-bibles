# 详细步骤 - R070

### 第 1 步 — 建立负载线并选择模型

源极和衬底接地，所以 $V_{GS}=V_{in}$，$V_{DS}=V_{out}$。输出端没有其他负载，流过 $R_D$ 的电流等于漏极电流。电阻两端的电压为 $V_{DD}-V_{out}$，因此

$$I_D=\frac{V_{DD}-V_{out}}{R_D}.$$

先用饱和区模型求出候选解，再核对其是否满足 $V_{DS}\ge V_{ov}>0$。当 $\lambda=0$ 时，令过驱动电压 $V_{ov}=V_{GS}-V_{TH}$，饱和区电流满足 $I_D=\tfrac12\beta V_{ov}^2$，其中

$$\beta=\mu_nC_{ox}\frac{W}{L}=(134\ \mu\mathrm{A/V^2})\frac{50}{0.5}
=13.4\ \mathrm{mA/V^2}.$$

器件导通时过驱动电压为正，因此取正平方根：

$$V_{ov}=\sqrt{\frac{2I_D}{\beta}},\qquad V_{in}=V_{TH}+V_{ov}.$$

### 第 2 步 — 求两个输出电压对应的输入

当 $V_{out}=1\ \mathrm{V}$ 时，由负载线得 $I_D=(3\ \mathrm{V}-1\ \mathrm{V})/(2\ \mathrm{k}\Omega)=1\ \mathrm{mA}$。代入得到

$$V_{ov}=\sqrt{\frac{2(1\ \mathrm{mA})}{13.4\ \mathrm{mA/V^2}}}
\approx 0.386\ \mathrm{V}.$$

由于 $V_{DS}=1\ \mathrm{V}>V_{ov}$，饱和区假设成立。加上 $V_{TH}=0.7\ \mathrm{V}$，得 $V_{in}\approx 1.086\ \mathrm{V}$。

当 $V_{out}=2.5\ \mathrm{V}$ 时，由同一负载线得 $I_D=(3\ \mathrm{V}-2.5\ \mathrm{V})/(2\ \mathrm{k}\Omega)=0.25\ \mathrm{mA}$。这是前一个电流的四分之一，因此由第 1 步的平方根关系，过驱动电压减半，得 $V_{ov}\approx 0.193\ \mathrm{V}$。同样有 $V_{DS}=2.5\ \mathrm{V}>V_{ov}$。加上 $V_{TH}$ 得 $V_{in}\approx 0.893\ \mathrm{V}$。

### 第 3 步 — 解释输出摆幅

当 $V_{out}$ 从 1 V 升至 2.5 V 时，由负载线可知漏极电流减小，因此对应的 $V_{ov}$ 也减小。全程 $V_{DS}\ge 1\ \mathrm{V}$，且 $V_{ov}\le 0.3864\ \mathrm{V}$，所以器件始终处于饱和区。输入升高约 0.193 V 时，输出下降 1.5 V，变化量之比 $|\Delta V_{out}/\Delta V_{in}|$ 约为 7.8。

小信号增益随偏置变化。对饱和区电流式求导可得 $g_m=\beta V_{ov}=\sqrt{2\beta I_D}$。由电源电压固定时的负载线可得 $A_v=-R_Dg_m$。当 $V_{out}=1\ \mathrm{V}$ 时，增益约为 $-10.4\ \mathrm{V/V}$。当 $V_{out}=2.5\ \mathrm{V}$ 时，约为 $-5.2\ \mathrm{V/V}$。斜率随偏置变化体现了这段摆幅内的非线性。
