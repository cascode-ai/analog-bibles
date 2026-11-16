# Detailed solution - R493

**Approach.** First find the resistance $R_z$ that puts the zero on the non-dominant pole: $R_z = (1/g_{m9})(1 + C_L/C_C)$. $M_{15}$ carries no DC current, so it operates in the deep triode region as a resistor whose value is set by its overdrive. The bias branch $M_{13}$–$M_{14}$ is designed so that (a) the source of $M_{14}$ sits at the same DC level as the gate of $M_9$, which makes $M_{15}$'s overdrive equal to $M_{14}$'s, and (b) the resulting on-resistance tracks $1/g_{m9}$. Then size $M_{13}$, choose $M_{14}$ with enough headroom, and size $M_{15}$.

### Step 1 — The resistance required for pole–zero cancellation

In [Fig. 2], $M_9$ (= $M_5$ of the op amp) is the second-stage PMOS with $I_{D9} = 1$ mA and $(W/L)_9 = 120$; $M_{11}$ (= $M_7$) is its current-source load.

$$g_{m9} = \sqrt{2\mu_pC_{ox}(W/L)_9I_{D9}} = \sqrt{2(38.4\ \mu\mathrm{A/V^2})(120)(1\ \mathrm{mA})} = 3.036\ \mathrm{mS}, \qquad \frac{1}{g_{m9}} = 329.4\ \Omega .$$

**Zero with a series resistor.** At the zero the output voltage is zero, so KCL at the output involves only the compensation branch and $M_9$: $V_E/(R_z + 1/sC_C) = g_{m9}V_E$, where $V_E$ is the gate voltage of $M_9$. Hence

$$s_z = \frac{1}{C_C\left(g_{m9}^{-1} - R_z\right)},$$

which is a left-half-plane (LHP) zero at $\omega_z = 1/[C_C(R_z - g_{m9}^{-1})]$ when $R_z > 1/g_{m9}$.

**Non-dominant pole.** With $C_E$ neglected, pole splitting puts the output pole at $\omega_{p2} \approx g_{m9}/C_L$ (at high frequency $C_C$ makes $M_9$ look like a diode, $1/g_{m9}$, loaded by $C_L$).

**Cancellation.** Set $\omega_z = \omega_{p2}$:

$$
\begin{aligned}
\frac{1}{C_C\left(R_z - g_{m9}^{-1}\right)} &= \frac{g_{m9}}{C_L}\\
R_z &= \frac{1}{g_{m9}} + \frac{C_L}{g_{m9}C_C} = \frac{1}{g_{m9}}\left(1 + \frac{C_L}{C_C}\right)\\
&= 329.4\ \Omega\times\left(1 + \frac{1\ \mathrm{pF}}{0.9\ \mathrm{pF}}\right) = 329.4\ \Omega\times2.111 = 695\ \Omega .
\end{aligned}
$$

Note the form: $R_z$ is a fixed multiple of $1/g_{m9}$. The bias circuit is built to reproduce exactly this dependence.

### Step 2 — How the bias circuit sets $M_{15}$

- $M_{13}$ is diode-connected, source at $V_{DD}$; its drain/gate is node N. $M_{14}$ is diode-connected with its source at N and its gate/drain at $V_b$. The current source $I_1 = 100\ \mu$A flows through both.
- $M_{15}$ is the series resistor: one terminal at the gate of $M_9$ (node E, i.e. node X of the op amp), the other at $C_C$; its gate is at $V_b$.
- **$M_{15}$ carries no DC current** ($C_C$ blocks DC), so $V_{DS15} = 0$: both of its terminals sit at the DC level of E. A MOSFET with $V_{DS} = 0$ and its gate overdriven is in the deep triode region, where it behaves as a resistor

$$R_{on15} = \frac{1}{\mu_pC_{ox}(W/L)_{15}\left(V_{SG15} - |V_{TH15}|\right)} .$$

**Idea.** If node N is at the same DC voltage as E, then $M_{14}$ and $M_{15}$ have the same source voltage, the same gate voltage ($V_b$) and the same bulk ($V_{DD}$). Hence $V_{SG15} = V_{SG14}$, $|V_{TH15}| = |V_{TH14}|$ (same source–bulk voltage), and the overdrive of $M_{15}$ equals that of $M_{14}$.

