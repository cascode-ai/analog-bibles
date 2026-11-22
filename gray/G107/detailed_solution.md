# Detailed solution - G107

The input offset voltage is the differential input $V_{BE1}-V_{BE2}$ that brings the output to its balanced value $V_{SUP}-|V_{BE(\text{on})}|$. At that point both load transistors have equal $V_{CE}$, so the mirror relation involves only the pnp $I_S$ ratio. Find the collector currents the load forces on $Q_1$ and $Q_2$, then convert their ratio, together with the npn $I_S$ ratio, into $V_{BE1}-V_{BE2}$. Three effects contribute: the pnp mismatch, the npn mismatch, and the systematic base-current loss of the pnp mirror.

### Step 1 — Currents set by the load

With the output at $V_{SUP}-|V_{BE(\text{on})}|$, $V_{CE4}=V_{CE3}$, so the Early effect plays no part. $Q_3$ and $Q_4$ have the same $V_{EB}$, so

$$
I_{C4}=I_{C3}\frac{I_{S4}}{I_{S3}} .
$$

KCL at the collector of $Q_1$ (the diode node of $Q_3$): $Q_1$ supplies the collector current of $Q_3$ plus both pnp base currents,

$$
I_{C1}=I_{C3}+\frac{I_{C3}+I_{C4}}{\beta_F}\approx I_{C3}\left(1+\frac2{\beta_F}\right),\qquad I_{C2}=I_{C4}
$$

(npn base currents neglected, and no load current at the output).

### Step 2 — Offset voltage

$$
V_{OS}=V_{BE1}-V_{BE2}=V_T\ln\left(\frac{I_{C1}}{I_{S1}}\cdot\frac{I_{S2}}{I_{C2}}\right)
=V_T\ln\left[\frac{I_{S3}}{I_{S4}}\cdot\frac{I_{S2}}{I_{S1}}\left(1+\frac2{\beta_F}\right)\right].
$$

For small mismatches, with $\Delta I_{SP}/I_{SP}=(I_{S3}-I_{S4})/I_S$ and $\Delta I_{SN}/I_{SN}=(I_{S1}-I_{S2})/I_S$,

$$
V_{OS}\approx V_T\left(\frac{\Delta I_{SP}}{I_{SP}}-\frac{\Delta I_{SN}}{I_{SN}}+\frac2{\beta_F}\right).
$$

The first two terms are random, with either sign. The last is systematic: the mirror's base currents always make $I_{C1}$ larger than $I_{C2}$.

### Step 3 — Worst case

The random terms take their worst-case magnitudes (5 % each) with the signs that add to the systematic term:

$$
|V_{OS}|=(26\ \mathrm{mV})\left(0.05+0.05+\frac2{15}\right)=(26\ \mathrm{mV})(0.233)=6.1\ \mathrm{mV}.
$$

Keeping the exact logarithms, with $I_{S4}=0.95I_{S3}$, $I_{S2}=1.05I_{S1}$ and base current $(I_{C3}+0.95I_{C3})/\beta_F$, gives

$$
|V_{OS}|=(26\ \mathrm{mV})\ln\frac{(1.05)(1+1.95/15)}{0.95}=(26\ \mathrm{mV})\ln(1.249)=5.8\ \mathrm{mV}.
$$

The worst-case offset is about 6 mV. More than half of it comes from the low $\beta_F$ of the lateral pnp transistors, which is why an emitter-follower buffer (beta helper) is often added to the mirror.
