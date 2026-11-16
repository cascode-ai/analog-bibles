# Detailed solution - R493

**Approach.** First find the resistance that puts the zero on the non-dominant pole, $R_z = (1/g_{m9})(1 + C_L/C_C)$. $M_{15}$ carries no DC current, so it is a deep-triode resistor set by its overdrive. Size $M_{13}$ so that the source of $M_{14}$ sits at the DC level of $M_9$'s gate, which makes $M_{15}$'s overdrive equal to $M_{14}$'s and lets its on-resistance track $1/g_{m9}$; then choose $M_{14}$ with enough headroom and size $M_{15}$.

### Step 1 — The resistance required for pole–zero cancellation

$M_9$ (= $M_5$ of the op amp) has $I_{D9} = 1$ mA and $(W/L)_9 = 120$, and $M_{11}$ (= $M_7$) is its current-source load:

$$g_{m9} = \sqrt{2\mu_pC_{ox}(W/L)_9I_{D9}} = \sqrt{2(38.4\ \mu\mathrm{A/V^2})(120)(1\ \mathrm{mA})} = 3.036\ \mathrm{mS}, \qquad \frac{1}{g_{m9}} = 329.4\ \Omega .$$

Call the gate of $M_9$ node E (node X of the op amp). At the zero the output voltage is zero, so KCL at the output involves only the compensation branch and $M_9$, $V_E/(R_z + 1/sC_C) = g_{m9}V_E$, which gives

$$s_z = \frac{1}{C_C\left(g_{m9}^{-1} - R_z\right)},$$

a left-half-plane (LHP) zero at $\omega_z = 1/[C_C(R_z - g_{m9}^{-1})]$ when $R_z > 1/g_{m9}$. With $C_E$ neglected, pole splitting puts the output pole at $\omega_{p2} \approx g_{m9}/C_L$ (at high frequency $C_C$ makes $M_9$ look like a diode, $1/g_{m9}$, loaded by $C_L$). Setting $\omega_z = \omega_{p2}$:

$$
\begin{aligned}
\frac{1}{C_C\left(R_z - g_{m9}^{-1}\right)} &= \frac{g_{m9}}{C_L}\\
R_z &= \frac{1}{g_{m9}} + \frac{C_L}{g_{m9}C_C} = \frac{1}{g_{m9}}\left(1 + \frac{C_L}{C_C}\right)\\
&= 329.4\ \Omega\times\left(1 + \frac{1\ \mathrm{pF}}{0.9\ \mathrm{pF}}\right) = 329.4\ \Omega\times2.111 = 695\ \Omega .
\end{aligned}
$$

$R_z$ is a fixed multiple of $1/g_{m9}$; the bias circuit is built to reproduce exactly this dependence.

### Step 2 — How the bias circuit sets $M_{15}$

Call the node between $M_{13}$ and $M_{14}$ (drain of $M_{13}$, source of $M_{14}$) N. $C_C$ blocks DC, so $M_{15}$ carries no DC current and $V_{DS15} = 0$: both of its terminals sit at the DC level of E, and with its gate overdriven it is a deep-triode resistor,

$$R_{on15} = \frac{1}{\mu_pC_{ox}(W/L)_{15}\left(V_{SG15} - |V_{TH15}|\right)} .$$

If N is at the same DC voltage as E, then $M_{14}$ and $M_{15}$ have the same source voltage, the same gate voltage ($V_b$) and the same bulk ($V_{DD}$). Hence $V_{SG15} = V_{SG14}$, $|V_{TH15}| = |V_{TH14}|$ (same source–bulk voltage), and the overdrive of $M_{15}$ equals that of $M_{14}$.

### Step 3 — Size $M_{13}$: make node N track the gate of $M_9$

E is at $V_{DD} - V_{SG9}$ and N at $V_{DD} - V_{SG13}$. Both $M_9$ and $M_{13}$ have source and bulk at $V_{DD}$, so $V_{SG13} = V_{SG9}$ requires the same overdrive, i.e. the same current per unit $W/L$:

$$\frac{I_1}{(W/L)_{13}} = \frac{I_{D9}}{(W/L)_9} \quad\Longrightarrow\quad \left(\frac WL\right)_{13} = \left(\frac WL\right)_9\frac{I_1}{I_{D9}} = 120\times\frac{100\ \mu\mathrm{A}}{1\ \mathrm{mA}} = 12 .$$

So $(W/L)_{13} = 6\ \mu\mathrm{m}/0.5\ \mu\mathrm{m}$, and the common level is

$$V_N = V_E = V_{DD} - \left(|V_{TH0}| + \sqrt{\frac{2I_{D9}}{\mu_pC_{ox}(W/L)_9}}\right) = 3 - (0.8 + 0.659) = 1.541\ \mathrm{V}.$$

