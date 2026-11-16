$I_{SS} \propto 1/\mu \propto T^{3/2}$，即 300 K 时 TC 为 $+1.5/T \approx +0.5\,\%/\mathrm{K}$。
- $g_m = \sqrt{2\mu C_{ox}(W/L)(I_{SS}/2)} = \sqrt{\mu C_{ox}(W/L)I_{SS}}$。要使 $g_mR_D$ 恒定，$\mu I_{SS}$ 必须恒定，所以 $I_{SS} \propto T^{3/2}$。
- 电路：恒定 $g_m$ 偏置，也称 β 倍增器（β-multiplier）偏置。它由尺寸比为 $K$ 的两个 NMOS 器件、由相同 PMOS 组成的电流镜，以及接在较宽 NMOS 源极的电阻 $R_S$ 构成，产生的电流为 $I = \dfrac{2}{\mu_nC_{ox}(W/L)R_S^2}\left(1 - \dfrac{1}{\sqrt K}\right)^2 \propto 1/\mu$。把这一电流镜像到尾电流源。这样差分对的 $g_m$ 就等于（常数）/$R_S$，因此 $g_mR_D \propto R_D/R_S$：若 $R_S$ 的 TC 为零，则增益 TC 为零；即使电阻有 TC，只要 $R_S$ 与 $R_D$ 采用同一种材料，增益 TC 也为零。
- 更粗略的替代方案：与绝对温度成正比（PTAT）的电流（$\propto T$，+0.33 %/K）只能部分跟踪；PTAT 电流再加上一个超线性分量（例如 PTAT²）则更接近。
