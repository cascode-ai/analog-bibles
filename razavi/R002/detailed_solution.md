# Detailed solution - R002

**Approach.** Use the square-law model in saturation. Express the transconductance in terms of the drain current, $g_m = \sqrt{2\mu C_{ox}(W/L)|I_D|}$, and the output resistance from channel-length modulation, $r_O \approx 1/(\lambda|I_D|)$; then multiply the two to get the intrinsic gain. Repeat for the NMOS and PMOS data.

### Step 1 — Definitions and the formulas we need

For a MOSFET in saturation, the square-law drain current (magnitude) is

$$|I_D| = \frac12\,\mu C_{ox}\frac{W}{L}\,V_{ov}^2, \qquad V_{ov} = |V_{GS}| - |V_{TH}| ,$$

where $V_{ov}$ is the overdrive voltage, $V_{TH}$ the threshold voltage, $\mu C_{ox}$ the process transconductance parameter ($\mu_nC_{ox}$ or $\mu_pC_{ox}$) and $W/L$ the aspect ratio.

**Transconductance.** $g_m$ is the change in drain current per unit change in gate–source voltage, at a fixed drain–source voltage:

$$g_m = \frac{\partial |I_D|}{\partial |V_{GS}|} = \mu C_{ox}\frac{W}{L}\,V_{ov}.$$

The problem fixes the current, not the overdrive, so eliminate $V_{ov}$. From the current equation,

$$V_{ov} = \sqrt{\frac{2|I_D|}{\mu C_{ox}(W/L)}} .$$

Substituting into $g_m$:

$$
\begin{aligned}
g_m &= \mu C_{ox}\frac{W}{L}\sqrt{\frac{2|I_D|}{\mu C_{ox}(W/L)}}\\
&= \sqrt{\left(\mu C_{ox}\frac{W}{L}\right)^2\frac{2|I_D|}{\mu C_{ox}(W/L)}}\\
&= \sqrt{2\mu C_{ox}\frac{W}{L}|I_D|} .
\end{aligned}
$$

**Output resistance.** Channel-length modulation adds a factor $(1 + \lambda|V_{DS}|)$ to the saturation current, where $\lambda$ is the channel-length modulation coefficient. The small-signal output resistance $r_O$ is the inverse of the slope of $I_D$ versus $V_{DS}$:

$$r_O = \left(\frac{\partial |I_D|}{\partial |V_{DS}|}\right)^{-1} = \frac{1}{\tfrac12\mu C_{ox}(W/L)V_{ov}^2\,\lambda} \approx \frac{1}{\lambda |I_D|} .$$

The last step uses $|I_D| \approx \tfrac12\mu C_{ox}(W/L)V_{ov}^2$, i.e. it neglects $\lambda|V_{DS}|$ against 1 inside $I_D$. That is the standard approximation, and it is the only option here since $V_{DS}$ is not given.

**Intrinsic gain.** $g_m r_O$ is the largest voltage gain one transistor can provide: it is the gain of a common-source stage whose load is an ideal current source, so that the only resistance at the output is the transistor's own $r_O$.

Common data: $W/L = 50\ \mu\mathrm{m}/0.5\ \mu\mathrm{m} = 100$ and $|I_D| = 0.5$ mA for both devices.

### Step 2 — NMOS device

**Transconductance:**

$$
\begin{aligned}
g_{m,n} &= \sqrt{2\mu_nC_{ox}\frac{W}{L}I_D}\\
&= \sqrt{2\,(134\times10^{-6}\ \mathrm{A/V^2})(100)(0.5\times10^{-3}\ \mathrm{A})}\\
&= \sqrt{1.34\times10^{-5}\ \mathrm{A^2/V^2}}\\
&= 3.66\times10^{-3}\ \mathrm{A/V} = 3.66\ \mathrm{mS}.
\end{aligned}
$$

Its inverse is a useful resistance to remember: $1/g_{m,n} = 1/(3.66\ \mathrm{mS}) = 273\ \Omega$.

**Overdrive (for reference and a consistency check):**

$$V_{ov,n} = \frac{2I_D}{g_{m,n}} = \frac{2\times0.5\ \mathrm{mA}}{3.66\ \mathrm{mS}} = 0.273\ \mathrm{V}.$$

(Same result from $\sqrt{2I_D/(\mu_nC_{ox}W/L)} = \sqrt{1\ \mathrm{mA}/(13.4\ \mathrm{mA/V^2})} = \sqrt{0.0746\ \mathrm{V^2}} = 0.273$ V.)

**Output resistance:**

$$r_{O,n} = \frac{1}{\lambda_n I_D} = \frac{1}{(0.1\ \mathrm{V^{-1}})(0.5\times10^{-3}\ \mathrm{A})} = \frac{1}{5\times10^{-5}\ \mathrm{A/V}} = 20\ \mathrm{k\Omega}.$$

**Intrinsic gain:**

