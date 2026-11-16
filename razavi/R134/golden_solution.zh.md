$V_{in} \approx 1.25$ V（$V_{out} = V_b + |V_{THP}| = 0.8$ V，$I_D \approx 0.82$ mA）；$A_v \approx -g_{m1}(r_{O1}\|r_{O2}) \approx -12$。

- $M_2$ 的饱和边缘：$V_{SD2} = V_{SG2} - |V_{THP}| = 2.2$ V → $V_{out} = 0.8$ V；电流为 $\tfrac12(38.4\ \mu\mathrm{A/V^2})(8.8)(2.2\ \mathrm{V})^2 = 0.818$ mA。
- $M_1$ 流过相同的电流：过驱动电压（overdrive voltage）$\sqrt{2(0.818\ \mathrm{mA})/(5.36\ \mathrm{mA/V^2})} = 0.552$ V < 0.8 V，因此 $M_1$ 处于饱和区；$V_{in} = 1.252$ V。
- 两个器件都饱和：$A_v = -g_{m1}(r_{O1}\|r_{O2})$，其中 $g_{m1} = 2.96$ mS，$r_{O1} = 1/(0.1 \times 0.818\ \mathrm{mA}) = 12.2$ kΩ，$r_{O2} = 6.1$ kΩ → ≈ −12.1（若 λ = 0 则为无穷大；远高于 0.5 mA 设计点处的增益 5）。
