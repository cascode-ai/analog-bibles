# Golden Solution - G241

## Reference answer

$G_m(s) = g_{m1}\,\dfrac{1 + sC_x/(2g_{m3})}{1 + sC_x/g_{m3}}$: pole at $-g_{m3}/C_x$, zero at $-2g_{m3}/C_x$ (one octave apart).

- $i_{d1} = g_{m1}v_{id}/2$, $i_{d2} = -g_{m1}v_{id}/2$.
- Node X: $i_{d1}$ is drawn from the parallel combination of $1/g_{m3}$ and $C_x$, so $v_{gs4} = v_X = -i_{d1}/(g_{m3} + sC_x)$.
- $i_{d4} = g_{m4}v_{gs4} = -i_{d1}\dfrac{g_{m3}}{g_{m3} + sC_x}$ (with $g_{m4} = g_{m3}$).
- $i_o = -i_{d2} - i_{d4} = \dfrac{g_{m1}v_{id}}{2}\left[1 + \dfrac{1}{1 + sC_x/g_{m3}}\right] = g_{m1}v_{id}\,\dfrac{1 + sC_x/(2g_{m3})}{1 + sC_x/g_{m3}}$.
- Magnitude: $g_{m1}$ at low frequency, falling to $g_{m1}/2$ at high frequency (when $C_x$ shorts node X the mirror contributes nothing), the change occurring between $|p|$ and $|z|$. Phase: 0° at both ends, with a maximum lag at $\omega = \sqrt{|p||z|} = \sqrt2\,g_{m3}/C_x$ of $\arctan(1/\sqrt2) - \arctan\sqrt2 = -19.5°$.
- Since $C_x \approx C_{gs3} + C_{gs4} = 2C_{gs3}$, $|p| \approx \omega_{T3}/2$: the doublet matters only at very high frequencies.

## Grading notes

+2: the correct $G_m(s)$ (any equivalent form), pole $-g_{m3}/C_x$ and zero $-2g_{m3}/C_x$ explicitly identified, and the magnitude going from $g_{m1}$ to $g_{m1}/2$; the phase description (maximum lag ≈ 19.5° between pole and zero) is expected but its absence alone is minor (+1). 0: correct pole only, or an expression with the zero at the wrong place by a slip. −2 (asserted as fact): $G_m$ falling to zero at high frequency (pure single pole), pole and zero interchanged, or the high-frequency transconductance claimed to be $g_{m1}$.
