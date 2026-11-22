# Detailed solution - A379

Before the step the output is held low by M7. When the input drops to 1 V, M6 turns on hard and sources much more current than M7 can sink, and the difference charges the 10 pF load. The delay is the time this net current takes to raise the output to $V_{DD}/2=2$ V; the waveform then rounds off as M6 enters the triode region and settles where the two currents are equal.

### Step 1 — Initial state

With $v_{in}=V_{DD}=4$ V for a long time, $V_{SG6}=0$: M6 is off. M7 has $V_{GS7}=1$ V and pulls the output down until its current vanishes, so

$$
v_{out}(0^-)=0\ \mathrm V .
$$

### Step 2 — Currents after the step

With $v_{in}=1$ V, $V_{SG6}=3$ V and the overdrive of M6 is 2.3 V. While $V_{SD6}\ge2.3$ V, i.e. $v_{out}<1.7$ V, M6 is saturated:

$$
i_6=\frac{K'_P}2\Bigl(\frac WL\Bigr)_6(V_{SG6}-|V_{TP}|)^2=\frac{(50\ \mu\mathrm{A/V^2})(10)}2(2.3\ \mathrm V)^2=1.32\ \mathrm{mA}.
$$

M7, with an overdrive of 0.3 V, sinks at most

$$
i_7=\frac{K'_N}2\Bigl(\frac WL\Bigr)_7(V_{GS7}-V_{TN})^2=\frac{(110\ \mu\mathrm{A/V^2})(100)}2(0.3\ \mathrm V)^2=0.495\ \mathrm{mA},
$$

and less while $v_{out}<0.3$ V, where it is in the triode region.

### Step 3 — Delay to $V_{DD}/2$

The net charging current is about $1.32-0.50=0.83$ mA, so the output rises almost linearly at

$$
\frac{dv_{out}}{dt}=\frac{i_6-i_7}{C_L}\approx\frac{0.83\ \mathrm{mA}}{10\ \mathrm{pF}}=83\ \mathrm{V/\mu s},
$$

and crosses 2 V after

$$
t_d\approx\frac{C_L\,\Delta V}{i_6-i_7}=\frac{(10\ \mathrm{pF})(2\ \mathrm V)}{0.83\ \mathrm{mA}}\approx24\ \mathrm{ns}.
$$

Numerical integration of $C_L\,dv_{out}/dt=i_6-i_7$ with the triode regions of both devices gives 23.7 ns; including channel-length modulation would shorten it to about 20 ns.

### Step 4 — Shape of the response and final level

Above 1.7 V, M6 enters the triode region, its current falls, and the ramp rounds off into an exponential approach (time constant about $C_L$ divided by the triode conductance of M6, roughly 10 ns). The output settles at $V_{OH}$, where the triode current of M6 equals 495 µA:

$$
\beta_6\Bigl[(2.3\ \mathrm V)V_{SD6}-\frac{V_{SD6}^2}2\Bigr]=495\ \mu\mathrm A\ \Rightarrow\ V_{SD6}=0.48\ \mathrm V,\qquad V_{OH}\approx3.52\ \mathrm V .
$$

![Output rising from 0 V almost linearly, crossing 2 V at about 24 ns and settling at 3.52 V, after the input steps from 4 V to 1 V at t = 0](/q/A379/solution-waveform.svg)

The output stays at 0 V until the step, ramps up at about 83 V/µs, crosses the logic threshold $V_{DD}/2$ about 24 ns after the step, and settles near 3.5 V.
