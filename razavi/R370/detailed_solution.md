# Detailed solution - R370

**Approach.** Find the small-signal output resistance of the source follower: with channel-length modulation and body effect neglected it is simply $1/g_{m1}$. The 100-Ω specification therefore fixes $g_{m1}$. With the bias current also fixed, the square-law relation $g_m^2 = 2\mu_nC_{ox}(W/L)I_D$ gives $(W/L)_1$ directly.

### Step 1 — The circuit

Reading the figure:

- $M_1$: NMOS with drain at $V_{DD}$, gate = input $V_{in}$, source = output $V_{out}$ (a source follower).
- $M_2$: NMOS from $V_{out}$ to ground with its gate at the fixed bias $V_b$; it acts as the bias current source, $I_{D1} = I_{D2} = I_D = 0.1$ mA.

### Step 2 — Output resistance of the follower

To find the output resistance $R_{out}$, set the input to AC ground, apply a test voltage $v_x$ at the output, and find the current $i_x$ that the test source delivers into the output node. Then $R_{out} = v_x/i_x$.

**Small-signal model in words.** The drain of $M_1$ ($V_{DD}$) and its gate (input, now grounded) are AC ground. Its source is the output node, at $v_x$. So $v_{gs1} = 0 - v_x = -v_x$, and $M_1$ is a controlled current $g_{m1}v_{gs1}$ flowing from drain (ground) into the output node. $M_2$ has its gate at the constant $V_b$ and its source grounded, so $v_{gs2} = 0$; with $\lambda = 0$ it has no $r_O$, so it carries no small-signal current (an ideal current source). The body effect is neglected, so there is no $g_{mb}$ source.

<!-- diagram: diagram-01.cir -->

**KCL at the output node** (sum of currents entering the node is zero):

$$
\begin{aligned}
i_x + g_{m1}v_{gs1} &= 0\\
i_x + g_{m1}(-v_x) &= 0\\
i_x &= g_{m1}v_x .
\end{aligned}
$$

Therefore

$$R_{out} = \frac{v_x}{i_x} = \frac{1}{g_{m1}}.$$

**Intuition.** If the output is pushed up by $v_x$, $V_{GS1}$ shrinks by $v_x$ and $M_1$ delivers $g_{m1}v_x$ *less* current; the test source must supply that difference. The follower looks like a resistor $1/g_{m1}$ to the output, which is why a large $g_{m1}$ is needed for a low output resistance.

### Step 3 — Required transconductance

Setting $R_{out} = 100\ \Omega$:

$$g_{m1} = \frac{1}{R_{out}} = \frac{1}{100\ \Omega} = 10\ \mathrm{mS} = 1\times10^{-2}\ \mathrm{A/V}.$$

### Step 4 — Aspect ratio from $g_m$ and $I_D$

In saturation the square law gives

$$I_D = \frac12\mu_nC_{ox}\frac{W}{L}V_{ov}^2, \qquad g_m = \frac{\partial I_D}{\partial V_{GS}} = \mu_nC_{ox}\frac{W}{L}V_{ov},$$

where $V_{ov} = V_{GS} - V_{TH}$ is the overdrive voltage. Eliminating $V_{ov}$: square $g_m$ and use $V_{ov}^2 = 2I_D/[\mu_nC_{ox}(W/L)]$:

$$
\begin{aligned}
g_m^2 &= \left(\mu_nC_{ox}\frac{W}{L}\right)^2V_{ov}^2 = \left(\mu_nC_{ox}\frac{W}{L}\right)^2\frac{2I_D}{\mu_nC_{ox}(W/L)} = 2\mu_nC_{ox}\frac{W}{L}I_D,\\
\frac{W}{L} &= \frac{g_m^2}{2\mu_nC_{ox}I_D}.
\end{aligned}
$$

Substitute the numbers:

