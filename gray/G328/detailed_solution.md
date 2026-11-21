# Detailed solution - G328

Break the loop at the op-amp input and find the loop transmission. The capacitive divider sets the feedback factor $\beta$, and the output sees $C_L$ plus the feedback capacitors as load, which sets the dominant pole. With two poles, the phase margin follows from the ratio of the crossover frequency to $|p_2|$.

### Step 1 — Feedback factor

Apply a test voltage at the output and let the inverting input float, as the op amp's input draws no current. The inverting-input node sees $C_I$ to the output and $C_S+C_{ip}$ to ground, since the far plate of $C_S$ is grounded during this phase. The fraction of the output voltage returned to the input is
$$
\beta=\frac{C_I}{C_I+C_S+C_{ip}}=\frac{4\ \mathrm{pF}}{4.5\ \mathrm{pF}}=0.889 .
$$

### Step 2 — Effective load and dominant pole

The output of the telescopic op amp is a current $g_{m1}v_{id}$ into a large cascode resistance $R_o$. The capacitance on that node is $C_L$ plus the series combination of $C_I$ and $C_S+C_{ip}$:
$$
C_{L,\text{eff}}=C_L+\frac{C_I(C_S+C_{ip})}{C_I+C_S+C_{ip}}=1.5\ \mathrm{pF}+0.444\ \mathrm{pF}=1.944\ \mathrm{pF}.
$$
The dominant pole is $p_1\approx-1/(R_oC_{L,\text{eff}})$. Above $|p_1|$,
$$
T(s)\approx\beta\,\frac{g_{m1}}{sC_{L,\text{eff}}}\cdot\frac{1}{1+s/|p_2|} .
$$

### Step 3 — Crossover frequency

Ignoring $p_2$, $|T|$ reaches unity at
$$
\omega_u=\frac{\beta g_{m1}}{C_{L,\text{eff}}}=\frac{0.889\times0.1\ \mathrm{mA/V}}{1.944\ \mathrm{pF}}=4.57\times10^7\ \mathrm{rad/s}\quad(7.3\ \mathrm{MHz}).
$$
This is well below $|p_2|=2\times10^8$ rad/s, so $p_2$ adds only a modest phase lag.

### Step 4 — Phase margin

Above $|p_1|$, the phase of $T$ is $-90^\circ-\tan^{-1}(\omega/|p_2|)$:
$$
\mathrm{PM}=90^\circ-\tan^{-1}\frac{4.57\times10^7}{2\times10^8}=90^\circ-12.9^\circ=77^\circ .
$$
With the exact crossover, $\omega_c\sqrt{1+(\omega_c/|p_2|)^2}=\omega_u$ gives $\omega_c=4.46\times10^7$ rad/s and $\mathrm{PM}=77.4^\circ$. The margin is large because the loop crossover is reduced twice: by $\beta<1$, and by the extra 0.44 pF of load from the feedback capacitors.
