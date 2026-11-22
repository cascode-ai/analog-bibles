# Detailed solution - A413

The two cascaded amplifiers form a two-pole response with both poles at $1/\tau_L$ and a total gain of 25. Solve that response for the time it takes to reach the latch's enabling level, then add the latch's regeneration time to half the output swing. Voltages are normalized to $V_{OH}-V_{OL}$ and times to $\tau_L$.

### Step 1 — Step response of the two-stage preamplifier

The transfer function is $H(s)=25/(1+s\tau_L)^2$. For an input step of 0.05, the inverse Laplace transform of $H(s)/s$ gives

$$
v_{amp}(t)=25(0.05)\left[1-\Bigl(1+\frac t{\tau_L}\Bigr)e^{-t/\tau_L}\right]=1.25\left[1-\Bigl(1+\frac t{\tau_L}\Bigr)e^{-t/\tau_L}\right].
$$

### Step 2 — Time to enable the latch

The latch is enabled at $v_{amp}=0.1$, i.e. at $0.1/1.25=0.08$ of the final value. With $t_n=t_1/\tau_L$:

$$
1-(1+t_n)e^{-t_n}=0.08
\quad\Rightarrow\quad
t_n=0.466,\qquad t_1=0.466\,\tau_L
$$

(solved numerically). For small $t_n$ the bracket is about $t_n^2/2$, which gives the estimate $t_n\approx\sqrt{2(0.08)}=0.40$; the exact root is longer because the response falls below the parabola as $t_n$ grows.

### Step 3 — Latch delay

$$
t_2=\tau_L\ln\frac{0.5}{0.1}=\tau_L\ln5=1.609\,\tau_L .
$$

### Step 4 — Total propagation delay

$$
\frac{t_p}{\tau_L}=0.466+1.609=2.08 .
$$

With one amplifier and the same latch input, the delay was $0.511+1.609=2.12\,\tau_L$. The second stage raises the final output to 1.25, so the 0.1 level is reached at only 8 % of the final value, but the second pole slows the start of the response; the net saving is small, $0.045\,\tau_L$.