$$g_{m,n}r_{O,n} = (3.66\times10^{-3}\ \mathrm{S})(20\times10^{3}\ \Omega) = 73.2 .$$

### Step 3 — PMOS device

**Transconductance:**

$$
\begin{aligned}
g_{m,p} &= \sqrt{2\mu_pC_{ox}\frac{W}{L}|I_D|}\\
&= \sqrt{2\,(38.4\times10^{-6}\ \mathrm{A/V^2})(100)(0.5\times10^{-3}\ \mathrm{A})}\\
&= \sqrt{3.84\times10^{-6}\ \mathrm{A^2/V^2}}\\
&= 1.96\times10^{-3}\ \mathrm{A/V} = 1.96\ \mathrm{mS}.
\end{aligned}
$$

Its inverse: $1/g_{m,p} = 1/(1.96\ \mathrm{mS}) = 510\ \Omega$.

**Overdrive:**

$$V_{ov,p} = \frac{2|I_D|}{g_{m,p}} = \frac{1\ \mathrm{mA}}{1.96\ \mathrm{mS}} = 0.510\ \mathrm{V}.$$

The PMOS needs almost twice the overdrive of the NMOS to carry the same current, because its $\mu C_{ox}$ is 3.5 times smaller.

**Output resistance:**

$$r_{O,p} = \frac{1}{\lambda_p |I_D|} = \frac{1}{(0.2\ \mathrm{V^{-1}})(0.5\times10^{-3}\ \mathrm{A})} = \frac{1}{10^{-4}\ \mathrm{A/V}} = 10\ \mathrm{k\Omega}.$$

**Intrinsic gain:**

$$g_{m,p}r_{O,p} = (1.96\times10^{-3}\ \mathrm{S})(10\times10^{3}\ \Omega) = 19.6 .$$

### Step 4 — Cross-check with the overdrive form and comparison

Multiplying the two general formulas gives a compact expression for the intrinsic gain:

$$g_m r_O = \mu C_{ox}\frac{W}{L}V_{ov}\cdot\frac{1}{\lambda\cdot\tfrac12\mu C_{ox}(W/L)V_{ov}^2} = \frac{2}{\lambda V_{ov}} .$$

Check with the numbers:

$$
\begin{aligned}
\text{NMOS:}\quad \frac{2}{(0.1\ \mathrm{V^{-1}})(0.273\ \mathrm{V})} &= 73.2, \\
\text{PMOS:}\quad \frac{2}{(0.2\ \mathrm{V^{-1}})(0.510\ \mathrm{V})} &= 19.6 .
\end{aligned}
$$

Both agree with Steps 2 and 3.

**Why the NMOS wins by a factor of about 3.7.** The ratio is

$$\frac{(g_mr_O)_n}{(g_mr_O)_p} = \frac{73.2}{19.6} = 3.74 = \underbrace{\sqrt{\frac{134}{38.4}}}_{1.87\ (\text{from } g_m)}\times\underbrace{\frac{0.2}{0.1}}_{2\ (\text{from } r_O)} .$$

The higher electron mobility gives the NMOS a $\sqrt{3.49} = 1.87$ times larger $g_m$ at the same current, and its smaller $\lambda$ gives it twice the output resistance.

### Result

| Device | $g_m$ | $1/g_m$ | $r_O$ | $g_m r_O$ |
|---|---|---|---|---|
| NMOS | 3.66 mS | 273 Ω | 20 kΩ | ≈ 73 |
| PMOS | 1.96 mS | 510 Ω | 10 kΩ | ≈ 19.6 |

with $g_m = \sqrt{2\mu C_{ox}(W/L)|I_D|}$, $r_O \approx 1/(\lambda|I_D|)$, and $g_m r_O = 2/(\lambda V_{ov})$ (overdrives 0.27 V and 0.51 V). The NMOS has about 3.7 times the intrinsic gain of the equally sized PMOS.

**Common mistake.** Writing $r_O = \lambda/I_D$ or $r_O = \lambda I_D$. The output resistance is the *inverse* of $\partial I_D/\partial V_{DS} = \lambda I_D$; a larger $\lambda$ means stronger channel-length modulation and therefore a *smaller* $r_O$. A quick unit check catches it: $\lambda I_D$ has units of A/V, so only $1/(\lambda I_D)$ is a resistance.

**Common mistake.** Using $g_m = \mu C_{ox}(W/L)I_D$ (dimensionally wrong) or $g_m = 2I_D/V_{ov}$ with a guessed overdrive. When the current is given, $g_m = \sqrt{2\mu C_{ox}(W/L)I_D}$ follows without knowing $V_{GS}$ or $V_{TH}$.

**Common mistake.** Swapping the $\lambda$ values, or using $\mu_nC_{ox}$ for the PMOS. The PMOS has both the lower mobility and the larger $\lambda$ here, so its intrinsic gain must come out clearly smaller than the NMOS's.
