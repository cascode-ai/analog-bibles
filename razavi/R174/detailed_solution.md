# Detailed solution - R174

**Approach.** A threshold mismatch makes $g_{m1} \neq g_{m2}$. With resistive loads this converts a common-mode input into a differential output. Here, however, each load is a diode-connected transistor whose resistance $1/g_{m3}$ depends on the current of *its own* branch. We therefore analyse the common-mode response exactly under the stated model (square law, no channel-length modulation or body effect in $M_1$–$M_4$), both with large-signal equations and with the small-signal model. We then compare with the standard estimate that treats the two loads as equal fixed resistors.

### Step 1 — Bias quantities

Each side carries $I_{SS}/2 = 0.25$ mA. Device constants:

$$\beta_n = \mu_nC_{ox}(W/L)_{1,2} = (134\ \mu\mathrm{A/V^2})(100) = 13.4\ \mathrm{mA/V^2}, \qquad \beta_p = \mu_pC_{ox}(W/L)_{3,4} = (38.4\ \mu\mathrm{A/V^2})(20) = 0.768\ \mathrm{mA/V^2}.$$

$$
\begin{aligned}
V_{ov1} &= \sqrt{\frac{2(0.25\ \mathrm{mA})}{13.4\ \mathrm{mA/V^2}}} = 0.193\ \mathrm{V}, & g_{m1} &= \sqrt{2\beta_nI_D} = \sqrt{2(13.4)(0.25)}\ \mathrm{mS} = 2.59\ \mathrm{mS},\\
g_{m3} &= \sqrt{2\beta_pI_D} = \sqrt{2(0.768)(0.25)}\ \mathrm{mS} = 0.620\ \mathrm{mS}, & \frac{1}{g_{m3}} &= 1.61\ \mathrm{k}\Omega .
\end{aligned}
$$

**Tail impedance.** The NMOS tail device carries 0.5 mA with $\lambda = 0.1\ \mathrm{V^{-1}}$:

