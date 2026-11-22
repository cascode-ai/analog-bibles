# Detailed solution - A415

The overall delay is the enable time $t$ plus the latch delay, which depends on how far the amplifier output has risen by then. Writing the total as a function of $t$ and setting its derivative to zero gives the optimum: the latch should be enabled when the amplifier's output is growing at the same relative rate at which waiting costs time. Voltages are normalized to $V_{OH}-V_{OL}$.

### Step 1 — Amplifier time constant and response

A single pole at $f_{-3dB}=100$ MHz has time constant

$$
\tau_A=\frac1{2\pi f_{-3dB}}=\frac1{2\pi(100\ \mathrm{MHz})}=1.59\ \mathrm{ns}.
$$

With gain 10 and an input step of 0.05, the amplifier output, which becomes the latch input, is

$$
v_{il}(t)=0.5\bigl(1-e^{-t/\tau_A}\bigr).
$$

### Step 2 — Total delay as a function of the enable time

$$
T(t)=t+\tau_L\ln\frac{0.5}{v_{il}(t)}=t-\tau_L\ln\bigl(1-e^{-t/\tau_A}\bigr).
$$

Enabling early makes the logarithm large; enabling late makes $t$ itself large, while $v_{il}$ approaches 0.5 and the latch term vanishes.

### Step 3 — Optimum enable time

$$
\frac{dT}{dt}=1-\frac{\tau_L}{\tau_A}\cdot\frac{e^{-t/\tau_A}}{1-e^{-t/\tau_A}}=0
\quad\Rightarrow\quad
e^{-t/\tau_A}=\frac{\tau_A}{\tau_A+\tau_L}=\frac{1.59}{11.59}=0.137,
$$
$$
t_{opt}=\tau_A\ln\frac{\tau_A+\tau_L}{\tau_A}=(1.59\ \mathrm{ns})\ln7.28=3.16\ \mathrm{ns}.
$$

$d^2T/dt^2>0$ here, so this is a minimum.

### Step 4 — Minimum propagation delay

At $t_{opt}$ the latch input is $v_{il}=0.5(1-0.137)=0.431(V_{OH}-V_{OL})$, so

$$
t_{latch}=(10\ \mathrm{ns})\ln\frac{0.5}{0.431}=1.48\ \mathrm{ns},\qquad
T_{min}=3.16+1.48=4.64\ \mathrm{ns}.
$$

![Total delay versus latch enable time, with the minimum at 3.16 ns](/q/A415/solution-curves.svg)

The minimum is broad: enabling anywhere between 2.5 and 4 ns costs at most about 0.2 ns extra. Because the latch is slow here ($\tau_L$ is six times $\tau_A$), the optimum waits until the amplifier has supplied 86 % of the half swing, and the latch only finishes the job.
