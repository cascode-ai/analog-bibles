最小值：$I_{SS,min} = \dfrac{1}{\mu_nC_{ox}(W/L)_{1,2}R_P^2}$（由 $g_{m1,2}R_P \ge 1$ 得出）。
最大值（估算）：$I_{SS,max} \approx \dfrac{\pi V_{TH}}{4R_P}$，即取 $V_{TH} = 0.7$ V 时 ≈ 0.55 V/$R_P$；若计入体效应（body effect），则 ≈ 0.8 V/$R_P$（公共源极节点约为 2 V 时，$V_{TH} \approx 1.0$ V）。

推导：
- 起振：平衡时每个晶体管的电流为 $I_{SS}/2$，因此 $g_m = \sqrt{\mu_nC_{ox}(W/L)_{1,2}I_{SS}}$。环路由两个反相的调谐级构成，谐振时增益为 $(g_mR_P)^2$（等价地说，交叉耦合对在差分谐振回路电阻 $2R_P$ 两端呈现 $-2/g_m$），因此振荡要求 $g_mR_P \ge 1$ → $I_{SS} \ge 1/[\mu_nC_{ox}(W/L)_{1,2}R_P^2]$。
- 摆幅：差分对（differential pair）一旦完全切换，每个漏极电流就是在 0 与 $I_{SS}$ 之间变化的方波，其基波（fundamental）幅度为 $(2/\pi)I_{SS}$；谐振回路（谐振时阻抗为 $R_P$，谐波处阻抗很小）给出 $V_X = V_{DD} + A\cos\omega t$，$V_Y = V_{DD} - A\cos\omega t$，其中 $A \approx (2/\pi)I_{SS}R_P$（差分幅度为 $(4/\pi)I_{SS}R_P$）。
- 线性区检查：$M_1$ 的栅极接 $V_Y$，漏极接 $V_X$。当 $M_1$ 导通最强时，$V_X = V_{DD} - A$，而 $V_Y = V_{DD} + A$。饱和要求 $V_X \ge V_Y - V_{TH}$ → $2A \le V_{TH}$ → $(4/\pi)I_{SS}R_P \le V_{TH}$ → $I_{SS} \le \pi V_{TH}/(4R_P)$。
- 体效应：公共源极节点约在 $V_{DD} - V_{GS} \approx 2$ V 处，由此得 $V_{TH} \approx 0.7 + 0.45(\sqrt{2.9} - \sqrt{0.9}) \approx 1.04$ V，上限 ≈ 0.8 V/$R_P$。（若较粗略地把单端峰值摆幅取为 $I_{SS}R_P$，则得到 $V_{TH}/(2R_P)$。）
