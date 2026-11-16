Calculate the small-signal voltage gain of the common-source amplifier with active load shown in [Fig. 1] (input transistor $T_1$ n-channel; $T_2$, $T_3$ p-channel, $T_3$ diode-connected and carrying $I_{REF}$). Assume that $V_{DD} = 3$ V and that all the transistors operate in the active region. Do the calculations for values of $I_{REF}$ of 1 mA, 100 µA, 10 µA and 1 µA. Assume that the drawn dimensions of each transistor are $W = 100$ µm and $L = 1$ µm, and $X_d = 0$.

(a) At first, assume the transistors operate in strong inversion in all cases.
(b) Repeat part (a) including the effects of weak inversion, by using $g_m = I_D/(nV_T)$ with $n = 1.5$ to calculate the transconductance of $T_1$. Assume that a transistor operates in weak inversion when its overdrive is less than $2nV_T$.
(c) Use SPICE to check your calculations for both parts (a) and (b).

Process data: $k'_n = 194\ \mu\mathrm{A/V^2}$, $k'_p = 64.7\ \mu\mathrm{A/V^2}$ ($t_{ox}$ = 80 Å, $\mu_n$ = 450, $\mu_p$ = 150 cm²/V·s), $V_{tn} = 0.6$ V, $V_{tp} = -0.8$ V, $L_d = 0.09$ µm ($L_{\text{eff}} = 0.82$ µm), $dX_d/dV_{DS}$ = 0.02 µm/V (n) and 0.04 µm/V (p), $\lambda = (dX_d/dV_{DS})/L_{\text{eff}}$: $\lambda_n = 0.0244\ \mathrm{V^{-1}}$, $\lambda_p = 0.0488\ \mathrm{V^{-1}}$; $V_T = 26$ mV.
