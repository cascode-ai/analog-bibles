# Detailed solution - A433

With a single-pole op amp of large gain, the closed-loop DAC behaves as a first-order system whose bandwidth is the feedback factor times GB. The feedback factor shrinks as more input resistors are switched in, and the output change is largest for a full-scale step, so the worst case is the step from 0000 to 1111. The conversion time is the time for that exponential step response to settle within half an LSB.

### Step 1 — Closed-loop bandwidth

For an op amp with gain–bandwidth product GB, a loop with feedback factor $\beta$ has a single closed-loop pole at

$$
\omega_H=\beta\cdot GB .
$$

From the previous analysis of this summer, $\beta=1/(1+R_0\sum b_i/R_{i+1})=1/(1+D)$ with $D=k/16$. After the switches change, the loop settles with the new code's $\beta$.

### Step 2 — Worst case

The output step is $\Delta D\,V_{REF}$ and its time constant is $(1+D)/GB$ for the final code. Both are largest for the step from 0000 to 1111: $\Delta D=15/16$ and $\beta=16/31$, so

$$
\omega_H=\frac{16}{31}(2\pi\times10^6\ \mathrm{rad/s})=3.24\times10^6\ \mathrm{rad/s}.
$$

(For the reverse step to 0000, $\beta=1$ and the settling is almost twice as fast.)

### Step 3 — Settling to within half an LSB

The output approaches its final value exponentially, with remaining error $\tfrac{15}{16}V_{REF}e^{-\omega_Ht}$. Requiring this to fall below $\tfrac12\,\mathrm{LSB}=V_{REF}/32$:

$$
\frac{15}{16}e^{-\omega_HT}\le\frac1{32}
\quad\Rightarrow\quad
T=\frac{\ln30}{\omega_H}=\frac{3.40}{3.24\times10^6\ \mathrm{s^{-1}}}=1.05\ \mu\mathrm s .
$$

The conversion time is about 1.05 µs, i.e. about 3.4 closed-loop time constants of 0.31 µs. Referring the error to $V_{REF}$ instead of the actual step ($e^{-\omega_HT}\le1/32$) gives the slightly more conservative 1.07 µs. The op amp is assumed not to slew; GB must be converted to rad/s, since using $10^6$ rad/s would overestimate $T$ by $2\pi$.
