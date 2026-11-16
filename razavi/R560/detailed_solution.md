# Detailed solution - R560

**Approach.** The op amp forces $V_X = V_Y$, which puts $\Delta V_{BE} = V_T\ln n$ across $R_1$; the given current and $R_1$ then fix $n$. $M_5$ shares its gate and source with $M_4$, so it copies the PTAT current scaled by $K = (W/L)_5/(W/L)_4$ and drives it through $R_2$ on top of $|V_{BE3}|$. Choosing $K$ so that the PTAT voltage's positive TC cancels the $-1.5$ mV/K of $|V_{BE3}|$ gives zero TC.

### Step 1 — Reading the circuit

- **Left branch.** $M_3$ feeds node X, which is the emitter of $Q_1$ (one unit pnp, base and collector grounded). So $V_X = |V_{BE1}|$.
- **Middle branch.** $M_4$ feeds node Y. From Y, $R_1$ leads to the emitter of $Q_2$ ($n$ units in parallel). So $V_Y = |V_{BE2}| + |I_{D4}|R_1$.
- **Output branch.** $M_5$ feeds $V_{out}$. From $V_{out}$, $R_2$ leads to the emitter of $Q_3$ (one unit). So $V_{out} = |V_{BE3}| + |I_{D5}|R_2$.
- The op amp senses X (− input) and Y (+ input) and drives the common gate line of $M_3$, $M_4$ and $M_5$, whose sources are all at $V_{DD}$.

### Step 2 — The PTAT current and the value of $n$

$M_3$ and $M_4$ are identical (50/0.5) and have the same $V_{GS}$, so, neglecting channel-length modulation, they carry equal currents: $|I_{D3}| = |I_{D4}| = I = 50\ \mu$A. The base currents are neglected, so each bipolar transistor carries its PMOS current.

The ideal op amp forces $V_X = V_Y$:

$$|V_{BE1}| = |V_{BE2}| + IR_1 .$$

Write the junction voltages with $|V_{BE}| = V_T\ln(I_C/I_S)$. $Q_2$ has $n$ times the area, so its saturation current is $nI_{S}$:

$$IR_1 = |V_{BE1}| - |V_{BE2}| = V_T\ln\frac{I}{I_S} - V_T\ln\frac{I}{nI_S} = V_T\ln n .$$

**Numbers.** $IR_1 = (50\ \mu\mathrm{A})(1\ \mathrm{k}\Omega) = 50$ mV, and $V_T = kT/q = (8.617\times10^{-5})(300) = 25.85$ mV:

$$
\begin{aligned}
\ln n &= \frac{50\ \mathrm{mV}}{25.85\ \mathrm{mV}} = 1.934,\\
n &= e^{1.934} = 6.92 \approx 7 .
\end{aligned}
$$

Hence $I = V_T\ln n/R_1$ is a PTAT current.

### Step 3 — Output voltage in terms of the mirror ratio

$M_5$ has the same $|V_{GS}|$ as $M_4$ (same gate line and same source). In saturation with $\lambda = 0$, $|I_D| = \tfrac12\mu_pC_{ox}(W/L)(|V_{GS}| - |V_{TH}|)^2$ is proportional to $W/L$. Define

$$K = \frac{(W/L)_5}{(W/L)_4}\quad\Longrightarrow\quad |I_{D5}| = K|I_{D4}| = K\,\frac{V_T\ln n}{R_1}.$$

Then the output is

$$V_{out} = |V_{BE3}| + |I_{D5}|R_2 = |V_{BE3}| + K\frac{R_2}{R_1}V_T\ln n .$$

With $R_2/R_1 = 2$ and $V_T\ln n = 50$ mV:

$$V_{out} = |V_{BE3}| + K\times2\times50\ \mathrm{mV} = |V_{BE3}| + K(0.1\ \mathrm{V}).$$

### Step 4 — Zero-TC condition: $K$ and $(W/L)_5$

The PTAT term $K(R_2/R_1)V_T\ln n$ is proportional to $T$ ($K$, $n$ and the resistor *ratio* are temperature-independent), so its TC is its value divided by $T$:

$$\frac{\partial}{\partial T}\left[K(0.1\ \mathrm{V})\right] = \frac{K(0.1\ \mathrm{V})}{300\ \mathrm{K}} = K(0.333\ \mathrm{mV/K}).$$

Set the total TC of $V_{out}$ to zero with $\partial|V_{BE3}|/\partial T = -1.5$ mV/K:

$$
\begin{aligned}
-1.5\ \mathrm{mV/K} + K(0.333\ \mathrm{mV/K}) &= 0\\
K &= \frac{1.5}{0.333} = 4.5 .
\end{aligned}
$$

