# Detailed solution - A165

The input offset voltage is the differential input that restores the balanced state, in which the output sits at the mirror-node voltage ($V_{SD4}=V_{SD3}$). Write the current imbalance produced by the load mismatch, convert it to a gate-voltage difference of the input pair, add the input pair's own mismatch, and choose the signs of all tolerances so that every term adds.

### Step 1 — Assumptions and device parameters

- Square-law devices in saturation; $\lambda$ is neglected, so balance means $I_1=I_3$ and $I_2=I_4$ with equal $V_{SG}$ on M3 and M4.
- M1 and M2 share a source, so the body effect does not change their threshold difference and is neglected.
- As the problem directs, each transistor's $V_T$ and $K'$ may sit anywhere in its tolerance band independently, so the worst case puts the two devices of each pair at opposite extremes: $\Delta V_T=0.3$ V and $\Delta\beta/\beta=(1.1-0.9)/1=0.2$ for each pair. This is very pessimistic: the tabulated spreads are process (lot-to-lot) variations shared by neighbouring devices, and real matched pairs differ by millivolts.

With $W_1/L_1=W_2/L_2=1$ and $W_3/L_3=W_4/L_4=0.1$, $\beta=K'W/L$ gives

$$
\beta_1=\beta_2=110\ \mu\mathrm{A/V^2},\qquad \beta_3=\beta_4=5\ \mu\mathrm{A/V^2}.
$$

At balance each side carries $I=I_{SS}/2$, so $V_{ov1}=\sqrt{2I/\beta_1}=\sqrt{I_{SS}/\beta_1}$, $g_{m1}=2I/V_{ov1}$ and

$$
\frac{g_{m3}}{g_{m1}}=\sqrt{\frac{\beta_3}{\beta_1}}=\sqrt{\frac{5}{110}}=0.213 .
$$

### Step 2 — First-order offset expression

The loads share $V_{SG}$, so their current difference is set by their mismatch. Expanding $I_D=\frac{\beta}{2}(V_{SG}-|V_T|)^2$ to first order about the mean device:

$$
I_3-I_4=I\,\frac{\Delta\beta_{34}}{\beta}-g_{m3}\,\Delta V_{T34},
$$

with $\Delta\beta_{34}=\beta_3-\beta_4$ and $\Delta V_{T34}=|V_{T3}|-|V_{T4}|$. Balance forces the input pair to carry the same difference, $I_1-I_2=I_3-I_4$. The required gate voltages are $V_{GS}=V_T+\sqrt{2I_D/\beta}$, so to first order

$$
V_{OS}=V_{GS1}-V_{GS2}=\Delta V_{T12}+\frac{I_1-I_2}{g_{m1}}-\frac{V_{ov1}}2\,\frac{\Delta\beta_{12}}{\beta}.
$$

Substituting the load imbalance and $I/g_{m1}=V_{ov1}/2$:

$$
V_{OS}\approx\Delta V_{T12}-\frac{g_{m3}}{g_{m1}}\,\Delta V_{T34}+\frac{V_{ov1}}2\left(\frac{\Delta\beta_{34}}{\beta}-\frac{\Delta\beta_{12}}{\beta}\right).
$$

The load threshold mismatch is reduced by $g_{m3}/g_{m1}$, because a load current error is divided by the larger input-pair transconductance.

### Step 3 — Worst case as a function of $I_{SS}$

Choosing the signs so that all four terms add, with $|\Delta V_T|=0.3$ V and $|\Delta\beta/\beta|=0.2$ for each pair:

$$
|V_{OS}|_{\max}\approx0.3\ \mathrm V+(0.213)(0.3\ \mathrm V)+\frac{V_{ov1}}2(0.2+0.2)
=0.364\ \mathrm V+0.2\sqrt{\frac{I_{SS}}{110\ \mu\mathrm{A/V^2}}}.
$$

The threshold terms are independent of bias; the $\beta$ terms grow with the overdrive, i.e. as $\sqrt{I_{SS}}$.

### Step 4 — Value at $I_{SS}=100\ \mu$A

$$
V_{ov1}=\sqrt{\frac{100\ \mu\mathrm A}{110\ \mu\mathrm{A/V^2}}}=0.953\ \mathrm V,\qquad
|V_{OS}|_{\max}\approx0.364+0.2(0.953)=0.555\ \mathrm V\approx0.55\ \mathrm V.
$$

Solving the square-law equations exactly at every combination of tolerance extremes gives the same worst case, 0.555 V (input pair at $V_{T1}=0.85$ V, $V_{T2}=0.55$ V, $\beta_1$ low, $\beta_2$ high; loads with $|V_{T3}|$ low, $|V_{T4}|$ high, $\beta_3$ high, $\beta_4$ low, or the mirror image).

If the load is assumed perfectly matched, only the input pair counts:

$$
|V_{OS}|=0.3+\sqrt{\frac{I_{SS}}{0.9\beta_1}}-\sqrt{\frac{I_{SS}}{1.1\beta_1}}=0.396\ \mathrm V\approx0.40\ \mathrm V .
$$

These sizes make the bias demanding: with $W_3/L_3=0.1$, $V_{SG3}=0.7+\sqrt{2(50\ \mu\mathrm A)/(5\ \mu\mathrm{A/V^2})}\approx0.7+4.5$ V, so the stage needs a large supply.
