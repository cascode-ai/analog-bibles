# Detailed solution - R403

**Approach.** Model the amplifier as a frequency-dependent voltage source $A(s)(V_+ - V_-)$ in series with $R_0$. The resistive divider $R_1$–$R_2$ samples $V_{out}$ and returns $\beta V_{out}$ to the inverting input (shunt sensing), so the closed-loop output impedance is $R_0$ divided by $1 + \beta A(s)$. Because $A(s)$ falls with frequency, this reduction fades away, and $|Z_{out}|$ rises from a small value to $R_0$.

### Step 1 — Model of the circuit

Reading the figure: the amplifier's non-inverting input is $V_{in}$; $R_1$ connects $V_{out}$ to the inverting input, and $R_2$ connects the inverting input to ground. This is the classic non-inverting amplifier.

Amplifier model (given data):

- open-loop gain $A(s) = \dfrac{A_0}{1 + s/\omega_0}$, with dc gain $A_0$ and a single pole at $\omega_0$;
- infinite input impedance, so no current flows into either input;
- output resistance $R_0$. The output is therefore an ideal voltage source $A(s)\,(V_+ - V_-)$ followed by a series resistor $R_0$.

**Feedback factor.** No current enters the inverting input, so $R_1$ and $R_2$ form an unloaded voltage divider:

$$V_- = \beta V_{out}, \qquad \beta = \frac{R_2}{R_1 + R_2} .$$

### Step 2 — Test setup for the output impedance

To find $Z_{out}$:

- set the input source to zero, $V_{in} = 0$ (so $V_+ = 0$);
- apply a test voltage $V_X$ at the output;
- compute the current $I_X$ that the test source delivers into the output node; then $Z_{out} = V_X/I_X$.

<!-- diagram: diagram-01.cir -->

The internal source then produces $A(s)(0 - \beta V_X) = -\beta A(s)V_X$. Two paths draw current from the output node: $R_0$ (toward the internal source) and the divider $R_1 + R_2$ (to ground).

### Step 3 — KCL at the output node

The current through $R_0$ is the voltage across it divided by $R_0$:

$$I_{R_0} = \frac{V_X - (-\beta A V_X)}{R_0} = \frac{V_X\,(1 + \beta A)}{R_0} .$$

The current through the divider is $V_X/(R_1 + R_2)$. KCL at the output:

$$I_X = \frac{V_X\,(1 + \beta A)}{R_0} + \frac{V_X}{R_1 + R_2} .$$

Therefore

$$Z_{out} = \frac{V_X}{I_X} = \frac{R_0}{1 + \beta A(s)}\ \Big\|\ (R_1 + R_2) .$$

**Intuition.** When the test source raises the output by $V_X$, the amplifier responds by driving its internal source to $-\beta AV_X$. The voltage across $R_0$ is then $(1 + \beta A)$ times larger than $V_X$, and so is the current: the output looks $(1 + \beta A)$ times "stiffer". This is the familiar result that shunt (voltage) sensing lowers the output impedance by one plus the loop gain $\beta A$.

In most practical cases $R_1 + R_2 \gg R_0/(1 + \beta A)$, and the divider's own loading can be dropped:

$$Z_{out}(s) \approx \frac{R_0}{1 + \beta A(s)} .$$

### Step 4 — Insert the frequency dependence of $A(s)$

$$
\begin{aligned}
1 + \beta A(s) &= 1 + \frac{\beta A_0}{1 + s/\omega_0} = \frac{1 + s/\omega_0 + \beta A_0}{1 + s/\omega_0},\\[4pt]
Z_{out}(s) &= R_0\,\frac{1 + s/\omega_0}{1 + \beta A_0 + s/\omega_0}.
\end{aligned}
$$

Divide numerator and denominator by $(1 + \beta A_0)$ to show the pole explicitly:

$$Z_{out}(s) = \frac{R_0}{1 + \beta A_0}\cdot\frac{1 + s/\omega_0}{1 + \dfrac{s}{(1 + \beta A_0)\,\omega_0}} .$$

So $Z_{out}$ has

- a low-frequency value $R_0/(1 + \beta A_0)$;
- a **zero** at $\omega_z = \omega_0$ (the open-loop pole of the amplifier);
- a **pole** at $\omega_p = (1 + \beta A_0)\,\omega_0$, which is the closed-loop bandwidth of the amplifier;
- a high-frequency value $\lim_{s\to\infty} Z_{out} = R_0$.

**Including the divider.** If $R_1 + R_2$ is kept, combine the two parallel admittances over a common denominator, using $(R_1 + R_2)\beta = R_2$:

$$Z_{out} = \frac{R_0(R_1 + R_2)(1 + s/\omega_0)}{(R_0 + R_1 + R_2)(1 + s/\omega_0) + A_0R_2},$$

which goes from $R_0(R_1 + R_2)/(R_0 + R_1 + R_2 + A_0R_2)$ at low frequency to $R_0\parallel(R_1 + R_2)$ at high frequency. The shape is the same.

### Step 5 — Plot of $|Z_{out}|$

