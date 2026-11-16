# Golden Solution - R048

## Reference answer

The NMOS is diode-connected (gate = drain = $V_{DD}$) and its source is the output terminal. It is always saturated, but $V_{GS} = V_{DD} - V_{out}$ varies one-for-one with the output voltage: $I_2 = \tfrac12\mu_nC_{ox}(W/L)(V_{DD} - V_{out} - V_{TH})^2$, with $V_{TH}$ also rising with $V_{out}$ (body effect). The output impedance is $\approx 1/(g_m + g_{mb})$, small, so the current depends strongly on the load voltage. A current source requires a fixed $V_{GS}$ with the output at the drain.

## Grading notes

+2: diode connection, $V_{GS}$ set by the output voltage, quadratic dependence of $I_2$ on $V_{out}$, low output impedance ≈ $1/g_m$ (with $g_{mb}$ a plus). +1: correct reason without impedance or expression. 0: vague. -2 (asserted as fact): claims it works as a current source, attributes the problem to triode operation, or claims the output impedance is $r_O$.
