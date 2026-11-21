# Detailed solution - G142

Mirror the argument for $V_o^+$. On the negative side the p-channel follower $M_2$ drives the output, so $V_o$ sits one source-gate voltage above the gate of $M_2$. That gate is the drain of the driver $M_6$, and the lowest it can go while $M_6$ still works as an amplifier is the edge of saturation of $M_6$.

### Step 1 — Which devices set the negative swing

For $V_o<0$ the load current flows from ground into the output node and must be sunk; $M_1$ (n-channel follower) is cut off or nearly so, and $M_2$ (p-channel follower, source at the output) carries it. With $V_{sg2}=|V_{gs2}|$,

$$
V_o=V_{g2}+|V_{gs2}| .
$$

$M_5$ is diode-connected with its gate and drain tied to the drain of $M_6$, so $V_{g2}=V_{d6}$. Raising $V_i$ pulls $V_{d6}$ and hence $V_o$ down.

### Step 2 — Lowest gate voltage: saturation edge of $M_6$

$M_3$, $M_4$, $M_5$ and $M_6$ form one series branch, and no current flows into the MOS gates, so $M_6$ carries the fixed current $|I_{D3}|$ of the source $M_3$. For $M_6$ to remain a driver in the active (saturation) region, with its source at $-V_{SS}$,

$$
V_{DS6}\ge V_{ov6}=V_{GS6}-V_{t6}=\sqrt{\frac{2|I_{D3}|}{k_n'(W/L)_6}},
$$

so the gate of $M_2$ can fall no lower than

$$
V_{g2,\min}=-V_{SS}+V_{ov6}.
$$

This plays the role that the overdrive of $M_3$ plays in the positive limit.

### Step 3 — Minimum output voltage

Adding the source-gate voltage of $M_2$:

$$
V_o^-=-V_{SS}+V_{ov6}+|V_{gs2}|,\qquad |V_{gs2}|=|V_{t2}|+|V_{ov2}|,
$$

where $|V_{gs2}|$ is evaluated at the current $M_2$ sinks at that output, $|I_{d2}|\approx|V_o^-|/R_L$ (plus any small residual current of $M_1$). Two effects make $|V_{gs2}|$ large:

- the overdrive grows as the square root of the load current, $|V_{ov2}|=\sqrt{2|I_{d2}|/(k_p'(W/L)_2)}$;
- body effect: the n-well of $M_2$ is at $V_{DD}$, so its source-bulk reverse bias $V_{BS2}=V_{DD}-V_o$ is largest at negative outputs, which raises $|V_{t2}|$.

As on the positive side, the limit is therefore much farther from the rail than in a bipolar stage: instead of $V_{CE(\text{sat})}+V_{BE}$, the loss is an overdrive plus a body-effect-raised threshold plus a current-dependent overdrive. Driving $M_6$ into triode would let the output fall slightly further, toward $-V_{SS}+|V_{gs2}|$, but $M_6$ would then lose its gain and the stage would distort heavily.
