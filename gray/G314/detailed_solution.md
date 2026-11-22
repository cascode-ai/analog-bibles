# Detailed solution - G314

With the zero at infinity and the device parasitics neglected, the loop gain has the Miller dominant pole and one nondominant pole set by $g_{m6}$ and the load capacitance. In unity-gain feedback the loop gain is $a(s)$ itself. A 45° phase margin then requires the nondominant pole to sit at the crossover frequency, near $\omega_u=g_{m1}/C_c$. Compute the bias currents and the two transconductances, then solve for $C_L$.

### Step 1 — Device dimensions and bias currents

All transistors have $L_{\text{drwn}}=8$ μm, so
$$
L_{\text{eff}}=8-2(0.3)-1=6.4\ \mu\mathrm m,\qquad \frac{W}{L_{\text{eff}}}=\frac{100}{6.4}=15.6
$$
for every 100/8 device. $M_5$ and $M_7$ match $M_8$ and share its gate, so each carries the 20-μA reference. The tail current splits as $I_{D1}=I_{D2}=10$ μA. At balance $V_{GS6}=V_{GS3}$, and $M_6$ (100/8) is twice $M_3$ (50/8), so $I_{D6}=20$ μA, consistent with $M_7$.

### Step 2 — Transconductances

With $I_D=\frac{k'}{2}\frac{W}{L_{\text{eff}}}V_{ov}^2$, the transconductance is $g_m=\sqrt{2k'(W/L_{\text{eff}})I_D}$:
$$
g_{m1}=\sqrt{2\left(30.2\ \mu\mathrm{A/V^2}\right)(15.6)(10\ \mu\mathrm A)}=97.1\ \mu\mathrm{A/V},
$$
$$
g_{m6}=\sqrt{2\left(60.4\ \mu\mathrm{A/V^2}\right)(15.6)(20\ \mu\mathrm A)}=194\ \mu\mathrm{A/V},\qquad \frac{g_{m6}}{g_{m1}}=2.00 .
$$
The ratio is exactly 2, because $k'_n=2k'_p$ and $I_{D6}=2I_{D1}$, while the aspect ratios are equal.

### Step 3 — Poles of the compensated amplifier

For the two-stage amplifier with $R_Z=1/g_{m6}$ in series with $C_c$, the standard pole results are
$$
p_1\approx-\frac{1}{g_{m6}R_1R_2C_c},\qquad
p_2\approx-\frac{g_{m6}C_c}{C_1C_2+C_c(C_1+C_2)},
$$
where $C_1$ is the capacitance at the gate of $M_6$ and $C_2=C_L$ the capacitance at the output. The extra pole $-1/(R_ZC_1)$ introduced by $R_Z$ is also pushed to infinity when $C_1$ is neglected. With $C_1\to0$, as instructed, the nondominant pole reduces to
$$
p_2\approx-\frac{g_{m6}}{C_L}.
$$
At this pole, $C_c$ acts as a short and $M_6$ is diode-connected through it, so the output node sees $1/g_{m6}$ in parallel with $C_L$. Above $|p_1|$, the gain is $a(j\omega)\approx g_{m1}/(j\omega C_c)\cdot1/(1+j\omega/|p_2|)$, and the unity-gain frequency, ignoring $p_2$, is
$$
\omega_u=\frac{g_{m1}}{C_c}=\frac{97.1\ \mu\mathrm{A/V}}{5\ \mathrm{pF}}=1.94\times10^7\ \mathrm{rad/s}.
$$

### Step 4 — Maximum load capacitance for 45°

The phase of $a(j\omega)$ well above $|p_1|$ is $-90^\circ-\tan^{-1}(\omega/|p_2|)$. A phase margin of 45° therefore means $\omega/|p_2|=1$ at the crossover. With the usual approximation that the crossover stays at $\omega_u$:
$$
|p_2|=\omega_u\quad\Rightarrow\quad\frac{g_{m6}}{C_L}=\frac{g_{m1}}{C_c}
\quad\Rightarrow\quad
C_{L,\max}=C_c\,\frac{g_{m6}}{g_{m1}}=5\ \mathrm{pF}\times2.00=10\ \mathrm{pF}.
$$
Treated exactly, the two-pole response has magnitude $\omega_u/(\omega\sqrt2)$ at $\omega=|p_2|$. Requiring this to equal 1 gives $|p_2|=\omega_u/\sqrt2$, so
$$
C_{L,\max}=\sqrt2\,C_c\,\frac{g_{m6}}{g_{m1}}=14.1\ \mathrm{pF}.
$$
The design criterion $|p_2|=\omega_u$ gives 10 pF; the exact crossover allows 14 pF. Any larger load lowers $|p_2|$ below the crossover frequency and the phase margin falls below 45°.
