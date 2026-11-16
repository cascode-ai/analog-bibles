# Detailed solution - R074

**Approach.** Write the intrinsic gain $g_mr_O$ with the form of $g_m$ that suits a constant current, $g_m = 2I_D/(V_{GS} - V_{TH})$. Since $L$ (hence $\lambda$) and $I_D$ are fixed, $r_O = 1/(\lambda I_D)$ is constant, and the gain is inversely proportional to the overdrive. Then describe the curve versus $V_{GS}$.

### Step 1 — What is held constant

- The channel length $L$ is fixed, so the channel-length modulation coefficient $\lambda$ (which scales as $1/L$) is fixed.
- The drain current $I_D$ is fixed. To keep it fixed while $V_{GS}$ changes, the width must be adjusted: from the square law $I_D = \tfrac12\mu_nC_{ox}(W/L)(V_{GS} - V_{TH})^2$,
$$W = \frac{2I_DL}{\mu_nC_{ox}(V_{GS} - V_{TH})^2},$$
so a larger $V_{GS}$ means a narrower device.

Here $\mu_nC_{ox}$ is the process transconductance parameter, $V_{TH}$ the threshold voltage, and $V_{ov} = V_{GS} - V_{TH}$ the overdrive voltage.

### Step 2 — The two factors

**Transconductance.** The square-law $g_m$ can be written as $g_m = \mu_nC_{ox}(W/L)V_{ov}$. Using the square law to replace $\mu_nC_{ox}(W/L) = 2I_D/V_{ov}^2$:

$$g_m = \frac{2I_D}{V_{ov}^2}\cdot V_{ov} = \frac{2I_D}{V_{GS} - V_{TH}} .$$

At constant $I_D$, $g_m$ is inversely proportional to the overdrive.

**Output resistance.**

$$r_O = \frac{1}{\lambda I_D},$$

which is **constant**, since both $\lambda$ and $I_D$ are fixed.

### Step 3 — The intrinsic gain

Multiply:

$$g_mr_O = \frac{2I_D}{V_{GS} - V_{TH}}\cdot\frac{1}{\lambda I_D} .$$

$I_D$ cancels:

$$g_mr_O = \frac{2}{\lambda\,(V_{GS} - V_{TH})} .$$

**Intuition.** At a fixed current, a small overdrive is obtained with a wide device whose $g_m$ is large ($g_m/I_D = 2/V_{ov}$), while $r_O$ is the same for any width. So the gain rises as the overdrive falls.

### Step 4 — Shape of the curve versus $V_{GS}$

- **Hyperbola.** $g_mr_O\cdot(V_{GS} - V_{TH}) = 2/\lambda$ is constant: a rectangular hyperbola with asymptotes $V_{GS} = V_{TH}$ (vertical) and $g_mr_O = 0$ (horizontal).
- **Monotonically decreasing.** The gain falls as $V_{GS}$ increases; each doubling of the overdrive halves it.
- **Near threshold.** As $V_{GS} \to V_{TH}^+$, the square-law expression diverges.
- **Slope:** $\dfrac{d(g_mr_O)}{dV_{GS}} = -\dfrac{2}{\lambda V_{ov}^2}$, steep near $V_{TH}$ and flattening for large overdrive.

**Numerical example** with $\lambda = 0.1\ \mathrm{V^{-1}}$ (so $2/\lambda = 20$ V). At $V_{ov} = 0.2$ V:

$$g_mr_O = \frac{2}{(0.1\ \mathrm{V^{-1}})(0.2\ \mathrm{V})} = \frac{2}{0.02} = 100 .$$

| $V_{GS} - V_{TH}$ (V) | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.75 | 1.0 |
|---|---|---|---|---|---|---|---|
| $g_mr_O$ | 200 | 100 | 66.7 | 50 | 40 | 26.7 | 20 |

With, say, $V_{TH} = 0.7$ V, the horizontal axis reads $V_{GS} = 0.8, 0.9, \dots, 1.7$ V, and the curve has its vertical asymptote at $V_{GS} = 0.7$ V.

### Step 5 — Behaviour near threshold (beyond the square law)

The divergence at $V_{GS} = V_{TH}$ is an artefact of the square law. At small overdrive the device enters weak inversion, where $g_m = I_D/(\zeta V_T)$ ($\zeta \approx 1.5$ is the subthreshold slope factor and $V_T = kT/q \approx 26$ mV). Then $g_m$ stops growing, and the intrinsic gain levels off at about

$$g_mr_O \approx \frac{I_D}{\zeta V_T}\cdot\frac{1}{\lambda I_D} = \frac{1}{\lambda\zeta V_T} = \frac{1}{(0.1)(1.5)(0.026)} \approx 256$$

for $\lambda = 0.1\ \mathrm{V^{-1}}$. The square-law curve reaches this value at $V_{ov} = 2\zeta V_T \approx 78$ mV, so the real curve follows the hyperbola above roughly 0.1 V of overdrive and flattens below it. Keeping the current constant at such small overdrives also requires a very wide, highly capacitive device.

### Result

At constant $I_D$ and $L$, $g_m = 2I_D/(V_{GS} - V_{TH})$ and $r_O = 1/(\lambda I_D)$ is fixed, so

$$g_mr_O = \frac{2}{\lambda\,(V_{GS} - V_{TH})} .$$

The plot versus $V_{GS}$ is a decreasing hyperbola with a vertical asymptote at $V_{GS} = V_{TH}$: the gain halves each time the overdrive doubles (e.g. 100, 40 and 20 at overdrives of 0.2, 0.5 and 1 V for $\lambda = 0.1\ \mathrm{V^{-1}}$). In practice, weak inversion caps it near $1/(\lambda\zeta V_T)$ close to threshold.

**Common mistake.** Concluding that the gain *increases* with $V_{GS}$ because the device is "turned on harder". At a fixed current a larger overdrive means a narrower device and a *smaller* $g_m = 2I_D/V_{ov}$, while $r_O$ does not change.

**Common mistake.** Using $g_m = \sqrt{2\mu_nC_{ox}(W/L)I_D}$ with $W/L$ treated as constant, which suggests a gain independent of $V_{GS}$ or proportional to $\sqrt{V_{GS} - V_{TH}}$. Here $W$ is adjusted to keep $I_D$ constant, so the right form is $g_m = 2I_D/(V_{GS} - V_{TH})$.
