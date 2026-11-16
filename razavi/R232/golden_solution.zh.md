$I_T \approx 0.46$ mA（≈ 464 μA），而 $M_3$/$M_4$ 各自只流过 ≈ 34 μA，而不是 50 μA（约少 30%）。

- 每个电流镜（current mirror）的比例都要乘以 $(1+\lambda V_{DS,out})/(1+\lambda V_{DS,in})$。$M_0$：$V_{DS} = V_{GS0} \approx 0.96$ V。尾电流管（tail transistor）：$V_{DS} = V_P \approx 0.18$ V → $I_T = 500\ \mu\mathrm{A}\times\frac{1+0.1(0.18)}{1+0.1(0.96)} \approx 464\ \mu$A。
- $2(W/L)_N$ 器件：$V_{DS} = V_{DD} - |V_{GS,ref}| \approx 1.55$ V → 流过 PMOS 基准二极管的电流为 $200\ \mu\mathrm{A}\times\frac{1.155}{1.096} \approx 211\ \mu$A（$|V_{GS}| \approx 1.45$ V）。
- $M_5$：$V_{SD5} = V_{DD} - V_{D3} \approx 1.07$ V，而基准二极管为 1.45 V → $I_{D5} \approx 211\times\frac{1+0.2(1.07)}{1+0.2(1.45)} \approx 198\ \mu$A。
- $M_3$：$I_T/2 - I_{D5} \approx 232 - 198 \approx 34\ \mu$A（漏极 ≈ 1.93 V）。完整的自洽求解给出 464 μA 和 33.9 μA。这个小的差值电流非常敏感：$I_T/2$ 和 $I_{D5}$ 中百分之几的误差会变成负载电流 30% 的误差。
- 若考虑尾电流管在 $V_P \approx 0.18$ V 时工作于线性区（triode region），则 $I_T \approx 0.43$ mA，$M_3$/$M_4$ 只得到 ≈ 19 μA。