$$|Z_{out}(j\omega)| = R_0\,\frac{\sqrt{1 + (\omega/\omega_0)^2}}{\sqrt{(1 + \beta A_0)^2 + (\omega/\omega_0)^2}} .$$

On log–log axes (Bode plot) there are three straight-line regions:

- **$\omega \ll \omega_0$:** flat at $R_0/(1 + \beta A_0)$.
- **$\omega_0 \ll \omega \ll (1 + \beta A_0)\omega_0$:** the numerator grows as $\omega/\omega_0$ while the denominator is still about $1 + \beta A_0$, so $|Z_{out}| \approx R_0\,\omega/[(1 + \beta A_0)\omega_0]$, a rise of **+20 dB/decade**.
- **$\omega \gg (1 + \beta A_0)\omega_0$:** flat at $R_0$.

Example with $1 + \beta A_0 = 100$:

| $\omega/\omega_0$ | $\lvert Z_{out}\rvert/R_0$ | comment |
|---|---|---|
| 0.1 | 0.0100 | low-frequency plateau $1/(1 + \beta A_0)$ |
| 1 | 0.0141 | zero: 3 dB above the plateau |
| 10 | 0.100 | rising at +20 dB/dec |
| 100 | 0.707 | pole at $(1 + \beta A_0)\omega_0$: 3 dB below $R_0$ |
| 1000 | 0.995 | high-frequency plateau $R_0$ |

### Step 6 — Explanation: why $Z_{out}$ rises (inductive behaviour)

The output impedance is reduced by the loop gain $\beta A(s)$. Above $\omega_0$ the amplifier's gain, and therefore the loop gain, falls at 20 dB/decade, so the feedback becomes less and less able to hold the output voltage when a current is drawn. $Z_{out}$ climbs at the same rate. Near $\omega \approx (1 + \beta A_0)\omega_0$ the loop gain falls to about 1, the feedback stops acting, and the output impedance returns to the open-loop value $R_0$.

An impedance that grows in proportion to frequency is **inductive**. Write the admittance:

$$\frac{1}{Z_{out}} = \frac{1 + \beta A}{R_0} = \frac{1}{R_0} + \frac{\beta A_0}{R_0(1 + s/\omega_0)} = \frac{1}{R_0} + \frac{1}{\dfrac{R_0}{\beta A_0} + s\dfrac{R_0}{\beta A_0\omega_0}} .$$

So

$$Z_{out} = R_0\ \Big\|\ \left(\frac{R_0}{\beta A_0} + sL\right), \qquad L = \frac{R_0}{\beta A_0\,\omega_0},$$

i.e. $R_0$ in parallel with a resistor $R_0/(\beta A_0)$ in series with an inductor $L$. In practice, a closed-loop amplifier's output therefore looks like an inductor over a wide frequency range. This matters, for example, when it drives a capacitive load: the inductive output and the load capacitance can resonate.

### Result

Neglecting the current drawn by $R_1 + R_2$, with $\beta = R_2/(R_1 + R_2)$:

$$Z_{out}(s) = \frac{R_0}{1 + \beta A(s)} = R_0\,\frac{1 + s/\omega_0}{1 + \beta A_0 + s/\omega_0} = \frac{R_0}{1 + \beta A_0}\cdot\frac{1 + s/\omega_0}{1 + s/[(1 + \beta A_0)\omega_0]} .$$

$|Z_{out}|$ is flat at $R_0/(1 + \beta A_0)$ up to the zero at $\omega_0$, rises at +20 dB/dec up to the pole at $(1 + \beta A_0)\omega_0$, and is flat at $R_0$ above it. Equivalently $Z_{out} = R_0\parallel[R_0/(\beta A_0) + sL]$ with $L = R_0/(\beta A_0\omega_0)$. The rise happens because the loop gain $\beta A(s)$, which lowers $Z_{out}$, falls with frequency. With the divider included, $Z_{out} = \dfrac{R_0(R_1 + R_2)(1 + s/\omega_0)}{(R_0 + R_1 + R_2)(1 + s/\omega_0) + A_0R_2}$, which has the same shape and ends at $R_0\parallel(R_1 + R_2)$.

**Common mistake.** Putting a **pole** at $\omega_0$ in $Z_{out}$ and drawing $|Z_{out}|$ falling with frequency. The amplifier's pole appears in the *denominator* of $1 + \beta A$ and therefore in the *numerator* of $Z_{out}$: the open-loop pole becomes a zero of the closed-loop output impedance.

**Common mistake.** Claiming that the feedback raises the output impedance. Sensing the output voltage (shunt sensing) always lowers the output impedance, by $1 + \beta A$. The only effect of frequency is that the lowering weakens, so $Z_{out}$ can never exceed its open-loop value $R_0$.

**Common mistake.** Placing the pole at $\beta A_0\omega_0$ and the zero somewhere else, or using $A_0$ instead of $\beta A_0$. The relevant quantity is the loop gain $\beta A$, not the amplifier gain; the pole sits where the loop gain falls to about 1, at $(1 + \beta A_0)\omega_0$.
