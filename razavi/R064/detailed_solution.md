# Detailed solution - R064

Approach: Both circuits are common-source (CS) stages whose diode-connected load $M_2$ acts as a small resistance. For the NMOS load the body effect of $M_2$ (source at the output, bulk at ground) must be included, which requires the dc output voltage; the PMOS load has source and bulk at $V_{DD}$ and no body effect. The bias and transconductances use the saturation square law without the channel-length modulation factor. The gain calculation then retains the small-signal $r_O\approx1/(\lambda I_D)$ terms. Each part also gives the estimate for $\lambda=0$.

### Step 1 — Bias and transconductance of $M_1$

Both circuits have $I_{D1} = I_{D2} = 0.5$ mA and $(W/L)_1 = 50/0.5 = 100$:

$$g_{m1} = \sqrt{2\mu_nC_{ox}\left(\frac{W}{L}\right)_1I_{D1}} = \sqrt{2(134\times10^{-6}\ \mathrm{A/V^2})(100)(0.5\times10^{-3}\ \mathrm{A})} = \sqrt{1.34\times10^{-5}}\ \mathrm{A/V} = 3.66\ \mathrm{mS},$$

$$V_{ov1} = \frac{2I_{D1}}{g_{m1}} = \frac{2(0.5\ \mathrm{mA})}{3.66\ \mathrm{mS}} = 0.273\ \mathrm{V},$$

so $M_1$ is saturated as long as $V_{out} > 0.273$ V (checked below). Its output resistance is $r_{O1} = 1/(\lambda_nI_D) = 1/[(0.1\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})] = 20\ \mathrm{k}\Omega$.

### Step 2 — Part 1 (NMOS load): transconductance and output voltage of $M_2$

$M_2$ has $(W/L)_2 = 10/0.5 = 20$, gate and drain at $V_{DD}$, source at the output, bulk at ground:

$$g_{m2} = \sqrt{2(134\times10^{-6})(20)(0.5\times10^{-3})}\ \mathrm{A/V} = \sqrt{2.68\times10^{-6}}\ \mathrm{A/V} = 1.637\ \mathrm{mS},$$

$$V_{ov2} = \frac{2I_{D2}}{g_{m2}} = \frac{1\ \mathrm{mA}}{1.637\ \mathrm{mS}} = 0.611\ \mathrm{V}.$$

DC output voltage: $V_{out} = V_{DD} - V_{GS2} = 3 - V_{TH2} - 0.611$, with the body effect at $V_{SB2} = V_{out}$:

$$V_{TH2}=V_{TH0}+\gamma\left(\sqrt{2|\phi_F|+V_{SB2}}-\sqrt{2|\phi_F|}\right).$$

Substitute the given device parameters and start the iteration at $V_{out}=1.5\ \mathrm{V}$. The numerical voltages below are in volts.

$$
\begin{aligned}
V_{TH2} &= 0.7 + 0.45(\sqrt{2.4} - 0.9487) = 0.7 + 0.45(1.5492 - 0.9487) = 0.970\ \mathrm{V} &\Rightarrow\ V_{out} &= 3 - 0.970 - 0.611 = 1.419\ \mathrm{V},\\
V_{TH2} &= 0.7 + 0.45(\sqrt{2.319} - 0.9487) = 0.7 + 0.45(1.5228 - 0.9487) = 0.958\ \mathrm{V} &\Rightarrow\ V_{out} &= 3 - 0.958 - 0.611 = 1.431\ \mathrm{V},\\
V_{TH2} &= 0.7 + 0.45(\sqrt{2.331} - 0.9487) = 0.960\ \mathrm{V} &\Rightarrow\ V_{out} &= 1.429\ \mathrm{V}.
\end{aligned}
$$

So $V_{out} \approx 1.43$ V $> 0.273$ V and $V_{TH2} \approx 0.96$ V: $M_1$ is saturated, and the conducting diode-connected load also satisfies $V_{DS2}=V_{GS2}\ge V_{ov2}$.

Body transconductance:

