# Detailed solution - A105

The output current of M5, and hence $V_{REF}$, is set by M5's source–gate voltage, not by its gate voltage alone. The capacitor should therefore hold $V_{SG5}$ constant at high frequencies, which means connecting it between the gate and the source of M5, that is, to $V_{DD}$. Comparing the two possible connections with a small-signal model of the gate node shows why.

### Step 1 — What controls the output noise

M5 is saturated and drives $R_2$ and Q3, so the output voltage follows its drain current. In small-signal terms

$$
i_{d5}=g_{m5}\,v_{sg5}=g_{m5}\,(v_{dd}-v_g),
\qquad
v_{ref}=i_{d5}\,(R_2+r_{e3}),
$$

where $r_{e3}\approx1/g_{m3}$ is the small-signal resistance of the diode-connected Q3. Any noise that reaches $v_{sg5}$, whether from the amplifier, from M1–M4 or from the supply, becomes output noise.

### Step 2 — Model of the gate line

The amplifier drives the gate line through its finite output resistance $R_o$. Its own noise and the noise fed back from the reference loop can be represented as a source $v_n$ (referred to ground) in series with $R_o$. The capacitor $C$ adds an impedance $1/(sC)$ from the gate to the chosen node, forming a first-order low-pass with corner $1/(R_oC)$.

### Step 3 — Capacitor from the gate to $V_{DD}$

With $C$ between gate and $V_{DD}$, the voltage across it is $v_{sg5}$ itself. Superposing the two inputs of the RC network,

$$
v_{sg5}=v_{dd}-v_g=\frac{v_{dd}-v_n}{1+sR_oC}.
$$

Above $1/(R_oC)$ both the gate-line noise and the supply disturbance are attenuated: the gate follows $V_{DD}$ through the capacitor, so the source–gate voltage stays constant and so does the current of M5. The capacitor filters exactly the quantity that sets the output.

### Step 4 — Capacitor from the gate to ground

With $C$ from the gate to ground,

$$
v_g=\frac{v_n}{1+sR_oC},
\qquad
v_{sg5}=v_{dd}-\frac{v_n}{1+sR_oC}.
$$

The gate-line noise is still filtered, but the gate is now held fixed with respect to ground. At high frequency $v_{sg5}\to v_{dd}$: every fluctuation of $V_{DD}$ appears in full across the source–gate voltage and is converted into an output current $g_{m5}v_{dd}$. This connection degrades the supply rejection and adds supply noise to $V_{REF}$.

### Step 5 — Conclusion

Connect the other side of the capacitor to $V_{DD}$, the common source of M5 (and M1–M4). This bypasses $V_{SG}$, so high-frequency noise on the gate line is shunted and supply disturbances appear equally on gate and source, leaving the output current unchanged. Because $C$ also adds a pole at the output of the amplifier, which is inside the reference's feedback loop, the loop must be rechecked for stability.
