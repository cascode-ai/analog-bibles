# Golden Solution - grsim-07-39

## Reference answer

DC (Ebers–Moll with base currents, square-law MOS): $I_{D2} = 0.256$ mA ($V_{GS2} = 1.60$ V), $V_{B1} = 2.42$ V, $I_{C1} = 0.243$ mA, $I_{D1} = 3.64$ mA, $V_O = 1.58$ V ($= V_{GS1}$), $I_{C3} = 1.57$ mA.

Small signal: $g_{m,M1} = 9.35$ mA/V, $g_{m,M2} = 0.64$ mA/V; $g_{m,Q1} = 9.3$ mA/V, $g_{m,Q3} = 60$ mA/V; gain $v_o/v_i \approx -75$ ($M_1$ drives the emitter of the common-base $Q_1$; $Q_1$'s collector current develops the signal in $R_{L2}$; $Q_3$ follows into $R_{L3}\|30\ \mathrm{k\Omega}$).

Zero-value time constants (ns): $C_{gs2}$ and $C_{db2}$ at the $M_2$/$Q_2$ bias node (≈ 1.34 kΩ) 0.27 + 0.27; $C_{\mu1}$ 0.13; $C_{cs1}$ 0.11; $C_{\pi3}$ 0.11; $C_{\pi1}$ 0.03; $C_{db1}$ 0.02; $C_{\mu3}$ 0.03; others < 0.02. $T_0 \approx 1.0$ ns → first-pole estimate ≈ 160 MHz. Grouping by section: the bias node ($M_2$, $Q_2$) alone ≈ 0.56 ns (≈ 280 MHz) and the signal path ≈ 0.43 ns (≈ 370 MHz), suggesting two poles of the same order, a few hundred MHz.

Expected simulation (same parameters): lowest pole ≈ 254 MHz nearly cancelled by a zero ≈ 283 MHz (both from the bias network that feeds $Q_1$'s base), second pole ≈ 570 MHz, −3-dB bandwidth ≈ 470 MHz; the zero-value sum is therefore pessimistic here because the dominant time constants belong to a node that is only weakly in the signal path.

## Grading notes

Hand part: +2 needs a consistent dc solution ($V_O \approx 1.5$–1.6 V, $I_{D1} \approx 3.5$–3.8 mA), the zero-value sum ≈ 1 ns (±25%) with the bias node and $Q_1$'s collector capacitances identified as the main contributors, and a pole estimate of a few hundred MHz. A correct simulation reports the first two poles in the 200–600 MHz range and a −3-dB frequency around 0.4–0.5 GHz with these parameters; the comment should note the pole–zero doublet. −2 (asserted as fact): the 30-kΩ resistor treated as shunt feedback around an ideal voltage source input, bandwidths in the MHz or tens of GHz range, or the 400-Ω $r_b$ claimed to dominate.
