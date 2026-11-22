# Detailed solution - A408

The total delay is the time the amplifier needs to build up the latch's starting imbalance, plus the time the latch needs to regenerate it to half the output swing. All voltages are normalized to $V_{OH}-V_{OL}$ and all times to $\tau_L$.

### Step 1 — Amplifier response

A single-pole amplifier with dc gain 5 and pole at $1/\tau_L$ responds to an input step of 0.05 with

$$
v_{amp}(t)=5(0.05)\bigl(1-e^{-t/\tau_L}\bigr)=0.25\bigl(1-e^{-t/\tau_L}\bigr).
$$

### Step 2 — Time to enable the latch

The latch is enabled when $v_{amp}=0.05$:

$$
0.25\bigl(1-e^{-t_1/\tau_L}\bigr)=0.05
\quad\Rightarrow\quad
e^{-t_1/\tau_L}=0.8,\qquad
t_1=-\tau_L\ln0.8=0.223\,\tau_L .
$$

Only one fifth of the amplifier's final output is needed, so the amplifier spends just the early, nearly linear part of its exponential.

### Step 3 — Latch delay

From $\Delta V_i=0.05$ to half the output swing, 0.5:

$$
t_2=\tau_L\ln\frac{0.5}{0.05}=\tau_L\ln10=2.303\,\tau_L .
$$

### Step 4 — Total propagation delay

$$
\frac{t_p}{\tau_L}=\frac{t_1+t_2}{\tau_L}=0.223+2.303=2.53 .
$$

The latch dominates the delay. The amplifier's role is to raise the small input to a usable starting imbalance quickly; the latch then amplifies it exponentially.
