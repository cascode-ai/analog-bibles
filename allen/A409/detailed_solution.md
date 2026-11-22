# Detailed solution - A409

The delay is split into the amplifier's time to reach the latch's enabling imbalance and the latch's regeneration time from there to half the output swing. Voltages are normalized to $V_{OH}-V_{OL}$ and times to $\tau_L$.

### Step 1 — Amplifier response

With dc gain 5, pole at $1/\tau_L$ and an input step of 0.05,

$$
v_{amp}(t)=0.25\bigl(1-e^{-t/\tau_L}\bigr).
$$

### Step 2 — Time to enable the latch

The latch is now enabled at $v_{amp}=0.1$, two fifths of the amplifier's final value:

$$
0.25\bigl(1-e^{-t_1/\tau_L}\bigr)=0.1
\quad\Rightarrow\quad
e^{-t_1/\tau_L}=0.6,\qquad
t_1=-\tau_L\ln0.6=0.511\,\tau_L .
$$

### Step 3 — Latch delay

$$
t_2=\tau_L\ln\frac{0.5}{0.1}=\tau_L\ln5=1.609\,\tau_L .
$$

### Step 4 — Total propagation delay

$$
\frac{t_p}{\tau_L}=0.511+1.609=2.12 .
$$

Compared with enabling the latch at 0.05 ($t_p=2.53\,\tau_L$), waiting for a larger imbalance costs $0.29\,\tau_L$ more in the amplifier but saves $\tau_L\ln2=0.69\,\tau_L$ in the latch, a net gain of about $0.4\,\tau_L$. Waiting longer still eventually stops paying off, because the amplifier output approaches its final value of 0.25 only slowly.
