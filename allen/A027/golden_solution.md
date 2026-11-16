# Golden Solution - A027

## Reference answer

The n-channel transistor is 2.5 times better: its transconductance parameter $K' = \mu C_{ox}$ is 2.5 times that of the p-channel device, and it is about 2.5 times faster.

- $K'_N/K'_P = \mu_n/\mu_p = 500/200 = 2.5$ (same $C_{ox}$). For the same W/L and overdrive, the NMOS carries 2.5 times the current and has 2.5 times the $g_m$; at the same current its $g_m = \sqrt{2K'(W/L)I_D}$ is $\sqrt{2.5} \approx 1.58$ times larger.
- Speed: the channel transit time $\tau \approx L^2/[\mu(V_{GS} - V_T)]$ and the transition frequency $f_T \approx \frac{3\mu(V_{GS} - V_T)}{4\pi L^2}$ scale with mobility, so for equal L and overdrive the NMOS is ≈ 2.5 times faster.
- Equivalently, a PMOS sized for the same current/transconductance needs ≈ 2.5 times the width, hence ≈ 2.5 times the gate and junction capacitance and area, which slows the circuit nodes it drives or loads.

## Grading notes

+2: ratio 2.5 for $K'$ (current or $g_m$ at equal W/L and overdrive), speed (transit time, $f_T$, or capacitance for equal drive) ≈ 2.5 times better for the n-channel device; noting $\sqrt{2.5}$ for $g_m$ at equal current is a plus. +1: correct ratios but the speed argument only qualitative. 0: only one of the two aspects addressed correctly. −2 (asserted as fact): the p-channel device claimed faster or with larger $K'$, the ratio given as $\sqrt{2.5}$ for $K'$, or speed claimed independent of mobility.
