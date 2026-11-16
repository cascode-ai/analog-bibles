# Golden Solution - R002

## Reference answer

NMOS: $g_m \approx 3.66$ mS (≈ 1/273 Ω), $r_O = 20$ kΩ, $g_m r_O \approx 73$.
PMOS: $g_m \approx 1.96$ mS (≈ 1/511 Ω), $r_O = 10$ kΩ, $g_m r_O \approx 19.6$.

- $g_m = \sqrt{2\mu C_{ox}(W/L)|I_D|}$: NMOS $\sqrt{2(134\times10^{-6})(100)(0.5\times10^{-3})} = 3.66$ mS (overdrive 0.27 V); PMOS $\sqrt{2(38.4\times10^{-6})(100)(0.5\times10^{-3})} = 1.96$ mS (overdrive 0.51 V).
- $r_O \approx 1/(\lambda |I_D|)$: NMOS $1/(0.1 \times 0.5\ \mathrm{mA}) = 20$ kΩ; PMOS $1/(0.2 \times 0.5\ \mathrm{mA}) = 10$ kΩ.
- Intrinsic gain: $3.66\ \mathrm{mS} \times 20\ \mathrm{k\Omega} \approx 73.3$; $1.96\ \mathrm{mS} \times 10\ \mathrm{k\Omega} \approx 19.6$. The NMOS has about 3.7 times the intrinsic gain (higher mobility and lower λ).

## Grading notes

+2: all six values within ±3% ($g_m$, $r_O$, $g_m r_O$ for each device). Small deviations from including $(1+\lambda V_{DS})$ with a stated $V_{DS}$ are acceptable. +1: one quantity wrong through an arithmetic slip, rest correct. 0: one device fully correct and the other wrong, or the right method with slips in several values. -2 (asserted as fact): wrong formulas such as $r_O = \lambda/I_D$, $g_m = \mu C_{ox}(W/L)I_D$, λ values swapped between devices, or intrinsic gains off by an order of magnitude.
