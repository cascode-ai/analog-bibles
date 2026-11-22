# Detailed solution - A398

A latch's speed is set by its regeneration time constant. Writing the node equations of the cross-coupled pair shows that this time constant is the node capacitance divided by the transconductance; with identical currents and sizes, the two latches differ only in $K'$, which enters $g_m$.

### Step 1 — Regeneration time constant

Let each output node have capacitance $C$ and resistance $R$ to ac ground (the current source in parallel with the device's $r_{ds}$), and let each transistor have transconductance $g_m$. Each node is driven by the transistor whose gate sits on the opposite node:

$$
C\frac{dv_{o1}}{dt}=-g_mv_{o2}-\frac{v_{o1}}R,\qquad
C\frac{dv_{o2}}{dt}=-g_mv_{o1}-\frac{v_{o2}}R .
$$

Subtracting gives, for the differential voltage $\Delta v=v_{o1}-v_{o2}$,

$$
C\frac{d\Delta v}{dt}=\Bigl(g_m-\frac1R\Bigr)\Delta v
\quad\Rightarrow\quad
\Delta v(t)=\Delta v(0)\,e^{t/\tau_L},\qquad
\tau_L=\frac{C}{g_m-1/R}\approx\frac C{g_m}\quad(g_mR\gg1).
$$

The same equations hold for the PMOS latch, so in both cases a small initial imbalance grows exponentially with $\tau_L\approx C/g_m$, and the time to reach a given output difference is $\tau_L\ln[\Delta v_{\text{final}}/\Delta v(0)]$.

### Step 2 — Compare the transconductances

In saturation $g_m=\sqrt{2K'(W/L)I_D}$. With equal $W/L$ and equal bias current,

$$
\frac{g_{m,N}}{g_{m,P}}=\sqrt{\frac{K'_N}{K'_P}}=\sqrt{\frac{110\ \mu\mathrm{A/V^2}}{50\ \mu\mathrm{A/V^2}}}=1.48 .
$$

The node capacitances are essentially the same, since they consist of the gate and junction capacitances of devices with equal dimensions (and of identical current sources).

### Step 3 — Conclusion

$$
\frac{\tau_{L,P}}{\tau_{L,N}}=\frac{g_{m,N}}{g_{m,P}}\approx1.48,
$$

so the NMOS latch (a) is faster: it regenerates with a time constant about 1.5 times shorter, because electrons have higher mobility than holes, which gives the n-channel devices a larger $K'$ and hence a larger $g_m$ at the same current and size. Its loop gain $g_mR$ is also larger, which makes the approximation $\tau_L\approx C/g_m$ even better.
