$\dfrac{1}{I_{out}}\dfrac{\partial I_{out}}{\partial V_{DD}} = \dfrac{2}{V_{GS}-V_{TH}}\cdot\dfrac{R_2}{R_1+R_2} \approx 2.37\ \mathrm{V^{-1}}$（即约 237%/V；$\partial I_{out}/\partial V_{DD} \approx 1.19$ mA/V）。若表示为无量纲的相对灵敏度，则 $(V_{DD}/I_{out})\,\partial I_{out}/\partial V_{DD} = 2V_{GS}/(V_{GS}-V_{TH}) \approx 7.1$：$V_{DD}$ 变化 1% 时，$I_{out}$ 约变化 7%。

- $I_{out} = \tfrac12\mu_nC_{ox}\frac{W}{L}\left(\frac{R_2}{R_1+R_2}V_{DD} - V_{TH}\right)^2$，因此 $\partial I_{out}/\partial V_{DD} = \mu_nC_{ox}\frac{W}{L}(V_{GS}-V_{TH})\frac{R_2}{R_1+R_2} = g_m\frac{R_2}{R_1+R_2}$。
- 设计点：$V_{GS}-V_{TH} = \sqrt{2(0.5\ \mathrm{mA})/(13.4\ \mathrm{mA/V^2})} = 0.273$ V，$V_{GS} = 0.973$ V，$R_2/(R_1+R_2) = 0.324$，$g_m = 3.66$ mS。
- $\partial I_{out}/\partial V_{DD} = 3.66\ \mathrm{mS} \times 0.324 = 1.19$ mA/V；除以 0.5 mA，得 2.37 V⁻¹。
