$V_{ov} = 0.2$ V，$L_{\text{eff}} = 2.0$ µm（$L_{\text{drwn}} = 2.18$ µm），$W/L_{\text{eff}} \approx 12.9$，$W \approx 25.7$ µm。每个器件栅面积 ≈ 56 µm²（W × L_drwn），总计 ≈ 112 µm²（若用 W × L_eff，则 ≈ 103 µm²）。

- (i) $M_2$ 在 $V_{DS2} = V_{ov}$ 以上保持饱和，故 $V_{ov} \le 0.2$ V。
- (iii) $\Delta I_{OUT}/I_{OUT} \approx \lambda\,\Delta V_{OUT} = \lambda\,(1\ \mathrm{V}) \le 0.01$，即 $r_o = 1/(\lambda I_D) \ge 2$ MΩ，故 $\lambda \le 0.01\ \mathrm{V^{-1}}$，$L_{\text{eff}} \ge 0.02/0.01 = 2$ µm。
- (ii) $W/L_{\text{eff}} = 2I_D/(k'V_{ov}^2)$；栅面积 $W L = (W/L)L^2 \propto L^2/V_{ov}^2$，因此取允许的最大过驱动电压（overdrive voltage）和允许的最短沟道长度时面积最小：$V_{ov} = 0.2$ V，$L_{\text{eff}} = 2$ µm。
- $W/L_{\text{eff}} = 2(50\ \mu\mathrm{A})/(194\ \mu\mathrm{A/V^2}\times0.04\ \mathrm{V^2}) = 12.9$，$W = 25.7$ µm，$L_{\text{drwn}} = 2 + 2(0.09) = 2.18$ µm。
- 验证：$r_o = 1/(0.01 \times 50\ \mu\mathrm{A}) = 2$ MΩ，1 V 的变化引起 0.5 µA = 1 % 的变化（计入 $1+\lambda V_{DS}$ 因子时略小），$V_{GS} = 0.8$ V。
