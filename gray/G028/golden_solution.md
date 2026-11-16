# Golden Solution - G028

## Reference answer

The short-channel curve starts at $V_t$ = 0.7 V with the same initial slope as the long-channel line, 5.2 (µA)^½/V, but bends downward (concave) as $V_{GS}$ increases: at $V_{GS}$ = 5 V, $\sqrt{I_D} \approx 12.4$ (µA)^½ ($I_D \approx 155$ µA) versus ≈ 22.3 (µA)^½ ($I_D \approx 499$ µA) on the straight line of [Fig. 1]. The main difference is velocity saturation: with $\mathcal{E}_cL = 1.5$ V comparable to the overdrive, the current grows more slowly than the square law (tending toward linear in $V_{ov}$, so $\sqrt{I_D}$ tends toward $\sqrt{V_{ov}}$).

- $V_{DS(act)} = \mathcal{E}_cL(\sqrt{1+2V_{ov}/\mathcal{E}_cL} - 1) \le 2.39$ V < 5 V, so the device is in the active region throughout; $I_D = \tfrac{k'}{2}\tfrac{W}{L}V_{DS(act)}^2$, hence $\sqrt{I_D} = \sqrt{27\ \mu\mathrm{A/V^2}}\,V_{DS(act)} = 5.20\,V_{DS(act)}$ (µA)^½.
- Values ($V_{GS}$: short-channel / square-law line): 1 V: 1.43 / 1.56; 1.5 V: 3.41 / 4.16; 2 V: 5.09 / 6.76; 3 V: 7.92 / 11.95; 4 V: 10.3 / 17.1; 5 V: 12.4 / 22.3 (µA)^½.
- Local slope $d\sqrt{I_D}/dV_{GS} = 5.20/\sqrt{1+2V_{ov}/\mathcal{E}_cL}$: 5.2 at threshold, 3.4 at $V_{ov}$ = 1 V, 2.0 at $V_{ov}$ = 4.3 V. The long device in [Fig. 1] has $\mathcal{E}_cL$ = 30 V, so it stays on the square-law line.
- A straight-line fit to the short-channel plot would underestimate $k'$ and misplace the extrapolated threshold.

## Grading notes

+2: curve zero below 0.7 V, starting with the long-channel slope and bending downward, $\sqrt{I_D}(5\ \mathrm{V})$ ≈ 11.8–13.0 (µA)^½ (or $I_D$ ≈ 140–170 µA), and the difference attributed to velocity saturation (current below the square law, more nearly linear in overdrive). +1: correct shape and explanation with values only roughly right (±15%), or the first-order form $I_D \approx \tfrac{k'}{2}\tfrac{W}{L}V_{ov}^2/(1+V_{ov}/\mathcal{E}_cL)$ used and stated (≈ 11.4 (µA)^½ at 5 V). 0: values right but the explanation missing or wrong, or correct explanation with no plot features. -2 (asserted as fact): short-channel curve above the long-channel line, a straight line claimed for this device, or the difference attributed to subthreshold conduction (excluded by the question) or to the W/L difference (both devices have W/L = 1).
