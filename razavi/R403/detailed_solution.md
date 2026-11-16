# Detailed solution - R403

**Approach.** Model the amplifier as a voltage source $A(s)(V_+ - V_-)$ behind $R_0$. The divider $R_1$–$R_2$ samples $V_{out}$ and returns $\beta V_{out}$ to the inverting input (shunt sensing), so $Z_{out}$ is $R_0$ divided by $1 + \beta A(s)$. Because $A(s)$ falls with frequency, this reduction fades, and $|Z_{out}|$ rises from a small value to $R_0$.

### Step 1 — Model and feedback factor

The amplifier is an ideal voltage source $A(s)(V_+ - V_-)$, with $A(s) = A_0/(1 + s/\omega_0)$, in series with $R_0$. Its inputs draw no current, so $R_1$ and $R_2$ form an unloaded divider:

$$V_- = \beta V_{out}, \qquad \beta = \frac{R_2}{R_1 + R_2} .$$

### Step 2 — Test source and KCL at the output

Set $V_{in} = 0$ (so $V_+ = 0$), apply $V_X$ at the output and find the current $I_X$ it delivers; $Z_{out} = V_X/I_X$.

<!-- diagram: diagram-01.cir -->

The internal source produces $A(s)(0 - \beta V_X) = -\beta A(s)V_X$, so the current through $R_0$ is

$$I_{R_0} = \frac{V_X - (-\beta A V_X)}{R_0} = \frac{V_X\,(1 + \beta A)}{R_0} .$$

The divider draws $V_X/(R_1 + R_2)$. KCL at the output:

$$I_X = \frac{V_X\,(1 + \beta A)}{R_0} + \frac{V_X}{R_1 + R_2}, \qquad Z_{out} = \frac{V_X}{I_X} = \frac{R_0}{1 + \beta A(s)}\ \Big\|\ (R_1 + R_2) .$$

The voltage across $R_0$ is $(1 + \beta A)$ times $V_X$, so the output looks $(1 + \beta A)$ times stiffer. In most practical cases $R_1 + R_2 \gg R_0/(1 + \beta A)$, and the divider's own loading can be dropped:

$$Z_{out}(s) \approx \frac{R_0}{1 + \beta A(s)} .$$

### Step 3 — Insert the frequency dependence of $A(s)$

$$
\begin{aligned}
1 + \beta A(s) &= 1 + \frac{\beta A_0}{1 + s/\omega_0} = \frac{1 + s/\omega_0 + \beta A_0}{1 + s/\omega_0},\\[4pt]
Z_{out}(s) &= R_0\,\frac{1 + s/\omega_0}{1 + \beta A_0 + s/\omega_0}.
\end{aligned}
$$

Dividing numerator and denominator by $(1 + \beta A_0)$:

$$Z_{out}(s) = \frac{R_0}{1 + \beta A_0}\cdot\frac{1 + s/\omega_0}{1 + \dfrac{s}{(1 + \beta A_0)\,\omega_0}} .$$

So $Z_{out}$ has

