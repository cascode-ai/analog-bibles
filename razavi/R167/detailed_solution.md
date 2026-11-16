# Detailed solution - R167

**Approach.** Write the same three equations as for a symmetric pair (KCL at the tail node, KVL around the input loop, square law), but with device constant $\beta$ for $M_1$ and $2\beta$ for $M_2$. From them we find the key points: zero input, equal currents, and complete steering to either side. Then we solve for the full curve $I_{D1}(V_{in1} - V_{in2})$ and describe the sketch.

### Step 1 — Equations of the asymmetric pair

From the figure: $M_1$ has aspect ratio $W/L$ and $M_2$ has $2W/L$. Their sources are joined and fed by the tail current $I_{SS}$, and their drains go to equal resistors $R_D$. Let

$$\beta = \mu_nC_{ox}\frac{W}{L}\ \ (\text{device constant of } M_1), \qquad 2\beta\ \ (\text{device constant of } M_2), \qquad \Delta V = V_{in1} - V_{in2}.$$

- **KCL at the tail node:** $I_{D1} + I_{D2} = I_{SS}$.
- **KVL through the common source node:** $\Delta V = V_{GS1} - V_{GS2}$.
- **Square law** (both saturated, $\lambda = 0$, equal thresholds since the sources are common):
$$V_{GS1} = V_{TH} + \sqrt{\frac{2I_{D1}}{\beta}}, \qquad V_{GS2} = V_{TH} + \sqrt{\frac{2I_{D2}}{2\beta}} = V_{TH} + \sqrt{\frac{I_{D2}}{\beta}} .$$

Hence

$$\Delta V = \sqrt{\frac{2I_{D1}}{\beta}} - \sqrt{\frac{I_{D2}}{\beta}} .$$

The wider device needs less overdrive for the same current. That is the origin of the asymmetry.

### Step 2 — Zero differential input

With $V_{in1} = V_{in2}$ the two devices have the same $V_{GS}$, hence the same overdrive $V_{ov}$. Their currents are then in the ratio of their device constants:

$$I_{D1} = \tfrac12\beta V_{ov}^2, \qquad I_{D2} = \tfrac12(2\beta)V_{ov}^2 = 2I_{D1}.$$

With $I_{D1} + I_{D2} = I_{SS}$:

$$I_{D1} = \frac{I_{SS}}{3}, \qquad I_{D2} = \frac{2I_{SS}}{3}.$$

At zero input, the wider device takes two thirds of the tail current.

### Step 3 — Input for equal currents

Set $I_{D1} = I_{D2} = I_{SS}/2$ in the KVL relation:

$$
\begin{aligned}
\Delta V &= \sqrt{\frac{2(I_{SS}/2)}{\beta}} - \sqrt{\frac{I_{SS}/2}{\beta}}\\
&= \sqrt{\frac{I_{SS}}{\beta}} - \frac{1}{\sqrt2}\sqrt{\frac{I_{SS}}{\beta}}\\
&= \left(1 - \frac{1}{\sqrt2}\right)\sqrt{\frac{I_{SS}}{\beta}} \approx 0.293\sqrt{\frac{I_{SS}}{\beta}} .
\end{aligned}
$$

This is positive: $V_{in1}$ must be *higher* than $V_{in2}$ to bring the narrow device up to the same current as the wide one. The shift behaves like an input offset voltage of the pair.

### Step 4 — Limits of the transition region (complete steering)

**$M_1$ just off** ($I_{D1} = 0$, $I_{D2} = I_{SS}$):

$$\Delta V = 0 - \sqrt{\frac{I_{SS}}{\beta}} = -\sqrt{\frac{I_{SS}}{\beta}} .$$

**$M_2$ just off** ($I_{D1} = I_{SS}$, $I_{D2} = 0$):

$$\Delta V = \sqrt{\frac{2I_{SS}}{\beta}} - 0 = +\sqrt{\frac{2I_{SS}}{\beta}} \approx 1.414\sqrt{\frac{I_{SS}}{\beta}} .$$

So the transition runs from $-1$ to $+1.414$ in units of $\sqrt{I_{SS}/\beta}$. It is not centred on zero (its midpoint is at $+0.207$), and the crossing at $+0.293$ is not at its midpoint either. For comparison, a symmetric pair of two $W/L$ devices steers completely at $\pm\sqrt{2I_{SS}/\beta}$ and crosses at zero.

### Step 5 — The whole characteristic

To get the curve between the limits, let $a = \sqrt{I_{D1}}$, $b = \sqrt{I_{D2}}$ and $s = \sqrt{\beta}\,\Delta V$. The KVL relation and KCL become

$$\sqrt2\,a - b = s, \qquad a^2 + b^2 = I_{SS}.$$

Substitute $b = \sqrt2\,a - s$ into the second equation:

