# Detailed solution - A147

The offset is the differential input that balances the two outputs. With diode-connected loads, equal outputs mean equal source–gate voltages on M3 and M4, so the load currents are fixed by the load thresholds; the input voltages needed to carry those currents then follow from the square law of M1 and M2. Writing $V_{OS}=V_{GS1}-V_{GS2}$ in this way separates the threshold mismatch of the input pair from that of the loads, and shows how each is weighted.

### Step 1 — Assumptions

- All devices are saturated and obey the square law $I_D=\tfrac{\beta}{2}(V_{GS}-V_T)^2$; channel-length modulation and the body effect are neglected (the sources of M1 and M2 are common, so a body effect would be identical for both).
- Nominal values: $\beta_1=\beta_2=10^{-5}$ A/V² and $\beta_3=\beta_4=10^{-6}$ A/V², with every $\beta$ deviating by the same fraction (up to ±5 %), as stated. Then $\beta_3/\beta_1=\beta_4/\beta_2=0.1$ exactly.
- The four thresholds vary independently within $|V_{Ti}|=1\pm0.01$ V.
- $V_{OS}$ is defined as the value of $v_{G1}-v_{G2}$ that makes $v_{o1}=v_{o2}$.

### Step 2 — Load currents at balance

M3 and M4 have their sources at $V_{DD}$ and are diode-connected, so $v_{o1}=v_{o2}$ means both have the same $V_{SG}$:

$$
I_1=\frac{\beta_3}{2}(V_{SG}-|V_{T3}|)^2,\qquad I_2=\frac{\beta_4}{2}(V_{SG}-|V_{T4}|)^2,
$$

with $I_1+I_2=I_{SS}$ setting $V_{SG}$.

### Step 3 — Input voltages and offset

M1 carries $I_1$, so

$$
V_{GS1}=V_{T1}+\sqrt{\frac{2I_1}{\beta_1}}=V_{T1}+\sqrt{\frac{\beta_3}{\beta_1}}\,(V_{SG}-|V_{T3}|),
$$

and likewise $V_{GS2}=V_{T2}+\sqrt{\beta_4/\beta_2}\,(V_{SG}-|V_{T4}|)$. Subtracting, with $\beta_3/\beta_1=\beta_4/\beta_2$, the common $V_{SG}$ cancels:

$$
V_{OS}=V_{GS1}-V_{GS2}=(V_{T1}-V_{T2})+\sqrt{\frac{\beta_3}{\beta_1}}\,(|V_{T4}|-|V_{T3}|).
$$

Two consequences: the equal fractional $\beta$ changes produce no offset, and $V_{OS}$ does not depend on $I_{SS}$. The load threshold mismatch is weighted by $\sqrt{\beta_3/\beta_1}=g_{m3}/g_{m1}=0.316$, because a load mismatch is referred to the input through the ratio of transconductances.

### Step 4 — Worst case

Each threshold difference can reach $1.01-0.99=0.02$ V. The worst case has both differences at their extremes with signs that add:

$$
|V_{OS}|_{\max}=0.02\ \mathrm V+\sqrt{0.1}\,(0.02\ \mathrm V)=0.02+0.0063\ \mathrm V=0.0263\ \mathrm V\approx26\ \mathrm{mV}.
$$

The input pair contributes 20 mV directly; the loads add 6.3 mV, reduced by the factor 0.316. Making the loads weaker relative to the input pair (smaller $\beta_3/\beta_1$) would reduce the load contribution further.
