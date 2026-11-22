# Detailed solution - G374

The input stage is a series-series feedback triple, so the noise is dominated by the first transistor and the feedback network at its emitter. Find the feedback resistance seen at the emitter of $Q_1$, compute the basic amplifier's input generators (with the noise at $Q_1$'s collector referred back), add the feedback network's thermal noise and the base current noise flowing in it, and integrate the white result over 50 MHz. Then evaluate the noise figure for a 50-Ω source.

### Step 1 — Feedback resistance at the input

The feedback samples the output current through $R_{E2}$, so the loading at the input is found with the output loop opened, i.e. with $Q_3$'s emitter current set to zero. The emitter of $Q_1$ then sees $R_{E1}$ to ground in parallel with $R_F$ in series with $R_{E2}$:

$$
R=R_{E1}\parallel(R_F+R_{E2})=100\ \Omega\parallel740\ \Omega=88.1\ \Omega .
$$

For series feedback at the input, the equivalent input noise voltage is

$$
\overline{v_i^2}=\overline{v_{ia}^2}+\overline{i_{ia}^2}R^2+4kTR\,\Delta f,
$$

where $\overline{v_{ia}^2}$ and $\overline{i_{ia}^2}$ belong to the basic amplifier loaded by $R$.

### Step 2 — Basic-amplifier voltage generator

For $Q_1$ at $I_{C1}=0.6$ mA, $g_{m1}=23.1$ mS ($1/g_{m1}=43.3\ \Omega$, $1/2g_{m1}=21.7\ \Omega$). Its own generator is $4kT(r_b+1/2g_{m1})$: the collector shot noise flows from collector to emitter, so the degeneration does not suppress it relative to the signal, and it is referred through $g_{m1}$ alone.

Noise currents injected from $Q_1$'s collector node to ground are referred to the input through the degenerated transconductance $1/(1/g_{m1}+R)=1/(131.4\ \Omega)$, i.e. multiplied by $(131.4\ \Omega)^2$:

| Source at $Q_1$ collector | Current density (A²/Hz) | Referred resistance |
|---|---|---|
| $R_A=9$ kΩ thermal | $4kT/R_A$ | $(131.4\ \Omega)^2/9\ \mathrm{k\Omega}=1.9\ \Omega$ |
| $Q_2$ base shot noise, $I_{B2}=10\ \mu$A | $3.2\times10^{-24}$ | $3.3\ \Omega$ |

The later stages ($Q_2$'s voltage noise, $Q_3$, $Q_4$) are referred through at least the gain of the first stage and are negligible; the bias transistors $Q_5$–$Q_8$, whose currents are not given, are neglected.

### Step 3 — Feedback-network terms and total

The basic amplifier's current generator is the base shot noise of $Q_1$, $2qI_{B1}=2(1.6\times10^{-19}\ \mathrm C)(6\ \mu\mathrm A)=1.92\times10^{-24}$ A²/Hz; flowing through $R$ it gives $1.92\times10^{-24}(88.1\ \Omega)^2/4kT=4kT(0.9\ \Omega)$. The feedback network adds $4kT(88.1\ \Omega)$. Summing all terms as equivalent noise resistances:

$$
\frac{\overline{v_i^2}}{\Delta f}=4kT(100+21.7+1.9+3.3+0.9+88.1)\ \Omega=4kT(216\ \Omega)=3.58\times10^{-18}\ \mathrm{V^2/Hz}.
$$

$r_{b1}$, $1/2g_{m1}$ and the feedback resistance supply 97% of it.

### Step 4 — Total equivalent input noise voltage in 50 MHz

All sources are white, so with a sharp 50-MHz cutoff

$$
\overline{v_i^2}=(3.58\times10^{-18}\ \mathrm{V^2/Hz})(5\times10^{7}\ \mathrm{Hz})=1.79\times10^{-10}\ \mathrm{V^2},\qquad
v_{i,\mathrm{rms}}=13.4\ \mu\mathrm V .
$$

### Step 5 — Average noise figure with $R_S=50\ \Omega$

The input noise current consists of $Q_1$'s base shot noise and the thermal noise of $R_D=12$ kΩ; because $C_B$ is a short, $R_D$ is a shunt from the input to ac ground:

$$
\frac{\overline{i_i^2}}{\Delta f}=1.92\times10^{-24}+\frac{4kT}{12\ \mathrm{k\Omega}}=1.92\times10^{-24}+1.38\times10^{-24}=3.30\times10^{-24}\ \mathrm{A^2/Hz},
$$

equivalent to $\overline{i_i^2}R_S^2/4kT=0.5\ \Omega$ with a 50-Ω source. Because all noise is white, the average and spot noise figures are equal:

$$
F=1+\frac{\overline{v_i^2}+\overline{i_i^2}R_S^2}{4kTR_S\,\Delta f}=1+\frac{216+0.5}{50}=5.3,\qquad
\mathrm{NF}=10\log_{10}5.3=7.3\ \mathrm{dB}.
$$
