# Detailed solution - A085

The minimum output voltage of a current sink is the voltage at the top transistor's source plus the drain–source voltage it needs to stay saturated, $V_{ON}=V_{GS}-V_T$. Find the source voltage set by the degeneration element in each circuit and add M2's $V_{ON}$.

### Step 1 — Overdrive of M2 (both circuits)

M2 is the same 2/1 transistor at 10 µA in both circuits:

$$
V_{ON2}=\sqrt{\frac{2I}{K'(W/L)_2}}=\sqrt{\frac{2(10\ \mu\mathrm A)}{(110\ \mu\mathrm{A/V^2})(2)}}=0.302\ \mathrm V .
$$

### Step 2 — (1) Resistor-degenerated sink

The 100 kΩ resistor carries 10 µA, so M2's source is at

$$
V_{S2}=IR=(10\ \mu\mathrm A)(100\ \mathrm{k\Omega})=1.0\ \mathrm V
$$

(with $V_{GG}=1.0+0.7+0.302=2.0$ V). M2 stays saturated while $v_{DS2}\ge V_{ON2}$:

$$
v_{OUT}(\min)=V_{S2}+V_{ON2}=1.0\ \mathrm V+0.302\ \mathrm V=1.30\ \mathrm V .
$$

### Step 3 — (2) Diode-loaded cascode

The diode-connected M1 (1/22) at 10 µA has

$$
V_{GS1}=V_T+\sqrt{\frac{2I}{K'(W/L)_1}}=0.7\ \mathrm V+\sqrt{\frac{2(10\ \mu\mathrm A)(22)}{110\ \mu\mathrm{A/V^2}}}=0.7+2.0=2.7\ \mathrm V,
$$

which is M2's source voltage, so

$$
v_{OUT}(\min)=V_{GS1}+V_{ON2}=2.7\ \mathrm V+0.302\ \mathrm V=3.0\ \mathrm V .
$$

### Step 4 — Which circuit is better

Both circuits have the same output resistance (about 19 MΩ), but the resistor version needs 1.30 V and the diode version 3.0 V. To present 100 kΩ as $1/g_{m1}$ at only 10 µA, M1 must have a tiny $W/L$, which forces a 2 V overdrive, whereas the resistor drops only 1 V. The diode version avoids a large 100 kΩ resistor, but it needs a 22 µm-long device and gives up about 1.7 V of output swing. Since output swing is usually the scarcer resource, the resistor-degenerated sink of [Fig. 1] is the better choice in most cases.
