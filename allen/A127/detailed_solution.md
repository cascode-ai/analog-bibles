# Detailed solution - A127

Each transistor's channel noise is a drain-current source $\overline{i_n^2}=\tfrac{8kT}{3}g_m$. Find the noise current that each one delivers into the output node with the input shorted, add the powers (the sources are uncorrelated), and divide by $g_{m1}^2$ to refer the total to the input. M1 and M2 inject directly at the output; M3's noise first produces a voltage on the mirror gate line, which M2 then converts into output current.

### Step 1 — Transconductances

All devices carry 100 µA and have $W/L=10$. With $g_m=\sqrt{2K'(W/L)I_D}$:

$$
g_{m1}=\sqrt{2(110\ \mu\mathrm{A/V^2})(10)(100\ \mu\mathrm A)}=469\ \mu\mathrm S,\qquad
g_{m2}=g_{m3}=\sqrt{2(50\ \mu\mathrm{A/V^2})(10)(100\ \mu\mathrm A)}=316\ \mu\mathrm S .
$$

### Step 2 — Gate-referred density of each device

A drain noise current $\overline{i_{ni}^2}$ is equivalent to a gate voltage $e_{ni}^2=\overline{i_{ni}^2}/g_{mi}^2=8kT/(3g_{mi})$. With $\tfrac{8kT}{3}=\tfrac83(1.38\times10^{-23}\ \mathrm{J/K})(300\ \mathrm K)=1.104\times10^{-20}$ J:

$$
e_{n1}^2=\frac{1.104\times10^{-20}}{469\ \mu\mathrm S}=2.35\times10^{-17}\ \mathrm{V^2/Hz},\qquad
e_{n2}^2=e_{n3}^2=\frac{1.104\times10^{-20}}{316\ \mu\mathrm S}=3.49\times10^{-17}\ \mathrm{V^2/Hz}.
$$

### Step 3 — Output noise current from each device

With $v_{in}=0$, short-circuit the output and find the current each source delivers into it:

- M1: its drain noise current flows straight into the output, $g_{m1}^2e_{n1}^2$.
- M2: likewise, $g_{m2}^2e_{n2}^2$.
- M3: the reference source is ideal (infinite impedance), so M3's noise current must flow through M3's own diode conductance $g_{m3}$. It produces a gate-line voltage of magnitude $\sqrt{\overline{i_{n3}^2}}/g_{m3}=e_{n3}$, and M2 converts this into an output current $g_{m2}e_{n3}$, i.e. $g_{m2}^2e_{n3}^2$.

So M3 contributes as much as M2.

### Step 4 — Equivalent input noise

Dividing the total output current noise by $g_{m1}^2$:

$$
e_{eq}^2=e_{n1}^2+\left(\frac{g_{m2}}{g_{m1}}\right)^2\left(e_{n2}^2+e_{n3}^2\right),
\qquad
\left(\frac{g_{m2}}{g_{m1}}\right)^2=\frac{K'_P}{K'_N}=\frac{50}{110}=0.4545 .
$$

$$
e_{eq}^2=2.35\times10^{-17}+0.4545\,(6.98\times10^{-17})=5.53\times10^{-17}\ \mathrm{V^2/Hz},
\qquad e_{eq}=7.4\ \mathrm{nV/\sqrt{Hz}}.
$$

If M3's noise were ignored, treating M2's gate as a noiseless bias, the result would be $\sqrt{2.35\times10^{-17}+0.4545(3.49\times10^{-17})}=6.3$ nV/√Hz. The load devices contribute more than half of the total noise power, because their $g_m$ is not small compared with $g_{m1}$; making $g_{m2}/g_{m1}$ smaller (longer, narrower loads) would reduce it.
