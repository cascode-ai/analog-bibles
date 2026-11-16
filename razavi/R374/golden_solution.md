# Golden Solution - R374

## Reference answer

The input-referred quantities do not depend on $r_O$:
$$\overline{V_{n,in}^2} = \frac{4kT/R_F + 4kT\gamma g_m}{(g_m - 1/R_F)^2},\qquad \overline{I_{n,in}^2} = \frac{4kTR_Fg_m^2 + 4kT\gamma g_m}{(g_mR_F - 1)^2}$$
the same as for λ = 0. Only the output noise voltages change: input shorted $\overline{V_{n,out}^2} = 4kT\left(\dfrac{1}{R_F} + \gamma g_m\right)(R_F\|r_O)^2$ (instead of $R_F^2$); input open $\overline{V_{n,out}^2} = \dfrac{4kT(g_m^2R_F + \gamma g_m)}{(g_m + 1/r_O)^2}$ (instead of $4kTR_F + 4kT\gamma/g_m$).

- $r_O$ is a noiseless element across the output port. With output short-circuit currents it carries no current, so both the noise currents and the transfer functions are those of the λ = 0 case.
- Input shorted: $I_{n,out} = I_{n,M1} + I_{n,RF}$, $G_m = g_m - 1/R_F$.
- Input open: no current in $R_F$, so $V_{n,RF}$ appears at the gate: $I_{n,out} = g_mV_{n,RF} + I_{n,M1}$; current gain $g_mR_F - 1$.
- Using open-circuit output voltages instead gives the same input-referred values, because $r_O$ scales the noise and the gain equally.

## Grading notes

+2: both input-referred expressions unchanged from λ = 0 with the reason ($r_O$ noiseless, appears identically in noise transfer and gain), plus the modified output noise voltages (any equivalent form). +1: correct input-referred results with the output-voltage modifications missing or partly wrong. 0: input-referred results changed by an $r_O$-dependent factor that is said to be small, otherwise sound. -2 (asserted as fact): $r_O$ treated as a noise source ($4kT/r_O$), input-referred noise claimed to increase/decrease substantially with λ, or $G_m$ written as $g_m - 1/R_F - 1/r_O$ leading to a changed result.
