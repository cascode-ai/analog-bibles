# Detailed solution - A203

The slew rate sets the current that must charge and discharge $C_L$: M2, a fixed current source, limits the positive slew, and M1, driven by $v_{IN}=V_{DD}$, must sink M2's current plus the discharge current for the negative slew. Size M2 first, then M1, using the device region that actually applies at $v_{OUT}=0$, and finally check that both extremes of the ±3-V swing can be reached.

### Step 1 — Required slew current

At $v_{OUT}=0$ the resistor carries no current, so all of the slewing current flows in $C_L$:

$$
I=C_L\,SR=(1\ \mathrm{nF})(5\ \mathrm{V/\mu s})=5\ \mathrm{mA}.
$$

### Step 2 — Sizing M2 (positive slew)

When $v_{OUT}$ rises, M1 can turn off completely and the most current available to charge $C_L$ is M2's fixed current $I_Q$. M2 has $V_{SG2}=V_{DD}-V_{GG2}=5-2=3$ V and, at $v_{OUT}=0$, $V_{SD2}=5\ \mathrm V>V_{SG2}-|V_{TP}|=2.3$ V, so it is saturated:

$$
I_Q=\frac{K'_P}{2}\frac{W_2}{L_2}(V_{SG2}-|V_{TP}|)^2=(25\ \mu\mathrm{A/V^2})\frac{W_2}{L_2}(2.3\ \mathrm V)^2\ge5\ \mathrm{mA}
\quad\Rightarrow\quad \frac{W_2}{L_2}\ge37.8 .
$$

Choose $W_2/L_2=38$ ($38\ \mu$m/1 µm), giving $I_Q=5.03$ mA.

### Step 3 — Sizing M1 (negative slew)

When $v_{OUT}$ falls, M1 must sink $I_Q$ plus the 5-mA discharge current, about 10 mA, with $v_{IN}=V_{DD}$, i.e. $V_{GS1}=10$ V. At $v_{OUT}=0$, $V_{DS1}=5\ \mathrm V<V_{GS1}-V_{TN}=9.3$ V, so M1 is in nonsaturation:

$$
i_{D1}=K'_N\frac{W_1}{L_1}\left[(V_{GS1}-V_{TN})V_{DS1}-\frac{V_{DS1}^2}2\right]
=(110\ \mu\mathrm{A/V^2})\frac{W_1}{L_1}\left[(9.3)(5)-\frac{5^2}2\right]=3.74\ \mathrm{mA}\cdot\frac{W_1}{L_1}.
$$

Requiring $i_{D1}\ge I_Q+5\ \mathrm{mA}=10.03$ mA gives $W_1/L_1\ge2.68$. Choose $W_1/L_1=3$ (3 µm/1 µm): M1 then sinks 11.2 mA, leaving 6.2 mA for $C_L$, a negative slew rate of 6.2 V/µs. The saturation formula would suggest only $W_1/L_1\ge2.1$, which is optimistic: at 2.1 M1 sinks only about 7.9 mA at $v_{OUT}=0$.

### Step 4 — Swing check

- **$v_{OUT}=+3$ V:** $R_L$ needs 0.3 mA. M2 has $V_{SD2}=2$ V and is in nonsaturation, but can still supply $(50\ \mu\mathrm{A/V^2})(38)[(2.3)(2)-2^2/2]=4.94$ mA ≫ 0.3 mA, with M1 nearly off.
- **$v_{OUT}=-3$ V:** M1 must sink $I_Q+0.3\ \mathrm{mA}=5.33$ mA with $V_{DS1}=2$ V: $(330\ \mu\mathrm{A/V^2})[(9.3)(2)-2^2/2]=5.48$ mA ≥ 5.33 mA.

Both extremes are reached, so $W_2/L_2=38\ \mu$m/1 µm and $W_1/L_1=3\ \mu$m/1 µm meet the ±3-V swing and the 5-V/µs slew rate at $v_{OUT}=0$. (If the slew rate had to hold over the whole ±3-V range, roughly $W_1/L_1\approx6$ and $W_2/L_2\approx41$ would be needed.)
