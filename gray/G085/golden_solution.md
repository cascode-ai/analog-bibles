# Golden Solution - G085

## Reference answer

$R_o \approx 1.65$ MΩ and $v_o/v_i \approx +3.1\times10^3$ (≈ $3.2\times10^3$ if the mirror gain is taken as exactly 1), about 2.3 times the gain without the emitter resistors.

- $I_C = 50$ µA in every transistor: $g_m = 1.92$ mS; npn $r_o = 130/50\ \mu = 2.6$ MΩ; pnp $r_o = 50/50\ \mu = 1$ MΩ, $r_{\pi}(\text{pnp}) = 50/g_m = 26$ kΩ.
- Output resistance of the degenerated load transistor $Q_4$ (its base sees the low impedance of the $Q_3$ side): $R_{o4} \approx r_{o4}[1 + g_m(R_E\|r_{\pi4})] = 1\ \mathrm{M\Omega}\times(1 + 1.92\ \mathrm{mS}\times1.86\ \mathrm{k\Omega}) \approx 4.6$ MΩ.
- The $Q_2$ side contributes $r_{o2}$ as in the undegenerated stage (looking into $Q_2$ gives ≈ $2r_{o2}$, and the current entering $Q_1$'s emitter is mirrored back to the output, halving it): $R_o \approx r_{o2}\|R_{o4} = 2.6\|4.6 \approx 1.66$ MΩ (a full small-signal solution gives 1.64 MΩ).
- Transconductance $G_m \approx g_{m1} = 1.92$ mS (≈ 1.88 mS including the base-current error of the pnp mirror, ≈ $2/\beta_0$).
- $v_o/v_i = G_mR_o \approx 1.92\ \mathrm{mS}\times1.66\ \mathrm{M\Omega} \approx 3.2\times10^3$ (≈ $3.1\times10^3$ with the mirror error), non-inverting from the base of $Q_1$. Without the resistors $R_o = r_{o2}\|r_{o4} = 0.72$ MΩ and the gain is ≈ 1.4×10³.

## Grading notes

+2: $R_o$ in 1.55–1.70 MΩ and gain in (2.9–3.3)×10³ (positive, or magnitude with the correct phase), obtained with the degenerated pnp output resistance $r_{o4}[1 + g_m(R_E\|r_\pi)]$ (using $R_E$ instead of $R_E\|r_\pi$ is fine) in parallel with $r_{o2}$. +1: correct method with one slip, or values within about ±10 % of these. 0: emitter degeneration ignored ($R_o$ ≈ 0.72 MΩ, gain ≈ 1.4×10³) with an otherwise correct analysis, or $R_o$ right and the gain missing. -2 (asserted as fact): gain computed as $g_mR_o/2$ (resistive-load single-ended formula), $R_o$ taken as $2r_{o2}\|R_{o4}$ or as $R_{o4}$ alone, degeneration claimed to lower the output resistance, or the npn/pnp Early voltages interchanged.
