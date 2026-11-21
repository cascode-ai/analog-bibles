# Detailed solution - G315

With the zero moved to infinity, the loop gain has the Miller dominant pole and a nondominant pole set by $g_{m6}$ and the output capacitance. In unity-gain feedback the loop gain is $a(s)$, and a 45° phase margin requires the nondominant pole to sit at the crossover frequency, near $\omega_u=g_{m1}/C_c$. Find the two transconductances, solve for $C_L$, then check how much the gate capacitance of $M_6$ changes the result.

### Step 1 — Bias currents and transconductances

For saturated devices, $L_{\text{eff}}=1-2(0.09)-0.1=0.72$ μm. The currents follow from the mirrors on the $M_8$ gate line:

- $M_5$ and $M_7$ have the same size as $M_8$, so $I_{D5}=I_{D7}=200$ μA;
- the tail current splits as $I_{D1}=I_{D2}=100$ μA;
- $M_6$ (100/1) is twice $M_3$ (50/1) with $V_{GS6}=V_{GS3}$ at balance, so $I_{D6}=200$ μA.

With $g_m=\sqrt{2k'(W/L_{\text{eff}})I_D}$:
$$
g_{m1}=\sqrt{2\left(64.7\ \mu\mathrm{A/V^2}\right)\left(\frac{150}{0.72}\right)(100\ \mu\mathrm A)}=1.642\ \mathrm{mA/V},
$$
$$
g_{m6}=\sqrt{2\left(194\ \mu\mathrm{A/V^2}\right)\left(\frac{100}{0.72}\right)(200\ \mu\mathrm A)}=3.283\ \mathrm{mA/V},\qquad \frac{g_{m6}}{g_{m1}}=2.00 .
$$
Both devices happen to have $|V_{ov}|=0.122$ V, so the ratio is just $I_{D6}/I_{D1}=2$.

### Step 2 — Poles with $R_Z=1/g_{m6}$

For the compensated two-stage amplifier, with $C_1$ at the gate of $M_6$ and $C_2$ at the output,
$$
p_1\approx-\frac{1}{g_{m6}R_1R_2C_c},\qquad
|p_2|\approx\frac{g_{m6}C_c}{C_1C_2+C_c(C_1+C_2)} .
$$
The zero is at infinity, and junction capacitances are ignored. If $C_1$ is also neglected, the load sets $|p_2|\approx g_{m6}/C_L$. Above $|p_1|$, $a(j\omega)\approx g_{m1}/(j\omega C_c)$, so
$$
\omega_u=\frac{g_{m1}}{C_c}=\frac{1.642\ \mathrm{mA/V}}{5\ \mathrm{pF}}=3.28\times10^8\ \mathrm{rad/s}\quad(52.3\ \mathrm{MHz}).
$$

### Step 3 — Maximum load capacitance

The phase of $a(j\omega)$ above $|p_1|$ is $-90^\circ-\tan^{-1}(\omega/|p_2|)$, so 45° of phase margin requires $|p_2|$ to equal the crossover frequency. With the crossover approximated by $\omega_u$:
$$
\frac{g_{m6}}{C_L}=\frac{g_{m1}}{C_c}\quad\Rightarrow\quad C_{L,\max}=C_c\,\frac{g_{m6}}{g_{m1}}=5\ \mathrm{pF}\times2.00=10\ \mathrm{pF}.
$$
If the crossover is computed exactly for the two-pole response, the magnitude at $\omega=|p_2|$ is $\omega_u/(\sqrt2\,|p_2|)=1$. This gives $|p_2|=\omega_u/\sqrt2$ and $C_{L,\max}=\sqrt2\times10\ \mathrm{pF}=14.1$ pF.

### Step 4 — Effect of the capacitance at the gate of $M_6$

Junction capacitances are ignored, but the gate capacitances remain. At the gate of $M_6$, in saturation:
$$
C_{gs6}=\tfrac23WL_{\text{eff}}C_{ox}+C_{ol}W=\tfrac23(100)(0.72)(4.32\ \mathrm{fF})+(0.35\ \mathrm{fF})(100)=0.242\ \mathrm{pF}.
$$
Adding the gate–drain overlaps of $M_2$ and $M_4$, $0.35\ \mathrm{fF/\mu m}\times(150+50)\ \mu\mathrm m=0.070$ pF, gives $C_1\approx0.24$–$0.31$ pF. Setting the full expression for $|p_2|$ equal to $\omega_u$:
$$
g_{m6}C_c^2/g_{m1}=C_1C_L+C_c(C_1+C_L)\quad\Rightarrow\quad C_L=\frac{C_c\,(C_cg_{m6}/g_{m1}-C_1)}{C_1+C_c}.
$$

| $C_1$ (pF) | $C_{L,\max}$ (pF) |
|---|---|
| 0 | 10.0 |
| 0.242 | 9.30 |
| 0.312 | 9.12 |

For example, with $C_1=0.242$ pF, $C_L=5(10-0.242)/(5.242)=9.30$ pF. The cruder form $|p_2|\approx g_{m6}/(C_1+C_2)$ gives about 9.7 pF. The gate capacitance therefore lowers the limit by only 7–9%, and the answer is about 10 pF ($|p_2|=\omega_u$ criterion), or about 14 pF with the exact crossover.
