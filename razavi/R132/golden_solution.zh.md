$(W/L)_2 \approx 8.8$；$M_2$ 处于线性区（triode region），$V_{SD2} \approx 0.83$ V；$V_{out} \approx 2.17$ V。

- $g_{m1} = \sqrt{2(134\ \mu\mathrm{A/V^2})(40)(0.5\ \mathrm{mA})} = 2.315$ mS；要得到 5 倍增益，所需的负载（小信号）电阻为 $5/g_{m1} = 2.16$ kΩ。
- $M_2$：$V_{SG} = 3$ V，过驱动电压（overdrive voltage）为 2.2 V，处于线性区：$1/r_2 = \beta_2(2.2 - V_{SD2})$，且 $I_D = \beta_2(2.2V_{SD2} - V_{SD2}^2/2) = 0.5$ mA。两式相除：$(2.2V_{SD2} - V_{SD2}^2/2)/(2.2 - V_{SD2}) = 1.08$ V → $V_{SD2} = 0.829$ V；$\beta_2 = 0.338\ \mathrm{mA/V^2}$ → $(W/L)_2 = 8.8$。
- 深线性区公式 $R_{on2} = 1/[\mu_pC_{ox}(W/L)_2(V_{DD} - V_b - |V_{THP}|)]$ 会给出 5.48，但在这一尺寸下，要通过 0.5 mA 需要 $V_{SD2} \approx 1.9$ V（并非深线性区），实际增益将 ≈ 37，因此不满足指标。
