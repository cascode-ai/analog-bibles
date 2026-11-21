# Detailed solution - G176

Recompute the bias currents with every input-stage resistor doubled, then the input stage's transconductance $G_{m1}$, its output resistance $R_{o1}$ and its loaded gain. The later stages are unchanged, so the overall gain is $a_{v1}\times120\times18$. In the given operating condition only the pnp pair $Q_3$–$Q_4$ is active: each drives a folding node (3 or 4), where its signal current is shared between $R_9$ (or $R_{10}$) and the emitter of the common-base device $Q_9$ (or $Q_{10}$), whose collector is the output node 9 (or 10).

### Step 1 — Bias currents with doubled resistors

A pnp device with base at $\mathrm{Bias_1}$ and emitter resistor $R$ conducts $(33\ \mathrm{k\Omega}/R)\times6\ \mu$A. With $R_{11}=66$ kΩ and $R_{13}=R_{14}=66$ kΩ:

$$
|I_{C11}|=\frac{33}{66}(6\ \mu\mathrm A)=3\ \mu\mathrm A,\qquad
|I_{C3}|=|I_{C4}|=1.5\ \mu\mathrm A,\qquad
|I_{C13}|=|I_{C14}|=3\ \mu\mathrm A .
$$

The common-mode feedback sets $I_{C9}=I_{C10}=|I_{C13}|=3\ \mu$A. Every current is halved and every resistor doubled, so all dc voltage drops stay the same.

### Step 2 — Transconductance of the input stage

$Q_3$ has $g_{m3}=|I_{C3}|/V_T=1.5\ \mu\mathrm A/26\ \mathrm{mV}=57.7\ \mu$A/V. Its collector current enters node 3, which sees $R_9=44$ kΩ to ground in parallel with the emitter of $Q_9$ (base at ac ground). The emitter input resistance is $r_{e9}=\alpha_9/g_{m9}=(\beta_0/(\beta_0+1))V_T/I_{C9}$, and a fraction $\alpha_9$ of the emitter current reaches the collector. The fraction of $Q_3$'s signal current reaching node 9 is therefore

$$
\rho=\alpha_9\frac{R_9}{R_9+r_{e9}}
=\frac{40}{41}\cdot\frac{44\ \mathrm{k\Omega}}{44\ \mathrm{k\Omega}+\frac{40}{41}(8.67\ \mathrm{k\Omega})}=0.818 ,
$$

the same as with the original resistors, because $R_9$ and $r_{e9}$ both doubled. (The output resistance of $Q_3$, about 13 MΩ, is negligible in parallel with $R_9$.)

A differential input $v_{id}$ gives $\pm g_{m3}v_{id}/2$ in $Q_3$, $Q_4$, so $\pm\rho g_{m3}v_{id}/2$ into nodes 9 and 10, and

$$
G_{m1}=\rho\,g_{m3}=(0.818)(57.7\ \mu\mathrm A/\mathrm V)=47.2\ \mu\mathrm A/\mathrm V,
$$

half the original $94.4\ \mu$A/V.

### Step 3 — Output resistance at each output node

A transistor with base at ac ground and emitter resistance $R$ has output resistance $r_o[1+g_m(R\parallel r_\pi)]$, i.e.

$$
R_{out}\approx r_o\,\frac{1+g_mR\,(\beta_0+1)/\beta_0}{1+g_mR/\beta_0}.
$$

| Device | $r_o$ | $g_mR$ | $\beta_0$ | $R_{out}$ |
|---|---|---|---|---|
| $Q_{13}$ (up), $R_{13}=66$ kΩ | $20\ \mathrm V/3\ \mu\mathrm A=6.67$ MΩ | 7.62 | 10 | 35.5 MΩ |
| $Q_9$ (down), $R_9=44$ kΩ | $30\ \mathrm V/3\ \mu\mathrm A=10$ MΩ | 5.08 | 40 | 55.1 MΩ |

For $Q_{13}$: $r_o\cdot(1+7.62\times1.1)/(1+0.762)=(6.67\ \mathrm{M\Omega})(5.32)=35.5$ MΩ. The single-ended output resistance is $R_{o1}=35.5\ \mathrm{M\Omega}\parallel55.1\ \mathrm{M\Omega}=21.6$ MΩ, twice its original value.

### Step 4 — Loaded input-stage gain

The second stage presents 1.3 MΩ between nodes 9 and 10; for a differential signal its midpoint is an ac ground, so each node sees 0.65 MΩ. Then $v_{od1}=G_{m1}(R_{o1}\parallel0.65\ \mathrm{M\Omega})v_{id}$:

$$
a_{v1}=(47.2\ \mu\mathrm A/\mathrm V)(21.6\ \mathrm{M\Omega}\parallel0.65\ \mathrm{M\Omega})=(47.2\ \mu\mathrm A/\mathrm V)(0.631\ \mathrm{M\Omega})=29.8 .
$$

With the original resistors the same steps give $a_{v1}=(94.4\ \mu\mathrm A/\mathrm V)(10.8\ \mathrm{M\Omega}\parallel0.65\ \mathrm{M\Omega})=57.9$.

### Step 5 — Overall gain

$$
a_v=a_{v1}\times120\times18=29.8\times2160\approx6.4\times10^4,
$$

about half the original $1.25\times10^5$. Doubling $R_{o1}$ barely helps because the 0.65-MΩ load of the second stage dominates the node resistance; the gain therefore follows $G_{m1}$, which halved with the bias current.
