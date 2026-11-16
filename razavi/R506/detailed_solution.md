# Detailed solution - R506

**Approach.** Divide the closed-loop numerator and denominator by $1 + A_0$ so that the denominator has a constant term of 1; then its factors $(1 + s/\omega_{pA})(1 + s/\omega_{pB})$ follow from matching coefficients, and the given conditions make the two poles widely spaced, giving simple expressions. The step response follows from a partial-fraction expansion of $H_{closed}(s)V_0/s$ and the inverse Laplace transform.

### Step 1 — Normalize the denominator

Start from

$$H_{closed}(s) = \frac{A_0\left(1 + s/\omega_z\right)}{\dfrac{s^2}{\omega_{p1}\omega_{p2}} + b\,s + (1 + A_0)}, \qquad b = \frac{1}{\omega_{p1}} + \frac{1}{\omega_{p2}} + \frac{A_0}{\omega_z} .$$

Divide numerator and denominator by $1 + A_0$:

$$H_{closed}(s) = \frac{\dfrac{A_0}{1 + A_0}\left(1 + \dfrac{s}{\omega_z}\right)}{\dfrac{s^2}{(1 + A_0)\,\omega_{p1}\omega_{p2}} + \dfrac{b}{1 + A_0}\,s + 1} .$$

So the low-frequency gain is

$$A = \frac{A_0}{1 + A_0},$$

the closed-loop gain of a unity-gain buffer (just below 1).

### Step 2 — Factor the denominator

Require

$$\left(1 + \frac{s}{\omega_{pA}}\right)\left(1 + \frac{s}{\omega_{pB}}\right) = 1 + \left(\frac{1}{\omega_{pA}} + \frac{1}{\omega_{pB}}\right)s + \frac{s^2}{\omega_{pA}\omega_{pB}}$$

to match the normalized denominator:

$$\frac{1}{\omega_{pA}} + \frac{1}{\omega_{pB}} = \frac{b}{1 + A_0}, \qquad \omega_{pA}\,\omega_{pB} = (1 + A_0)\,\omega_{p1}\omega_{p2} .$$

**Simplify $b$.** With $\omega_z \approx \omega_{p2}$,

$$b \approx \frac{1}{\omega_{p1}} + \frac{1}{\omega_{p2}} + \frac{A_0}{\omega_{p2}} = \frac{1}{\omega_{p1}} + \frac{1 + A_0}{\omega_{p2}} .$$

The condition $\omega_{p2} \ll (1 + A_0)\omega_{p1}$ means $(1 + A_0)/\omega_{p2} \gg 1/\omega_{p1}$, so $b \approx (1 + A_0)/\omega_{p2}$.

**The poles.** If $\omega_{pA} \ll \omega_{pB}$, the sum of reciprocals is dominated by $1/\omega_{pA}$:

$$\frac{1}{\omega_{pA}} \approx \frac{b}{1 + A_0} \approx \frac{1}{\omega_{p2}} \quad\Longrightarrow\quad \omega_{pA} \approx \omega_{p2}\ (\approx \omega_z),$$

and from the product,

$$\omega_{pB} = \frac{(1 + A_0)\,\omega_{p1}\omega_{p2}}{\omega_{pA}} \approx (1 + A_0)\,\omega_{p1} .$$

Their ratio is $\omega_{pB}/\omega_{pA} \approx (1 + A_0)\omega_{p1}/\omega_{p2} \gg 1$, as assumed. Hence

$$H_{closed}(s) = \frac{A\left(1 + \dfrac{s}{\omega_z}\right)}{\left(1 + \dfrac{s}{\omega_{pA}}\right)\left(1 + \dfrac{s}{\omega_{pB}}\right)}, \quad A = \frac{A_0}{1 + A_0},\ \omega_{pA} \approx \omega_{p2},\ \omega_{pB} \approx (1 + A_0)\omega_{p1}.$$

