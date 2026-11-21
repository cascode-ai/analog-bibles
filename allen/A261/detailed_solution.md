# Detailed solution - A261

Treat the three closely grouped poles as three separate poles at $10^9$ rad/s, each contributing its own phase lag at $\omega=GB$. The phase-margin condition fixes GB; the dc gain then places the dominant pole, and the output resistance converts that pole into a load capacitance.

### Step 1 — GB for a 60° phase margin

With unity feedback, the dominant pole contributes about $90°$ at GB (large dc gain), and each of the three higher poles contributes $\arctan(GB/10^9)$:

$$
\Phi_M=180°-90°-3\arctan\frac{GB}{10^9\ \mathrm{rad/s}}=60°
\quad\Rightarrow\quad
\arctan\frac{GB}{10^9\ \mathrm{rad/s}}=10°.
$$

$$
GB=10^9\tan10°\ \mathrm{rad/s}=1.763\times10^{8}\ \mathrm{rad/s},\qquad
\frac{GB}{2\pi}=28.1\ \mathrm{MHz}.
$$

### Step 2 — Dominant pole

An 80-dB gain is $A_v(0)=10^{80/20}=10^4$. For a dominant-pole amplifier $GB=A_v(0)|p_1|$, so

$$
|p_1|=\frac{GB}{A_v(0)}=\frac{1.763\times10^8\ \mathrm{rad/s}}{10^4}=1.763\times10^{4}\ \mathrm{rad/s},
$$

$$
p_1=-1.76\times10^{4}\ \mathrm{rad/s}\quad(|p_1|/2\pi=2.81\ \mathrm{kHz}).
$$

### Step 3 — Load capacitance

The dominant pole of a self-compensated amplifier is formed at the high-resistance output, $|p_1|=1/(R_{out}C_L)$:

$$
C_L=\frac{1}{R_{out}|p_1|}=\frac{1}{(10\ \mathrm{M\Omega})(1.763\times10^4\ \mathrm{rad/s})}=5.67\ \mathrm{pF}.
$$

A larger $C_L$ would lower $p_1$ and GB and increase the margin; a smaller one would push GB up toward the cluster of higher poles and erode it.
