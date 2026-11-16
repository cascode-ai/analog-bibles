# Golden Solution - grsim-11-05

## Reference answer

Input-referred (including $R_S$): 10 Hz ≈ $7.0\times10^{-13}$ V²/Hz (0.84 µV/√Hz); 100 kHz ≈ $1.74\times10^{-15}$ V²/Hz (42 nV/√Hz); 1 GHz ≈ $2.0\times10^{-13}$ V²/Hz (0.45 µV/√Hz). Output-referred: 10 Hz ≈ $2.7\times10^{-10}$ V²/Hz (16 µV/√Hz); 100 kHz ≈ $6.7\times10^{-13}$ V²/Hz (0.82 µV/√Hz); 1 GHz ≈ $2.4\times10^{-15}$ V²/Hz (49 nV/√Hz).

- $g_m = \sqrt{2k'(W/L)I_D} = 1.97$ mS ($V_{ov} = 0.10$ V), gain $g_mR_L = 19.7$; $C_{gs} = \frac{2}{3}\cdot100\ \mu\text{m}^2\cdot4.31\text{ fF}/\mu\text{m}^2 = 0.29$ pF.
- Device gate-referred noise: thermal $4kT\frac{2}{3g_m} = 5.6\times10^{-18}$ V²/Hz; flicker $\frac{K_f}{WLC_{ox}f} = \frac{6.96\times10^{-12}}{f}$ V²/Hz. $R_S$: $4kT\cdot100\text{ k} = 1.66\times10^{-15}$ V²/Hz. $R_L$ at the output: $1.66\times10^{-16}$ V²/Hz.
- 10 Hz: flicker $6.96\times10^{-13}$ dominates; input total $6.97\times10^{-13}$; output ×388 + $R_L$ → $2.71\times10^{-10}$.
- 100 kHz: $R_S$ dominates; input $1.66\times10^{-15} + 7.0\times10^{-17} + 5.6\times10^{-18} + 4.3\times10^{-19} = 1.74\times10^{-15}$; output $6.73\times10^{-13}$.
- 1 GHz: $C_{gs}$ with $R_S$ forms a pole at 5.5 MHz ($|H|^2 = 3.1\times10^{-5}$ at 1 GHz), so the gate is shorted for noise: output ≈ drain thermal noise $2.18\times10^{-15}$ + $R_L$ $1.66\times10^{-16}$ + small rest = $2.37\times10^{-15}$ V²/Hz; the gain from $v_i$ is only 0.109, so the input-referred value is $2.37\times10^{-15}/0.109^2 = 2.0\times10^{-13}$ V²/Hz. (If $C_{gs}$ were ignored, 1 GHz would look like 100 kHz without the flicker term: $1.67\times10^{-15}$ in, $6.46\times10^{-13}$ out.)
- In a level-1 SPICE model (flicker $\text{KF}\cdot I_D^{AF}/(C_{ox}L^2f)$), the given model corresponds to AF = 1, KF = $2k'K_f \approx 1.16\times10^{-27}$; with $L_d = 0$ there is no overlap capacitance.

## Grading notes

A correct answer gives the six spot values within ±15%, identifies flicker noise at 10 Hz, $R_S$ at 100 kHz and the drain thermal noise (with $C_{gs}$ shorting the gate) at 1 GHz, and a simulation (with the flicker coefficient translated correctly) that matches. +2: all values right and consistent with simulation. +1: 1 GHz computed without $C_{gs}$ but explicitly stated as an assumption, others right; or simulation missing. 0: two or more values wrong through slips, or flicker coefficient mis-translated so the 10-Hz values are off by a large factor while the rest is right. −2: flicker noise taken independent of frequency, $R_S$ omitted from the input-referred noise without comment, or a 1-GHz input-referred value equal to the 100-kHz one asserted as the simulated result with $C_{gs}$ present.
