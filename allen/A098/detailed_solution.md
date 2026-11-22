# Detailed solution - A098

All four transistors carry the same current $I$. Write each gate–source voltage as $V_T$ plus an overdrive that depends on the device's $W/L$, follow the gate voltages up the left stack and down through M4, and the overdrives cancel.

### Step 1 — Left branch: M1 and M3

Define the overdrive of a $W/L=4$ device at current $I$:

$$
V_{ON}=\sqrt{\frac{2I}{K'(4)}} .
$$

M1 and M3 are diode-connected, saturated and carry $I$, so

$$
V_{GS1}=V_{GS3}=V_T+V_{ON},\qquad V_{G1}=V_T+V_{ON},\qquad V_{G3}=V_{GS1}+V_{GS3}=2V_T+2V_{ON}.
$$

### Step 2 — Right branch: M2 and M4

M2 has the same size as M1 and the same gate–source voltage (gate tied to M1's gate, source grounded); being saturated, it also carries $I$. M4 is in series with M2, so it carries $I$ too, but its $W/L$ is 1, a quarter of the others, so its overdrive is twice as large:

$$
V_{GS4}=V_T+\sqrt{\frac{2I}{K'(1)}}=V_T+2V_{ON}.
$$

### Step 3 — Output voltage

M4's gate is at $V_{G3}$, and $V_{REF}$ is its source:

$$
V_{REF}=V_{G3}-V_{GS4}=\big(2V_T+2V_{ON}\big)-\big(V_T+2V_{ON}\big)=V_T .
$$

The output equals the threshold voltage of the devices, independent of $I$ and of the 5 V supply (to the extent that $\lambda$ is negligible).

### Step 4 — Validity

M2 must be saturated: $V_{DS2}=V_{REF}=V_T\ge V_{ON}$, i.e.

$$
I\le\frac{K'(4)V_T^2}{2}=2K'V_T^2,
$$

about 108 µA for $K'=110\ \mu\mathrm{A/V^2}$ and $V_T=0.7$ V. M4 is saturated because its drain is at 5 V. If the body effect were included, the sources of M3 and M4 sit above ground and $V_{REF}=V_{T1}+V_{T3}-V_{T4}$, slightly above $V_T$.