$$
\begin{aligned}
a^2 + (\sqrt2\,a - s)^2 &= I_{SS}\\
3a^2 - 2\sqrt2\,s\,a + s^2 - I_{SS} &= 0\\
a &= \frac{2\sqrt2\,s + \sqrt{8s^2 - 12(s^2 - I_{SS})}}{6} = \frac{\sqrt2\,s + \sqrt{3I_{SS} - s^2}}{3},
\end{aligned}
$$

taking the root with $a \ge 0$. With the normalized input $v = \Delta V/\sqrt{I_{SS}/\beta}$ (so $s = v\sqrt{I_{SS}}$):

$$\frac{I_{D1}}{I_{SS}} = \frac{\left(\sqrt2\,v + \sqrt{3 - v^2}\right)^2}{9}, \qquad I_{D2} = I_{SS} - I_{D1}, \qquad -1 \le v \le \sqrt2 .$$

Checks: $v = 0$ gives $3/9 = 1/3$; $v = 1 - 1/\sqrt2$ gives $1/2$; $v = -1$ gives 0; $v = \sqrt2$ gives 1.

| $v = \Delta V/\sqrt{I_{SS}/\beta}$ | $I_{D1}/I_{SS}$ | $I_{D2}/I_{SS}$ | note |
|---|---|---|---|
| $\le -1$ | 0 | 1 | $M_1$ off |
| −0.5 | 0.10 | 0.90 | |
| 0 | 0.333 | 0.667 | $I_{D2} = 2I_{D1}$ |
| 0.293 | 0.500 | 0.500 | crossing |
| 0.5 | 0.62 | 0.38 | |
| 1.0 | 0.89 | 0.11 | |
| $\ge 1.414$ | 1 | 0 | $M_2$ off |

**Slope at the crossing.** There each device carries $I_{SS}/2$, so $g_{m1} = \sqrt{2\beta(I_{SS}/2)} = \sqrt{\beta I_{SS}}$ and $g_{m2} = \sqrt{2(2\beta)(I_{SS}/2)} = \sqrt2\sqrt{\beta I_{SS}}$. A small input splits across the two gate–source voltages in series, so

$$\frac{dI_{D1}}{d\Delta V} = \frac{1}{1/g_{m1} + 1/g_{m2}} = \frac{\sqrt2}{1 + \sqrt2}\sqrt{\beta I_{SS}} = 0.586\sqrt{\beta I_{SS}} .$$

### Step 6 — Description of the sketch

- $I_{D1} + I_{D2} = I_{SS}$ everywhere, so the two curves are mirror images of each other about the level $I_{SS}/2$.
- For $\Delta V \le -\sqrt{I_{SS}/\beta}$: $I_{D1} = 0$, $I_{D2} = I_{SS}$.
- $I_{D1}$ rises (and $I_{D2}$ falls) through $I_{SS}/3$ (and $2I_{SS}/3$) at $\Delta V = 0$.
- The curves cross at $I_{SS}/2$ for $\Delta V = 0.293\sqrt{I_{SS}/\beta}$, to the *right* of the origin.
- For $\Delta V \ge \sqrt{2I_{SS}/\beta}$: $I_{D1} = I_{SS}$, $I_{D2} = 0$.

The transition is asymmetric: it extends $1\cdot\sqrt{I_{SS}/\beta}$ to the left of zero but $1.414\sqrt{I_{SS}/\beta}$ to the right. Each curve is therefore *not* point-symmetric about the crossing, unlike the curves of a symmetric pair.

### Result

The currents are equal when

$$V_{in1} - V_{in2} = \left(1 - \frac{1}{\sqrt2}\right)\sqrt{\frac{I_{SS}}{\beta}} \approx 0.29\sqrt{\frac{I_{SS}}{\beta}}\qquad (V_{in1} \text{ higher}).$$

Sketch: $I_{D1} + I_{D2} = I_{SS}$. At zero input $I_{D1} = I_{SS}/3$ and $I_{D2} = 2I_{SS}/3$. $M_1$ is off for $V_{in1} - V_{in2} \le -\sqrt{I_{SS}/\beta}$, and $M_2$ is off for $V_{in1} - V_{in2} \ge \sqrt{2I_{SS}/\beta}$. The crossing is shifted to the right of the origin, and the transition region is asymmetric about zero.

**Common mistake.** Assuming the currents are equal at $V_{in1} = V_{in2}$. With equal $V_{GS}$ the currents are proportional to $W/L$, so the wider $M_2$ carries twice the current. Equality needs a positive $V_{in1} - V_{in2}$.

**Common mistake.** Getting the direction wrong: placing the crossing at negative $V_{in1} - V_{in2}$, or writing $I_{D1} = 2I_{D2}$ at zero input. The *wider* device ($M_2$) carries more current at zero input, so $V_{in1}$ must be raised to balance the pair.
