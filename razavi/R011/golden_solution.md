# Golden Solution - R011

## Reference answer

$M_1$ is saturated whenever it is on; $I_X$ falls quadratically and $g_m$ linearly to zero at $V_X = V_{DD} - 0.8\,\mathrm{V}\cdot(R_1+R_2)/R_1$, and both stay zero above.
- The divider sits between $V_{DD}$ and $V_X$, so $V_{SG} = (V_{DD} - V_X)\dfrac{R_1}{R_1+R_2}$ (source at $V_{DD}$, no body effect since bulk = source).
- $V_{SD} = V_{DD} - V_X \ge V_{SG}$ > $V_{SG} - |V_{TH}|$, so $M_1$ is saturated whenever on: $I_X = \tfrac12\beta_p\left[(3 - V_X)\dfrac{R_1}{R_1+R_2} - 0.8\right]^2$ (assuming $3R_1/(R_1+R_2) > 0.8$ V so it is on at $V_X = 0$).
- $M_1$ turns off at $V_X = 3 - 0.8(R_1+R_2)/R_1$; $I_X = 0$ above (the parabola touches the axis tangentially).
- $g_m = \beta_p\left[(3 - V_X)\dfrac{R_1}{R_1+R_2} - 0.8\right]$: a straight line falling with slope $-\beta_pR_1/(R_1+R_2)$ to zero at the same point.
- ($I_X$ is $M_1$'s current only; the divider current is separate.)

## Grading notes

+2: correct $V_{SG}$ (fraction $R_1/(R_1+R_2)$ of $V_{DD} - V_X$), saturation whenever on, quadratic decrease of $I_X$ to zero at $V_X = V_{DD} - |V_{TH}|(R_1+R_2)/R_1$, linear decrease of $g_m$. +1: correct shapes with a slip in the cutoff expression, or the saturation argument missing. 0: shape right only qualitatively, region claims missing. -2 (asserted as fact): $I_X$ increasing with $V_X$, triode operation claimed, the divider ratio inverted so as to change the conclusion, or $M_1$ treated as an NMOS.