$\omega_{pB}$ is the main closed-loop pole (about the gain-bandwidth product), and $\omega_{pA}$ sits close to the zero $\omega_z$: together they form a **doublet**.

### Step 3 — Step response: partial fractions

Apply a small step $V_{in}(t) = V_0\,u(t)$, so $V_{in}(s) = V_0/s$:

$$V_{out}(s) = \frac{AV_0}{s}\cdot\frac{1 + s/\omega_z}{(1 + s/\omega_{pA})(1 + s/\omega_{pB})} = AV_0\,\frac{\omega_{pA}\omega_{pB}\,(1 + s/\omega_z)}{s\,(s + \omega_{pA})(s + \omega_{pB})} .$$

Expand as

$$V_{out}(s) = AV_0\left[\frac1s - \frac{K_A}{s + \omega_{pA}} - \frac{K_B}{s + \omega_{pB}}\right].$$

**Residue at $s = 0$:** set $s = 0$ in $\omega_{pA}\omega_{pB}(1 + s/\omega_z)/[(s + \omega_{pA})(s + \omega_{pB})]$, which gives 1.

**Residue at $s = -\omega_{pA}$:** multiply by $(s + \omega_{pA})$ and set $s = -\omega_{pA}$:

$$-K_A = \frac{\omega_{pA}\omega_{pB}\,(1 - \omega_{pA}/\omega_z)}{(-\omega_{pA})(\omega_{pB} - \omega_{pA})} \quad\Longrightarrow\quad K_A = \frac{1 - \omega_{pA}/\omega_z}{1 - \omega_{pA}/\omega_{pB}} .$$

**Residue at $s = -\omega_{pB}$:** similarly,

$$-K_B = \frac{\omega_{pA}\omega_{pB}\,(1 - \omega_{pB}/\omega_z)}{(-\omega_{pB})(\omega_{pA} - \omega_{pB})} \quad\Longrightarrow\quad K_B = \frac{1 - \omega_{pB}/\omega_z}{1 - \omega_{pB}/\omega_{pA}} .$$

**Check:** bringing both to the common denominator $\omega_{pB} - \omega_{pA}$,

$$K_A + K_B = \frac{\omega_{pB}(1 - \omega_{pA}/\omega_z) - \omega_{pA}(1 - \omega_{pB}/\omega_z)}{\omega_{pB} - \omega_{pA}} = \frac{\omega_{pB} - \omega_{pA}}{\omega_{pB} - \omega_{pA}} = 1,$$

so $V_{out}(0^+) = AV_0(1 - K_A - K_B) = 0$: the output starts from zero, as it must for a transfer function with more poles than zeros.

### Step 4 — Time-domain response

Using $\mathcal{L}^{-1}\{1/s\} = u(t)$ and $\mathcal{L}^{-1}\{1/(s + \omega)\} = e^{-\omega t}u(t)$:

$$V_{out}(t) = AV_0\left[1 - K_Ae^{-\omega_{pA}t} - K_Be^{-\omega_{pB}t}\right]u(t).$$

**Simplify for $\omega_{pB} \gg \omega_{pA}, \omega_z$.** Then $\omega_{pA}/\omega_{pB} \approx 0$, so $K_A \approx 1 - \omega_{pA}/\omega_z$ and $K_B = 1 - K_A \approx \omega_{pA}/\omega_z$:

$$V_{out}(t) \approx AV_0\left[1 - \frac{\omega_{pA}}{\omega_z}\,e^{-(1 + A_0)\omega_{p1}t} - \left(1 - \frac{\omega_{pA}}{\omega_z}\right)e^{-\omega_{pA}t}\right].$$

**Interpretation.**

