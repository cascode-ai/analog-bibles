# Golden Solution - A263

## Reference answer

Small-signal model of the input stage for a differential input $v_{in}$ (each input device carrying $\pm g_{m1}v_{in}/2$), with the total capacitance $C_3$ at the mirror node:

- Mirror node: the current $g_{m1}v_{in}/2$ from M1 flows into $g_{m3} + g_{ds1} + g_{ds3} + sC_3$; the mirrored current $i_3 = g_{m4}v_{g3}$ adds to the current of M2 at the output node, which sees $g_{ds2} + g_{ds4}$:

$\dfrac{V_{o1}(s)}{V_{in}(s)} = \dfrac{-g_{m1}}{2(g_{ds2} + g_{ds4})}\left[\dfrac{g_{m3} + g_{ds1} + g_{ds3}}{g_{m3} + g_{ds1} + g_{ds3} + sC_3} + 1\right] \approx \dfrac{-g_{m1}}{2(g_{ds2} + g_{ds4})}\cdot\dfrac{sC_3 + 2g_{m3}}{sC_3 + g_{m3}}$

(using $g_{m3} \gg g_{ds1} + g_{ds3}$). So there is a pole $p_3 = -g_{m3}/C_3$ and a zero $z_3 = -2g_{m3}/C_3 = 2p_3$; the zero partly offsets the pole.
- $C_3$ is dominated by the gate capacitances of the two mirror transistors: $C_3 \approx C_{gs3} + C_{gs4} = 2C_{gs3}$ (M3 = M4), with $C_{gs} = \frac23W L C_{ox} \approx 0.67W_3L_3C_{ox}$ in saturation (overlap and junction capacitances of M1, M3 neglected).
- For the doublet not to affect the phase margin, place it well beyond GB: $|p_3| = \dfrac{g_{m3}}{2C_{gs3}} > 10\,GB$, i.e. $\dfrac{\sqrt{2K'_PS_3I_3}}{1.33W_3L_3C_{ox}} > 10\dfrac{g_{m1}}{C_c}$.

## Grading notes

+2: derives (or correctly states from the half-circuit) the mirror pole $-g_{m3}/C_3$ with the accompanying zero at $2p_3$, identifies $C_3 \approx C_{gs3} + C_{gs4} = 2C_{gs3}$ with $C_{gs} \approx (2/3)WLC_{ox}$, and imposes $|p_3| > 10GB$. +1: pole and capacitance right but the zero not mentioned, or the 10GB criterion not motivated. 0: only the pole expression $g_{m3}/C$ with a wrong or unexplained capacitance. −2 (asserted as fact): mirror pole $g_{m1}/C_3$ or $1/(r_{ds3}C_3)$, or $C_{gs} = WLC_{ox}$ claimed to give the factor 2.
