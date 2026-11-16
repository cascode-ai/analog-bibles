设计不唯一；它必须满足两个约束：
- 摆幅：$V_{DD} - V_{ov1} - |V_{ov2}| = 2.2$ V → $V_{ov1} + |V_{ov2}| = 0.8$ V。
- 增益：$g_{m1}(r_{O1}\|r_{O2}) = \dfrac{2I_D}{V_{ov1}}\cdot\dfrac{1}{(\lambda_1+\lambda_2)I_D} = \dfrac{2}{V_{ov1}(\lambda_1+\lambda_2)} = 100$，其中 $\lambda_1 = 0.05\ \mu\mathrm{m}/L_1$，$\lambda_2 = 0.1\ \mu\mathrm{m}/L_2$（V⁻¹）。若取 $L_1 = L_2 = L$：$L = 7.5\ \mu\mathrm{m/V} \times V_{ov1}$。

示例：取两管的过驱动电压（overdrive voltage）均为 0.4 V，则 $L = 3$ μm；$(W/L)_1 = 2(1\ \mathrm{mA})/(134\ \mu\mathrm{A/V^2} \times 0.16) = 93.3$ → $W_1 \approx 280$ μm；$(W/L)_2 = 2(1\ \mathrm{mA})/(38.4\ \mu\mathrm{A/V^2} \times 0.16) = 325.5$ → $W_2 \approx 977$ μm。验证：$g_{m1} = 5$ mS，$r_{O1} = 60$ kΩ，$r_{O2} = 30$ kΩ，增益 $= 5\ \mathrm{mS} \times 20\ \mathrm{k\Omega} = 100$。
另一种可行的选择：$V_{ov1} = 0.2$ V，$|V_{ov2}| = 0.6$ V，$L = 1.5$ μm，$(W/L)_1 = 373$（$W_1 \approx 560$ μm），$(W/L)_2 = 145$（$W_2 \approx 217$ μm）。
