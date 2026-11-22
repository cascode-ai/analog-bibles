# Detailed solution - A375

Write the linear step response of a system with two equal real poles, differentiate it, and find where the slope is largest by setting the second derivative to zero. The slew rate needed to avoid slewing is that maximum slope.

### Step 1 — Step response with two equal poles

With both poles at $-1/\tau$, $\tau=1/|p|=1/(10^7\ \mathrm{s^{-1}})=100$ ns, the transfer function is $A_v(0)/(1+s\tau)^2$, and the response to a step $V_{in}$ is

$$
v_{out}(t)=A_v(0)V_{in}\Bigl[1-\Bigl(1+\frac t\tau\Bigr)e^{-t/\tau}\Bigr].
$$

### Step 2 — Slope and its maximum

Differentiating,

$$
\frac{dv_{out}}{dt}=A_v(0)V_{in}\,\frac{t}{\tau^2}\,e^{-t/\tau}.
$$

The slope is zero at $t=0$ (a two-pole response starts flat) and has its maximum where

$$
\frac{d^2v_{out}}{dt^2}=A_v(0)V_{in}\,\frac1{\tau^2}\Bigl(1-\frac t\tau\Bigr)e^{-t/\tau}=0\quad\Rightarrow\quad t=\tau=100\ \mathrm{ns},
$$

so

$$
\Bigl(\frac{dv_{out}}{dt}\Bigr)_{\max}=\frac{A_v(0)V_{in}}{e\,\tau}.
$$

### Step 3 — Numerical value

The input is $V_{in}=10V_{in}(\min)$, so $A_v(0)V_{in}=10(V_{OH}-V_{OL})=10$ V:

$$
\Bigl(\frac{dv_{out}}{dt}\Bigr)_{\max}=(10\ \mathrm V)(10^7\ \mathrm{s^{-1}})(0.368)=3.68\times10^7\ \mathrm{V/s}=36.8\ \mathrm{V/\mu s},
$$

occurring 100 ns after the step.

### Step 4 — Slew rate needed

To follow the linear response without slewing, the comparator needs

$$
SR\ge36.8\ \mathrm{V/\mu s}.
$$

This is sufficient in any case. Strictly, the output stops at its 1 V swing once the linear response has risen by 1 V, i.e. when $(1+t/\tau)e^{-t/\tau}=0.9$, at $t\approx53$ ns, before the maximum-slope instant; the largest slope actually reached is then about 31 V/µs.
