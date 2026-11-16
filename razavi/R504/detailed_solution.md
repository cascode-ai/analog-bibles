# Detailed solution - R504

**Approach.** In a unity-gain loop the whole output is fed back ($\beta = 1$), so the closed-loop gain is $H_{open}/(1 + H_{open})$. Substitute the given $H_{open}$, clear the fractions by multiplying numerator and denominator by the open-loop denominator, and expand.

### Step 1 — Closed-loop gain with unity feedback

For a negative-feedback loop with forward gain $H(s)$ and feedback factor $\beta$, the input to the amplifier is the difference $V_{in} - \beta V_{out}$, so

$$V_{out} = H\,(V_{in} - \beta V_{out}) \quad\Longrightarrow\quad V_{out}(1 + \beta H) = H\,V_{in} \quad\Longrightarrow\quad \frac{V_{out}}{V_{in}} = \frac{H}{1 + \beta H}.$$

In a unity-gain loop (output tied to the inverting input) $\beta = 1$:

$$H_{closed}(s) = \frac{H_{open}(s)}{1 + H_{open}(s)} .$$

### Step 2 — Substitute the open-loop transfer function

Write $H_{open} = N(s)/D(s)$ with

$$N(s) = A_0\left(1 + \frac{s}{\omega_z}\right), \qquad D(s) = \left(1 + \frac{s}{\omega_{p1}}\right)\left(1 + \frac{s}{\omega_{p2}}\right).$$

Then

$$H_{closed} = \frac{N/D}{1 + N/D} .$$

Multiply the numerator and the denominator by $D(s)$ (allowed, since $D \ne 0$ except at the open-loop poles):

$$H_{closed} = \frac{N}{D + N} = \frac{A_0\left(1 + \dfrac{s}{\omega_z}\right)}{\left(1 + \dfrac{s}{\omega_{p1}}\right)\left(1 + \dfrac{s}{\omega_{p2}}\right) + A_0\left(1 + \dfrac{s}{\omega_z}\right)} .$$

The numerator is already in the required form. Note that the closed-loop zero is the same as the open-loop zero: feedback moves poles, not zeros (for $\beta = 1$).

### Step 3 — Expand the denominator

First the product of the two pole factors:

$$
\begin{aligned}
\left(1 + \frac{s}{\omega_{p1}}\right)\left(1 + \frac{s}{\omega_{p2}}\right) &= 1 + \frac{s}{\omega_{p2}} + \frac{s}{\omega_{p1}} + \frac{s^2}{\omega_{p1}\omega_{p2}}\\
&= \frac{s^2}{\omega_{p1}\omega_{p2}} + \left(\frac{1}{\omega_{p1}} + \frac{1}{\omega_{p2}}\right)s + 1 .
\end{aligned}
$$

Then the second term:

$$A_0\left(1 + \frac{s}{\omega_z}\right) = \frac{A_0}{\omega_z}s + A_0 .$$

Add them, collecting powers of $s$:

$$
\begin{aligned}
D + N &= \frac{s^2}{\omega_{p1}\omega_{p2}} + \left(\frac{1}{\omega_{p1}} + \frac{1}{\omega_{p2}}\right)s + 1 + \frac{A_0}{\omega_z}s + A_0\\
&= \frac{s^2}{\omega_{p1}\omega_{p2}} + \left(\frac{1}{\omega_{p1}} + \frac{1}{\omega_{p2}} + \frac{A_0}{\omega_z}\right)s + A_0 + 1 .
\end{aligned}
$$

### Step 4 — Result of the algebra

$$H_{closed}(s) = \frac{A_0\left(1 + \dfrac{s}{\omega_z}\right)}{\dfrac{s^2}{\omega_{p1}\omega_{p2}} + \left(\dfrac{1}{\omega_{p1}} + \dfrac{1}{\omega_{p2}} + \dfrac{A_0}{\omega_z}\right)s + A_0 + 1},$$

which is the expression to be proved. $\blacksquare$

### Step 5 — Sanity checks

- **DC ($s = 0$):** $H_{closed}(0) = A_0/(1 + A_0)$, the familiar closed-loop gain of a unity-gain buffer with finite open-loop gain (just below 1).
- **Exact pole–zero cancellation ($\omega_z = \omega_{p2}$):** the denominator of Step 2 becomes
$$\left(1 + \frac{s}{\omega_{p2}}\right)\left(1 + \frac{s}{\omega_{p1}}\right) + A_0\left(1 + \frac{s}{\omega_{p2}}\right) = \left(1 + \frac{s}{\omega_{p2}}\right)\left(1 + A_0 + \frac{s}{\omega_{p1}}\right),$$
so the factor $(1 + s/\omega_{p2})$ cancels against the numerator and
$$H_{closed}(s) = \frac{A_0}{1 + A_0 + s/\omega_{p1}} = \frac{A_0}{1 + A_0}\cdot\frac{1}{1 + \dfrac{s}{(1 + A_0)\omega_{p1}}} .$$
This is a first-order system with a single pole at $(1 + A_0)\omega_{p1}$: its step response has one time constant and no overshoot, as stated in the problem. If $\omega_z$ and $\omega_{p2}$ differ slightly, the cancellation is imperfect and a pole–zero doublet remains.

### Result

$$H_{closed}(s) = \frac{H_{open}}{1 + H_{open}} = \frac{A_0(1 + s/\omega_z)}{(1 + s/\omega_{p1})(1 + s/\omega_{p2}) + A_0(1 + s/\omega_z)} = \frac{A_0\left(1 + \dfrac{s}{\omega_z}\right)}{\dfrac{s^2}{\omega_{p1}\omega_{p2}} + \left(\dfrac{1}{\omega_{p1}} + \dfrac{1}{\omega_{p2}} + \dfrac{A_0}{\omega_z}\right)s + A_0 + 1} .$$

**Common mistake.** Using $H/(1 - H)$ or $1/(1 + H)$. For negative feedback the loop gain adds to 1 in the denominator, and the numerator is the forward gain $H$ itself; $1/(1 + H)$ is the error (or sensitivity) function, not the closed-loop gain.

**Common mistake.** Forgetting to multiply the "1" by the open-loop denominator when clearing fractions, which leaves $1 + A_0(1 + s/\omega_z)$ in the denominator and loses the $s^2$ and $1/\omega_{p1} + 1/\omega_{p2}$ terms.
