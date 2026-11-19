# Golden Solution - R002

## Reference answer

Both devices are specified to operate in saturation. With $W/L=100$, $I=|I_D|=0.5$ mA, use the first-order square-law relations
$$
I\approx\tfrac12\beta V_{ov}^2,\qquad
g_m\approx\beta V_{ov}=\sqrt{2\beta I},\qquad
r_O\approx\frac1{\lambda I},\qquad
\beta=\mu C_{ox}(W/L).
$$
The device coefficients are $\beta_n=13.4\ \mathrm{mA/V^2}$ and $\beta_p=3.84\ \mathrm{mA/V^2}$, giving
$$
\begin{aligned}
g_{m,n}&=\sqrt{2(13.4\ \mathrm{mA/V^2})(0.5\ \mathrm{mA})}=3.66\ \mathrm{mS},\\
g_{m,p}&=\sqrt{2(3.84\ \mathrm{mA/V^2})(0.5\ \mathrm{mA})}=1.96\ \mathrm{mS},\\
r_{O,n}&\approx\frac1{(0.1\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})}=20\ \mathrm{k\Omega},\\
r_{O,p}&\approx\frac1{(0.2\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})}=10\ \mathrm{k\Omega}.
\end{aligned}
$$
The intrinsic gain is their dimensionless product:

| Device | $g_m$ | $r_O$ | $g_mr_O$ |
|---|---|---|---|
| NMOS | 3.66 mS | 20 kΩ | $3.66\times20=73.2$ |
| PMOS | 1.96 mS | 10 kΩ | $1.96\times10=19.6$ |

Here CLM is neglected in the bias-current expression but retained to first order in $r_O$. The correction depending on $V_{DS}$ cannot be evaluated because $V_{DS}$ is not given. The NMOS has about 3.7 times the intrinsic gain of the PMOS.

## Grading notes

+2: all six values are within ±3%: NMOS $g_m\approx3.66$ mS, $r_O\approx20$ kΩ, $g_mr_O\approx73.2$; PMOS $g_m\approx1.96$ mS, $r_O\approx10$ kΩ, $g_mr_O\approx19.6$. Small deviations from consistently including $(1+\lambda|V_{DS}|)$ with an explicitly assumed $|V_{DS}|$ are acceptable; the drain voltage is not specified in the question.

+1: one quantity wrong through an arithmetic slip, with the others correct.

0: one device fully correct and the other wrong, or the right method with slips in several values.

-2 (asserted as fact): wrong formulas such as $r_O=\lambda/I_D$ or $g_m=\mu C_{ox}(W/L)I_D$, swapped $\lambda$ values, or intrinsic gains wrong by an order of magnitude.
