# Golden Solution - grsim-06-15

## Reference answer

Hand-analysis results (square law with $L_{eff} = 0.72\ \mu$m, $\lambda = 0.0556\ \mathrm{V^{-1}}$, $|V_A| = 18$ V):
- Bias currents: $|I_{D8}| = 200\ \mu$A. $M_5$ and $M_7$ have the same $V_{SG}$ and $W/L$ as $M_8$, so $|I_{D5}| = |I_{D7}| = 200\ \mu$A. Then $|I_{D1}| = |I_{D2}| = I_{D3} = I_{D4} = 100\ \mu$A and $I_{D6} = 200\ \mu$A (ignoring channel-length-modulation differences of a few percent). The sizes satisfy $(W/L)_3/(W/L)_6 = \tfrac12(W/L)_5/(W/L)_7$, so $M_3$, $M_4$, $M_6$ have equal current densities.
- Overdrives: $|V_{ov1,2}| = V_{ov3,4} = V_{ov6} = \sqrt{2\cdot100\ \mu/(64.7\ \mu\cdot208)} = 0.122$ V and $|V_{ov5,7,8}| = 0.172$ V.
- Gain: $g_{m1} = 1.64$ mS, $g_{m6} = 3.28$ mS; $r_{o2} = r_{o4} = 180$ kΩ, $r_{o6} = r_{o7} = 90$ kΩ. $A_{v1} = g_{m1}(r_{o2}\parallel r_{o4}) = 148$ and $A_{v2} = -g_{m6}(r_{o6}\parallel r_{o7}) = -148$, so $A_v \approx -2.2\times10^4$ (87 dB). If the drawn ratios were used as effective $W/L$, $A_v \approx -1.6\times10^4$.
- Common-mode range (no body effect on $M_1$/$M_2$): $V_{t3} - |V_{t1}| + V_{ov3} - V_{SS} < V_{IC} < V_{DD} - |V_{t1}| - |V_{ov1}| - |V_{ov5}|$, i.e. $-1.58\ \mathrm{V} < V_{IC} < +0.41$ V. The lower limit lies below the −1.5-V supply, so in practice the range extends from about the negative rail to +0.41 V.
- Supply gains:
  - $A^+ = v_o/v_{dd} \approx 0$: the coupling through $r_{o7}$ ($+r_{o6}/(r_{o6}+r_{o7}) = +0.5$) cancels the coupling through the tail and first stage ($\approx -g_{m6}(r_{o6}\parallel r_{o7})/(2g_{m3}r_{o5}) = -0.5$), because $V_{A5} = V_{A7}$ and $V_{ov3} = V_{ov6}$. A residue of order $10^{-3}$ remains with exact small-signal expressions, so $PSRR^+$ is very large.
  - $A^- = v_o/v_{ss} = r_{o7}/(r_{o6}+r_{o7}) = 0.5$, so $PSRR^- = |A_{dm}|/A^- \approx 4.4\times10^4$ (93 dB).

## Grading notes

A correct simulation (any reasonable level-1/square-law model with these parameters) shows:
- all transistors saturated;
- $|I_{D5}| \approx |I_{D7}| \approx 200\ \mu$A and $I_{D1,2} \approx 100\ \mu$A (within ≈ 10 %, the differences coming from channel-length modulation);
- an open-loop dc gain of order $10^4$ (within about a factor of 2 of $2.2\times10^4$, depending on the model's output conductance);
- a common-mode range whose upper limit is near +0.4 V and which reaches the negative supply;
- a positive-supply gain much smaller than 1 (ideally ≈ 0; mismatch or model details may leave $10^{-2}$–$10^{-3}$);
- a negative-supply gain near 0.5.
+2: hand analysis matching the reference (bias currents, gain within ±15 %, CMR limits within ±0.05 V, $A^+ \approx 0$, $A^- \approx 0.5$) and simulation results consistent with it. +1: one of these quantities off (e.g. gain computed with drawn $L$, ≈ $1.6\times10^4$) with the rest right. 0: bias currents and gain right but supply gains or CMR wrong. -2: wrong bias currents (e.g. tail current assumed 100 μA), gain off by an order of magnitude, or $A^+$ claimed ≈ 0.5 and $A^-$ ≈ 0 (supplies swapped).
