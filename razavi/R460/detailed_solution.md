# Detailed solution - R460

**Approach.** In unity-gain feedback $V_{out} \approx V_{in}$ and both op-amp inputs sit at $V_{in}$, so $V_{in}$ is at once the input common-mode level of the PMOS pair *and* the output voltage. Write each transistor's saturation condition in terms of $V_{in}$ and keep the most restrictive: the tail $M_7$ (with the body effect of $M_1$/$M_2$) sets the upper limit, and the output device $M_5$ the lower one.

### Step 1 — The circuit in unity-gain feedback

The large loop gain makes the differential input nearly zero, so

$$V_{G1} = V_{G2} = V_{out} \approx V_{in}.$$

Call the common source node of $M_1$–$M_2$ P. $V_X = V_{GS3} = 0.95$ V, and since the loop forces $M_5$ to carry 1 mA, $V_Y = V_{GS5} = 0.95$ V as well. The other bias values are given: $|V_{ov7}| = 0.4$ V at 1 mA, $|V_{ov1}| = 0.356$ V at 0.5 mA, and $V_{ov5} = 0.25$ V at 1 mA.

### Step 2 — Upper limit: the tail device $M_7$

With its source at $V_{DD}$ and drain at P, $M_7$ stays saturated for

$$V_P \le V_{DD} - |V_{ov7}| = 3\ \mathrm{V} - 0.4\ \mathrm{V} = 2.6\ \mathrm{V}.$$

P sits one source-gate voltage above the input gates,

$$V_P = V_{in} + |V_{GS1}| = V_{in} + |V_{TH1}| + |V_{ov1}| ,$$

so as $V_{in}$ rises P rises with it, reaching the limit at $V_P = 2.6$ V.

### Step 3 — Body effect of $M_1$ at the upper limit

The n-well of $M_1$ is at $V_{DD}$ and its source at $V_P$, so $|V_{SB1}| = V_{DD} - V_P$; at the limit

$$|V_{SB1}| = 3\ \mathrm{V} - 2.6\ \mathrm{V} = 0.4\ \mathrm{V},$$

$$
\begin{aligned}
|V_{TH1}| &= |V_{TH0}| + \gamma\left(\sqrt{2|\phi_F| + |V_{SB1}|} - \sqrt{2|\phi_F|}\right)\\
&= 0.8 + 0.4\left(\sqrt{0.8 + 0.4} - \sqrt{0.8}\right)\ \mathrm{V}\\
&= 0.8 + 0.4\,(1.0954 - 0.8944)\ \mathrm{V}\\
&= 0.8 + 0.4\times0.2010\ \mathrm{V} = 0.880\ \mathrm{V}.
\end{aligned}
$$

The overdrive is fixed by the current and size, so

$$|V_{GS1}| = |V_{TH1}| + |V_{ov1}| = 0.880\ \mathrm{V} + 0.356\ \mathrm{V} = 1.236\ \mathrm{V}.$$

### Step 4 — The maximum input voltage

$$
\begin{aligned}
V_{in} + |V_{GS1}| &\le 2.6\ \mathrm{V}\\
V_{in} &\le 2.6\ \mathrm{V} - 1.236\ \mathrm{V} = 1.364\ \mathrm{V}.
\end{aligned}
$$

Without the body effect ($|V_{TH1}| = 0.8$ V, $|V_{GS1}| = 1.156$ V) the limit would be $2.6 - 1.156 = 1.444$ V, so the body effect costs about 80 mV.

$M_6$ shares $V_b$ with $M_7$ and carries 1 mA, so $|V_{ov6}| = 0.4$ V and it stays saturated for $V_{out} \le 3 - 0.4 = 2.6$ V, not binding at $V_{out} = 1.36$ V.

### Step 5 — Lower limit: the output device $M_5$

Since $V_{out} = V_{in}$ and the source of $M_5$ is grounded,

$$V_{in} = V_{out} \ge V_{ov5} = 0.25\ \mathrm{V}.$$

### Step 6 — Checking the other devices at the low end

- **Input pair $M_1$, $M_2$.** The drains are at $V_{X,Y} = 0.95$ V and the gates at $V_{in}$, so saturation needs
$$0.95\ \mathrm{V} \le V_{in} + |V_{TH1}| .$$
At low $V_{in}$ the body effect is strong: at $V_{in} = 0.25$ V, solving $V_P = V_{in} + |V_{TH1}(V_P)| + 0.356$ self-consistently gives $V_P \approx 1.64$ V, $|V_{SB1}| \approx 1.36$ V and $|V_{TH1}| \approx 1.03$ V. The condition becomes $V_{in} \ge 0.95 - 1.03 = -0.08$ V, satisfied with margin: a PMOS pair driving an NMOS mirror accepts inputs down to about ground.
- **$M_3$** is diode-connected; **$M_4$** has $V_{DS4} = V_Y = 0.95\ \mathrm{V} = V_{GS4}$, so it is saturated.
- **$M_7$** has even more headroom at the low end ($V_P \approx 1.64$ V, far below 2.6 V).

| Limit | Set by | Condition | Value |
|---|---|---|---|
| Lower | $M_5$ (output device) | $V_{out} = V_{in} \ge V_{ov5}$ | 0.25 V |
| Upper | $M_7$ (tail) | $V_{in} + \lvert V_{GS1}\rvert \le V_{DD} - \lvert V_{ov7}\rvert$ | 1.36 V |
| (not binding) | $M_1$/$M_2$ | $V_{in} \ge V_X - \lvert V_{TH1}\rvert$ | ≈ −0.08 V |
| (not binding) | $M_6$ | $V_{out} \le V_{DD} - \lvert V_{ov6}\rvert$ | 2.6 V |

### Result

$$0.25\ \mathrm{V} \lesssim V_{in} \lesssim 1.36\ \mathrm{V}.$$

The lower limit comes from the output transistor $M_5$ ($V_{out} = V_{in} \ge V_{ov5}$). The upper limit comes from the tail transistor $M_7$ ($V_{in} + |V_{GS1}| \le V_{DD} - |V_{ov7}|$, with $|V_{GS1}| = 1.236$ V including body effect). Without body effect the upper limit would be about 1.44 V.

**Common mistake.** Treating this as an open-loop input common-mode range and forgetting that $V_{out} = V_{in}$. The output stage then never appears, and the lower limit comes out near 0 V (or $-0.08$ V) instead of 0.25 V.

**Common mistake.** Writing the $M_7$ condition with its full gate-source voltage, $V_P \le V_{DD} - |V_{GS7}|$. Its *drain* (P) only needs to stay one overdrive (0.4 V) below its source.

**Common mistake.** Ignoring the body effect of $M_1$/$M_2$: near the upper limit $|V_{TH1}|$ rises to 0.88 V, lowering the limit by about 80 mV.
