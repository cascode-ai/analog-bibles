# Detailed solution - G153

Track the charge on the sampling capacitor in each phase. During $\phi_1$, $C_S$ is charged by $V_s$ while the integrator holds; during $\phi_2$, that charge is transferred onto $C_I$ through the virtual-ground summing node. Charge conservation gives a difference equation, from which the waveform follows step by step.

### Step 1 — Phase $\phi_1$: sample

$M_1$ grounds the top plate (node Top) and $M_3$ connects the bottom plate to $V_s$. The charge on the Top side of $C_S$ is

$$
Q_{S}=C_S\left(0-V_s\right)=-C_SV_s .
$$

$M_2$ is off, so the summing node is isolated: $C_I$ keeps its charge and $V_o$ is held. The ideal op amp holds $V_o$ regardless of $C_L$.

### Step 2 — Phase $\phi_2$: transfer

$M_4$ grounds the bottom plate and $M_2$ connects Top to the summing node, held at 0 V by the ideal op amp. $C_S$ ends with zero voltage, so its charge $-C_SV_s$ is moved onto the summing-node plate of $C_I$. The charge on that plate is $C_I(0-V_o)$, so conservation at the summing node gives

$$
-C_SV_s-C_IV_o[n]=-C_IV_o[n+1]\ \Rightarrow\ V_o[n+1]=V_o[n]+\frac{C_S}{C_I}V_s .
$$

The integrator is noninverting: the bottom plate is switched from $V_s$ to ground, so the sampled charge has the sign that raises $V_o$.

### Step 3 — Staircase output

With $V_s=1$ V, each transfer adds

$$
\Delta V_o=\frac{C_S}{C_I}V_s=\frac{1\ \mathrm{pF}}{5\ \mathrm{pF}}(1\ \mathrm V)=0.2\ \mathrm V
$$

once per 1 µs clock period. Taking $\phi_1$ in the first half of each period, the steps occur at the start of each $\phi_2$, at $t=0.5,\ 1.5,\ 2.5,\dots$ µs, giving 0.2, 0.4, 0.6, … V. With zero op-amp rise time each step is vertical, and $V_o$ is flat between steps. By $t=20\ \mu$s twenty transfers have occurred, so

$$
V_o(20\ \mu\mathrm s)=20\times0.2\ \mathrm V=4.0\ \mathrm V
$$

(3.8 V if the clock phasing places the twentieth $\phi_2$ just after 20 µs).

![Rising staircase output of the switched-capacitor integrator: 0.2 V steps once per microsecond, reaching 4.0 V at 20 microseconds, with the 0.2 V per microsecond average slope dashed](/q/G153/solution-waveforms.svg)

The average slope is $f(C_S/C_I)V_s=0.2$ V/µs, equivalent to an integrator time constant $\tau=C_I/(fC_S)=5\ \mu$s. The output keeps rising without limit because the op amp is ideal; a real one would eventually saturate.