(With the textbook rule $K(R_2/R_1)\ln n = 17.2$: $K = 17.2/(2\times1.934) = 4.45$. The difference is only the rounding of $k/q$.)

Therefore

$$\left(\frac WL\right)_5 = K\left(\frac WL\right)_4 = 4.5\times\frac{50\ \mu\mathrm{m}}{0.5\ \mu\mathrm{m}} = \frac{225\ \mu\mathrm{m}}{0.5\ \mu\mathrm{m}}\quad(\approx 222\ \mu\mathrm{m}/0.5\ \mu\mathrm{m}\ \text{with}\ K = 4.45),$$

and $M_5$ carries $|I_{D5}| = 4.5\times50\ \mu\mathrm{A} = 225\ \mu$A (222 μA with $K = 4.45$). Keeping $L$ the same as in $M_4$ and making $M_5$ from parallel copies of the $M_4$ unit gives an accurate ratio.

### Step 5 — Checks

**Overdrive and gate voltage.** For $M_4$ (and hence all three PMOS):

$$
\begin{aligned}
|V_{ov}| &= \sqrt{\frac{2|I_D|}{\mu_pC_{ox}(W/L)}} = \sqrt{\frac{2(50\ \mu\mathrm{A})}{(38.4\ \mu\mathrm{A/V^2})(100)}} = \sqrt{0.0260\ \mathrm{V^2}} = 0.161\ \mathrm{V},\\
|V_{GS}| &= |V_{TH}| + |V_{ov}| = 0.8 + 0.161 = 0.96\ \mathrm{V}.
\end{aligned}
$$

$M_5$ has the same overdrive, since its current and $W/L$ scale together.

**Output level:**

$$V_{out} = |V_{BE3}| + 4.5\times0.1\ \mathrm{V} = |V_{BE3}| + 0.45\ \mathrm{V} \approx 1.2\text{--}1.25\ \mathrm{V}$$

for $|V_{BE3}| \approx 0.75$–0.8 V.

**Saturation.** Each PMOS needs $|V_{DS}| \ge |V_{ov}| = 0.16$ V:

- $M_5$: $|V_{DS5}| = 3 - 1.25 = 1.75$ V, saturated;
- $M_3$, $M_4$: drains at about $|V_{BE1}| \approx 0.7$–0.8 V, so $|V_{DS}| \approx 2.2$ V, saturated.

### Result

$$n = \exp\!\left(\frac{50\ \mathrm{mV}}{25.85\ \mathrm{mV}}\right) \approx 6.9\ (\approx 7), \qquad \left(\frac WL\right)_5 \approx 4.45\text{--}4.5\times\left(\frac WL\right)_4 \approx \frac{222\text{--}225\ \mu\mathrm{m}}{0.5\ \mu\mathrm{m}},$$

with $|I_{D5}| \approx 222$–225 μA. These follow from $V_X = V_Y$ with equal currents, giving $|I_{D4}|R_1 = V_T\ln n = 50$ mV, and from $V_{out} = |V_{BE3}| + K(R_2/R_1)V_T\ln n = |V_{BE3}| + K(0.1\ \mathrm{V})$ with $K(0.1\ \mathrm{V})/300\ \mathrm{K} = 1.5$ mV/K. Then $V_{out} \approx |V_{BE3}| + 0.45\ \mathrm{V} \approx 1.2$–1.25 V, $|V_{GS}| = 0.96$ V, and $M_5$ is saturated with $|V_{DS}| \approx 1.75$ V.

**Common mistake.** Ignoring the resistor ratio $R_2/R_1$ and writing $V_{out} = |V_{BE3}| + K\,V_T\ln n$. That gives $K = 1.5/0.1667 = 9$ (about 8.9 with the 17.2 rule), twice too large. The PTAT current flows through $R_2$, not $R_1$, in the output branch, so the PTAT voltage there is $K(R_2/R_1)V_T\ln n$.

**Common mistake.** Letting $M_5$ carry the same current as $M_4$ (i.e. $K = 1$) and still claiming zero TC. Then $V_{out} = |V_{BE3}| + 0.1$ V has a TC of $-1.5 + 0.33 = -1.17$ mV/K. The mirror ratio is the designer's only remaining degree of freedom, and it must supply the factor 4.5.

**Common mistake.** Determining $n$ from $\ln n = 17.2$, or from $n = 50\ \mathrm{mV}/V_T$. The drop across $R_1$ equals $V_T\ln n$, so $\ln n = 1.934$. The zero-TC condition is satisfied afterwards by $K$, not by $n$.
