# Golden Solution - grsim-04-19

## Reference answer

(a) KCL at the tail: $v_t = (i_1 + i_2)r_{tail} = i_2(2 - \epsilon_d)r_{tail}$; $T_2$ (drain grounded): $i_2 = g_{m2}(v_{ic} - v_t) - v_t/r_{o2}$. Hence $\dfrac{i_2}{v_{ic}} = \dfrac{g_{m2}}{1 + (2-\epsilon_d)r_{tail}(g_{m2} + 1/r_{o2})} \approx \dfrac{1}{2r_{tail}}$ under the stated conditions, so $G_m[cm] \approx -(\epsilon_d + \epsilon_m)/(2r_{tail})$.
(b) $i_1 = g_m(v_{ic} - v_t) + (v_3 - v_t)/r_o$, $i_2 = g_m(v_{ic} - v_t) - v_t/r_o$, $v_3 = -i_1/g_{m(mir)}$ → $i_1(1 + 1/(g_{m(mir)}r_o)) = i_2$ → $\epsilon_d = 1/(1 + g_{m(mir)}r_{o(dp)})$ ≈ 1.0×10⁻³ for the average data (9.1×10⁻⁴ with $g_{m3}$ = 1.1 mA/V).
(c) With both drains grounded, $i_1 - i_2 = \Delta g_{m1-2}(v_{ic} - v_t)$ and $i_2 \approx g_{m1-2}(v_{ic} - v_t)/(1 + 2r_{tail}/r_o)$, so $\epsilon_d = -\dfrac{\Delta g_{m1-2}}{g_{m1-2}}\left(1 + \dfrac{2r_{tail}}{r_{o(dp)}}\right)$ = −0.1 × 2 = −0.20.
(d) $i_1 - i_2 = -v_t(1/r_{o1} - 1/r_{o2}) \approx v_t\Delta r_{o(dp)}/r_{o(dp)}^2$ with $v_t \approx 2i_2r_{tail}$, so $\epsilon_d = -\dfrac{2r_{tail}}{r_{o(dp)}}\dfrac{\Delta r_{o(dp)}}{r_{o(dp)}}$ = −(1.0)(−0.1) = +0.10.
(e) Sum: $\epsilon_d \approx \dfrac{1}{1 + g_{m3}r_{o(dp)}} - \dfrac{\Delta g_{m1-2}}{g_{m1-2}}\left(1 + \dfrac{2r_{tail}}{r_{o(dp)}}\right) - \dfrac{2r_{tail}}{r_{o(dp)}}\dfrac{\Delta r_{o(dp)}}{r_{o(dp)}}$, which becomes the stated expression for $g_{m3}r_{o(dp)} \gg 1$. Numerically ≈ 0.0009 − 0.20 + 0.10 = −0.099 (exact small-signal: −0.104).
(f) $v_3 = i_3(1/g_{m3}\|r_{o3}) = i_3r_{o3}/(1 + g_{m3}r_{o3})$, so $1 - \epsilon_m = g_{m4}r_{o3}/(1 + g_{m3}r_{o3})$ and $\epsilon_m = \dfrac{1 + (g_{m3} - g_{m4})r_{o3}}{1 + g_{m3}r_{o3}}$, the stated result. Numerically: approximate form 0.0009 + 0.2 = 0.201; exact form 0.183.
(g) $\epsilon_d + \epsilon_m \approx -0.099 + 0.201 = 0.102$ → $G_m[cm] \approx -0.102/(1\ \mathrm{M\Omega}) \approx -0.10$ µA/V; CMRR ≈ 0.907 mA/V ÷ 0.10 µA/V ≈ 8.9×10³ (≈ 79 dB). (With the exact $\epsilon_m$: −0.083 µA/V, 1.1×10⁴; an exact small-signal solution gives −0.092 µA/V and CMRR ≈ 9.8×10³, ≈ 80 dB.) Without mismatch: $\epsilon_d \approx \epsilon_m \approx 1/1001$, $G_m[cm] \approx -2.0$ nA/V, $G_m[dm]$ = 1.0 mA/V, CMRR ≈ 5.0×10⁵ (≈ 114 dB, equal to $2g_{m(dp)}r_{tail}\,g_{m(mir)}(r_{o(dp)}\|r_{o(mir)})$). Mismatch degrades the CMRR by ≈ 35 dB by increasing $|G_m[cm]|$.

## Grading notes

Part results to check: (a) $i_2/v_{ic} \approx 1/(2r_{tail})$ with the exact intermediate expression; (b) $\epsilon_d \approx 1/(1+g_mr_o) \approx 10^{-3}$; (c) −0.2; (d) +0.1; (e) ≈ −0.10; (f) ≈ 0.18–0.20; (g) $G_m[cm]$ ≈ −(0.08–0.10) µA/V and CMRR ≈ (0.9–1.1)×10⁴ (≈ 79–81 dB), vs ≈ 5×10⁵ (114 dB) without mismatch. A correct linear small-signal simulation gives ≈ −0.092 µA/V and ≈ 9.8×10³. Signs of $\epsilon_d$ contributions must follow the stated definitions (Δ = first minus second device). A CMRR of order 10⁵–10⁶ with mismatch, or $G_m[cm]$ independent of $r_{tail}$, is wrong.
