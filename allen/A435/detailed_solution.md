# Detailed solution - A435

The conversion time is set by how fast the closed loop settles after the switches change. Find the feedback factor of this transimpedance stage, which fixes the closed-loop bandwidth in terms of GB; then require the worst-case (full-scale) step to settle within half an LSB in 2 µs.

### Step 1 — Feedback factor

The output is fed back to the inverting input through $R$. The only other elements connected to that node are the selected current sinks, which, being ideal, have infinite output resistance. There is therefore no resistive path from the inverting input to ground, and the whole output voltage is fed back:

$$
\beta=1 .
$$

The stage settles like a unity-gain follower, with a single closed-loop pole at

$$
\omega_H=\beta\cdot2\pi GB=2\pi GB .
$$

The dc gain of $10^5$ only causes a static error of order $10^{-5}$, negligible against half an LSB ($1/512\approx2\times10^{-3}$ of full scale).

### Step 2 — Worst-case step and settling requirement

The largest output change is the full-scale step from code 00000000 to 11111111, $\Delta v_{out}=(255/256)\times1\ \mathrm V$. The remaining error decays as $\Delta v_{out}e^{-\omega_Ht}$ and must fall below $\tfrac12\,\mathrm{LSB}=1\ \mathrm V/512$ within $T=2\ \mu$s:

$$
\frac{255}{256}\,e^{-\omega_HT}\le\frac1{512}
\quad\Rightarrow\quad
e^{-\omega_HT}\le\frac1{510}
\quad\Rightarrow\quad
\omega_HT\ge\ln510=6.23 .
$$

### Step 3 — Required GB

$$
GB=\frac{\ln510}{2\pi T}=\frac{6.23}{2\pi(2\ \mu\mathrm s)}=0.496\ \mathrm{MHz}\approx0.5\ \mathrm{MHz}.
$$

The closed-loop time constant is then $1/(2\pi GB)=0.32\ \mu$s, and the output needs about 6.2 time constants to reach 8-bit accuracy. Because $\beta=1$ here, a current-output DAC with ideal sinks needs no more GB than a unity-gain follower; with resistive or capacitive loading at the summing node, $\beta$ would drop below 1 and the required GB would rise in proportion. The op amp is assumed to settle linearly, without slewing.
