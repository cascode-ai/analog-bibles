# Detailed solution - R460

**Approach.** In unity-gain feedback the output follows the input, $V_{out} \approx V_{in}$, and both op-amp inputs sit at $V_{in}$. So $V_{in}$ is simultaneously the input common-mode level of the PMOS pair *and* the output voltage. We write the saturation condition of every transistor in terms of $V_{in}$ and keep the most restrictive ones: the tail device $M_7$ sets the upper limit (including the body effect of $M_1$/$M_2$), and the output device $M_5$ sets the lower limit.

### Step 1 — The circuit in unity-gain feedback

From the figure: PMOS input pair $M_1$–$M_2$ (sources joined at node P), tail $M_7$ (source at $V_{DD}$, gate at $V_b$, drain at P); NMOS mirror load $M_3$ (diode-connected, at X) and $M_4$ (at Y); output stage $M_5$ (NMOS, gate at Y) with the PMOS current source $M_6$ (gate at $V_b$).

The output is tied to the gate of $M_1$ and $V_{in}$ drives the gate of $M_2$. With the large loop gain, the differential input is nearly zero, so

$$V_{G1} = V_{G2} = V_{out} \approx V_{in}.$$

**Bias values used** (all given):

- $M_7$: 1 mA, $|V_{ov7}| = 0.4$ V (the overdrive voltage is $|V_{GS}| - |V_{TH}|$);
- $M_1$, $M_2$: 0.5 mA each, $|V_{ov1}| = 0.356$ V;
- $M_3$, $M_4$: $V_{GS3} = 0.95$ V, so $V_X = 0.95$ V; and since the loop forces $M_5$ to carry 1 mA, $V_Y = V_{GS5} = 0.95$ V as well;
- $M_5$: 1 mA, $V_{ov5} = 0.25$ V.

### Step 2 — Upper limit: the tail device $M_7$

A PMOS is saturated when $V_{SD} \ge |V_{ov}|$. The source of $M_7$ is at $V_{DD}$ and its drain at P, so

$$V_P \le V_{DD} - |V_{ov7}| = 3\ \mathrm{V} - 0.4\ \mathrm{V} = 2.6\ \mathrm{V}.$$

Node P sits one source-gate voltage above the input gates:

$$V_P = V_{in} + |V_{GS1}| = V_{in} + |V_{TH1}| + |V_{ov1}| .$$

As $V_{in}$ rises, P rises with it, squeezing $M_7$; at the limit $V_P = 2.6$ V.

### Step 3 — Body effect of $M_1$ at the upper limit

The n-well (bulk) of $M_1$ is at $V_{DD}$ while its source is at $V_P$, so the source-bulk reverse bias is $|V_{SB1}| = V_{DD} - V_P$. At the limit:

$$|V_{SB1}| = 3\ \mathrm{V} - 2.6\ \mathrm{V} = 0.4\ \mathrm{V}.$$

The threshold magnitude grows with $|V_{SB}|$:

$$
\begin{aligned}
|V_{TH1}| &= |V_{TH0}| + \gamma\left(\sqrt{2|\phi_F| + |V_{SB1}|} - \sqrt{2|\phi_F|}\right)\\
&= 0.8 + 0.4\left(\sqrt{0.8 + 0.4} - \sqrt{0.8}\right)\ \mathrm{V}\\
&= 0.8 + 0.4\,(1.0954 - 0.8944)\ \mathrm{V}\\
&= 0.8 + 0.4\times0.2010\ \mathrm{V} = 0.880\ \mathrm{V}.
\end{aligned}
$$

So

$$|V_{GS1}| = |V_{TH1}| + |V_{ov1}| = 0.880\ \mathrm{V} + 0.356\ \mathrm{V} = 1.236\ \mathrm{V}.$$

The overdrive is unchanged by the body effect, because the current (0.5 mA) and the size are fixed.

### Step 4 — The maximum input voltage

$$
\begin{aligned}
V_{in} + |V_{GS1}| &\le 2.6\ \mathrm{V}\\
V_{in} &\le 2.6\ \mathrm{V} - 1.236\ \mathrm{V} = 1.364\ \mathrm{V}.
\end{aligned}
$$

