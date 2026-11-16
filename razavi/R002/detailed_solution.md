# Detailed solution - R002

**Approach.** The current is given, so use the square-law results $g_m = \sqrt{2\mu C_{ox}(W/L)|I_D|}$ and $r_O \approx 1/(\lambda|I_D|)$ for each device, and multiply them for the intrinsic gain. Both devices have $W/L = 50\ \mu\mathrm{m}/0.5\ \mu\mathrm{m} = 100$ and $|I_D| = 0.5$ mA.

### Step 1 — NMOS device

$g_m = \sqrt{2\mu C_{ox}(W/L)|I_D|}$ follows from $g_m = \mu C_{ox}(W/L)V_{ov}$ with $V_{ov}$ eliminated through the square law, and $r_O \approx 1/(\lambda|I_D|)$ neglects $\lambda|V_{DS}|$ against 1 inside $I_D$ (necessarily, since $V_{DS}$ is not given).

$$
\begin{aligned}
g_{m,n} &= \sqrt{2\mu_nC_{ox}\frac{W}{L}I_D}\\
&= \sqrt{2\,(134\times10^{-6}\ \mathrm{A/V^2})(100)(0.5\times10^{-3}\ \mathrm{A})}\\
&= \sqrt{1.34\times10^{-5}\ \mathrm{A^2/V^2}}\\
&= 3.66\times10^{-3}\ \mathrm{A/V} = 3.66\ \mathrm{mS},
\end{aligned}
$$

so $1/g_{m,n} = 1/(3.66\ \mathrm{mS}) = 273\ \Omega$. The overdrive is

$$V_{ov,n} = \frac{2I_D}{g_{m,n}} = \frac{2\times0.5\ \mathrm{mA}}{3.66\ \mathrm{mS}} = 0.273\ \mathrm{V}$$

(equivalently $\sqrt{2I_D/(\mu_nC_{ox}W/L)} = \sqrt{1\ \mathrm{mA}/(13.4\ \mathrm{mA/V^2})} = \sqrt{0.0746\ \mathrm{V^2}} = 0.273$ V). Then

$$
\begin{aligned}
r_{O,n} &= \frac{1}{\lambda_n I_D} = \frac{1}{(0.1\ \mathrm{V^{-1}})(0.5\times10^{-3}\ \mathrm{A})} = \frac{1}{5\times10^{-5}\ \mathrm{A/V}} = 20\ \mathrm{k\Omega},\\
g_{m,n}r_{O,n} &= (3.66\times10^{-3}\ \mathrm{S})(20\times10^{3}\ \Omega) = 73.2 .
\end{aligned}
$$

### Step 2 — PMOS device

Same formulas with the PMOS data:

$$
\begin{aligned}
g_{m,p} &= \sqrt{2\mu_pC_{ox}\frac{W}{L}|I_D|}\\
&= \sqrt{2\,(38.4\times10^{-6}\ \mathrm{A/V^2})(100)(0.5\times10^{-3}\ \mathrm{A})}\\
&= \sqrt{3.84\times10^{-6}\ \mathrm{A^2/V^2}}\\
&= 1.96\times10^{-3}\ \mathrm{A/V} = 1.96\ \mathrm{mS},
\end{aligned}
$$

so $1/g_{m,p} = 1/(1.96\ \mathrm{mS}) = 510\ \Omega$, and

$$V_{ov,p} = \frac{2|I_D|}{g_{m,p}} = \frac{1\ \mathrm{mA}}{1.96\ \mathrm{mS}} = 0.510\ \mathrm{V},$$

almost twice the NMOS overdrive, because the PMOS $\mu C_{ox}$ is 3.5 times smaller. Then

$$
\begin{aligned}
r_{O,p} &= \frac{1}{\lambda_p |I_D|} = \frac{1}{(0.2\ \mathrm{V^{-1}})(0.5\times10^{-3}\ \mathrm{A})} = \frac{1}{10^{-4}\ \mathrm{A/V}} = 10\ \mathrm{k\Omega},\\
g_{m,p}r_{O,p} &= (1.96\times10^{-3}\ \mathrm{S})(10\times10^{3}\ \Omega) = 19.6 .
\end{aligned}
$$

