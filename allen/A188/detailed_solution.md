# Detailed solution - A188

$V_{BIAS}$ sets the gate of the cascodes M3–M4 relative to the common source node of M1–M2, which fixes $V_{DS1}=V_{DS2}$. First find the range this voltage must lie in, then generate it with the fewest devices: a diode-connected transistor between the cascode gates and the common source node, fed by a current source, produces a $V_{GS}$ that tracks the input common mode automatically.

### Step 1 — Condition on $V_{BIAS}$

Measured from the common source node, the source of M3 (the drain of M1) sits at $V_{BIAS}-V_{GS3}$, so

$$
V_{DS1}=V_{BIAS}-V_{GS3}.
$$

M1 (and M2) stay saturated if $V_{DS1}\ge V_{GS1}-V_T=V_{DS1}(\mathrm{sat})$:

$$
V_{BIAS}\ge V_{GS3}+V_{DS1}(\mathrm{sat})=V_T+V_{ON3}+V_{ON1},
$$

where $V_{ON}=V_{GS}-V_T$ is a device's saturation voltage. $V_{BIAS}$ should not be much larger, because every extra volt raises the drains of M3–M4 and eats into the room M3–M4 need to stay saturated over the output swing. With equal overdrives $V_{ON}$, the target is $V_{BIAS}=V_T+2V_{ON}$. Because it is referred to the common source node, $V_{BIAS}$ follows the input common-mode voltage, so M1–M2 stay saturated over the whole input range.

### Step 2 — Two-transistor implementation

<!-- diagram: diagram-01.cir -->

- **M13**, an n-channel transistor, diode-connected (gate tied to drain), with its source on the common source node S of M1–M2 and its gate/drain on the gates of M3 and M4 (node G34). Its $V_{GS13}$ is $V_{BIAS}$.
- **M14**, a p-channel current source from $V_{DD}$ into the drain of M13, with its gate on the M12/M7/M8 bias line, so it carries a copy $I_{14}$ of the bias current.

The cascode gates draw no dc current, so all of $I_{14}$ flows through M13 into node S.

### Step 3 — Sizing M13

Choose $(W/L)_{13}$ so that $V_{GS13}=V_T+V_{ON3}+V_{ON1}$. With equal overdrives this means $V_{ON13}=2V_{ON}$. From $V_{ON}=\sqrt{2I_D/[K'(W/L)]}$, doubling the overdrive at the same current requires a quarter of the aspect ratio, so for $I_{14}=I_3$

$$
\left(\frac WL\right)_{13}=\frac14\left(\frac WL\right)_3 ,
$$

scaled by $I_{14}/I_3$ for a different current.

### Step 4 — Effect on the tail current

$I_{14}$ enters node S, so the tail device M9 must now sink $I_9=I_7+I_8+I_{14}$ for M1 and M2 to keep their intended currents $I_7$ and $I_8$. Size M9 (or its mirror ratio to M10) accordingly; otherwise M1–M2 run at reduced current.
