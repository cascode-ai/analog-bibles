# 详细步骤 - G334

把 $g_mv_{gs}$ 换成独立电流 $g_mv_t$，计算返回的栅极电压，即得 $g_m$ 发生器的回归比。它的形式是漏极阻抗乘以栅极分压比，给出两个极点和一个零点。据此画出伯德图，找出 $|\mathscr{R}|=1$ 的频率，读出该处相位。相位始终达不到 $-180^\circ$，因此增益裕度为无穷大。

### 第 1 步 — 小信号参数

栅极与漏极直流电压相同，因此晶体管以 $I_D=0.5$ mA 工作在饱和区。$W/L_{\text{eff}}=83.3$：
$$
V_{ov}=\sqrt{\frac{2I_D}{k'_n(W/L_{\text{eff}})}}=0.249\ \mathrm V,\qquad g_m=\frac{2I_D}{V_{ov}}=4.02\ \mathrm{mA/V},\qquad
r_o=\frac{1}{\lambda I_D}=\frac{1}{(0.0333\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})}=60\ \mathrm{k\Omega},
$$
$$
C_{gs}=\tfrac23(50)(0.6)(4.32\ \mathrm{fF})+(0.35\ \mathrm{fF})(50)=104\ \mathrm{fF},\qquad C_{gd}=17.5\ \mathrm{fF}.
$$

### 第 2 步 — 回归比

输入电流源开路。从漏极抽出 $g_mv_t$ 时，漏极电压为 $-g_mv_tZ_d$，漏极看到 $r_o$、$C_L=2$ pF，以及 $Z_F=R_F\|(1/sC_{gd})$ 与 $C_{gs}$ 串联的支路。栅极是 $Z_F$–$C_{gs}$ 分压器的中点，$\mathscr{R}=-v_{gs}/v_t$：
$$
\mathscr{R}(s)=g_m\,Z_d(s)\,\frac{1+sR_FC_{gd}}{1+sR_F(C_{gs}+C_{gd})},\qquad
Z_d=r_o\,\Big\|\,\frac1{sC_L}\,\Big\|\,\left(Z_F+\frac1{sC_{gs}}\right).
$$

### 第 3 步 — 伯德图转折点

- 直流值：$\mathscr{R}_0=g_mr_o=241$，即 47.6 dB。
- 第一极点 1.26 MHz，由 $r_o$ 和 $C_L$ 决定（$1/(2\pi r_oC_L)=1.33$ MHz，栅极支路使其略为降低）。
- 第二极点 68.5 MHz，主要由 $R_F$ 与 $C_{gs}$ 决定，并受 $C_L$ 修正。
- 左半平面零点 $1/(2\pi R_FC_{gd})=455$ MHz。

幅频特性在约 1 MHz 以下平坦，到约 70 MHz 以 $-20$ dB/dec 下降，此后以 $-40$ dB/dec 下降，零点以上回到 $-20$ dB/dec。相位在 1–10 MHz 附近从 $0^\circ$ 趋向 $-90^\circ$，在 180 MHz 附近降到最低 $-137^\circ$。随后零点抵消第二极点的滞后，相位回升趋向 $-90^\circ$。

![回归比的伯德幅频图：约 1 MHz 以下为 47.6 dB，到 68.5 MHz 以 −20 dB/dec 下降，再以 −40 dB/dec 下降，在 140 MHz 处穿越 0 dB，455 MHz 零点以上回到 −20 dB/dec](/q/G334/solution-magnitude.zh.svg)

![回归比的伯德相频图：从 0° 经 10 MHz 附近的 −90°，在 180 MHz 附近降到约 −137°，再回升趋向 −90°；140 MHz 处相位裕度为 44°](/q/G334/solution-phase.zh.svg)

### 第 4 步 — 单位增益频率与裕度

数值求解 $|\mathscr{R}(j2\pi f_c)|=1$ 得
$$
f_c=140\ \mathrm{MHz},\qquad \angle\mathscr{R}(j2\pi f_c)=-136.3^\circ,\qquad \mathrm{PM}=180^\circ-136.3^\circ=44^\circ .
$$
用渐近线校核：在两个极点之间 $|\mathscr{R}|\approx241\times1.26\ \mathrm{MHz}/f$，在 68.5 MHz 处为 4.4。此后以 $-40$ dB/dec 下降，在约 $68.5\ \mathrm{MHz}\times\sqrt{4.4}=144$ MHz 处降到 1。

$\mathscr{R}(j\omega)$ 的相位在所有频率都高于 $-137^\circ$，永远达不到 $-180^\circ$。不存在相位穿越频率，增益裕度为无穷大。

### 第 5 步 — $C_{gd}$ 的作用

$C_{gd}$ 与 $R_F$ 并联形成 455 MHz 的零点，在穿越频率附近提供相位超前。令 $C_{gd}=0$ 重新计算，得 $f_c=147$ MHz，相位裕度只有约 29°。因此经 $C_{gd}$ 的前馈使裕度提高约 15°。
