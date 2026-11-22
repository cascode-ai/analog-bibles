# Detailed solution - A500

The sample-and-hold settles exponentially, so the residual error at the end of the available time is a fixed fraction of the step. Require that fraction of a full-scale step to be no larger than half an LSB of an $N$-bit converter, and take the largest integer $N$ that satisfies it.

### Step 1 — Residual settling error after one sampling period

From the given step response, the error remaining at time $t$ is

$$
\varepsilon(t)=V_I-v_{OUT}(t)=V_I\,e^{-t\cdot BW}.
$$

The whole sampling period is available, so $t=T=1/f_s=1/(1\ \mathrm{MHz})=1\ \mu\mathrm s$, and

$$
t\cdot BW=(1\ \mu\mathrm s)(2\pi\times10^{6}\ \mathrm{rad/s})=2\pi .
$$

For the worst case, a full-scale step $V_I=V_{REF}$:

$$
\varepsilon(T)=V_{REF}\,e^{-2\pi}=1.867\times10^{-3}\,V_{REF}.
$$

### Step 2 — Half-LSB requirement

One LSB of an $N$-bit converter spanning $V_{REF}$ is $V_{REF}/2^N$, so the settling requirement is

$$
V_{REF}\,e^{-2\pi}\le\frac{V_{REF}}{2^{N+1}}
\;\Longrightarrow\;
2^{N+1}\le e^{2\pi}=535.5
\;\Longrightarrow\;
N+1\le\log_2 535.5=9.06 .
$$

### Step 3 — Number of bits

The largest integer satisfying this is

$$
N=8\ \text{bits}.
$$

Check: at 8 bits, $\tfrac12$ LSB $=V_{REF}/512=1.95\times10^{-3}V_{REF}$, slightly larger than the $1.87\times10^{-3}V_{REF}$ residual error; at 9 bits, $\tfrac12$ LSB $=0.98\times10^{-3}V_{REF}$ would be too small.
