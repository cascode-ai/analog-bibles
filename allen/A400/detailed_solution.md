# Detailed solution - A400

The latch regenerates its initial output difference as $\Delta V_{out}=\Delta V_ie^{t/\tau_L}$ with $\tau_L\approx C/g_m$. The node capacitance is fixed by the device size, so only $g_m$ changes with the larger current; the four times then follow from the logarithm of the required gain in output difference.

### Step 1 — Regeneration model

For the cross-coupled pair with node capacitance $C$ and node resistance $R$,

$$
C\frac{d\Delta V_{out}}{dt}=\Bigl(g_m-\frac1R\Bigr)\Delta V_{out}
\quad\Rightarrow\quad
\Delta V_{out}(t)=\Delta V_i\,e^{t/\tau_L},\qquad \tau_L\approx\frac C{g_m}\ \ (g_mR\gg1),
$$

so the time to reach a target difference is $t=\tau_L\ln(\Delta V_{out}/\Delta V_i)$.

### Step 2 — Time constant at 50 µA

$$
g_m=\sqrt{2K'_N(W/L)I_D}=\sqrt{2(110\ \mu\mathrm{A/V^2})(10)(50\ \mu\mathrm A)}=332\ \mu\mathrm S,\qquad
g_mR=\frac{332\ \mu\mathrm S}{(0.04\ \mathrm{V^{-1}})(50\ \mu\mathrm A)}=166\gg1 .
$$

The gate–source capacitance does not depend on current:

$$
C\approx\tfrac23WLC_{ox}=\tfrac23(10\ \mu\mathrm m)(1\ \mu\mathrm m)(24.7\times10^{-4}\ \mathrm{F/m^2})=16.5\ \mathrm{fF},\qquad
\tau_L=\frac{16.5\ \mathrm{fF}}{332\ \mu\mathrm S}=0.050\ \mathrm{ns}.
$$

Because $g_m\propto\sqrt{I_D}$, raising the current fivefold shortens $\tau_L$ by $\sqrt5$ compared with 10 µA (0.111 ns).

### Step 3 — Times to full swing and to half swing

With $x=\Delta V_i/(V_{OH}-V_{OL})$, the full-swing time is $\tau_L\ln(1/x)$ and the propagation delay is $t_p=\tau_L\ln(0.5/x)$:

| $\Delta V_i$ | To $\Delta V_{out}=V_{OH}-V_{OL}$ | $t_p$ (to $0.5(V_{OH}-V_{OL})$) |
|---|---|---|
| $0.01(V_{OH}-V_{OL})$ | $\tau_L\ln100=4.61\tau_L=0.23$ ns | $\tau_L\ln50=3.91\tau_L=0.19$ ns |
| $0.1(V_{OH}-V_{OL})$ | $\tau_L\ln10=2.30\tau_L=0.11$ ns | $\tau_L\ln5=1.61\tau_L=0.080$ ns |

The full-swing values are an estimate from the small-signal exponential: as the output difference approaches the full swing one device leaves saturation and the growth slows, so the true time to the final levels is somewhat longer. The half-swing propagation delays are within the range where the model applies well.
