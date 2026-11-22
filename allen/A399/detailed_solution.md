# Detailed solution - A399

Once enabled, the cross-coupled pair amplifies its initial output difference exponentially with the regeneration time constant $\tau_L$. Compute $\tau_L$ from the device's transconductance and node capacitance, then solve the exponential for the time to reach half the output swing.

### Step 1 — Regeneration model

For each node with capacitance $C$ and resistance $R$, driven by the transistor whose gate sits on the other node, the differential voltage obeys

$$
C\frac{d\Delta V_{out}}{dt}=\Bigl(g_m-\frac1R\Bigr)\Delta V_{out}
\quad\Rightarrow\quad
\Delta V_{out}(t)=\Delta V_i\,e^{t/\tau_L},\qquad
\tau_L=\frac{C}{g_m-1/R}\approx\frac C{g_m}.
$$

The positive exponent comes from the positive feedback: each device pushes its drain node away from the other node.

### Step 2 — Device parameters

With $g_m=\sqrt{2K'_N(W/L)I_D}$ and $R\approx r_{ds}=1/(\lambda_NI_D)$:

$$
g_m=\sqrt{2(110\ \mu\mathrm{A/V^2})(10)(10\ \mu\mathrm A)}=148\ \mu\mathrm S,\qquad
R=\frac1{(0.04\ \mathrm{V^{-1}})(10\ \mu\mathrm A)}=2.5\ \mathrm{M\Omega},
$$

so $g_mR=371\gg1$ and $1/R$ can be neglected beside $g_m$. The node capacitance is

$$
C\approx\tfrac23WLC_{ox}=\tfrac23(10\ \mu\mathrm m)(1\ \mu\mathrm m)(24.7\times10^{-4}\ \mathrm{F/m^2})=16.5\ \mathrm{fF}.
$$

### Step 3 — Time constant

$$
\tau_L=\frac C{g_m}=\frac{16.5\ \mathrm{fF}}{148\ \mu\mathrm S}=0.111\ \mathrm{ns}.
$$

### Step 4 — Time to half the output swing

Setting $\Delta V_{out}=0.5(V_{OH}-V_{OL})$ in $\Delta V_{out}=\Delta V_ie^{t/\tau_L}$:

$$
t=\tau_L\ln\frac{0.5(V_{OH}-V_{OL})}{\Delta V_i}.
$$

| $\Delta V_i$ | $\ln[0.5(V_{OH}-V_{OL})/\Delta V_i]$ | $t$ |
|---|---|---|
| $0.01(V_{OH}-V_{OL})$ | $\ln50=3.91$ | 0.43 ns |
| $0.1(V_{OH}-V_{OL})$ | $\ln5=1.61$ | 0.18 ns |

A tenfold larger initial imbalance saves only $\tau_L\ln10=0.26$ ns, because the delay depends logarithmically on $\Delta V_i$; this is why a latch is fast even when driven by a small signal. The exponential model holds while both devices stay saturated; near the end of the swing one device starts to turn off and the growth slows.
