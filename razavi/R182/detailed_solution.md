# Detailed solution - R182

**Approach.** With equal inputs the symmetric circuit favours neither side, so the two outputs are equal and $V_{out} = 0$ for the entire sweep. A short KCL argument confirms this in every operating region; for completeness, the common level of the outputs is described as the inputs rise.

### Step 1 — What is swept

Call the left output node (drains of $M_1$, $M_3$) $X$, the right one $Y$, and the tail node $P$; $V_{out} = V_X - V_Y$. The inputs are tied together, $V_{in1} = V_{in2} = V_{in}$, and swept from 0 to 3 V: a pure **common-mode** sweep.

### Step 2 — KCL argument: the outputs must be equal

Let $I_R = (V_X - V_Y)/R_1$ flow through $R_1$ from $X$ to $Y$. KCL at the two output nodes:

$$I_{D3} = I_{D1} + I_R, \qquad I_{D4} = I_{D2} - I_R .$$

Suppose $V_X > V_Y$. Then $I_R > 0$; the diode $M_3$ has the smaller source–gate voltage ($V_{SG3} = V_{DD} - V_X < V_{DD} - V_Y = V_{SG4}$), so $I_{D3} \le I_{D4}$; and $M_1$, $M_2$ have the same $V_{GS}$, so $I_{D1} = I_{D2}$ in saturation, while in triode the one with the higher drain voltage ($M_1$) carries more: either way $I_{D1} \ge I_{D2}$. With KCL,

$$I_{D3} = I_{D1} + I_R > I_{D1} \ge I_{D2} = I_{D4} + I_R > I_{D4},$$

which contradicts $I_{D3} \le I_{D4}$. The same argument with the sides exchanged rules out $V_X < V_Y$. Therefore

$$V_X = V_Y, \qquad I_R = 0, \qquad V_{out} = 0$$

at every input level, whatever regions the transistors are in; $R_1$ plays no role in this sweep.

### Step 3 — How the common output level moves (for completeness)

The common level of the two outputs does change (body effect and channel-length modulation neglected):

- **$V_{in} < V_{THN} = 0.7$ V:** $M_1$ and $M_2$ are off, so the diodes carry no current and have $V_{SG} \le |V_{THP}|$: both outputs sit at or above $V_{DD} - |V_{THP}| = 2.2$ V. The square law gives exactly 2.2 V at the edge of conduction; weak subthreshold conduction of the diodes pulls the outputs somewhat higher, toward $V_{DD}$. Any level between 2.2 V and 3 V is consistent with the model.
- **$V_{in}$ just above 0.7 V:** the pair turns on with the tail $M_5$ initially in triode ($P$ near ground). As $V_{in}$ rises, the current increases and both outputs fall together, following $V_X = V_{DD} - |V_{THP}| - \sqrt{2I_{D1}/\beta_p}$.
- **Once $M_5$ saturates:** each side carries $I_{SS}/2$, and both outputs settle at
$$V_X = V_Y = V_{DD} - |V_{THP}| - \sqrt{\frac{I_{SS}}{\beta_p}},$$
staying there for higher $V_{in}$; even if $M_1$, $M_2$ enter triode, the tail still forces $I_{SS}/2$ per side.

In all three regimes the two outputs move *identically*: a perfectly symmetric circuit converts none of a common-mode input into a differential output, and $R_1$ matters only for differential signals. (In a real circuit, mismatches would leave a small residual: an offset plus a weak dependence on $V_{in}$.)

### Result

$$V_{out} = V_X - V_Y = 0\quad\text{for all } 0 \le V_{in1} = V_{in2} \le 3\ \mathrm{V}.$$

The sketch is a flat line at zero. By symmetry the two outputs are always equal and $R_1$ carries no current. (Their common level starts between 2.2 V and $V_{DD}$ while the pair is off, falls as the pair turns on, and settles at $V_{DD} - |V_{THP}| - \sqrt{I_{SS}/\beta_p}$ once $M_5$ saturates.)

**Common mistake.** Drawing an S-curve or a ramp for $V_{out}$, as if the common-mode sweep were a differential input.

**Common mistake.** Describing the voltage of one output node (which does change with $V_{in}$) and calling that "$V_{out}$". The output is the *difference* between the two nodes, which is zero throughout.