### Step 4 — Choose $M_{14}$ (free choice, limited by headroom)

**Threshold of $M_{14}$ with body effect.** Its source is at $V_N = 1.541$ V and its bulk at $V_{DD} = 3$ V, so $V_{BS} = 3 - 1.541 = 1.459$ V:

$$
\begin{aligned}
|V_{TH14}| &= |V_{TH0}| + \gamma\left(\sqrt{2|\phi_F| + V_{BS}} - \sqrt{2|\phi_F|}\right)\\
&= 0.8 + 0.4\left(\sqrt{0.8 + 1.459} - \sqrt{0.8}\right) = 0.8 + 0.4(1.503 - 0.894) = 1.043\ \mathrm{V}.
\end{aligned}
$$

**Headroom.** $V_b = V_N - V_{SG14} = 1.541 - 1.043 - V_{ov14}$, and $I_1$ needs $V_b > 0$ (in practice a few hundred mV), so

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

Setting $R_{on15} = R_z$:

$$\left(\frac WL\right)_{15} = \frac{(W/L)_{14}}{g_{m14}R_z} = \frac{60}{(0.679\ \mathrm{mS})(695\ \Omega)} = \frac{60}{0.472} = 127 ,$$

i.e. about $64\ \mu\mathrm{m}/0.5\ \mu\mathrm{m}$. **Check:** $R_{on15} = 1/[(38.4\ \mu\mathrm{A/V^2})(127)(0.295\ \mathrm{V})] = 1/(1.44\ \mathrm{mS}) = 695\ \Omega$. ✓

**General formula.** With $R_z = (1/g_{m9})(C_C + C_L)/C_C$ and $g_{m9}/g_{m14} = \sqrt{(W/L)_9I_{D9}/[(W/L)_{14}I_1]}$:

$$\left(\frac WL\right)_{15} = \left(\frac WL\right)_{14}\frac{g_{m9}}{g_{m14}}\frac{C_C}{C_C + C_L} = 60\times4.47\times0.474 = 127 .$$

### Step 6 — Why this circuit is used

The product $R_{on15}\,g_{m9}$ depends only on ratios:

$$R_{on15}\,g_{m9} = \frac{(W/L)_{14}}{(W/L)_{15}}\sqrt{\frac{(W/L)_9I_{D9}}{(W/L)_{14}I_1}} .$$

Mobility, oxide capacitance and threshold cancel, so the zero stays on the non-dominant pole over process, temperature and supply, which a fixed poly resistor could not guarantee. One bias branch $M_{13}$–$M_{14}$ can serve both $M_{15}$ devices, since X and Y have the same DC level.

### Result

- $R_z = (1/g_{m9})(1 + C_L/C_C) \approx 695\ \Omega$.
- $(W/L)_{13} = (W/L)_9\,I_1/I_{D9} = 12$, i.e. **6 µm/0.5 µm** (so that $V_{SG13} = V_{SG9}$).
- $(W/L)_{14}$ is a free choice but must exceed about 21 for $V_b > 0$ (body effect raises $|V_{TH14}|$ to 1.04 V). Chosen: **30 µm/0.5 µm** ($V_{ov14} = 0.295$ V, $V_b \approx 0.2$ V, $g_{m14} = 0.68$ mS).
- $(W/L)_{15} = (W/L)_{14}\,(g_{m9}/g_{m14})\,C_C/(C_C + C_L) \approx 127$, i.e. **≈ 64 µm/0.5 µm**, giving $R_{on15} \approx 695\ \Omega$. (With the more exact $\omega_{p2} = (g_{m9} + 1/R_L)/C_L$, $R_z \approx 663\ \Omega$ and $(W/L)_{15} \approx 133$.)

**Common mistake.** Sizing $M_{13}$ for equal *current* rather than equal $V_{GS}$, i.e. making it as large as $M_9$. Only equal current density ($I_D$ per $W/L$) gives $V_{SG13} = V_{SG9}$, which places $M_{15}$'s source at the right level.

**Common mistake.** Treating $M_{15}$ as a saturated transistor and using $1/g_{m15}$. With no DC current, $V_{DS15} = 0$ and it is a triode-region resistor, $R_{on} = 1/[\mu_pC_{ox}(W/L)V_{ov}]$.

**Common mistake.** Putting the capacitor ratio under the square root, which gives $(W/L)_{15} \approx 83$ for $(W/L)_{14} = 12$ ($R_{on} \approx 480\ \Omega$); the factor $C_C/(C_C + C_L)$ comes from $R_z$ and multiplies linearly. Also, simply copying $M_{13}$ for $M_{14}$ leaves $V_b < 0$ once the body effect of $M_{14}$ is included.
