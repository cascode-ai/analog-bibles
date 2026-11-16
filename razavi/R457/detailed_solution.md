# Detailed solution - R457

**Approach.** $A_v = A_1A_2$, and the output stage is already fixed, so $A_2$ is known and $A_1 = 500/A_2$. The first stage, a PMOS pair with an NMOS mirror load, has gain $g_{m1}(r_{O2}\parallel r_{O4})$; with the currents (and $r_O$'s) fixed this determines $g_{m1}$, and the square law gives $(W/L)_1$.

### Step 1 — Bias currents and the gain of the output stage

$$I_{D1} = I_{D2} = I_{D3} = I_{D4} = \frac{1\ \mathrm{mA}}{2} = 0.5\ \mathrm{mA}, \qquad I_{D5} = I_{D6} = 1\ \mathrm{mA}.$$

$M_5$ has $V_{ov5} = 0.25$ V at 1 mA, so

$$g_{m5} = \frac{2\,(1\ \mathrm{mA})}{0.25\ \mathrm{V}} = 8\ \mathrm{mS},$$

$$
\begin{aligned}
r_{O5} &= \frac{1}{(0.1\ \mathrm{V^{-1}})(1\ \mathrm{mA})} = 10\ \mathrm{k}\Omega \quad\text{(NMOS)},\\
r_{O6} &= \frac{1}{(0.2\ \mathrm{V^{-1}})(1\ \mathrm{mA})} = 5\ \mathrm{k}\Omega \quad\text{(PMOS)},\\
r_{O5}\parallel r_{O6} &= \frac{10\times5}{10 + 5}\ \mathrm{k}\Omega = 3.33\ \mathrm{k}\Omega ,
\end{aligned}
$$

and the CS gain magnitude is

$$A_2 = g_{m5}(r_{O5}\parallel r_{O6}) = (8\ \mathrm{mS})(3.33\ \mathrm{k}\Omega) = 26.7 .$$

### Step 2 — Required gain of the first stage

$$
\begin{aligned}
A_v &= A_1A_2 = 500\\
A_1 &= \frac{500}{A_2} = \frac{500}{26.67} = 18.75 .
\end{aligned}
$$

### Step 3 — First-stage gain expression and the required $g_{m1}$

With the mirror load the short-circuit current at Y is $g_{m1}v_{in}$ and Y sees $r_{O2}\parallel r_{O4}$, so

$$A_1 = g_{m1}(r_{O2}\parallel r_{O4}),$$

where $M_2$ is the **PMOS** input device and $M_4$ the **NMOS** mirror device:

$$
\begin{aligned}
r_{O2} &= \frac{1}{\lambda_pI_{D2}} = \frac{1}{(0.2\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 10\ \mathrm{k}\Omega,\\
r_{O4} &= \frac{1}{\lambda_nI_{D4}} = \frac{1}{(0.1\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 20\ \mathrm{k}\Omega,\\
r_{O2}\parallel r_{O4} &= \frac{10\times20}{10 + 20}\ \mathrm{k}\Omega = 6.67\ \mathrm{k}\Omega .
\end{aligned}
$$

So

$$g_{m1} = \frac{A_1}{r_{O2}\parallel r_{O4}} = \frac{18.75}{6.67\ \mathrm{k}\Omega} = 2.81\ \mathrm{mS}.$$

### Step 4 — Aspect ratio of $M_1$, $M_2$

From $g_m = \sqrt{2\mu C_{ox}(W/L)I_D}$ with the PMOS $\mu_pC_{ox}$:

$$
\begin{aligned}
\left(\frac{W}{L}\right)_{1,2} &= \frac{g_{m1}^2}{2\mu_pC_{ox}I_{D1}}\\
&= \frac{(2.81\times10^{-3}\ \mathrm{S})^2}{2\,(38.4\times10^{-6}\ \mathrm{A/V^2})(0.5\times10^{-3}\ \mathrm{A})}\\
&= \frac{7.91\times10^{-6}}{3.84\times10^{-8}}\\
&= 206 .
\end{aligned}
$$

With $L = 0.5\ \mu\mathrm{m}$: $W_{1,2} = 206\times0.5\ \mu\mathrm{m} \approx 103\ \mu\mathrm{m}$.

**Overdrive check.** $|V_{ov1}| = 2I_D/g_{m1} = 2(0.5\ \mathrm{mA})/2.81\ \mathrm{mS} = 0.36$ V, so $|V_{GS1}| = 0.8 + 0.36 = 1.16$ V, a reasonable value. The drains of $M_1$, $M_2$ sit at $V_X = V_{GS3} = 0.95$ V, so the pair stays saturated for input common-mode levels down to about $0.95 - 0.8 = 0.15$ V.

### Result

$$A_2 = 26.7 \;\Rightarrow\; A_1 = 18.75 \;\Rightarrow\; g_{m1} = \frac{18.75}{10\ \mathrm{k}\Omega\parallel20\ \mathrm{k}\Omega} = 2.81\ \mathrm{mS} \;\Rightarrow\; \left(\frac{W}{L}\right)_{1,2} = \frac{g_{m1}^2}{2\mu_pC_{ox}I_D} \approx 206,$$

i.e. $W_{1,2} \approx 103\ \mu\mathrm{m}$ with $L = 0.5\ \mu\mathrm{m}$ (overdrive about 0.36 V).

**Common mistake.** Requiring the first stage alone to give 500. The output stage already provides 26.7, so the first stage needs only 18.75.

**Common mistake.** Using $\mu_nC_{ox}$ for the PMOS input pair, which gives $W/L \approx 59$, far too small for the required $g_{m1}$.

**Common mistake.** Swapping the $\lambda$ values in the first stage. The parallel combination happens to be the same here (6.67 kΩ), but each $r_O$ must use its own device's $\lambda$.
