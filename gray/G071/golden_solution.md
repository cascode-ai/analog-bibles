# Golden Solution - G071

## Reference answer

$R_i \approx 14.6$ kΩ, $v_o/v_i \approx +137$ (non-inverting), $R_o = 10$ kΩ.

- Bias: the emitters sit at −0.7 V, so $I_{R_{\text{TAIL}}} = (15 - 0.7)/10\ \mathrm{k} = 1.43$ mA, split equally: $I_E = 0.715$ mA, $I_C = 0.711$ mA. $g_m = 27.4$ mA/V, $r_\pi = 7.31$ kΩ.
- Input resistance: $Q_1$ is an emitter follower loaded by $R_{\text{TAIL}} \| r_{e2}$, with $r_{e2} = r_\pi/(\beta_0+1) = 36.4\ \Omega$: $R_i = r_{\pi1} + (\beta_0+1)(10\ \mathrm{k} \| 36.4\ \Omega) = 7.31\ \mathrm{k} + 7.28\ \mathrm{k} = 14.6$ kΩ ($\approx 2r_\pi$; equivalently $2(r_\pi \| R_{ic})$ with $R_{ic} = r_\pi + 2(\beta_0+1)R_{\text{TAIL}}$).
- Gain: the emitter node follows with $v_e/v_i = \dfrac{(\beta_0+1)/r_\pi}{2(\beta_0+1)/r_\pi + 1/R_{\text{TAIL}}} = 0.499$; $Q_2$ (common base) gives $i_{c2} = -g_m v_e$, so $v_o = g_m R_C v_e$: $v_o/v_i = 27.4\ \mathrm{mA/V} \times 10\ \mathrm{k} \times 0.499 = 136.6$ (≈ $g_m R_C/2$, the single-ended output of a differential pair, minus a tiny common-mode term).
- Output resistance: $r_o$ neglected, so the collector of $Q_2$ is an ideal current source and $R_o = R_C = 10$ kΩ.

## Grading notes

+2: $R_i$ 14–15.2 kΩ, gain +132 to +140 (positive), $R_o = 10$ kΩ. Using $I_C \approx I_E$ ($I_C = 0.715$ mA, $g_m$ = 27.5 mS, $R_i \approx 2r_\pi \approx 14.5$ kΩ, gain ≈ +137.5) also earns +2. +1: gain magnitude right but sign wrong or unstated. 0: two of three right. −2 (asserted as fact): gain ≈ $g_m R_C$ (≈ 274) or negative gain from treating the circuit as a CE stage, $R_i = r_\pi$ or $(\beta_0+1)R_{\text{TAIL}}$ (≈ 2 MΩ, ignoring the low resistance at $Q_2$'s emitter), or $R_o$ other than 10 kΩ.
