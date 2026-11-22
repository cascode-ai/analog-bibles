# Detailed solution - A363

Each turn-on voltage is the common-mode level at which the tail device of that stage reaches the edge of saturation. For the n-channel stage the input gate sits $V_{GS}$ above the tail node, so the stage turns off at low $V_{icm}$; for the p-channel stage the input gate sits $V_{SG}$ below its tail node, so it turns off at high $V_{icm}$. Compute both from the saturation voltages and thresholds.

### Step 1 — Saturation voltages

With $V_{ON}=\sqrt{2I_D/[K'(W/L)]}$, $W/L=10$, 100 µA in each tail and 50 µA in each input device:

$$
V_{DSN5}(\mathrm{sat})=\sqrt{\frac{2(100\ \mu\mathrm A)}{(110\ \mu\mathrm{A/V^2})(10)}}=0.426\ \mathrm V,\qquad
V_{ON,N1}=\sqrt{\frac{2(50\ \mu\mathrm A)}{(110\ \mu\mathrm{A/V^2})(10)}}=0.302\ \mathrm V,
$$
$$
V_{SDP5}(\mathrm{sat})=\sqrt{\frac{2(100\ \mu\mathrm A)}{(50\ \mu\mathrm{A/V^2})(10)}}=0.632\ \mathrm V,\qquad
V_{ON,P1}=\sqrt{\frac{2(50\ \mu\mathrm A)}{(50\ \mu\mathrm{A/V^2})(10)}}=0.447\ \mathrm V .
$$

### Step 2 — n-channel turn-on voltage

MN5 stays saturated while its drain, the common source of MN1/MN2, is at least $V_{DSN5}(\mathrm{sat})$ above ground. The gates are one $V_{GSN1}=V_{TN}+V_{ON,N1}$ higher:

$$
V_{onn}=V_{DSN5}(\mathrm{sat})+V_{TN}+V_{ON,N1}=0.426+0.7+0.302=1.43\ \mathrm V .
$$

Below this common-mode level the n-channel stage cannot keep MN1, MN2 and MN5 saturated.

### Step 3 — p-channel turn-on voltage

MP5 stays saturated while the common source of MP1/MP2 is at least $V_{SDP5}(\mathrm{sat})$ below $V_{DD}$; the gates are one $V_{SGP1}=|V_{TP}|+V_{ON,P1}$ lower:

$$
V_{onp}=V_{DD}-V_{SDP5}(\mathrm{sat})-|V_{TP}|-V_{ON,P1}=V_{DD}-0.632-0.7-0.447=V_{DD}-1.78\ \mathrm V .
$$

Above this level the p-channel stage turns off. For example, $V_{onp}=0.72$ V for $V_{DD}=2.5$ V.

### Step 4 — Overlap or dead zone

The two stages together cover the whole range only if $V_{onp}\ge V_{onn}$, i.e.

$$
V_{DD}\ge V_{onn}+1.78\ \mathrm V=3.21\ \mathrm V .
$$

For $V_{DD}>3.21$ V both stages are on between $V_{onn}$ and $V_{onp}$. For $V_{DD}<3.21$ V a dead zone appears, $V_{onp}<V_{icm}<V_{onn}$, in which neither stage is fully on; at $V_{DD}=2.5$ V it extends from 0.72 V to 1.43 V.