- a low-frequency value $R_0/(1 + \beta A_0)$;
- a **zero** at $\omega_z = \omega_0$ (the amplifier's open-loop pole);
- a **pole** at $\omega_p = (1 + \beta A_0)\,\omega_0$, the closed-loop bandwidth;
- a high-frequency value $\lim_{s\to\infty} Z_{out} = R_0$.

**Including the divider.** Combining the two parallel admittances over a common denominator, with $(R_1 + R_2)\beta = R_2$:

$$Z_{out} = \frac{R_0(R_1 + R_2)(1 + s/\omega_0)}{(R_0 + R_1 + R_2)(1 + s/\omega_0) + A_0R_2},$$

which goes from $R_0(R_1 + R_2)/(R_0 + R_1 + R_2 + A_0R_2)$ at low frequency to $R_0\parallel(R_1 + R_2)$ at high frequency, with the same shape.

### Step 4 — Plot of $|Z_{out}|$

$$|Z_{out}(j\omega)| = R_0\,\frac{\sqrt{1 + (\omega/\omega_0)^2}}{\sqrt{(1 + \beta A_0)^2 + (\omega/\omega_0)^2}} .$$

On log–log axes:

- **$\omega \ll \omega_0$:** flat at $R_0/(1 + \beta A_0)$.
- **$\omega_0 \ll \omega \ll (1 + \beta A_0)\omega_0$:** $|Z_{out}| \approx R_0\,\omega/[(1 + \beta A_0)\omega_0]$, a rise of **+20 dB/decade**.
- **$\omega \gg (1 + \beta A_0)\omega_0$:** flat at $R_0$.

Example with $1 + \beta A_0 = 100$:

| $\omega/\omega_0$ | $\lvert Z_{out}\rvert/R_0$ | comment |
|---|---|---|
| 0.1 | 0.0100 | low-frequency plateau $1/(1 + \beta A_0)$ |
| 1 | 0.0141 | zero: 3 dB above the plateau |
| 10 | 0.100 | rising at +20 dB/dec |
| 100 | 0.707 | pole at $(1 + \beta A_0)\omega_0$: 3 dB below $R_0$ |
| 1000 | 0.995 | high-frequency plateau $R_0$ |

### Step 5 — Explanation: why $Z_{out}$ rises (inductive behaviour)

$Z_{out}$ is lowered by the loop gain $\beta A(s)$. Above $\omega_0$ the loop gain falls at 20 dB/decade, so the feedback holds the output voltage less and less firmly and $Z_{out}$ climbs at the same rate. Near $\omega \approx (1 + \beta A_0)\omega_0$ the loop gain falls to about 1, and $Z_{out}$ returns to the open-loop $R_0$.

An impedance that grows in proportion to frequency is **inductive**:

$$\frac{1}{Z_{out}} = \frac{1 + \beta A}{R_0} = \frac{1}{R_0} + \frac{\beta A_0}{R_0(1 + s/\omega_0)} = \frac{1}{R_0} + \frac{1}{\dfrac{R_0}{\beta A_0} + s\dfrac{R_0}{\beta A_0\omega_0}} ,$$

so

$$Z_{out} = R_0\ \Big\|\ \left(\frac{R_0}{\beta A_0} + sL\right), \qquad L = \frac{R_0}{\beta A_0\,\omega_0},$$

i.e. $R_0$ in parallel with $R_0/(\beta A_0)$ in series with an inductor $L$. With a capacitive load, this inductive output can resonate.

### Result

Neglecting the current drawn by $R_1 + R_2$, with $\beta = R_2/(R_1 + R_2)$:

$$Z_{out}(s) = \frac{R_0}{1 + \beta A(s)} = R_0\,\frac{1 + s/\omega_0}{1 + \beta A_0 + s/\omega_0} = \frac{R_0}{1 + \beta A_0}\cdot\frac{1 + s/\omega_0}{1 + s/[(1 + \beta A_0)\omega_0]} .$$

$|Z_{out}|$ is flat at $R_0/(1 + \beta A_0)$ up to the zero at $\omega_0$, rises at +20 dB/dec up to the pole at $(1 + \beta A_0)\omega_0$, and is flat at $R_0$ above it. Equivalently $Z_{out} = R_0\parallel[R_0/(\beta A_0) + sL]$ with $L = R_0/(\beta A_0\omega_0)$. The rise happens because the loop gain $\beta A(s)$, which lowers $Z_{out}$, falls with frequency. With the divider included, $Z_{out} = \dfrac{R_0(R_1 + R_2)(1 + s/\omega_0)}{(R_0 + R_1 + R_2)(1 + s/\omega_0) + A_0R_2}$, which has the same shape and ends at $R_0\parallel(R_1 + R_2)$.

**Common mistake.** Putting a **pole** at $\omega_0$ in $Z_{out}$ and drawing $|Z_{out}|$ falling with frequency. The amplifier's pole is in the denominator of $1 + \beta A$, hence in the *numerator* of $Z_{out}$: it becomes a zero.

**Common mistake.** Claiming that the feedback raises the output impedance. Shunt sensing lowers it by $1 + \beta A$; frequency only weakens the lowering, so $Z_{out}$ never exceeds $R_0$.

**Common mistake.** Placing the pole at $\beta A_0\omega_0$, or using $A_0$ instead of $\beta A_0$. The pole sits where the loop gain $\beta A$ falls to about 1, at $(1 + \beta A_0)\omega_0$.