$$R_{SS} = \frac{1}{\lambda I_{SS}} = \frac{1}{(0.1\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 20\ \mathrm{k}\Omega .$$

**Mismatch.** Let $V_{TH2} = V_{TH1} + \Delta V_{TH}$ with $\Delta V_{TH} = 1$ mV. Both devices have the same $V_{GS}$, so their overdrives differ by 1 mV and

$$\Delta g_m = \beta_n\Delta V_{TH} = 13.4\ \mu\mathrm{S}, \qquad \frac{\Delta g_m}{g_{m1}} = \frac{\Delta V_{TH}}{V_{ov1}} = \frac{1\ \mathrm{mV}}{193\ \mathrm{mV}} = 0.52\ \%.$$

### Step 2 — Large-signal view: the output difference does not depend on the input common mode

Diode-connected $M_3$ carries exactly the current of $M_1$ and is saturated ($V_{SD} = V_{SG}$), so

$$I_{D1} = \tfrac12\beta_p\left(V_{DD} - V_X - |V_{THP}|\right)^2 \quad\Longrightarrow\quad V_X = V_{DD} - |V_{THP}| - \sqrt{\frac{2I_{D1}}{\beta_p}} .$$

$M_1$ obeys $I_{D1} = \tfrac12\beta_n(V_{in,CM} - V_P - V_{TH1})^2$, so $\sqrt{2I_{D1}/\beta_p} = \sqrt{\beta_n/\beta_p}\,(V_{in,CM} - V_P - V_{TH1})$. The same holds for the right side with $V_{TH2}$:

$$
\begin{aligned}
V_X &= V_{DD} - |V_{THP}| - \sqrt{\beta_n/\beta_p}\,(V_{in,CM} - V_P - V_{TH1}),\\
V_Y &= V_{DD} - |V_{THP}| - \sqrt{\beta_n/\beta_p}\,(V_{in,CM} - V_P - V_{TH2}),\\
V_X - V_Y &= \sqrt{\beta_n/\beta_p}\,(V_{TH1} - V_{TH2}) .
\end{aligned}
$$

$V_{in,CM}$ and $V_P$ have cancelled. A common-mode input moves $V_P$ (through $R_{SS}$) and changes both currents, but the differential output stays fixed at

$$|V_X - V_Y| = \sqrt{\frac{13.4}{0.768}}\times 1\ \mathrm{mV} = 4.18\times 1\ \mathrm{mV} = 4.18\ \mathrm{mV}.$$

The mismatch produces only a constant **offset**, with **no common-mode-to-differential conversion**.

### Step 3 — Small-signal view: why the mismatch cancels

Small-signal model for a common-mode input $v_{cm}$: each input device is a current source $g_{mk}(v_{cm} - v_P)$ from its drain to $P$; $R_{SS}$ goes from $P$ to ground; each diode load is a resistance $1/g_{m3}$ (left) or $1/g_{m4}$ (right) to AC ground.

<!-- diagram: diagram-01.cir -->

The drains respond with

$$v_X = -\frac{g_{m1}}{g_{m3}}(v_{cm} - v_P), \qquad v_Y = -\frac{g_{m2}}{g_{m4}}(v_{cm} - v_P).$$

Each load carries its own branch current, so $g_{m3} = \sqrt{2\beta_pI_{D1}}$ while $g_{m1} = \sqrt{2\beta_nI_{D1}}$:

$$\frac{g_{m1}}{g_{m3}} = \sqrt{\frac{\beta_n}{\beta_p}} = \frac{g_{m2}}{g_{m4}} = 4.18 .$$

The mismatch raises $g_{m1}$ *and* $g_{m3}$ by the same fraction ($\Delta g_m/g_m = \Delta g_{m3}/g_{m3} = \Delta V_{TH}/V_{ov} = 0.52$ %, since both scale as $\sqrt{I_D}$), so the two drains move identically: $v_X - v_Y = 0$, i.e. $A_{CM-DM} = 0$.

The differential gain is $|A_{DM}| = g_{m1}/g_{m3} = 4.18$. Therefore

$$\mathrm{CMRR} = \frac{|A_{DM}|}{|A_{CM-DM}|} \to \infty\quad\text{(under the stated model)}.$$

### Step 4 — The standard estimate (equal, fixed load resistances)

The usual textbook estimate treats both loads as the same fixed resistance $1/g_{m3}$ and keeps only the transconductance mismatch. KCL at $P$ gives $v_{cm} - v_P = v_{cm}/[1 + (g_{m1} + g_{m2})R_{SS}]$, so

$$
\begin{aligned}
|A_{CM-DM}| &= \frac{\Delta g_m\,(1/g_{m3})}{1 + 2g_mR_{SS}}, \qquad |A_{DM}| = \frac{g_m}{g_{m3}},\\
\mathrm{CMRR} &= \frac{g_m}{\Delta g_m}\left(1 + 2g_mR_{SS}\right).
\end{aligned}
$$

Numbers:

$$
\begin{aligned}
\frac{g_m}{\Delta g_m} &= \frac{V_{ov1}}{\Delta V_{TH}} = \frac{0.193\ \mathrm{V}}{1\ \mathrm{mV}} = 193,\\
1 + 2g_mR_{SS} &= 1 + 2(2.59\ \mathrm{mS})(20\ \mathrm{k}\Omega) = 1 + 103.5 = 104.5,\\
\mathrm{CMRR} &= 193\times 104.5 \approx 2.02\times10^4 \quad(\approx 86\ \mathrm{dB}).
\end{aligned}
$$

This estimate ignores the fact that each diode's $1/g_m$ tracks its own current, which is exactly the effect that gives perfect cancellation in Step 3.

**Which number describes a real circuit?** In a real circuit the cancellation is spoiled by second-order effects. With channel-length modulation in $M_1$–$M_4$ ($\lambda_n = 0.1$, $\lambda_p = 0.2\ \mathrm{V^{-1}}$), the output resistances $r_O \propto 1/I_D$ shunt the diode loads, and they vary with current differently from $1/g_m \propto 1/\sqrt{I_D}$. Solving the full small-signal circuit then gives $A_{DM} \approx 3.73$, $A_{CM-DM} \approx 2.0\times10^{-4}$ and CMRR $\approx 1.8\times10^4$ (≈ 85 dB), close to the standard estimate.

### Result

Under the stated model (square law, no channel-length modulation or body effect in $M_1$–$M_4$), the threshold mismatch causes **no** common-mode-to-differential conversion: $V_X - V_Y = \sqrt{\beta_n/\beta_p}\,(V_{TH1} - V_{TH2})$ is independent of the input common-mode level. So $A_{CM-DM} = 0$ and the **CMRR is infinite**. The mismatch only produces a fixed differential offset of about $4.18\times 1\ \mathrm{mV} \approx 4.2$ mV.

The standard estimate, which gives both sides the same load $1/g_{m3}$, is

$$\mathrm{CMRR} \approx \frac{g_m}{\Delta g_m}\left(1 + 2g_mR_{SS}\right) = 193\times 104.5 \approx 20{,}200\ (\approx 86\ \mathrm{dB}),$$

with $g_m = 2.59$ mS, $\Delta g_m = 13.4\ \mu$S and $R_{SS} = 20$ kΩ. It describes a real circuit with $\lambda \neq 0$ well (an exact analysis with $\lambda$ gives about $1.8\times10^4$).

**Common mistake.** Claiming an infinite CMRR for the wrong reason, for example by treating the tail as an ideal current source or by asserting that threshold mismatch never matters. With resistive loads the same mismatch gives a finite CMRR. The cancellation here comes specifically from the diode loads tracking their branch currents.

**Common mistake.** Quoting CMRR $= g_m/\Delta g_m = 193$, i.e. forgetting the common-mode degeneration $1 + 2g_mR_{SS} = 104.5$ provided by the tail resistance.

**Common mistake.** Using $R_{SS} = 10$ kΩ (from a 1-mA current). The tail carries $I_{SS} = 0.5$ mA, so $R_{SS} = 1/(0.1\times 0.5\ \mathrm{mA}) = 20$ kΩ.
