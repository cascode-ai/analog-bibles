# 详细步骤 - A346

共模环路的通路与未加共源共栅时相同：输出共模驱动 M10/M11 的栅极，其电流变化进入节点 S，经 M7（以及新增的 p 沟道共源共栅管）到达输出，并在输出电阻上产生电压。把环路增益写成跨导乘以共模输出电阻，$LG=-G_mR_{out,cm}$；共源共栅几乎不改变 $G_m$，却使 $R_{out,cm}$ 增大约 $g_mr_{ds}$ 倍。

### 第 1 步 — 小信号参数

在 50 µA、$W/L=10$ 下，用 $g_m=\sqrt{2K'(W/L)I_D}$ 和 $r_{ds}=1/(\lambda I_D)$：

$$
g_{mN}=331.7\ \mu\mathrm S,\quad g_{mP}=223.6\ \mu\mathrm S,\quad r_{dsN}=500\ \mathrm{k\Omega},\quad r_{dsP}=400\ \mathrm{k\Omega}.
$$

### 第 2 步 — 共模输出电阻

考虑一半电路（M10、M7、p 沟道共源共栅管、输出、n 沟道共源共栅管、M9），令 $v_c=0$。带源极负反馈的器件的输出电阻为 $R=r_{ds}+R_S(1+g_mr_{ds})$。

向下看，M9 之上的 n 沟道共源共栅管：

$$
R_{dn}=r_{dsN}+r_{dsN}(1+g_{mN}r_{dsN})=r_{dsN}(2+g_{mN}r_{dsN})=(500\ \mathrm{k\Omega})(167.8)=83.9\ \mathrm{M\Omega}\approx g_{mN}r_{dsN}^2 .
$$

向上看，M7 本身由 $r_{ds10}$ 形成源极负反馈，p 沟道共源共栅管又位于其上：

$$
R_{M7}=r_{dsP}(2+g_{mP}r_{dsP})=(400\ \mathrm{k\Omega})(91.4)=36.6\ \mathrm{M\Omega},
$$
$$
R_{up}=r_{dsP}+R_{M7}(1+g_{mP}r_{dsP})=400\ \mathrm{k\Omega}+(36.6\ \mathrm{M\Omega})(90.4)=3.31\ \mathrm{G\Omega}.
$$

n 沟道一侧起主导作用：

$$
R_{out,cm}=R_{dn}\parallel R_{up}=83.9\ \mathrm{M\Omega}\parallel3.31\ \mathrm{G\Omega}=81.8\ \mathrm{M\Omega}.
$$

### 第 3 步 — 环路跨导

M10/M11 栅极上的共模变化 $v_c$ 使 M10 的电流变化 $-g_{m10}v_c$。输出短路时，从 M7 源极看进去的电阻为

$$
R_{in7}=\frac{r_{ds7}+R_{in,pc}}{1+g_{m7}r_{ds7}},\qquad R_{in,pc}=\frac{r_{dsP}}{1+g_{mP}r_{dsP}}=4.42\ \mathrm{k\Omega},
$$

所以 $R_{in7}=404.4\ \mathrm{k\Omega}/90.4=4.47\ \mathrm{k\Omega}\ll r_{ds10}=400\ \mathrm{k\Omega}$，M10 电流到达输出的比例为 $400/404.5=0.989$：

$$
G_m=0.989\,g_{m10}=221\ \mu\mathrm S .
$$

### 第 4 步 — 环路增益

$$
LG=-G_mR_{out,cm}=-(221\ \mu\mathrm S)(81.8\ \mathrm{M\Omega})\approx-1.8\times10^4\ \mathrm{V/V}\approx-g_{m10}\,g_{mN}r_{dsN}^2 .
$$

对半边电路做完整的节点分析得 $-18{,}100$ V/V。与未加共源共栅的电路一样，反馈为负反馈。与未加共源共栅时约 $-110$ V/V 的环路增益相比，共源共栅使环路增益提高约 $g_{mN}r_{dsN}\approx166$ 倍，即其提高输出电阻的倍数。
