# 详细步骤 - A088

四个晶体管相同，且都流过 100 µA，因此 $V_{GS}$ 和 $V_{ON}$ 都相同。共源共栅管 M3、M4 的源极电压为 $V_{Bias}-V_{GS}$，也就是 M1、M2 的漏源电压。选择使 M1、M2 保持饱和的最小 $V_{Bias}$，求出相应的最小输出电压，再计算共源共栅的输出电阻。

### 第 1 步 — 偏置量

100 µA 电流源馈入串联的 M3 和 M1。M1 的栅极接 M3 的漏极，该节点稳定在使 M1 导通 100 µA 的电压上。M2 与 M1 的 $V_{GS}$ 相同，因此也流过 100 µA，M4 亦然。偏置计算时忽略 $\lambda$：

$$
V_{ON}=\sqrt{\frac{2I}{K'(W/L)}}=\sqrt{\frac{2(100\ \mu\mathrm A)}{(110\ \mu\mathrm{A/V^2})(10)}}=0.426\ \mathrm V,\qquad V_{GS}=V_T+V_{ON}=1.126\ \mathrm V .
$$

### 第 2 步 — $V_{Bias}$ 的选择

M3 和 M4 电流、尺寸和栅压都相同，因此两者的源极都位于 $V_{Bias}-V_{GS}$，即 $V_{DS1}=V_{DS2}$。M1 和 M2 保持饱和的条件是

$$
V_{Bias}-V_{GS}\ge V_{ON}\quad\Rightarrow\quad V_{Bias}\ge V_T+2V_{ON}=0.7+2(0.426)=1.553\ \mathrm V .
$$

输出须使 M4 保持饱和，$v_{OUT}\ge V_{DS2}+V_{ON}=V_{Bias}-V_{GS}+V_{ON}=V_{Bias}-V_T$，因此最小输出电压随 $V_{Bias}$ 增大。在允许的最小偏置下得到最小的 $V_{min}$：

$$
V_{Bias}=V_T+2V_{ON}=1.55\ \mathrm V,\qquad V_{min}=V_{Bias}-V_T=2V_{ON}=0.853\ \mathrm V .
$$

此时 M3 也处于饱和：其漏极为 $V_{GS1}=1.126$ V，源极为 $V_{ON}=0.426$ V，$V_{DS3}=0.70\ \mathrm V>V_{ON}$。（只有当 $V_{Bias}>V_T+V_{GS1}=1.83$ V 时 M3 才会退出饱和。）

### 第 3 步 — 小信号输出电阻

$g_m=\sqrt{2K'(W/L)I}=\sqrt{2(110\ \mu\mathrm{A/V^2})(10)(100\ \mu\mathrm A)}=469\ \mu$S，$r_{ds}=1/(\lambda I)=1/[(0.04\ \mathrm{V^{-1}})(100\ \mu\mathrm A)]=250\ \mathrm{k\Omega}$。从输出看进去是以 $r_{ds2}$ 作源极负反馈的 M4（M2 的栅极为固定直流电压）：

$$
R_{out}=r_{ds2}+r_{ds4}+g_{m4}r_{ds4}r_{ds2}=0.25+0.25+(469\ \mu\mathrm S)(250\ \mathrm{k\Omega})^2=0.5+29.3=29.8\ \mathrm{M\Omega}.
$$

主导项 $g_mr_{ds}^2\approx29.3\ \mathrm{M\Omega}$ 是 M4 的本征增益 $g_mr_{ds}=117$ 对 $r_{ds2}$ 的共源共栅倍增。