### Step 3 — Cross-check with the overdrive form and comparison

Multiplying $g_m = \mu C_{ox}(W/L)V_{ov}$ by $r_O = 1/(\lambda|I_D|)$:

$$g_m r_O = \mu C_{ox}\frac{W}{L}V_{ov}\cdot\frac{1}{\lambda\cdot\tfrac12\mu C_{ox}(W/L)V_{ov}^2} = \frac{2}{\lambda V_{ov}} ,$$

$$
\begin{aligned}
\text{NMOS:}\quad \frac{2}{(0.1\ \mathrm{V^{-1}})(0.273\ \mathrm{V})} &= 73.2, \\
\text{PMOS:}\quad \frac{2}{(0.2\ \mathrm{V^{-1}})(0.510\ \mathrm{V})} &= 19.6 ,
\end{aligned}
$$

in agreement with Steps 1 and 2. The NMOS wins by

$$\frac{(g_mr_O)_n}{(g_mr_O)_p} = \frac{73.2}{19.6} = 3.74 = \underbrace{\sqrt{\frac{134}{38.4}}}_{1.87\ (\text{from } g_m)}\times\underbrace{\frac{0.2}{0.1}}_{2\ (\text{from } r_O)} .$$

The higher electron mobility gives it a $\sqrt{3.49} = 1.87$ times larger $g_m$ at the same current, and its smaller $\lambda$ gives it twice the output resistance.

### Step 4 — Why $g_mr_O$ is the "intrinsic gain"

In a common-source stage with an ideal current-source load (an open circuit for signals), the output node sees only the transistor's $g_mv_{in}$ and $r_O$:

<!-- diagram: diagram-01.cir -->

KCL at the output, with $v_{gs} = v_{in}$:

$$
\begin{aligned}
g_mv_{in} + \frac{v_{out}}{r_O} &= 0\\
A_v = \frac{v_{out}}{v_{in}} &= -g_mr_O .
\end{aligned}
$$

So $g_mr_O$ is the largest voltage gain a single transistor can deliver: about 73 for the NMOS and about 19.6 for the PMOS sized here. Any real load $R_L$ appears in parallel with $r_O$ and can only reduce it, $|A_v| = g_m(r_O\parallel R_L) < g_mr_O$.

### Result

| Device | $g_m$ | $1/g_m$ | $r_O$ | $g_m r_O$ |
|---|---|---|---|---|
| NMOS | 3.66 mS | 273 Ω | 20 kΩ | ≈ 73 |
| PMOS | 1.96 mS | 510 Ω | 10 kΩ | ≈ 19.6 |

with $g_m = \sqrt{2\mu C_{ox}(W/L)|I_D|}$, $r_O \approx 1/(\lambda|I_D|)$, and $g_m r_O = 2/(\lambda V_{ov})$ (overdrives 0.27 V and 0.51 V). The NMOS has about 3.7 times the intrinsic gain of the equally sized PMOS.

**Common mistake.** Writing $r_O = \lambda/I_D$ or $r_O = \lambda I_D$. The output resistance is the *inverse* of $\partial I_D/\partial V_{DS} = \lambda I_D$, and a unit check catches the error: only $1/(\lambda I_D)$ is a resistance.

**Common mistake.** Using $g_m = \mu C_{ox}(W/L)I_D$ (dimensionally wrong) or $g_m = 2I_D/V_{ov}$ with a guessed overdrive. With the current given, $g_m = \sqrt{2\mu C_{ox}(W/L)I_D}$ needs neither $V_{GS}$ nor $V_{TH}$.

**Common mistake.** Swapping the $\lambda$ values, or using $\mu_nC_{ox}$ for the PMOS. The PMOS has both the lower mobility and the larger $\lambda$, so its intrinsic gain must come out clearly smaller.