- The **fast** exponential, with time constant $1/[(1 + A_0)\omega_{p1}]$, carries almost the entire step (amplitude $\omega_{pA}/\omega_z \approx 1$). This is the response of an ideal one-pole buffer.
- The **slow** exponential, with time constant $1/\omega_{pA} \approx 1/\omega_{p2}$, has a small amplitude $1 - \omega_{pA}/\omega_z$, proportional to the mismatch between the doublet's pole and zero. Depending on the sign of the mismatch, the output creeps slowly up to its final value ($\omega_{pA} < \omega_z$) or settles slowly down to it from slightly above ($\omega_{pA} > \omega_z$).
- Both poles are real, so there is no ringing. The danger of a doublet is **slow settling**: the small tail decays with the long time constant $1/\omega_{p2}$, and precise settling (e.g. to 0.1 %) can take much longer than $1/[(1 + A_0)\omega_{p1}]$ suggests.

**Example.** $A_0 = 1000$, $\omega_{p1} = 10^6$ rad/s, $\omega_{p2} = 10^8$ rad/s, $\omega_z = 0.9\times10^8$ rad/s (10 % mismatch). The exact poles are $\omega_{pA} = 0.89\times10^8$ rad/s and $\omega_{pB} = 1.12\times10^9$ rad/s, with $K_A = 0.010$. The fast part settles in a few nanoseconds, but the 1 % tail with an 11-ns time constant stretches settling to 0.1 % to about 26 ns, roughly four times longer than without the doublet.

### Step 5 — Exact cancellation

If $\omega_z = \omega_{p2}$ exactly, the denominator factors exactly and $\omega_{pA} = \omega_z$, so

$$K_A = 0, \qquad K_B = 1, \qquad V_{out}(t) = AV_0\left[1 - e^{-(1 + A_0)\omega_{p1}t}\right]u(t),$$

a single time constant and no overshoot: the first-order behaviour expected from perfect pole–zero cancellation.

### Result

$$H_{closed}(s) = \frac{A\left(1 + \dfrac{s}{\omega_z}\right)}{\left(1 + \dfrac{s}{\omega_{pA}}\right)\left(1 + \dfrac{s}{\omega_{pB}}\right)}, \qquad A = \frac{A_0}{1 + A_0},\quad \omega_{pA} \approx \omega_{p2}\ (\approx \omega_z),\quad \omega_{pB} \approx (1 + A_0)\,\omega_{p1}.$$

For an input step $V_0u(t)$:

$$V_{out}(t) = AV_0\left[1 - K_Ae^{-\omega_{pA}t} - K_Be^{-\omega_{pB}t}\right],\quad K_A = \frac{1 - \omega_{pA}/\omega_z}{1 - \omega_{pA}/\omega_{pB}},\quad K_B = \frac{1 - \omega_{pB}/\omega_z}{1 - \omega_{pB}/\omega_{pA}},$$

with $K_A + K_B = 1$. For $\omega_{pB} \gg \omega_{pA}, \omega_z$:

$$V_{out}(t) \approx AV_0\left[1 - \frac{\omega_{pA}}{\omega_z}e^{-(1 + A_0)\omega_{p1}t} - \left(1 - \frac{\omega_{pA}}{\omega_z}\right)e^{-\omega_{pA}t}\right].$$

A fast exponential is followed by a small, slow doublet tail; with exact cancellation the response reduces to $AV_0[1 - e^{-(1 + A_0)\omega_{p1}t}]$.

**Common mistake.** Writing $\omega_{pB} \approx \omega_{p1}$ or $A = A_0$. Feedback multiplies the dominant-pole frequency by $1 + A_0$ and reduces the gain to $A_0/(1 + A_0)$.

**Common mistake.** Predicting ringing or oscillatory overshoot. Both closed-loop poles are real; an imperfect doublet only adds a slowly decaying exponential of small amplitude, i.e. a slow-settling tail.

**Common mistake.** Getting a step response that does not start at zero, e.g. by dropping a residue. Because $H_{closed}$ has two poles and one zero, $V_{out}(0^+) = 0$, which requires $K_A + K_B = 1$.