$$\eta = \frac{\gamma}{2\sqrt{2|\phi_F| + V_{SB2}}} = \frac{0.45}{2\sqrt{0.9 + 1.429}} = \frac{0.45}{2(1.526)} = 0.147, \qquad g_{mb2} = \eta\,g_{m2} = 0.147\times1.637\ \mathrm{mS} = 0.241\ \mathrm{mS}.$$

### Step 3 — Part 1: small-signal model and gain

$V_{DD}$ is an ac ground, so the gate and drain of $M_2$ are grounded for signals and its source is the output node: $v_{gs2} = 0 - v_{out}$ and $v_{bs2} = 0 - v_{out}$.

<!-- diagram: diagram-01.cir -->

Apply KCL at the output node with currents leaving the node taken as positive. $M_1$ draws $g_{m1}v_{in} + v_{out}/r_{O1}$ to ground. $M_2$ drives $g_{m2}(-v_{out}) + g_{mb2}(-v_{out}) + (0 - v_{out})/r_{O2}$ into the output, so $(g_{m2} + g_{mb2} + 1/r_{O2})v_{out}$ leaves toward $M_2$:

$$g_{m1}v_{in} + \frac{v_{out}}{r_{O1}} + \left(g_{m2} + g_{mb2} + \frac{1}{r_{O2}}\right)v_{out} = 0 \quad\Longrightarrow\quad A_v = \frac{v_{out}}{v_{in}} = -\frac{g_{m1}}{g_{m2} + g_{mb2} + 1/r_{O1} + 1/r_{O2}} .$$

Neglecting channel-length modulation ($r_{O1}, r_{O2} \to \infty$):

$$A_v = -\frac{g_{m1}}{g_{m2} + g_{mb2}} = -\frac{g_{m1}}{g_{m2}}\cdot\frac{1}{1 + \eta} .$$

Both are NMOS devices at the same current, so $g_{m1}/g_{m2} = \sqrt{(W/L)_1/(W/L)_2} = \sqrt{100/20} = \sqrt5 = 2.236$:

$$A_v = -\frac{2.236}{1.147} = -1.95 .$$

Without the body effect it would be $-2.24$; the body effect of $M_2$ costs about 13 %.

Including $r_O$ ($r_{O1} = r_{O2} = 20\ \mathrm{k}\Omega$, so $1/r_{O1} + 1/r_{O2} = 0.1$ mS):

$$A_v = -\frac{3.66\ \mathrm{mS}}{(1.637 + 0.241 + 0.100)\ \mathrm{mS}} = -\frac{3.66}{1.978} = -1.85 .$$

### Step 4 — Part 2 (PMOS load): transconductance and bias

Now $M_2$ is a PMOS with source and bulk at $V_{DD}$ and its gate tied to its drain (the output). Since $V_{SB} = 0$, there is no body effect:

$$g_{m2} = \sqrt{2\mu_pC_{ox}\left(\frac{W}{L}\right)_2I_{D2}} = \sqrt{2(38.4\times10^{-6})(20)(0.5\times10^{-3})}\ \mathrm{A/V} = \sqrt{7.68\times10^{-7}}\ \mathrm{A/V} = 0.876\ \mathrm{mS},$$

$$|V_{ov2}| = \frac{2I_{D2}}{g_{m2}} = \frac{1\ \mathrm{mA}}{0.876\ \mathrm{mS}} = 1.141\ \mathrm{V}, \qquad V_{SG2} = 0.8 + 1.141 = 1.941\ \mathrm{V},$$

$$V_{out} = V_{DD} - V_{SG2} = 3 - 1.941 = 1.06\ \mathrm{V} > 0.273\ \mathrm{V},$$

so $M_1$ is still saturated. The conducting diode-connected PMOS is also saturated because $V_{SD2}=V_{SG2}\ge |V_{ov2}|$. The PMOS load needs a large overdrive because $\mu_pC_{ox}$ is 3.5 times smaller than $\mu_nC_{ox}$.

### Step 5 — Part 2: small-signal model and gain

The source of $M_2$ is at ac ground and its gate and drain are both the output node, so $v_{sg2} = v_{sd2} = 0 - v_{out}$. Its source-to-drain current $g_{m2}v_{sg2} + v_{sd2}/r_{O2} = -(g_{m2} + 1/r_{O2})v_{out}$ flows into the output: $M_2$ is a resistance $1/g_{m2}\parallel r_{O2}$ to ac ground.

