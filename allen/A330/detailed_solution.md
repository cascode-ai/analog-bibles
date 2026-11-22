# Detailed solution - A330

The input common-mode range is the interval of $V_{ic}$ over which every transistor of the input stage stays in saturation. The upper limit is reached when an input device (n-channel in all five circuits) leaves saturation, $V_{D1}\ge V_{G1}-V_T$, so it is set by the voltage at the input-device drain. The lower limit is reached when the device below the input pair (the tail, or a stack) leaves saturation, so it is $V_{SS}$ plus the voltages stacked below the input gate. Use $V_{GS}=V_T+V_{ON}$ for a conducting device and $V_{DS}(\mathrm{sat})=V_{ON}$.

### Step 1 — Two-stage Miller op amps, [Fig. 1] and [Fig. 2]

The drain of M1 is the gate of the p-channel second-stage driver M7 (M13/M7 in [Fig. 2]), so it sits at $V_{DD}-V_{SG7}=V_{DD}-V_T-V_{ON}$; the load M3 then has $V_{SD3}=V_T+V_{ON}>V_{ON}$ and stays saturated. M1 stays saturated while

$$
V_{DD}-V_T-V_{ON}\ge V_{ic}-V_T\quad\Rightarrow\quad V_{ic}(\max)=V_{DD}-V_{ON}.
$$

Below the input gate are $V_{GS1}$ and the tail M5 at its saturation voltage:

$$
V_{ic}(\min)=V_{SS}+V_{DS5}(\mathrm{sat})+V_{GS1}=V_{SS}+2V_{ON}+V_T .
$$

The push–pull output stage of [Fig. 2] does not change the input stage, so both circuits have the same limits.

### Step 2 — Folded-cascode op amps, [Fig. 3] and [Fig. 4]

Here the drains of M1 and M2 are the folding nodes, which sit just below the p-channel current sources M4/M5 (M14–M17 and M6/M7 in [Fig. 4]). With the cascode bias chosen so that these sources are at the edge of saturation (the high-swing choice $V_{PB2}=V_{DD}-V_T-2V_{ON}$), the folding nodes are at $V_{DD}-V_{ON}$ and

$$
V_{DD}-V_{ON}\ge V_{ic}-V_T\quad\Rightarrow\quad V_{ic}(\max)=V_{DD}-V_{ON}+V_T ,
$$

which can approach or exceed $V_{DD}$. In general the folding node sits at $V_{PB2}+V_T+V_{ON}$ (one $V_{SG}$ above the cascode gate), so $V_{ic}(\max)=V_{PB2}+2V_T+V_{ON}$; the value above is the best attainable, and a less aggressive $V_{PB2}$ lowers it. The tail is again a single device, so

$$
V_{ic}(\min)=V_{SS}+2V_{ON}+V_T .
$$

### Step 3 — Cross-coupled class AB op amp, [Fig. 5]

The drain of M1 is held by the diode-connected p-channel M7, at $V_{DD}-V_{SG7}=V_{DD}-V_T-V_{ON}$, so as in Step 1

$$
V_{ic}(\max)=V_{DD}-V_{ON}.
$$

At the bottom, the input device M1 is in series with the p-channel device M4 of the cross-coupled pair, whose drain is held by the diode-connected n-channel M6. The stack from $V_{SS}$ to the gate of M1 is therefore $V_{GS6}$, the saturation voltage of M4 and $V_{GS1}$:

$$
V_{ic}(\min)=V_{SS}+V_{GS6}+V_{SD4}(\mathrm{sat})+V_{GS1}=V_{SS}+(V_T+V_{ON})+V_{ON}+(V_T+V_{ON})=V_{SS}+3V_{ON}+2V_T .
$$

### Step 4 — Comparison

| Op amp | $V_{ic}(\max)$ | $V_{ic}(\min)$ |
|---|---|---|
| [Fig. 1] | $V_{DD} - V_{ON}$ | $V_{SS} + 2V_{ON} + V_T$ |
| [Fig. 2] | $V_{DD} - V_{ON}$ | $V_{SS} + 2V_{ON} + V_T$ |
| [Fig. 3] | $V_{DD} - V_{ON} + V_T$ | $V_{SS} + 2V_{ON} + V_T$ |
| [Fig. 4] | $V_{DD} - V_{ON} + V_T$ | $V_{SS} + 2V_{ON} + V_T$ |
| [Fig. 5] | $V_{DD} - V_{ON}$ | $V_{SS} + 3V_{ON} + 2V_T$ |

The folded cascodes have the widest range, because folding lets the input drains sit near $V_{DD}$; the cross-coupled input of [Fig. 5] has the narrowest, because its input path stacks two gate–source voltages and a saturation voltage below the input gate.
