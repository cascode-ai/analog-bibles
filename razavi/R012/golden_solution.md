# Golden Solution - R012

## Reference answer

Both $I_X$ and intrinsic $g_m$ decrease to zero as $V_X$ rises.

Let $k=R_2/(R_1+R_2)$. With the source at $V_X$ and the bulk grounded,

$$V_{GS}=k(V_{DD}-V_X),\qquad V_{DS}=V_{DD}-V_X,\qquad V_{SB}=V_X,$$

$$V_{TH}(V_X)=V_{TH0}+\gamma\left(\sqrt{2|\phi_F|+V_X}-\sqrt{2|\phi_F|}\right).$$

Since $V_{DS}\ge V_{GS}$, $M_1$ is saturated whenever it conducts. For $V_{GS}>V_{TH}$ and negligible channel-length modulation,

$$I_X=\frac{\beta}{2}(V_{GS}-V_{TH})^2,\qquad g_m=\beta(V_{GS}-V_{TH}).$$

### Cutoff and intercepts

If $kV_{DD}\le V_{TH0}$, both are zero throughout. Otherwise both reach zero at the unique root $k(V_{DD}-V_{X,\mathrm{off}})=V_{TH}(V_{X,\mathrm{off}})$ and stay zero.

Body effect moves cutoff earlier and makes both curves nonlinear in $V_X$. $I_X$ reaches cutoff with zero slope and excludes divider current.

When on at the origin, the intercepts are given below. With body effect omitted, cutoff occurs at $V_{DD}-V_{TH0}/k$.

$$I_X(0)=\frac{\beta}{2}(kV_{DD}-V_{TH0})^2,\qquad g_m(0)=\beta(kV_{DD}-V_{TH0}).$$

![Drain current and intrinsic transconductance](/q/R012/solution-curves.svg)

## Grading notes

+2: divider ratio $R_2/(R_1+R_2)$; $V_{SB}=V_X$ and increasing threshold; saturation whenever on; decreasing current and intrinsic $g_m$ to the body-effect cutoff, followed by zero. A qualitative parabola-like current sketch and nearly straight $g_m$ sketch are acceptable approximations when identified as such; do not require an exact quadratic or exact straight line. Include the all-off case for a divider fraction at or below $0.7/3$. For equal resistors, cutoff approximately 1.16 V (1.60 V with body effect explicitly omitted). +1: correct divider and curves with body effect omitted or a minor cutoff slip. 0: qualitative trend only with an unsupported region claim. -2 (asserted as fact): increasing $I_X$, triode while on, grounded source, PMOS interpretation, or divider current included in $I_X$. Do not substitute the negative sweep derivative for intrinsic $g_m$.
