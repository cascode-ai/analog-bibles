# Detailed solution - R182

**Approach.** With equal inputs, the symmetric circuit has no reason to favour either side, so the two outputs must be at the same voltage and $V_{out} = 0$ for the entire sweep. We confirm this with a short KCL argument that does not depend on the operating region, and then, for completeness, describe how the common level of the two outputs moves as the inputs rise.

### Step 1 — The circuit and what is swept

Reading the figure:

- NMOS input pair $M_1$, $M_2$ with sources joined at $P$;
- tail transistor $M_5$ (gate at a fixed $V_b$);
- diode-connected PMOS loads $M_3$ (node $X$, left output) and $M_4$ (node $Y$, right output);
- a resistor $R_1$ connecting $X$ and $Y$.

The output is the differential voltage $V_{out} = V_X - V_Y$. The inputs are tied together, $V_{in1} = V_{in2} = V_{in}$, and swept from 0 to 3 V. This is a pure **common-mode** sweep.

### Step 2 — KCL argument: the outputs must be equal

Let $I_R = (V_X - V_Y)/R_1$ be the current flowing through $R_1$ from $X$ to $Y$. KCL at the two output nodes:

$$I_{D3} = I_{D1} + I_R, \qquad I_{D4} = I_{D2} - I_R .$$

Suppose, for contradiction, that $V_X > V_Y$. Then:

1. $I_R > 0$.
2. The diode $M_3$ has a smaller source–gate voltage than $M_4$ ($V_{SG3} = V_{DD} - V_X < V_{DD} - V_Y = V_{SG4}$), so $I_{D3} \le I_{D4}$.
3. $M_1$ and $M_2$ have the same gate voltage and the same source ($P$), hence the same $V_{GS}$. With equal sizes, their currents are equal in saturation. In triode, the one with the higher drain voltage ($M_1$, at $X$) carries more. Either way $I_{D1} \ge I_{D2}$.

Combining with KCL:

$$I_{D3} = I_{D1} + I_R > I_{D1} \ge I_{D2} = I_{D4} + I_R > I_{D4},$$

so $I_{D3} > I_{D4}$, which contradicts point 2. Hence $V_X > V_Y$ is impossible. The same argument with the sides exchanged rules out $V_X < V_Y$. Therefore

$$V_X = V_Y, \qquad I_R = 0, \qquad V_{out} = 0$$

at every input level, whatever regions the transistors are in. $R_1$ carries no current, so it plays no role in this sweep.

### Step 3 — How the common output level moves (for completeness)

Although the difference is zero, the common level of the two outputs does change. Body effect and channel-length modulation are neglected, as instructed.

- **$V_{in} < V_{THN} = 0.7$ V:** $M_1$ and $M_2$ are off, so no current flows in the loads. A diode-connected PMOS with zero current has $V_{SG} \le |V_{THP}|$, so both outputs sit at or above $V_{DD} - |V_{THP}| = 2.2$ V. The square law gives exactly 2.2 V at the edge of conduction; in reality, weak subthreshold conduction of the diodes pulls the outputs somewhat higher, toward $V_{DD}$. Any level between 2.2 V and 3 V is consistent with the model.
- **$V_{in}$ just above 0.7 V:** the pair turns on, and the tail $M_5$ is initially in triode (its drain $P$ is near ground). As $V_{in}$ rises, the current increases and both outputs fall together, following the diode law $V_X = V_{DD} - |V_{THP}| - \sqrt{2I_{D1}/\beta_p}$.
- **Once $M_5$ saturates:** each side carries $I_{SS}/2$, and both outputs settle at
$$V_X = V_Y = V_{DD} - |V_{THP}| - \sqrt{\frac{I_{SS}}{\beta_p}},$$
staying there for higher $V_{in}$. If $V_{in}$ rises so far that $M_1$, $M_2$ enter triode, the tail still forces $I_{SS}/2$ per side, so the diode voltages do not change.

In all three regimes the two outputs move *identically*, and $V_{out}$ stays at zero.

### Step 4 — Physical interpretation

A pure common-mode input drives both halves identically, and a perfectly symmetric differential circuit converts none of it into a differential output: the common-mode-to-differential gain is zero. $R_1$ only matters when the two outputs try to differ, i.e. for differential signals (where it lowers the gain), not for common-mode signals. In a real circuit, mismatches would produce a small residual (an offset plus a weak dependence on $V_{in}$), but for the ideal symmetric circuit of the problem the differential output is identically zero.

### Result

$$V_{out} = V_X - V_Y = 0\quad\text{for all } 0 \le V_{in1} = V_{in2} \le 3\ \mathrm{V}.$$

The sketch is a flat line at zero. By symmetry the two outputs are always equal and $R_1$ carries no current. (Their common level starts between 2.2 V and $V_{DD}$ while the pair is off, falls as the pair turns on, and settles at $V_{DD} - |V_{THP}| - \sqrt{I_{SS}/\beta_p}$ once $M_5$ saturates.)

**Common mistake.** Drawing an S-curve or a ramp for $V_{out}$, as if the common-mode sweep were a differential input. With equal inputs neither side is favoured, so there is nothing to produce a differential output.

**Common mistake.** Describing only the voltage of one output node (which does change with $V_{in}$) and calling that "$V_{out}$". The output here is the *difference* between the two nodes, and it is zero throughout. The single-ended level is useful extra information, but it is not the answer.