$$
\begin{aligned}
g_{m1}^2 &= (1\times10^{-2}\ \mathrm{A/V})^2 = 1\times10^{-4}\ \mathrm{A^2/V^2},\\
2\mu_nC_{ox}I_D &= 2\,(134\times10^{-6}\ \mathrm{A/V^2})(0.1\times10^{-3}\ \mathrm{A}) = 2.68\times10^{-8}\ \mathrm{A^2/V^2},\\
\left(\frac{W}{L}\right)_1 &= \frac{1\times10^{-4}}{2.68\times10^{-8}} = 3731 \approx 3.7\times10^{3}.
\end{aligned}
$$

With $L = 0.5\ \mu$m this is $W \approx 3731\times0.5\ \mu\mathrm{m} \approx 1.87$ mm, an extremely wide device.

### Step 5 — Check of the operating point

The overdrive at this size and current is

$$V_{ov1} = \frac{2I_D}{g_{m1}} = \frac{2\times0.1\times10^{-3}\ \mathrm{A}}{1\times10^{-2}\ \mathrm{A/V}} = 0.02\ \mathrm{V} = 20\ \mathrm{mV}.$$

(Check: $\tfrac12(134\ \mu\mathrm{A/V^2})(3731)(0.02\ \mathrm{V})^2 = 0.1$ mA ✓.)

An overdrive of 20 mV is far below the 0.1–0.2 V where the square law is reasonable; the device would actually operate near or in subthreshold. There the transconductance per unit current saturates at roughly $g_m/I_D \approx 1/(\zeta V_T)$, about 25–30 V⁻¹ (with $V_T = kT/q \approx 26$ mV and $\zeta \approx 1.3$–1.5), whereas the design needs $g_m/I_D = 10\ \mathrm{mS}/0.1\ \mathrm{mA} = 100\ \mathrm{V^{-1}}$. So the square-law estimate is optimistic: in a real process, 100 Ω at 0.1 mA would require more current. Within the square-law model asked for, however, the answer is $(W/L)_1 \approx 3.7\times10^3$.

If the body effect were included, the output resistance would become $1/(g_{m1} + g_{mb1})$, so a somewhat smaller $W/L$ would suffice.

### Result

$$R_{out} = \frac{1}{g_{m1}} = 100\ \Omega \;\Rightarrow\; g_{m1} = 10\ \mathrm{mS}, \qquad \left(\frac{W}{L}\right)_1 = \frac{g_{m1}^2}{2\mu_nC_{ox}I_D} = \frac{(10^{-2})^2}{2(134\times10^{-6})(10^{-4})} \approx 3.7\times10^{3},$$

for example $W \approx 1.87$ mm with $L = 0.5\ \mu$m. The overdrive is only 20 mV, so the device would really be near subthreshold and the square-law result is optimistic.

**Common mistake.** Taking the output resistance as $r_O$ (or $r_O \parallel r_{O2}$) of the transistors. At the source of $M_1$ the dominant term is $1/g_{m1}$, because the gate is held fixed and any change in output voltage changes $V_{GS1}$ directly. With $\lambda = 0$ the $r_O$ terms are infinite and play no role.

**Common mistake.** Inventing an overdrive (for example 0.2 V) and using $g_m = \mu_nC_{ox}(W/L)V_{ov}$. Once $g_m$ and $I_D$ are both specified, the overdrive is no longer free; it follows as $2I_D/g_m$. Using $g_m^2 = 2\mu_nC_{ox}(W/L)I_D$ avoids the inconsistency. An invented 0.2-V overdrive would give $W/L = 10\ \mathrm{mS}/(134\ \mu\mathrm{A/V^2}\times0.2\ \mathrm{V}) = 373$, ten times too small: that device reaches 10 mS only at 1 mA, and at the actual 0.1 mA it gives just $\sqrt{2(134\ \mu)(373)(0.1\ \mathrm{m})} = 3.2$ mS, i.e. $R_{out} \approx 316\ \Omega$.

**Common mistake.** Dropping the factor 2 in $g_m^2 = 2\mu_nC_{ox}(W/L)I_D$, which doubles the result to about 7460.
