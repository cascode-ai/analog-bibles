# Detailed solution - A099

M2 mirrors M1 with a 1:1 ratio, so $I_{REF}$ equals the current set by $R$ and the diode-connected M1. Write that current in terms of $V_{DD}$, $R$ and $V_{GS1}$, express how each parameter varies with process and temperature, and evaluate the two worst-case corners.

### Step 1 — Reference current

M1 and M2 are identical (100/1) with the same $V_{GS}$, so $I_{REF}=I_1$, where

$$
I_1=\frac{V_{DD}-V_{GS1}}{R},\qquad V_{GS1}=V_T+\sqrt{\frac{2I_1}{K'(W/L)}} .
$$

The two equations are solved together (by iteration). The overdrive is only 30–60 mV for this wide device at a few microamperes, so $V_{GS1}\approx V_T$ and $I_{REF}\approx(V_{DD}-V_T)/R$. Nominally (25 °C, 5 V, 500 kΩ, $V_T=0.7$ V):

$$
I_{REF}=\frac{5\ \mathrm V-0.7\ \mathrm V-0.039\ \mathrm V}{500\ \mathrm{k\Omega}}=8.52\ \mu\mathrm A .
$$

### Step 2 — Parameter variations

$$
R(T)=R_{25}\big[1+0.008\ ^\circ\mathrm C^{-1}(T-25\ ^\circ\mathrm C)\big],\quad R_{25}=300\text{–}700\ \mathrm{k\Omega}\ (\pm40\%),
$$

$$
V_T(T)=V_{T,25}-2.3\ \mathrm{mV}/^\circ\mathrm C\,(T-25\ ^\circ\mathrm C),\quad V_{T,25}=0.55\text{–}0.85\ \mathrm V,
$$

with $V_{DD}=4.5$–5.5 V and $K'=99$–121 µA/V². The current is smallest for the lowest $V_{DD}$, the largest $R$ and the largest $V_{GS1}$, and largest in the opposite corner. Since $R$ rises with temperature (+36% at 70 °C, −20% at 0 °C) far more strongly than $V_T$ falls, the minimum occurs at 70 °C and the maximum at 0 °C.

### Step 3 — Worst-case corners

Representative substitution for the minimum (70 °C, $V_{DD}=4.5$ V, $R_{25}=700\ \mathrm{k\Omega}$, $V_{T,25}=0.85$ V, $K'=99\ \mu\mathrm{A/V^2}$):

$$
R=700\ \mathrm{k\Omega}(1+0.008\times45)=952\ \mathrm{k\Omega},\qquad V_T=0.85-0.0023\times45=0.747\ \mathrm V,
$$

$$
I_{REF}=\frac{4.5\ \mathrm V-0.747\ \mathrm V-0.028\ \mathrm V}{952\ \mathrm{k\Omega}}=3.91\ \mu\mathrm A .
$$

| Corner | $T$ (°C) | $V_{DD}$ (V) | $R$ (kΩ) | $V_T$ (V) | $K'$ (µA/V²) | $V_{ON}$ (mV) | $I_{REF}$ (µA) |
|---|---|---|---|---|---|---|---|
| Nominal | 25 | 5.0 | 500 | 0.700 | 110 | 39 | 8.52 |
| Minimum | 70 | 4.5 | 952 | 0.747 | 99 | 28 | 3.91 |
| Maximum | 0 | 5.5 | 240 | 0.608 | 121 | 58 | 20.1 |

### Step 4 — Result

Over process, 0–70 °C and ±10% supply,

$$
3.9\ \mu\mathrm A\le I_{REF}\le20.1\ \mu\mathrm A,
$$

that is, −54% to +136% of the nominal 8.5 µA, a total spread of about 16 µA. The resistor dominates: ±40% from process and +36%/−20% over temperature, while the supply contributes about ±10% and the threshold variation only a few percent. A resistor-defined current reference of this kind is therefore poorly controlled unless a more stable resistor or a supply-independent bias scheme is used.
