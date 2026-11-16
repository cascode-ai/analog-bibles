# Detailed solution - R586

**Approach.** Write charge (capacitive-current) balance at the op-amp input node X, combine it with the op-amp relation $V_{out} = -A_{v1}V_X$, and solve for the closed-loop gain. The result has the form "nominal gain $C_1/C_2$ divided by $1 + 1/(\text{loop gain})$". Setting the relative error to 1 % gives the smallest allowed $C_2$, hence the largest nominal gain.

### Step 1 — Equations of the equivalent circuit

The circuit has one internal node, X (the op amp's inverting input):

- $C_1$ connects the input $V_{in}$ to X;
- $C_2$ connects X to the output (feedback capacitor);
- $C_{in}$ connects X to ground (the op amp's input capacitance);
- the op amp is a voltage-controlled voltage source with open-loop gain $A_{v1}$ and grounded + input: $V_{out} = A_{v1}(0 - V_X) = -A_{v1}V_X$. Apart from $C_{in}$, it draws no input current.

**KCL at X.** All currents are capacitive, $i = sC\,\Delta V$. The current arriving through $C_1$ leaves through $C_{in}$ and $C_2$:

$$sC_1\,(V_{in} - V_X) = sC_{in}\,V_X + sC_2\,(V_X - V_{out}).$$

The factor $s$ cancels, so this is simply a **charge balance**: the charge pushed into X through $C_1$ equals the charge stored on $C_{in}$ plus the charge transferred to $C_2$. The result is frequency independent (a pure capacitive network with an ideal-gain op amp).

### Step 2 — Solve for the closed-loop gain

Collect the $V_X$ terms:

$$
\begin{aligned}
C_1V_{in} - C_1V_X &= C_{in}V_X + C_2V_X - C_2V_{out}\\
C_1V_{in} &= (C_1 + C_2 + C_{in})\,V_X - C_2V_{out}.
\end{aligned}
$$

Substitute $V_X = -V_{out}/A_{v1}$:

$$
\begin{aligned}
C_1V_{in} &= -(C_1 + C_2 + C_{in})\frac{V_{out}}{A_{v1}} - C_2V_{out}\\
C_1V_{in} &= -V_{out}\left[C_2 + \frac{C_1 + C_2 + C_{in}}{A_{v1}}\right]\\
\frac{V_{out}}{V_{in}} &= -\frac{C_1}{C_2 + \dfrac{C_1 + C_2 + C_{in}}{A_{v1}}}.
\end{aligned}
$$

Divide numerator and denominator by $C_2$:

$$\frac{V_{out}}{V_{in}} = -\frac{C_1}{C_2}\cdot\frac{1}{1 + \dfrac{C_1 + C_2 + C_{in}}{A_{v1}C_2}}.$$

With $A_{v1} \to \infty$ this becomes the **nominal gain** $-C_1/C_2$.

### Step 3 — Gain error and its physical meaning

Define

$$x = \frac{C_1 + C_2 + C_{in}}{A_{v1}C_2} = \frac{1}{A_{v1}\beta}, \qquad \beta = \frac{C_2}{C_1 + C_2 + C_{in}}.$$

$\beta$ is the **feedback factor**: with the input grounded, a voltage at the output reaches X through the capacitive divider formed by $C_2$ (on top) and $C_1 \parallel C_{in}$ (to ground), so $V_X/V_{out} = C_2/(C_2 + C_1 + C_{in})$. The loop gain is $A_{v1}\beta$.

The **relative gain error** is the fractional shortfall from the nominal gain:

$$\varepsilon = \frac{|G_{nom}| - |G|}{|G_{nom}|} = 1 - \frac{1}{1 + x} = \frac{x}{1 + x} \approx x = \frac{1}{A_{v1}\beta}\quad(x \ll 1).$$

**Intuition.** A larger nominal gain means a smaller $C_2$. A smaller $C_2$ reduces $\beta$: less of the output is fed back, the loop gain $A_{v1}\beta$ drops, and the op amp holds X less firmly at virtual ground. Note that $\beta$ involves *all* capacitors at X, including $C_1$ and $C_{in}$, so even unity nominal gain has $\beta < 1/2$.

### Step 4 — Largest nominal gain for 1 % error (first-order)

The error $x = (C_1 + C_{in})/(A_{v1}C_2) + 1/A_{v1}$ grows monotonically as $C_2$ shrinks, so the maximum gain corresponds to the smallest $C_2$ that still meets the specification, i.e. to $x = 0.01$:

$$
\begin{aligned}
\frac{C_1 + C_2 + C_{in}}{A_{v1}C_2} &= 0.01\\
C_1 + C_2 + C_{in} &= 0.01 \times 1000 \times C_2 = 10\,C_2\\
C_1 + C_{in} &= 9\,C_2\\
C_2 &= \frac{C_1 + C_{in}}{9} = \frac{2\ \mathrm{pF} + 0.2\ \mathrm{pF}}{9} = 0.2444\ \mathrm{pF}.
\end{aligned}
$$

Nominal gain:

$$\frac{C_1}{C_2} = \frac{2\ \mathrm{pF}}{0.2444\ \mathrm{pF}} = 8.18.$$

Check: $\beta = 0.2444/(2 + 0.2444 + 0.2) = 0.2444/2.4444 = 0.100$, so the loop gain is $A_{v1}\beta = 1000 \times 0.1 = 100$, i.e. a 1 % error. ✓

### Step 5 — Exact version

Using the exact error $x/(1 + x) = 0.01$:

$$
\begin{aligned}
x &= \frac{0.01}{1 - 0.01} = 0.010101\\
C_1 + C_2 + C_{in} &= 0.010101 \times 1000 \times C_2 = 10.101\,C_2\\
C_1 + C_{in} &= 9.101\,C_2\\
C_2 &= \frac{2.2\ \mathrm{pF}}{9.101} = 0.2417\ \mathrm{pF},\\
\frac{C_1}{C_2} &= \frac{2\ \mathrm{pF}}{0.2417\ \mathrm{pF}} = 8.27.
\end{aligned}
$$

Verification of the actual gain for this design:

$$|G| = \frac{8.27}{1 + 0.010101} = \frac{8.27}{1.0101} = 8.19, \qquad \varepsilon = 1 - \frac{8.19}{8.27} = 1.0\ \%.\ \checkmark$$

The two versions differ by about 1 %, the size of the error itself, so either is an acceptable answer.

### Result

$$\left|\frac{V_{out}}{V_{in}}\right| = \frac{C_1}{C_2 + (C_1 + C_2 + C_{in})/A_{v1}}, \qquad \text{gain error} \approx \frac{C_1 + C_2 + C_{in}}{A_{v1}C_2}.$$

For at most 1 % error: $C_2 \ge (C_1 + C_{in})/9 \approx 0.244$ pF, so the **maximum nominal gain is $C_1/C_2 \approx 8.2$** (8.27 with the exact error expression, $C_2 = 0.242$ pF).

**Common mistake.** Leaving $C_{in}$ (or $C_2$) out of the capacitance at X. Without $C_{in}$ the condition becomes $C_1 = 9C_2$, giving a gain of 9.0, which overestimates what the circuit can do. Every capacitor at the virtual-ground node dilutes the feedback factor.

**Common mistake.** Taking the gain error as $1/A_{v1}$ (which would allow any gain with only 0.1 % error) or as $(C_1/C_2)/A_{v1}$ (which gives a gain of 10). The error is the reciprocal of the *loop gain* $A_{v1}\beta$, with $\beta = C_2/(C_1 + C_2 + C_{in})$, not of the open-loop gain alone. Since $1/\beta = 1 + (C_1 + C_{in})/C_2$ is always larger than the nominal gain, a gain of 10 or more is impossible with 1 % error and $A_{v1} = 1000$.
