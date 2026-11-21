# Detailed solution - A501

A timing error $\Delta t$ in the sampling instant produces a voltage error equal to the input slope times $\Delta t$. The worst case is at the zero crossing of the sinusoid, where the slope is largest. Require that error to be no larger than half an LSB and solve for the largest integer number of bits.

### Step 1 — Worst-case jitter error

For $v_{in}(t)=V_p\sin\omega t$ the slope is largest at the zero crossings:

$$
\left|\frac{dv_{in}}{dt}\right|_{max}=\omega V_p,\qquad
\Delta V=\omega V_p\,\Delta t .
$$

The peak-to-peak value is $V_{REF}$, so $V_p=V_{REF}/2$. With $\omega=2\pi(1\ \mathrm{MHz})$ and $\Delta t=200$ ps:

$$
\Delta V=2\pi(10^{6}\ \mathrm{s^{-1}})(0.5\,V_{REF})(200\times10^{-12}\ \mathrm s)=6.28\times10^{-4}\,V_{REF}.
$$

### Step 2 — Half-LSB requirement

With 1 LSB $=V_{REF}/2^N$:

$$
6.28\times10^{-4}\,V_{REF}\le\frac{V_{REF}}{2^{N+1}}
\;\Longrightarrow\;
2^{N+1}\le1592
\;\Longrightarrow\;
N+1\le\log_2 1592=10.64 .
$$

### Step 3 — Number of bits

The largest integer is

$$
N=9\ \text{bits}.
$$

Check: at 9 bits, $\tfrac12$ LSB $=V_{REF}/1024=9.8\times10^{-4}V_{REF}$, larger than the $6.28\times10^{-4}V_{REF}$ error; at 10 bits it would be $4.9\times10^{-4}V_{REF}$, smaller than the error.
