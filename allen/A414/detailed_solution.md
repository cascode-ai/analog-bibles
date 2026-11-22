# Detailed solution - A414

Three cascaded identical amplifiers give a three-pole response with all poles at $1/\tau_L$ and a total gain of $5^3=125$. Solve it for the time to reach the latch input, then add the latch's regeneration time to half the output swing. Voltages are normalized to $V_{OH}-V_{OL}$ and times to $\tau_L$.

### Step 1 — Step response of the three-stage preamplifier

With $H(s)=125/(1+s\tau_L)^3$ and an input step of 0.05, the inverse Laplace transform of $H(s)/s$ is, with $t_n=t/\tau_L$,

$$
v_{amp}(t)=125(0.05)\left[1-e^{-t_n}\Bigl(1+t_n+\frac{t_n^2}2\Bigr)\right]=6.25\left[1-e^{-t_n}\Bigl(1+t_n+\frac{t_n^2}2\Bigr)\right].
$$

### Step 2 — Time to enable the latch

The latch is enabled at $v_{amp}=0.2$, which is $0.2/6.25=0.032$ of the final value:

$$
1-e^{-t_n}\Bigl(1+t_n+\frac{t_n^2}2\Bigr)=0.032
\quad\Rightarrow\quad
t_n=0.682,\qquad t_1=0.682\,\tau_L
$$

(solved numerically). For small $t_n$ the bracket is about $t_n^3/6$, giving the estimate $t_n\approx(6\times0.032)^{1/3}=0.58$; the exact response lies below this cubic, so the true time is longer.

### Step 3 — Latch delay

$$
t_2=\tau_L\ln\frac{0.5}{0.2}=\tau_L\ln2.5=0.916\,\tau_L .
$$

### Step 4 — Total propagation delay

$$
\frac{t_p}{\tau_L}=0.682+0.916=1.60 .
$$

The large preamplifier gain lets the latch start from a large imbalance (0.2) after reaching only 3.2 % of its final output, so the total delay is well below the $2.08\,\tau_L$ achievable with one or two stages.
