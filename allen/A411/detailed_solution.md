# Detailed solution - A411

The delay is the amplifier's time to reach the enabling imbalance plus the latch's regeneration time to half the output swing. Voltages are normalized to $V_{OH}-V_{OL}$ and times to $\tau_L$.

### Step 1 — Amplifier response

With dc gain 5, pole at $1/\tau_L$ and an input step of 0.05,

$$
v_{amp}(t)=0.25\bigl(1-e^{-t/\tau_L}\bigr).
$$

### Step 2 — Time to enable the latch

The latch is enabled at $v_{amp}=0.2$, four fifths of the amplifier's final value:

$$
0.25\bigl(1-e^{-t_1/\tau_L}\bigr)=0.2
\quad\Rightarrow\quad
e^{-t_1/\tau_L}=0.2,\qquad
t_1=-\tau_L\ln0.2=1.609\,\tau_L .
$$

The amplifier now spends a long time on the flat tail of its exponential.

### Step 3 — Latch delay

$$
t_2=\tau_L\ln\frac{0.5}{0.2}=\tau_L\ln2.5=0.916\,\tau_L .
$$

### Step 4 — Total propagation delay

$$
\frac{t_p}{\tau_L}=1.609+0.916=2.53 .
$$

This equals the result for enabling at 0.05: with $t_p/\tau_L=\ln\{0.5/[x(1-4x)]\}$, both $x=0.05$ and $x=0.2$ give $x(1-4x)=0.04$. Enabling too late is as costly as enabling too early; the minimum, $\tau_L\ln8=2.08\,\tau_L$, lies at $x=0.125$.
