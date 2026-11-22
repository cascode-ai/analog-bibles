# Detailed solution - A308

The fixture already contains everything needed: the auxiliary op amp closes a dc servo loop around the op amp under test, holding its output at a defined level and automatically supplying the tiny input that this requires, while the 10-kΩ/10-Ω divider makes that input measurable as a 1001-times larger voltage $v_{OS}$. To measure the open-loop response, keep the servo for the operating point, stop modulating the supplies, inject a small ac signal, and take the ratio of output to input voltage versus frequency.

### Step 1 — What the servo does

The auxiliary op amp's inverting input is a virtual ground and draws no current. The upper-right $v_{SET}$ has its negative terminal at the resistor, so that resistor end is at $-v_{SET}$, and

$$
\frac{v_{OUT}}{100\ \mathrm{k\Omega}}+\frac{-v_{SET}}{100\ \mathrm{k\Omega}}=0\;\Rightarrow\;v_{OUT}=v_{SET}.
$$

The op amp under test then needs $v_I=v_{OUT}/A_v(j\omega)$ (plus its constant offset), and the divider gives

$$
v_I=\frac{10\ \Omega}{10\ \mathrm{k\Omega}+10\ \Omega}\,v_{OS}=\frac{v_{OS}}{1001} .
$$

### Step 2 — Modification

- Set the two $v_{SET}$ sources in series with $V_{DD}$ and $V_{SS}$ to zero, so that the supplies stay fixed (varying them is what measures PSRR and CMRR).
- Replace the upper-right $v_{SET}$ by a dc value (for example 0 V, to fix the output operating point) plus a small sinusoid.
- If needed for stability of the two-amplifier loop, make the auxiliary op amp an integrator by connecting a capacitor from $v_{OS}$ to its inverting input. (A capacitor across the 100-kΩ resistor from $v_{OUT}$ would not do this: that resistor is the outer feedback path through the op amp under test, and a capacitor across it only adds a lead zero.)

### Step 3 — Procedure

Sweep the frequency of the test sinusoid and, at each frequency, measure the ac voltages $v_{out}$ and $v_{os}$ in magnitude and phase with a network or lock-in analyser. Then

$$
A_v(j\omega)=\frac{v_{out}}{v_i}=1001\,\frac{v_{out}}{v_{os}} .
$$

This ratio equals $A_v(j\omega)$ whatever the servo loop gain, because both quantities are measured; a large loop gain is needed only if $v_{SET}$ were used in place of the measured $v_{out}$.

### Step 4 — Higher frequencies and practical limits

For measurements up to and beyond $GB$, lower the servo bandwidth (large integrating capacitor, crossover well below the lowest test frequency) so that it holds only the dc output near 0 V, and inject the ac signal directly at the input of the op amp under test, for example with a source in series with the 10-Ω resistor. Then measure $v_{out}$ and the ac voltage $v_i$ from the noninverting input to ground (with a source $v_s$ between the 10-Ω resistor and ground, $v_i=(v_{os}+1000v_s)/1001$, not the resistor drop), and form $A_v=v_{out}/v_i$. Keep the test amplitude small enough that the output stays linear, keep the intended $R_L$ and $C_L$ connected, choose the divider so that $v_i$ (about $v_{out}/A_v$, microvolts at low frequency) stays above noise and probe limits, and account for probe capacitance at high frequency.