### Step 3 — Size $M_{13}$: make node N track the gate of $M_9$

The DC level of E is $V_{DD} - V_{SG9}$, and N is at $V_{DD} - V_{SG13}$. Both $M_9$ and $M_{13}$ have source and bulk at $V_{DD}$ (no body effect), so $V_{SG13} = V_{SG9}$ requires the same overdrive, i.e. the same current per unit $W/L$ (square law $I_D = \tfrac12\mu_pC_{ox}(W/L)V_{ov}^2$):

$$\frac{I_1}{(W/L)_{13}} = \frac{I_{D9}}{(W/L)_9} \quad\Longrightarrow\quad \left(\frac WL\right)_{13} = \left(\frac WL\right)_9\frac{I_1}{I_{D9}} = 120\times\frac{100\ \mu\mathrm{A}}{1\ \mathrm{mA}} = 12 .$$

So $(W/L)_{13} = 6\ \mu\mathrm{m}/0.5\ \mu\mathrm{m}$.

The common level is

$$V_N = V_E = V_{DD} - \left(|V_{TH0}| + \sqrt{\frac{2I_{D9}}{\mu_pC_{ox}(W/L)_9}}\right) = 3 - (0.8 + 0.659) = 1.541\ \mathrm{V}.$$

### Step 4 — Choose $M_{14}$ (free choice, limited by headroom)

**Threshold of $M_{14}$ with body effect.** Its source is at $V_N = 1.541$ V and its bulk at $V_{DD} = 3$ V, so the bulk–source voltage is $V_{BS} = 3 - 1.541 = 1.459$ V:

$$
\begin{aligned}
|V_{TH14}| &= |V_{TH0}| + \gamma\left(\sqrt{2|\phi_F| + V_{BS}} - \sqrt{2|\phi_F|}\right)\\
&= 0.8 + 0.4\left(\sqrt{0.8 + 1.459} - \sqrt{0.8}\right) = 0.8 + 0.4(1.503 - 0.894) = 1.043\ \mathrm{V}.
\end{aligned}
$$

**Headroom.** $V_b = V_N - V_{SG14} = 1.541 - 1.043 - V_{ov14}$. The current source $I_1$ needs $V_b > 0$ (in practice a few hundred mV), so

$$V_{ov14} < 0.498\ \mathrm{V} \quad\Longrightarrow\quad \left(\frac WL\right)_{14} > \frac{2I_1}{\mu_pC_{ox}(0.498\ \mathrm{V})^2} = \frac{200\ \mu\mathrm{A}}{(38.4\ \mu\mathrm{A/V^2})(0.248\ \mathrm{V^2})} \approx 21 .$$

For example, making $M_{14}$ equal to $M_{13}$ ($W/L = 12$) gives $V_{ov14} = 0.659$ V and $V_b = 1.541 - 1.043 - 0.659 = -0.16$ V: impossible.

**Choice:** $(W/L)_{14} = 60$, i.e. $30\ \mu\mathrm{m}/0.5\ \mu\mathrm{m}$. Then

$$
\begin{aligned}
V_{ov14} &= \sqrt{\frac{2I_1}{\mu_pC_{ox}(W/L)_{14}}} = \sqrt{\frac{200\ \mu\mathrm{A}}{(38.4\ \mu\mathrm{A/V^2})(60)}} = \sqrt{0.0868\ \mathrm{V^2}} = 0.295\ \mathrm{V},\\
V_b &= 1.541 - 1.043 - 0.295 = 0.20\ \mathrm{V},\\
g_{m14} &= \mu_pC_{ox}(W/L)_{14}V_{ov14} = (38.4\ \mu\mathrm{A/V^2})(60)(0.295\ \mathrm{V}) = 0.679\ \mathrm{mS}.
\end{aligned}
$$

(A still wider $M_{14}$ gives more headroom, e.g. $W/L = 100$ gives $V_b \approx 0.27$ V, at the cost of a wider $M_{15}$.)

### Step 5 — Size $M_{15}$

Since $V_{ov15} = V_{ov14}$ (Step 2),

