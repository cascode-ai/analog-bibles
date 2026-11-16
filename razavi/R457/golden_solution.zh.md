$(W/L)_{1,2} \approx 206$（W ≈ 103 μm），对应 $g_{m1} \approx 2.81$ mS，$|V_{OD1}| \approx 0.36$ V。

- 输出级：$A_2 = g_{m5}(r_{O5}\|r_{O6}) = 8\ \mathrm{mS} \times 3.33\ \mathrm{k\Omega} = 26.7$，因此第一级必须提供 $A_1 = 500/26.7 = 18.75$。
- 第一级：$A_1 = g_{m1}(r_{O2}\|r_{O4})$，其中 $r_{O2} = 1/(0.2 \times 0.5\ \mathrm{mA}) = 10$ kΩ（PMOS），$r_{O4} = 1/(0.1 \times 0.5\ \mathrm{mA}) = 20$ kΩ → 6.67 kΩ；$g_{m1} = 18.75/6.67\ \mathrm{k\Omega} = 2.81$ mS。
- $(W/L)_1 = g_{m1}^2/(2\mu_pC_{ox}I_D) = (2.81\ \mathrm{mS})^2/(2 \times 38.4\ \mu \times 0.5\ \mathrm{m}) = 206$。
