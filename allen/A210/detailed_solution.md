# Detailed solution - A210

Looking back into the output of a source follower one sees about $1/g_m$ of the follower device, in parallel with its $r_{ds}$ and with whatever else hangs on the node. First find M1's bias current at $v_{OUT}=0$, then $g_{m1}$.

### Step 1 — Bias current at $v_{OUT}=0$

At $v_{OUT}=0$ the 10-kΩ resistor carries no current and the capacitor none in steady state, so by KCL M1 sinks the entire 200 µA of the current source: $I_{D1}=200\ \mu$A.

### Step 2 — Small-signal parameters

$$
g_{m1}=\sqrt{2K'_P\frac WL I_{D1}}=\sqrt{2(50\ \mu\mathrm{A/V^2})(300)(200\ \mu\mathrm A)}=2.45\ \mathrm{mS},\qquad
g_{ds1}=\lambda I_{D1}=(0.05\ \mathrm{V^{-1}})(200\ \mu\mathrm A)=10\ \mu\mathrm S .
$$

### Step 3 — Output resistance

With $v_{IN}$ at ac ground, a test voltage at M1's source changes $v_{sg1}$ directly, so M1 presents $g_{m1}+g_{ds1}$; the ideal current source adds nothing:

$$
R_{out}=\frac{1}{g_{m1}+g_{ds1}}=\frac{1}{2.46\ \mathrm{mS}}=407\ \Omega\approx\frac1{g_{m1}}=408\ \Omega .
$$

This is the resistance looking into the amplifier. Including the 10-kΩ load in parallel gives 391 Ω. If the $(1+\lambda V_{SD})$ factor is kept in the bias ($V_{SD1}=2.5$ V), $g_{m1}$ rises to about 2.6 mS and $R_{out}$ falls to about 384 Ω.