$$R_{on15} = \frac{1}{\mu_pC_{ox}(W/L)_{15}V_{ov14}} = \frac{(W/L)_{14}}{(W/L)_{15}}\cdot\frac{1}{\mu_pC_{ox}(W/L)_{14}V_{ov14}} = \frac{(W/L)_{14}}{(W/L)_{15}}\cdot\frac{1}{g_{m14}} .$$

Set $R_{on15} = R_z$:

$$\left(\frac WL\right)_{15} = \frac{(W/L)_{14}}{g_{m14}R_z} = \frac{60}{(0.679\ \mathrm{mS})(695\ \Omega)} = \frac{60}{0.472} = 127 .$$

So $(W/L)_{15} \approx 127$, i.e. about $64\ \mu\mathrm{m}/0.5\ \mu\mathrm{m}$.

**Check:** $R_{on15} = 1/[(38.4\ \mu\mathrm{A/V^2})(127)(0.295\ \mathrm{V})] = 1/(1.44\ \mathrm{mS}) = 695\ \Omega$. ✓

**General formula.** Substituting $R_z = (1/g_{m9})(C_C + C_L)/C_C$ and $g_{m9}/g_{m14} = \sqrt{(W/L)_9I_{D9}/[(W/L)_{14}I_1]}$:

$$\left(\frac WL\right)_{15} = \left(\frac WL\right)_{14}\frac{g_{m9}}{g_{m14}}\frac{C_C}{C_C + C_L} = 60\times4.47\times0.474 = 127 .$$

### Step 6 — Why this circuit is used

The product $R_{on15}\,g_{m9}$ depends only on ratios:

$$R_{on15}\,g_{m9} = \frac{(W/L)_{14}}{(W/L)_{15}}\sqrt{\frac{(W/L)_9I_{D9}}{(W/L)_{14}I_1}} .$$

Mobility, oxide capacitance and threshold voltage cancel out, so the zero stays on the non-dominant pole over process, temperature and supply variations, which a fixed poly resistor could not guarantee. One bias branch $M_{13}$–$M_{14}$ can serve both $M_{15}$ devices (one for each side of the fully differential op amp), since X and Y have the same DC level.

### Result

- $R_z = (1/g_{m9})(1 + C_L/C_C) \approx 695\ \Omega$.
- $(W/L)_{13} = (W/L)_9\,I_1/I_{D9} = 12$, i.e. **6 µm/0.5 µm** (so that $V_{SG13} = V_{SG9}$).
- $(W/L)_{14}$ is a free choice but must exceed about 21 for $V_b > 0$ (body effect raises $|V_{TH14}|$ to 1.04 V). Chosen: **30 µm/0.5 µm** ($V_{ov14} = 0.295$ V, $V_b \approx 0.2$ V, $g_{m14} = 0.68$ mS).
- $(W/L)_{15} = (W/L)_{14}\,(g_{m9}/g_{m14})\,C_C/(C_C + C_L) \approx 127$, i.e. **≈ 64 µm/0.5 µm**, giving $R_{on15} \approx 695\ \Omega$. (With the more exact $\omega_{p2} = (g_{m9} + 1/R_L)/C_L$, $R_z \approx 663\ \Omega$ and $(W/L)_{15} \approx 133$.)

**Common mistake.** Sizing $M_{13}$ for equal *current* rather than equal $V_{GS}$, i.e. making it as large as $M_9$. Only equal current density ($I_D$ per $W/L$) gives $V_{SG13} = V_{SG9}$, which is what places $M_{15}$'s source at the right level.

**Common mistake.** Treating $M_{15}$ as a saturated transistor and using $1/g_{m15}$. $M_{15}$ carries no DC current, so $V_{DS15} = 0$ and it is a triode-region resistor, $R_{on} = 1/[\mu_pC_{ox}(W/L)V_{ov}]$.

**Common mistake.** Putting the capacitor ratio under the square root, which gives $(W/L)_{15} \approx 83$ for $(W/L)_{14} = 12$ ($R_{on} \approx 480\ \Omega$). The factor $C_C/(C_C + C_L)$ comes from $R_z$ and multiplies the ratio linearly. Also check the headroom: simply copying $M_{13}$ for $M_{14}$ leaves $V_b < 0$ once the body effect of $M_{14}$ is included.
