# Detailed solution - G307

The 0.05-μF capacitor sits on the high-impedance node at the base of $Q_5$, so that node sets the single dominant pole. The input stage acts as a transconductor $G_m$ driving this capacitor, and the later stages multiply the node voltage by $-500$. The unity-gain frequency follows from $G_m$, $C$ and the gain of 500, and the slew rate from the largest current the input stage can push into $C$.

### Step 1 — Transconductance of the input stage

$Q_1$ and $Q_2$ share $I_{EE}=20$ μA, so each carries $I_C=10$ μA at balance and has
$$
g_{m1}=\frac{I_C}{V_T}=\frac{10\ \mu\mathrm A}{26\ \mathrm{mV}}=0.3846\ \mathrm{mA/V}.
$$
A differential input $v_i$ changes the two collector currents by $\pm g_{m1}v_i/2$. The $Q_3$–$Q_4$ mirror copies the change in $Q_1$'s current to $Q_4$, which subtracts it at the output node, while $Q_2$ adds its own change there. The two halves therefore add, and with the base of $Q_5$ held at small-signal ground the short-circuit output current is
$$
i_o=G_m v_i,\qquad G_m=g_{m1}=0.3846\ \mathrm{mA/V}.
$$

### Step 2 — Dominant pole and unity-gain frequency

Let $R$ be the total resistance at the base of $Q_5$: the output resistances of $Q_2$ and $Q_4$ in parallel with the input resistance of $Q_5$. The capacitor goes to ground, so it is not Miller-multiplied: the node sees exactly $C=0.05$ μF. The open-loop gain is
$$
a(j\omega)=\frac{v_o}{v_i}=-500\,\frac{G_mR}{1+j\omega RC}.
$$
$R$ is not needed. Because the response is dominated by this single pole, $|a|$ falls to 1 at a frequency far above $1/(RC)$, where $|1+j\omega RC|\approx\omega RC$:
$$
|a(j\omega)|\approx\frac{500\,G_m}{\omega C}=1
\quad\Rightarrow\quad
\omega_u=\frac{500\,G_m}{C}=\frac{500\times0.3846\ \mathrm{mA/V}}{0.05\ \mu\mathrm F}=3.85\times10^6\ \mathrm{rad/s},
$$
$$
f_u=\frac{\omega_u}{2\pi}=612\ \mathrm{kHz}\approx0.61\ \mathrm{MHz}.
$$

### Step 3 — Slew rate

A large input switches the whole tail current to one side of the pair:

- with all of $I_{EE}$ in $Q_2$, $Q_1$ and the mirror carry nothing, so $+20$ μA flows into the node;
- with all of $I_{EE}$ in $Q_1$, $Q_4$ copies 20 μA and pulls it out of the node, while $Q_2$ supplies nothing.

So the current available to charge $C$ is limited to $\pm I_{EE}$, and the base of $Q_5$ can move no faster than
$$
\left|\frac{dV_{b5}}{dt}\right|_{\max}=\frac{I_{EE}}{C}=\frac{20\ \mu\mathrm A}{0.05\ \mu\mathrm F}=400\ \mathrm{V/s}.
$$
The later stages are not current-limited here and follow with gain $-500$, so the output slew rate is
$$
SR=500\times400\ \mathrm{V/s}=2\times10^5\ \mathrm{V/s}=0.2\ \mathrm{V/\mu s}.
$$

### Step 4 — Comparison with the 10-pF Miller capacitor

From the base of $Q_5$, the original 10-pF capacitor looks like $10\ \mathrm{pF}\times(1+500)\approx5$ nF. The 0.05-μF grounded capacitor is ten times larger, so both $\omega_u$ and $SR$ are ten times smaller than the original 6.1 MHz and 2 V/μs. Their ratio does not depend on $C$:
$$
\frac{SR}{\omega_u}=\frac{I_{EE}}{G_m}=\frac{20\ \mu\mathrm A}{0.3846\ \mathrm{mA/V}}=52\ \mathrm{mV}.
$$
