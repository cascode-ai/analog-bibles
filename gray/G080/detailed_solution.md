# Detailed solution - G080

All five transistors share one base node and one emitter node (ground), so they all have the same $V_{BE}$. Identical devices with the same $V_{BE}$ carry the same collector current at equal $V_{CE}$. Find the input current from the resistor, split it with KCL at the base node (two collectors plus five base currents), then scale to the three output devices and add the Early effect for $V_{CE}=V_{OUT}$. The output resistance is that of the three output transistors in parallel.

### Step 1 — Read the mirror ratio from [Fig. 1]

$Q_1$ and $Q_2$ have their collectors tied to their bases. They are diode-connected in parallel and take the input current through $R$, at $V_{CE1}=V_{CE2}=V_{BE}$. $Q_3$, $Q_4$ and $Q_5$ have their collectors joined at the output, at $V_{CE}=V_{OUT}$. In the forward-active region,

$$
I_C=I_Se^{V_{BE}/V_T}\left(1+\frac{V_{CE}}{V_A}\right),\qquad I_B=\frac{I_C}{\beta_F}.
$$

With equal $V_{BE}$ and, for the moment, equal $V_{CE}$, every device carries the same $I_C$. Two devices set the current and three copy it, so the ideal ratio is $I_{OUT}/I_{IN}=3/2$.

### Step 2 — Input current and $V_{BE}$

The resistor drops $V_{CC}-V_{BE}$:

$$
I_{IN}=\frac{V_{CC}-V_{BE}}R,\qquad V_{BE}=V_T\ln\frac{I_C}{I_S}.
$$

$V_{BE}$ depends only logarithmically on the current, so a few iterations converge. Starting from 0.7 V gives $I_C\approx0.706$ mA. Then $V_{BE}=(26\ \mathrm{mV})\ln(0.708\ \mathrm{mA}/5\times10^{-15}\ \mathrm A)=0.6676$ V, and

$$
I_{IN}=\frac{15\ \mathrm V-0.6676\ \mathrm V}{10\ \mathrm{k\Omega}}=1.4332\ \mathrm{mA}.
$$

### Step 3 — Base currents: output current at $V_{CE}=V_{BE}$

The resistor current feeds the collectors of $Q_1$ and $Q_2$ and the bases of all five transistors. KCL at that node, with each base current $I_C/\beta_F$, gives

$$
I_{IN}=2I_C+\frac{5I_C}{\beta_F}\quad\Rightarrow\quad I_C=\frac{I_{IN}}{2+5/\beta_F}=\frac{1.4332\ \mathrm{mA}}{2.025}=0.7078\ \mathrm{mA}.
$$

$$
I_{OUT}=3I_C=\frac{1.5\,I_{IN}}{1+2.5/\beta_F}=\frac{1.5(1.4332\ \mathrm{mA})}{1.0125}=2.123\ \mathrm{mA}.
$$

Without base currents the result would be $1.5I_{IN}=2.150$ mA. The five base currents, all drawn from the input side, lower the output by 1.2 %.

### Step 4 — Early effect: $I_{OUT}$ at 1 V, 5 V and 30 V

The output devices run at $V_{CE}=V_{OUT}$, while the reference devices run at $V_{CE}=V_{BE}$. Taking the ratio of the collector-current expression at the two values of $V_{CE}$,

$$
I_{OUT}=3I_C\,\frac{1+V_{OUT}/V_A}{1+V_{BE}/V_A}\approx3I_C\left(1+\frac{V_{OUT}-V_{BE}}{V_A}\right).
$$

For $V_{OUT}=5$ V:

$$
I_{OUT}=(2.123\ \mathrm{mA})\left(1+\frac{5\ \mathrm V-0.668\ \mathrm V}{130\ \mathrm V}\right)=(2.123\ \mathrm{mA})(1.0333)=2.194\ \mathrm{mA}.
$$

| $V_{OUT}$ (V) | $1+(V_{OUT}-V_{BE})/V_A$ | $I_{OUT}$ (mA) |
|---|---|---|
| 1 | 1.0026 | 2.129 |
| 5 | 1.0333 | 2.194 |
| 30 | 1.2256 | 2.602 |

The exact ratio form gives the same values to within 0.1 %. A SPICE simulation of the circuit with these parameters gives 2.129, 2.194 and 2.602 mA.

### Step 5 — Output resistance

At the output, the three collectors are in parallel. Their bases and emitters are held at fixed voltages by the input side, so each transistor looks into its collector as $r_o=V_A/I_C$:

$$
r_o=\frac{130\ \mathrm V}{0.7078\ \mathrm{mA}}=184\ \mathrm{k\Omega},\qquad
R_o=r_{o3}\|r_{o4}\|r_{o5}=\frac{r_o}3=\frac{V_A}{I_{OUT}}=\frac{130\ \mathrm V}{2.123\ \mathrm{mA}}=61\ \mathrm{k\Omega}.
$$

With the linear Early model the slope is constant, $\mathrm dI_{OUT}/\mathrm dV_{OUT}=3I_C/(V_A+V_{BE})$, so $R_o=(V_A+V_{BE})/(3I_C)=61.5\ \mathrm{k\Omega}$ for every $V_{OUT}$. The difference from 61 kΩ only reflects which current $r_o$ is referred to. The table in Step 4 is consistent with this: from 5 V to 30 V, $\Delta I_{OUT}=0.408$ mA for $\Delta V_{OUT}=25$ V, which is 61 kΩ.
