# 详细步骤 - A233

把输出电阻写成共源共栅 n 沟道支路与简单 p 沟道负载的并联，判断哪一个起主导作用，然后代入几何尺寸固定时的电流标度：$g_m\propto\sqrt{I_D}$，$g_{ds}=\lambda I_D\propto I_D$。

### 第 1 步 — 输出电阻

向下看进共源共栅管 M2 的漏极，其栅极交流接地、源极看到 $r_{ds1}$，电阻为

$$
R_N=r_{ds1}+r_{ds2}+g_{m2}r_{ds1}r_{ds2}\approx g_{m2}r_{ds1}r_{ds2}.
$$

向上看进电流源负载 M3（栅极接固定电压）的漏极，电阻为 $r_{ds3}$。输出电阻为

$$
R_{out}=r_{ds3}\parallel R_N .
$$

两条支路电阻之比为

$$
\frac{R_N}{r_{ds3}}\approx g_{m2}r_{ds2}\,\frac{r_{ds1}}{r_{ds3}}=g_{m2}r_{ds2}\,\frac{\lambda_P}{\lambda_N}\gg1,
$$

因为本征增益 $g_{m2}r_{ds2}$ 很大（通常约为 100 量级），且 $\lambda_P$ 与 $\lambda_N$ 相当（书中标准参数为 $\lambda_P=0.05\ \mathrm{V^{-1}}>\lambda_N=0.04\ \mathrm{V^{-1}}$）。因此输出电阻由负载决定：

$$
R_{out}\approx r_{ds3}=\frac{1}{\lambda_PI_D}.
$$

### 第 2 步 — 电压增益

共源共栅管几乎把 M1 的全部小信号电流送到输出，$G_m=g_{m1}(g_{m2}+g_{ds2})/(g_{m2}+g_{ds1}+g_{ds2})\approx g_{m1}$，故

$$
A_v=-G_mR_{out}\approx-g_{m1}\big(r_{ds3}\parallel g_{m2}r_{ds1}r_{ds2}\big)\approx-\frac{g_{m1}}{g_{ds3}}
=-\frac{\sqrt{2K'_N(W_1/L_1)I_D}}{\lambda_PI_D}=-\sqrt{\frac{2K'_NW_1}{L_1I_D\lambda_P^2}} .
$$

### 第 3 步 — 主极点

输出节点兼有最大的电阻和题给的负载电容 $C_{out}$，因此给出主极点：

$$
|p_1|\approx\frac{1}{R_{out}C_{out}}=\frac{g_{ds3}}{C_{out}}=\frac{\lambda_PI_D}{C_{out}} .
$$

M1 与 M2 之间的共源共栅节点只看到约 $1/g_{m2}$ 和一个小电容 $C_1$，其极点 $\approx g_{m2}/C_1$ 高出约 $g_{m2}R_{out}C_{out}/C_1\gg1$ 倍，并随 $\sqrt{I_D}$ 上升。

### 第 4 步 — 随 $I_D$ 的标度

$$
|A_v|\propto\frac{I_D^{1/2}}{I_D}=I_D^{-1/2},\qquad R_{out}\propto I_D^{-1},\qquad |p_1|\propto I_D .
$$

由于简单负载限制了输出电阻，该共源共栅级的标度与电流源负载反相器完全相同；共源共栅只是把 $r_{ds1}$ 从输出端移除。只有当 $R_N\ll r_{ds3}$，即 $\lambda_P<\lambda_N/(g_{m2}r_{ds2})$ 时，才适用共源共栅支路主导的标度（$R_{out}\propto I_D^{-3/2}$，$|A_v|\propto I_D^{-1}$，$|p_1|\propto I_D^{3/2}$）；这要求负载管比输入管长得多，此处并不成立。
