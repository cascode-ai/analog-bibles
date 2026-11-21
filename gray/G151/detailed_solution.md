# Detailed solution - G151

A supply variation reaches the output with gain $A^+$; dividing by $A_{dm}$ turns it into an equivalent differential input source of $v_{dd}/PSRR^+$. Close the follower loop around the op amp and evaluate the output.

### Step 1 — Supply ripple as an equivalent input source

By superposition, the op-amp output is

$$
v_o=A_{dm}v_{id}+A^+v_{dd}=A_{dm}\left(v_{id}+\frac{v_{dd}}{PSRR^+}\right),\qquad PSRR^+=\frac{A_{dm}}{A^+}.
$$

The supply ripple acts like a source of $v_{dd}/PSRR^+$ in series with the differential input.

### Step 2 — Voltage follower

The follower feeds the output back to the inverting input, so with $v_s=0$, $v_{id}=v_s-v_o=-v_o$:

$$
v_o=A_{dm}\left(-v_o+\frac{v_{dd}}{PSRR^+}\right)\ \Rightarrow\ v_o=\frac{A_{dm}}{1+A_{dm}}\cdot\frac{v_{dd}}{PSRR^+}\approx\frac{v_{dd}}{PSRR^+}\quad(A_{dm}\gg1).
$$

### Step 3 — Numerical value

$$
\hat v_o\approx\frac{20\ \mathrm{mV}}{10}=2\ \mathrm{mV}.
$$

This is the peak value. The follower has unity closed-loop gain, so the 2 mV equivalent input source appears at the output almost unchanged. A $PSRR^+$ of only 10 (20 dB) passes a tenth of the supply ripple straight to the output.
