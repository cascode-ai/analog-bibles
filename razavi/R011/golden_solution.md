# Golden Solution - R011

## Reference answer

The PMOS source and bulk are at $V_{DD}=3\,\mathrm{V}$. With negligible gate current, the divider gives

$$
k=\frac{R_1}{R_1+R_2},\quad V_{SG}=k(V_{DD}-V_X),\quad V_{SD}=V_{DD}-V_X.
$$

Since $V_{SD}\ge V_{SG}$, $M_1$ is saturated whenever it conducts. For $V_{SG}>|V_{TH}|=0.8\,\mathrm{V}$, the square-law model with $\lambda=0$ gives the transistor current $I_X$ and positive intrinsic transconductance $g_m$.

$$I_X=\frac{\beta_p}{2}(V_{SG}-|V_{TH}|)^2,\qquad
g_m=\beta_p(V_{SG}-|V_{TH}|).$$

If $kV_{DD}>|V_{TH}|$, the initial values, the conducting $g_m$ slope and the cutoff voltage are

$$
\begin{aligned}
I_X(0)&=\frac{\beta_p}{2}\left[(3\,\mathrm{V})\frac{R_1}{R_1+R_2}-0.8\,\mathrm{V}\right]^2,\\
g_m(0)&=\beta_p\left[(3\,\mathrm{V})\frac{R_1}{R_1+R_2}-0.8\,\mathrm{V}\right],\\
\frac{dg_m}{dV_X}&=-\beta_p\frac{R_1}{R_1+R_2},\\
V_{X,\mathrm{off}}&=3\,\mathrm{V}-(0.8\,\mathrm{V})\frac{R_1+R_2}{R_1}.
\end{aligned}
$$

The current falls quadratically and reaches zero with zero slope. The transconductance falls linearly. Both remain zero at and above cutoff. If $kV_{DD}\le |V_{TH}|$, both are zero throughout the sweep. $I_X$ excludes the divider current.

![Drain current and intrinsic transconductance versus input voltage](/q/R011/solution-curves.svg)

## Grading notes

+2: correct divider ratio $R_1/(R_1+R_2)$; saturation whenever on; quadratic decrease of transistor current and linear decrease of positive intrinsic $g_m$; correct cutoff and zero continuation. The all-off branch is correct when $(3\ \mathrm{V})R_1/(R_1+R_2)\le0.8\ \mathrm{V}$ is stated. Equivalent normalized plots are acceptable; axes must retain units.

+1: correct shapes with a minor cutoff error or missing saturation justification.

0: only qualitative shapes, without the necessary terminal-voltage relations or region argument.

-2 (asserted as fact): increasing $I_X$, triode while on, inverted divider ratio, NMOS interpretation, or divider current included in the transistor $I_X$. Do not confuse $g_m$ with the negative sweep derivative $dI_X/dV_X$.
