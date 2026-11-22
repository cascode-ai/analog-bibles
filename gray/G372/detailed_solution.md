# Detailed solution - G372

Describe the noise as an equivalent current at the input (emitter) node, because the source is a current source with shunt resistance. A common-base stage has the same input generators as the common-emitter transistor, but its current gain is only about 1, so every noise current at the collector of $Q_1$, including the load and the next stage, is referred to the input almost unchanged.

### Step 1 — Generators of $Q_1$ in common base

At $I_C=1$ mA, $g_m=38.5$ mS ($1/2g_m=13\ \Omega$) and $I_B=10\ \mu$A. The equivalent input generators of a transistor do not depend on which terminal is grounded, so at the emitter of $Q_1$ (with $r_{b1}=0$)

$$
\frac{\overline{v_{i1}^2}}{\Delta f}=4kT\,\frac{1}{2g_m}=4kT(13\ \Omega)=2.16\times10^{-19}\ \mathrm{V^2/Hz},\qquad
\frac{\overline{i_{i1}^2}}{\Delta f}=2q\left(I_{B1}+\frac{I_{C1}}{\beta^2}\right).
$$

### Step 2 — Referring the collector-node noise to the input

The common-base current gain from emitter to collector is $\alpha\approx1$. A noise current at the collector node of $Q_1$ is therefore reproduced by an equal current at the input. Two sources act at that node:

- the thermal noise of the 5-kΩ load, $4kT/(5\ \mathrm{k\Omega})=3.32\times10^{-24}$ A²/Hz;
- the input noise current of $Q_2$, $2q(I_{B2}+I_{C2}/\beta^2)$, which flows into the 5-kΩ node. $Q_2$'s voltage generator across 5 kΩ gives only $4kT(13\ \Omega)/(5\ \mathrm{k\Omega})^2$, which is negligible.

The total equivalent input noise current is

$$
\frac{\overline{i_i^2}}{\Delta f}=2q(10+0.1+10+0.1)\ \mu\mathrm A+3.32\times10^{-24}=6.46\times10^{-24}+3.32\times10^{-24}=9.78\times10^{-24}\ \mathrm{A^2/Hz}.
$$

### Step 3 — Noise figure at $R_S=5$ kΩ

The source noise current is $4kT/R_S=3.32\times10^{-24}$ A²/Hz, and the voltage generator drives $v_{i1}/R_S$, contributing $2.16\times10^{-19}/(5\ \mathrm{k\Omega})^2=8.6\times10^{-27}$ A²/Hz. Hence

$$
F=1+\frac{\overline{i_i^2}+\overline{v_{i1}^2}/R_S^2}{(4kT/R_S)\,\Delta f}=1+\frac{9.79\times10^{-24}}{3.32\times10^{-24}}=3.95,
\qquad \mathrm{NF}=10\log_{10}3.95=6.0\ \mathrm{dB}.
$$

Keeping the factor $1/\alpha^2$ for the collector-node currents and the correlation gives $F\approx4.03$ (6.1 dB).

### Step 4 — Interpretation

The two base shot noise currents and the 5-kΩ load each contribute roughly as much as the source itself. Unlike a common-emitter stage, the common-base input stage provides no current gain to suppress the noise of what follows it, so the load and the second stage set much of the noise figure.
