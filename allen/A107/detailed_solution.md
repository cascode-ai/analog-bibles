# Detailed solution - A107

The matched NMOS pair M1–M2, carrying equal currents, forces its two source voltages to be equal. That puts the difference between the diode voltages of D1 and D2 across $R_1$, which defines a PTAT current. The mirror copies this current into $R_2$ and D3, so $V_{REF}$ is a diode voltage plus a scaled PTAT voltage. The zero-TC condition at $T_0$, written with the given diode model, fixes $R_2$ and $V_{REF}$.

### Step 1 — Equal currents force equal source voltages

The cascoded PMOS mirror M3–M8 delivers $I_1=I_2=I_3\equiv I$. M1 and M2 are identical, saturated and share a gate, and they carry the same current, so the square law gives $V_{GS1}=V_{GS2}$. Their gates are at the same voltage, so their sources are too:

$$
V_{D1}=IR_1+V_{D2}.
$$

The two sources are at the same potential, so even with the body effect the thresholds of M1 and M2 stay equal and the relation is exact.

### Step 2 — PTAT current through $R_1$

For a forward-biased diode $V_D=V_t\ln[I/(AJ_s)]$. D2 has $n$ times the area of D1 and both carry $I$:

$$
IR_1=V_{D1}-V_{D2}=V_t\ln n
\quad\Rightarrow\quad
I=\frac{V_t\ln n}{R_1}=\frac{(0.026\ \mathrm V)(2.3026)}{10\ \mathrm{k\Omega}}=5.99\ \mu\mathrm A .
$$

$V_t\ln n=59.87$ mV is proportional to $T$, so $I$ is a PTAT current, the bias assumed by the diode model.

### Step 3 — Output voltage

M5 supplies $I_3=I$ to $R_2$ in series with D3, and $V_{REF}$ is taken across this series combination:

$$
V_{REF}=V_{D3}+IR_2=V_{D3}+\frac{R_2}{R_1}V_t\ln n .
$$

### Step 4 — Zero temperature coefficient

Differentiate the diode model at $T=T_0$, where the derivative of $T\ln(T/T_0)$ equals 1:

$$
\left.\frac{dV_{D3}}{dT}\right|_{T_0}=-\frac{V_{G0}-V_{D3}+(\gamma-\alpha)V_{t0}}{T_0},
\qquad
\frac{d}{dT}\left(\frac{R_2}{R_1}V_t\ln n\right)=\frac{R_2}{R_1}\frac{V_{t0}\ln n}{T_0},
$$

with $V_{D3}$ the room-temperature diode voltage and $V_{t0}=0.026$ V. Setting $dV_{REF}/dT=0$:

$$
\frac{R_2}{R_1}V_{t0}\ln n=V_{G0}-V_{D3}+(\gamma-\alpha)V_{t0}
\quad\Rightarrow\quad
R_2=R_1\,\frac{V_{G0}+(\gamma-\alpha)V_{t0}-V_{D3}}{V_{t0}\ln n}.
$$

### Step 5 — $V_{REF}$ and $R_2$

Substituting the zero-TC condition into Step 3, $V_{D3}$ cancels:

$$
V_{REF}=V_{G0}+(\gamma-\alpha)V_{t0}=1.205\ \mathrm V+2.2(0.026\ \mathrm V)=1.262\ \mathrm V .
$$

Then

$$
R_2=10\ \mathrm{k\Omega}\times\frac{1.262\ \mathrm V-V_{D3}}{0.05987\ \mathrm V},
$$

and for $V_{D3}=0.6$ V, $R_2/R_1=0.6622/0.05987=11.06$, so $R_2=110.6$ kΩ. The output at room temperature is 1.262 V whatever $V_{D3}$ is; only the resistor value depends on it (for example $V_{D3}=0.7$ V would give 93.9 kΩ).
