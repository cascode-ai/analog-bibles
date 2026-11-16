# Detailed solution - R370

**Approach.** With channel-length modulation and body effect neglected, the follower's output resistance is $1/g_{m1}$, so the 100-Ω specification fixes $g_{m1}$; with $I_D$ also fixed, $g_m^2 = 2\mu_nC_{ox}(W/L)I_D$ gives $(W/L)_1$.

### Step 1 — Output resistance and required $g_{m1}$

Ground the input and drive the output with a test voltage $v_x$. Then $v_{gs1} = -v_x$, and $M_2$ (gate at the fixed $V_b$, $\lambda = 0$) carries no small-signal current.

<!-- diagram: diagram-01.cir -->

KCL at the output node:

$$i_x + g_{m1}(-v_x) = 0 \quad\Longrightarrow\quad i_x = g_{m1}v_x, \qquad R_{out} = \frac{v_x}{i_x} = \frac{1}{g_{m1}}.$$

Pushing the output up by $v_x$ shrinks $V_{GS1}$ by $v_x$, so a low output resistance needs a large $g_{m1}$. Setting $R_{out} = 100\ \Omega$:

$$g_{m1} = \frac{1}{R_{out}} = \frac{1}{100\ \Omega} = 10\ \mathrm{mS} = 1\times10^{-2}\ \mathrm{A/V}.$$

### Step 2 — Aspect ratio from $g_m$ and $I_D$

With $I_D = 0.1$ mA fixed, use $g_m^2 = 2\mu_nC_{ox}(W/L)I_D$:

$$\frac{W}{L} = \frac{g_m^2}{2\mu_nC_{ox}I_D}.$$

$$
\begin{aligned}
g_{m1}^2 &= (1\times10^{-2}\ \mathrm{A/V})^2 = 1\times10^{-4}\ \mathrm{A^2/V^2},\\
2\mu_nC_{ox}I_D &= 2\,(134\times10^{-6}\ \mathrm{A/V^2})(0.1\times10^{-3}\ \mathrm{A}) = 2.68\times10^{-8}\ \mathrm{A^2/V^2},\\
\left(\frac{W}{L}\right)_1 &= \frac{1\times10^{-4}}{2.68\times10^{-8}} = 3731 \approx 3.7\times10^{3}.
\end{aligned}
$$

With $L = 0.5\ \mu$m this is $W \approx 3731\times0.5\ \mu\mathrm{m} \approx 1.87$ mm, an extremely wide device.

### Step 3 — Check of the operating point

$$V_{ov1} = \frac{2I_D}{g_{m1}} = \frac{2\times0.1\times10^{-3}\ \mathrm{A}}{1\times10^{-2}\ \mathrm{A/V}} = 0.02\ \mathrm{V} = 20\ \mathrm{mV}.$$

(Check: $\tfrac12(134\ \mu\mathrm{A/V^2})(3731)(0.02\ \mathrm{V})^2 = 0.1$ mA ✓.)

20 mV is far below the 0.1–0.2 V where the square law is reasonable; the device would really operate near or in subthreshold. There $g_m/I_D$ saturates at roughly $1/(\zeta V_T)$, about 25–30 V⁻¹ (with $V_T = kT/q \approx 26$ mV and $\zeta \approx 1.3$–1.5), whereas the design needs $g_m/I_D = 10\ \mathrm{mS}/0.1\ \mathrm{mA} = 100\ \mathrm{V^{-1}}$. So the square-law estimate is optimistic: in a real process, 100 Ω at 0.1 mA would require more current. Within the square-law model asked for, the answer is $(W/L)_1 \approx 3.7\times10^3$.

With the body effect, the output resistance would become $1/(g_{m1} + g_{mb1})$, so a somewhat smaller $W/L$ would suffice.

### Result

$$R_{out} = \frac{1}{g_{m1}} = 100\ \Omega \;\Rightarrow\; g_{m1} = 10\ \mathrm{mS}, \qquad \left(\frac{W}{L}\right)_1 = \frac{g_{m1}^2}{2\mu_nC_{ox}I_D} = \frac{(10^{-2})^2}{2(134\times10^{-6})(10^{-4})} \approx 3.7\times10^{3},$$

for example $W \approx 1.87$ mm with $L = 0.5\ \mu$m. The overdrive is only 20 mV, so the device would really be near subthreshold and the square-law result is optimistic.

**Common mistake.** Taking the output resistance as $r_O$ (or $r_O \parallel r_{O2}$). At the source of $M_1$ the dominant term is $1/g_{m1}$; with $\lambda = 0$ the $r_O$ terms are infinite.

**Common mistake.** Inventing an overdrive (for example 0.2 V) and using $g_m = \mu_nC_{ox}(W/L)V_{ov}$. With $g_m$ and $I_D$ both specified, the overdrive follows as $2I_D/g_m$. A 0.2-V overdrive gives $W/L = 10\ \mathrm{mS}/(134\ \mu\mathrm{A/V^2}\times0.2\ \mathrm{V}) = 373$, ten times too small: at the actual 0.1 mA that device gives only $\sqrt{2(134\ \mu)(373)(0.1\ \mathrm{m})} = 3.2$ mS, i.e. $R_{out} \approx 316\ \Omega$.

**Common mistake.** Dropping the factor 2 in $g_m^2 = 2\mu_nC_{ox}(W/L)I_D$, which doubles the result to about 7460.
