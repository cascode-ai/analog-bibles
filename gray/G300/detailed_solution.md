# Detailed solution - G300

Miller compensation across the second stage creates a new dominant pole $|p_1|\approx1/(g_mR_1R_2C)$ and pushes the original second pole (500 kHz) to such a high frequency that it can be ignored ("pole splitting"); the 10-MHz pole is unchanged. With unity feedback, $T=a$, so the loop gain after compensation has only two relevant poles. The 10-MHz pole sets the unity-gain frequency allowed by the $60^\circ$ margin, and the dominant pole, hence $C$, is chosen to put the crossover there.

### Step 1 — Compensated open-loop gain

The low-frequency gain is $a_0=10^{108/20}=2.51\times10^5$. With Miller capacitance $C$ across a second stage of transconductance $g_m$, input resistance $R_1$ and output resistance $R_2$ to ground, the dominant pole is
$$
|p_1|\approx\frac{1}{g_mR_1R_2C},\qquad g_mR_1R_2=(6.39\ \mathrm{mA/V})(1.95\ \mathrm{M\Omega})(86.3\ \mathrm{k\Omega})=1.075\times10^9\ \Omega .
$$
The original 30-kHz pole is the one replaced by this Miller pole, the 500-kHz pole is split to a negligibly high frequency, and the 10-MHz pole $p_3$ remains:
$$
a(j\omega)\approx\frac{a_0}{(1+j\omega/|p_1|)(1+j\omega/|p_3|)} .
$$

### Step 2 — Unity-gain frequency for a $60^\circ$ margin

At the crossover $\omega_u\gg|p_1|$ the dominant pole contributes $-90^\circ$. A $60^\circ$ margin allows the 10-MHz pole only $30^\circ$:
$$
\tan^{-1}\frac{f_u}{10\ \mathrm{MHz}}=30^\circ\ \Rightarrow\ f_u=10\ \mathrm{MHz}\times\tan30^\circ=5.77\ \mathrm{MHz},\qquad \omega_u=3.63\times10^7\ \mathrm{rad/s}.
$$

### Step 3 — Compensation capacitance

Below the 10-MHz pole the gain falls at $-20$ dB/dec, so on the asymptote $|a|=a_0|p_1|/\omega$. Setting $|a(\omega_u)|=1$ gives $a_0|p_1|=\omega_u$, i.e.
$$
C=\frac{a_0}{g_mR_1R_2\,\omega_u}=\frac{2.51\times10^5}{(1.075\times10^9\ \Omega)(3.63\times10^7\ \mathrm{rad/s})}=6.4\ \mathrm{pF},
$$
which places the dominant pole at $|p_1|/2\pi=23$ Hz. In this asymptotic design the open-loop gain reaches 0 dB at about **5.8 MHz**.

### Step 4 — Exact check

At 5.77 MHz the 10-MHz pole reduces $|a|$ by $\sqrt{1+\tan^230^\circ}=1.155$, so with $C=6.4$ pF the true 0-dB frequency is lower, 5.1 MHz, and the margin slightly larger, about $63^\circ$. Requiring $|a|=1$ exactly at 5.77 MHz gives
$$
C=\frac{6.44\ \mathrm{pF}}{1.155}=5.6\ \mathrm{pF},
$$
with the 0-dB frequency then at 5.77 MHz and $\mathrm{PM}=60^\circ$. Thus $C\approx6.4$ pF with 0 dB near 5.8 MHz by the asymptotic design, or $C\approx5.6$ pF with 0 dB at 5.77 MHz exactly.
