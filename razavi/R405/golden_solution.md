# Golden Solution - R405

## Reference answer

$Z_{in} = \dfrac{2R_0(1 + sR_0C_1)}{1 + G_{m1}G_{m2}R_0^2 + sR_0C_1} = 2R_0\ \Big\|\ \left[\dfrac{2}{G_{m1}G_{m2}R_0} + s\dfrac{2C_1}{G_{m1}G_{m2}}\right]$ (per side: $R_0 \| [1/(G_{m1}G_{m2}R_0) + sC_1/(G_{m1}G_{m2})]$).

$|Z_{in}|$: low-frequency plateau $2R_0/(1 + G_{m1}G_{m2}R_0^2) \approx 2/(G_{m1}G_{m2}R_0)$; zero at $\omega_z = 1/(R_0C_1)$; rises at +20 dB/dec (inductive); pole at $\omega_p = (1 + G_{m1}G_{m2}R_0^2)/(R_0C_1) \approx G_{m1}G_{m2}R_0/C_1$; flat at $2R_0$ above $\omega_p$.

- Each output of $G_{m2}$ is loaded by $Z = R_0\|(1/sC_1) = R_0/(1 + sR_0C_1)$, so $V_{out} = -G_{m2}Z\,V_{in}$ (differential).
- $G_{m1}$ senses $V_{out}$ and injects into the input nodes a current that opposes the input; each input node is loaded by an $R_0$ to ground (open-loop $Z_{in} = 2R_0$).
- KCL with a differential test current $I_t$: $2I_t = V_{in}/R_0 + G_{m1}G_{m2}Z\,V_{in}$ → $Z_{in} = 2R_0/[1 + T(s)]$ with loop gain $T(s) = G_{m1}G_{m2}R_0Z = G_{m1}G_{m2}R_0^2/(1 + sR_0C_1)$.

## Grading notes

+2: an expression equivalent to the reference (a factor of 2 between differential and per-side impedance, or a different but stated $G_m$ definition, is fine if consistent), and a sketch with the low plateau ≈ $2/(G_{m1}G_{m2}R_0)$, the zero at $1/(R_0C_1)$, the +20 dB/dec rise, the pole near $G_{m1}G_{m2}R_0/C_1$ and the high-frequency plateau $2R_0$. +1: correct expression with an incomplete sketch (one break point or plateau missing). 0: only the low-frequency value right. -2 (asserted as fact): $Z_{in} = 2R_0$ independent of frequency (feedback ignored), $|Z_{in}|$ falling with frequency (capacitive), or feedback claimed to raise $Z_{in}$. An expression exactly half the reference, $R_0(1 + sR_0C_1)/(1 + G_{m1}G_{m2}R_0^2 + sR_0C_1)$ (the per-side value, or $v_d/(i_+ - i_-)$), with the zero, the pole and the plateaus in the right proportions is +2 if that convention is stated and +1 if it is called the differential (terminal-to-terminal) impedance without stating it; it is never -2.
