# Detailed solution - A123

M1 is the p-channel input device with its source at $V_{DD}$ and its gate at $v_{IN}$, so the quantity its square law fixes is the source–gate voltage $V_{SG1}=V_{DD}-v_{IN}$, not $v_{IN}$ itself. Find $V_{SG1}$ for 100 µA with M1's own parameters, then convert it to the gate voltage.

### Step 1 — Source–gate voltage of M1

M1 is saturated and channel-length modulation is neglected for the bias. With $K'_P(W_1/L_1)=(50\ \mu\mathrm{A/V^2})(5)=250\ \mu\mathrm{A/V^2}$:

$$
I_D=\frac{K'_P}{2}\frac{W_1}{L_1}(V_{SG1}-|V_{TP}|)^2
\quad\Rightarrow\quad
V_{SG1}-0.7\ \mathrm V=\sqrt{\frac{2(100\ \mu\mathrm A)}{250\ \mu\mathrm{A/V^2}}}=\sqrt{0.8\ \mathrm{V^2}}=0.894\ \mathrm V,
$$

$$
V_{SG1}=1.594\ \mathrm V .
$$

### Step 2 — Gate voltage

The source of M1 is at $V_{DD}$, so its gate must sit $V_{SG1}$ below the supply:

$$
v_{IN}=V_{DD}-V_{SG1}=V_{DD}-1.594\ \mathrm V,
$$

which is $5-1.594=3.41$ V for $V_{DD}=5$ V.

M2's gate voltage $V_{GG}$ (2.05 V for 100 µA) sets the current; the dc input level is the one at which M1 conducts that same current. Any deviation of $v_{IN}$ from it moves the high-impedance output toward a rail, so in practice this level is established by feedback.