<!-- diagram: diagram-02.cir -->

KCL at the output node:

$$g_{m1}v_{in} + \frac{v_{out}}{r_{O1}} + \left(g_{m2} + \frac{1}{r_{O2}}\right)v_{out} = 0 \quad\Longrightarrow\quad A_v = -\frac{g_{m1}}{g_{m2} + 1/r_{O1} + 1/r_{O2}} .$$

Neglecting channel-length modulation:

$$A_v = -\frac{g_{m1}}{g_{m2}} = -\sqrt{\frac{\mu_n(W/L)_1}{\mu_p(W/L)_2}} = -\frac{3.66\ \mathrm{mS}}{0.876\ \mathrm{mS}} = -4.18 .$$

(Check: $\sqrt{(134\times100)/(38.4\times20)} = \sqrt{13400/768} = \sqrt{17.45} = 4.18$.)

Including $r_O$ ($r_{O1} = 20\ \mathrm{k}\Omega$; $r_{O2} = 1/[(0.2\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})] = 10\ \mathrm{k}\Omega$, so $1/r_{O1} + 1/r_{O2} = 0.05 + 0.1 = 0.15$ mS):

$$A_v = -\frac{3.66\ \mathrm{mS}}{(0.876 + 0.150)\ \mathrm{mS}} = -\frac{3.66}{1.026} = -3.57 .$$

### Step 6 — Comparison

| Load | Load resistance ($\lambda=0$) | $A_v$ ($\lambda=0$) | $A_v$ with $r_O$ |
|---|---|---|---|
| NMOS diode, $(W/L)_2 = 20$ | $1/(g_{m2} + g_{mb2}) = 532\ \Omega$ | −1.95 | −1.85 |
| PMOS diode, $(W/L)_2 = 20$ | $1/g_{m2} = 1.14\ \mathrm{k}\Omega$ | −4.18 | −3.57 |

The PMOS load gives about twice the gain for the same size and current, because its lower mobility gives a smaller $g_{m2}$ (larger $1/g_{m2}$) and it has no body effect. The price is a large $V_{SG2}$, which leaves less output swing.

### Result

- NMOS diode load: $A_v = -\dfrac{g_{m1}}{g_{m2} + g_{mb2}} = -\dfrac{\sqrt{(W/L)_1/(W/L)_2}}{1 + \eta} = -\dfrac{2.236}{1.147} \approx -1.95$, with $g_{m1} = 3.66$ mS, $g_{m2} = 1.64$ mS, $V_{out} \approx 1.43$ V, $\eta \approx 0.147$ (≈ −1.85 if $r_{O1} = r_{O2} = 20\ \mathrm{k}\Omega$ are included; −2.24 if the body effect were ignored).
- PMOS diode load: $A_v = -\dfrac{g_{m1}}{g_{m2}} = -\sqrt{\dfrac{\mu_n(W/L)_1}{\mu_p(W/L)_2}} \approx -4.18$, with $g_{m2} = 0.876$ mS and no body effect (≈ −3.57 with $r_{O1} = 20\ \mathrm{k}\Omega$, $r_{O2} = 10\ \mathrm{k}\Omega$).

Common mistake: Using the ratio of aspect ratios without the square root, e.g. $-100/20 = -5$ for the NMOS load or $-\mu_n(W/L)_1/[\mu_p(W/L)_2] \approx -17.4$ for the PMOS load. At equal currents $g_m \propto \sqrt{\mu C_{ox}W/L}$, so the gain is the square root of these ratios.

Common mistake: Ignoring the body effect of the NMOS load, or adding one to the PMOS load. The NMOS load's source is the output (1.43 V above its grounded bulk), so $g_{mb2}$ adds to $g_{m2}$ and lowers the gain; the PMOS load's source and bulk are both at $V_{DD}$.

Common mistake: Using $\mu_nC_{ox}$ for the PMOS device, which gives $-2.24$ for the second circuit instead of using $\mu_pC_{ox} = 38.4\ \mu\mathrm{A/V^2}$.
