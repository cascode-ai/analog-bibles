$(W/L)_{7} = (W/L)_8 \approx 50$，即 L = 0.5 μm 时 W ≈ 25 μm（若略去 $V_{DS}^2/2$ 项，则 ≈ 47）。

- $M_7$ 和 $M_8$ 并联在 P 与地之间，栅极分别接 $V_{out1}$ 和 $V_{out2}$。它们共流过 $I_{D5} + I_{D6} = 1$ mA；当两管匹配且 $V_{out1} = V_{out2} = 1.5$ V 时，各流过 0.5 mA。
- 两管工作在线性区（triode region），$V_{GS} = 1.5$ V，$V_{DS} = V_P = 0.1$ V；源极接地，因此没有体效应（body effect）：$0.5\ \mathrm{mA} = 134\ \mu\mathrm{A/V^2}\cdot(W/L)[(1.5 - 0.7)(0.1) - 0.1^2/2] = 134\ \mu \cdot (W/L) \cdot 0.075$ → $W/L = 49.8$。
- 深线性区（deep triode）近似：$R_{on7}\|R_{on8} = V_P/(2I_D) = 100\ \Omega$，其中 $R_{on} = 1/[\mu_nC_{ox}(W/L)(V_{GS} - V_{TH})]$，由此得到 $W/L = 46.6$。