Without the body effect ($|V_{TH1}| = 0.8$ V, $|V_{GS1}| = 1.156$ V), the limit would be $2.6 - 1.156 = 1.444$ V. The body effect costs about 80 mV.

**The output side at this level.** $M_6$ shares the gate bias $V_b$ with $M_7$ and also carries 1 mA, so it too has $|V_{ov6}| = 0.4$ V. It keeps saturated for $V_{out} \le 3 - 0.4 = 2.6$ V, which is not binding at $V_{out} = 1.36$ V.

### Step 5 — Lower limit: the output device $M_5$

Because $V_{out} = V_{in}$, the output stage limits how low the input can go. $M_5$ (source grounded) is saturated when $V_{DS5} = V_{out} \ge V_{ov5}$:

$$V_{in} = V_{out} \ge V_{ov5} = 0.25\ \mathrm{V}.$$

### Step 6 — Checking the other devices at the low end

- **Input pair $M_1$, $M_2$.** A PMOS stays saturated while its drain is no higher than its gate plus $|V_{TH}|$. The drains are at $V_{X,Y} = 0.95$ V and the gates at $V_{in}$:
$$0.95\ \mathrm{V} \le V_{in} + |V_{TH1}| .$$
At low $V_{in}$, P is low and the body effect is strong. At $V_{in} = 0.25$ V, solving $V_P = V_{in} + |V_{TH1}(V_P)| + 0.356$ self-consistently gives $V_P \approx 1.64$ V, $|V_{SB1}| \approx 1.36$ V and $|V_{TH1}| \approx 1.03$ V. The condition then reads $V_{in} \ge 0.95 - 1.03 = -0.08$ V, satisfied with margin. A PMOS pair driving an NMOS mirror can accept inputs down to about ground.
- **$M_3$** is diode-connected and always saturated; **$M_4$** has $V_{DS4} = V_Y = 0.95\ \mathrm{V} = V_{GS4}$, so it is saturated.
- **$M_7$** has even more headroom at the low end ($V_P \approx 1.64$ V, far below 2.6 V).

So the binding constraints are $M_5$ (bottom) and $M_7$ (top).

| Limit | Set by | Condition | Value |
|---|---|---|---|
| Lower | $M_5$ (output device) | $V_{out} = V_{in} \ge V_{ov5}$ | 0.25 V |
| Upper | $M_7$ (tail) | $V_{in} + \lvert V_{GS1}\rvert \le V_{DD} - \lvert V_{ov7}\rvert$ | 1.36 V |
| (not binding) | $M_1$/$M_2$ | $V_{in} \ge V_X - \lvert V_{TH1}\rvert$ | ≈ −0.08 V |
| (not binding) | $M_6$ | $V_{out} \le V_{DD} - \lvert V_{ov6}\rvert$ | 2.6 V |

### Result

$$0.25\ \mathrm{V} \lesssim V_{in} \lesssim 1.36\ \mathrm{V}.$$

The lower limit comes from the output transistor $M_5$ ($V_{out} = V_{in} \ge V_{ov5}$). The upper limit comes from the tail transistor $M_7$ ($V_{in} + |V_{GS1}| \le V_{DD} - |V_{ov7}|$, with $|V_{GS1}| = 1.236$ V including body effect). Without body effect the upper limit would be about 1.44 V.

**Common mistake.** Treating the problem as an open-loop input common-mode range and forgetting that $V_{out} = V_{in}$. The output stage then never appears, and the lower limit comes out near 0 V (or $-0.08$ V) instead of 0.25 V.

**Common mistake.** Writing the $M_7$ condition with its full gate-source voltage, $V_P \le V_{DD} - |V_{GS7}|$. $M_7$'s *drain* (P) only needs to stay one overdrive (0.4 V) below its source.

**Common mistake.** Ignoring the body effect of $M_1$/$M_2$. Their n-well is at $V_{DD}$ while their source is at P, so near the upper limit $|V_{TH1}|$ rises to 0.88 V, lowering the limit by about 80 mV.
