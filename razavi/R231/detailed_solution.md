# Detailed solution - R231

**Approach.** With $\lambda = 0$ and every device saturated, each current mirror copies its reference current in proportion to $W/L$, so all branch currents follow from $I_{REF}$. Then each requested voltage comes from the square law for the device that sets it: $V_P$ from $M_1$ (including its body effect), and the PMOS drain voltages from the diode-connected PMOS devices at their own currents. Finally we check the saturation assumption.

### Step 1 — Reading the circuit

- $I_{REF} = 100\ \mu$A flows into the diode-connected NMOS $M_0$, $(W/L)_N$, at node X. Its gate–source voltage drives the gates of two more NMOS devices:
  - a $2(W/L)_N$ device, whose drain feeds the diode-connected PMOS reference device $(W/L)_P$ (left);
  - a $5(W/L)_N$ device, which is the tail source $I_T$ of the differential pair.
- The PMOS reference diode drives the gates of $M_5$ and $M_6$ (along the wire across the top). These are $(W/L)_P$ current sources whose drains connect to the drains of $M_1$ and $M_2$; the figure labels their currents $0.4I_T$.
- $M_1$, $M_2$ ($(W/L)_N$) form the differential pair with common source P and gates at the input common-mode level, 1.3 V.
- $M_3$, $M_4$ ($(W/L)_P$) are diode-connected PMOS loads at the drains of $M_1$ and $M_2$.

Sizes: $(W/L)_N = 10/0.5 = 20$ and $(W/L)_P = 10/0.5 = 20$. Process parameters:

$$\mu_nC_{ox}(W/L)_N = (134\ \mu\mathrm{A/V^2})(20) = 2.68\ \mathrm{mA/V^2}, \qquad \mu_pC_{ox}(W/L)_P = (38.4\ \mu\mathrm{A/V^2})(20) = 0.768\ \mathrm{mA/V^2} .$$

### Step 2 — Currents in every branch

With $\lambda = 0$ and all devices saturated, devices with the same $V_{GS}$ carry currents proportional to their $W/L$.

**NMOS mirror** (all gates tied to the gate of $M_0$, all sources at ground):

$$I_T = \frac{5(W/L)_N}{(W/L)_N}I_{REF} = 5(100\ \mu\mathrm{A}) = 500\ \mu\mathrm{A}, \qquad I_{2N} = \frac{2(W/L)_N}{(W/L)_N}I_{REF} = 200\ \mu\mathrm{A} .$$

**PMOS mirror.** The $2(W/L)_N$ device pulls its 200 μA through the PMOS reference diode. $M_5$ and $M_6$ have the same size and the same $V_{SG}$ as that diode, so

$$I_{D5} = I_{D6} = 200\ \mu\mathrm{A} = 0.4\times500\ \mu\mathrm{A} = 0.4I_T,$$

which agrees with the labels in the figure.

**Differential pair.** With equal gate voltages, the tail current splits equally:

$$I_{D1} = I_{D2} = \frac{I_T}{2} = 250\ \mu\mathrm{A} .$$

**Loads.** KCL at the drain of $M_1$: the current $I_{D1}$ pulled down by $M_1$ is supplied partly by $M_5$ and partly by $M_3$:

$$I_{D3} = I_{D1} - I_{D5} = 250\ \mu\mathrm{A} - 200\ \mu\mathrm{A} = 50\ \mu\mathrm{A}, \qquad I_{D4} = 50\ \mu\mathrm{A} .$$

The current sources $M_5$, $M_6$ "steal" 80 % of the input-pair current, so the diode loads carry only 50 μA. (This raises the load resistance $1/g_{m3}$ and hence the gain.)

### Step 3 — $V_P$ from $M_1$, including the body effect

**Overdrive of $M_1$** at 250 μA ($V_{ov} = V_{GS} - V_{TH}$, from the square law $I_D = \tfrac12\mu_nC_{ox}(W/L)V_{ov}^2$):

$$V_{ov1} = \sqrt{\frac{2I_{D1}}{\mu_nC_{ox}(W/L)_N}} = \sqrt{\frac{2(250\ \mu\mathrm{A})}{2.68\ \mathrm{mA/V^2}}} = \sqrt{0.1866\ \mathrm{V^2}} = 0.432\ \mathrm{V} .$$

**KVL around the gate of $M_1$:**

$$V_P = V_{in,CM} - V_{GS1} = 1.3\ \mathrm{V} - V_{TH1} - V_{ov1} .$$

**Body effect.** The source of $M_1$ is at $V_P$ and its bulk is at ground, so $V_{SB1} = V_P$ and

$$V_{TH1} = V_{TH0} + \gamma\left(\sqrt{2|\phi_F| + V_P} - \sqrt{2|\phi_F|}\right) = 0.7 + 0.45\left(\sqrt{0.9 + V_P} - 0.9487\right) .$$

$V_P$ appears on both sides, so substitute $u = \sqrt{0.9 + V_P}$, i.e. $V_P = u^2 - 0.9$:

$$
\begin{aligned}
u^2 - 0.9 &= 1.3 - 0.7 - 0.45u + 0.45(0.9487) - 0.432,\\
u^2 + 0.45u - (0.9 + 1.3 - 0.7 + 0.4269 - 0.432) &= 0,\\
u^2 + 0.45u - 1.4950 &= 0 .
\end{aligned}
$$

Take the positive root (a square root cannot be negative):

$$u = \frac{-0.45 + \sqrt{0.45^2 + 4(1.4950)}}{2} = \frac{-0.45 + \sqrt{6.1824}}{2} = \frac{-0.45 + 2.4864}{2} = 1.0182 .$$

$$V_P = u^2 - 0.9 = 1.0368 - 0.9 = 0.137\ \mathrm{V} .$$

**Check:** $V_{TH1} = 0.7 + 0.45(1.0182 - 0.9487) = 0.7 + 0.0313 = 0.731$ V and $V_P = 1.3 - 0.731 - 0.432 = 0.137$ V ✓.

Without the body effect the result would be $V_P = 1.3 - 0.7 - 0.432 = 0.168$ V. The body effect raises the threshold by 31 mV and lowers $V_P$ by the same amount.

### Step 4 — Drain voltage of the PMOS reference diode

The PMOS source and bulk are both at $V_{DD}$, so there is no body effect: $|V_{TH}| = 0.8$ V. At 200 μA:

$$|V_{ov}| = \sqrt{\frac{2(200\ \mu\mathrm{A})}{0.768\ \mathrm{mA/V^2}}} = \sqrt{0.5208\ \mathrm{V^2}} = 0.722\ \mathrm{V},$$

$$|V_{GS,ref}| = 0.8 + 0.722 = 1.522\ \mathrm{V} .$$

Its drain (= gate) voltage is

$$V_{D,ref} = V_{DD} - |V_{GS,ref}| = 3 - 1.522 = 1.478\ \mathrm{V} .$$

### Step 5 — Drain voltages of $M_3$ and $M_4$

At 50 μA:

$$|V_{ov3}| = \sqrt{\frac{2(50\ \mu\mathrm{A})}{0.768\ \mathrm{mA/V^2}}} = \sqrt{0.1302\ \mathrm{V^2}} = 0.361\ \mathrm{V},$$

$$|V_{GS3}| = 0.8 + 0.361 = 1.161\ \mathrm{V},$$

$$V_{D3} = V_{D4} = V_{DD} - |V_{GS3}| = 3 - 1.161 = 1.839\ \mathrm{V} .$$

### Step 6 — Checking the saturation assumption

Saturation requires $V_{DS} \ge V_{ov}$ (NMOS) or $V_{SD} \ge |V_{ov}|$ (PMOS). Diode-connected devices are always saturated.

- **$M_1$, $M_2$:** $V_{DS1} = 1.839 - 0.137 = 1.70$ V $\ge 0.432$ V ✓.
- **$M_5$, $M_6$:** $V_{SD5} = 3 - 1.839 = 1.161$ V $\ge |V_{ov}| = 0.722$ V ✓.
- **$2(W/L)_N$ device:** its overdrive equals that of $M_0$, $V_{ov0} = \sqrt{2(100\ \mu\mathrm{A})/(2.68\ \mathrm{mA/V^2})} = 0.273$ V (so $V_{GS0} = V_X = 0.973$ V); $V_{DS} = 1.478$ V ✓.
- **Tail $5(W/L)_N$ device:** same overdrive, 0.273 V, but $V_{DS} = V_P = 0.137$ V $< 0.273$ V ✗.

So with these sizes the tail device is actually in the **triode** region, contrary to the stated assumption. The values above are the answer under the assumption the problem asks us to make. For reference, a self-consistent solution with the tail in triode, $I_T = \mu_nC_{ox}(5\cdot20)\left[V_{ov0}V_P - \tfrac12V_P^2\right]$, gives $V_P \approx 0.165$ V, $I_T \approx 0.42$ mA, only about 11 μA in $M_3$/$M_4$, and their drains at about 2.03 V. In a real design one would raise $V_P$ above the tail's overdrive, for example with a higher input common-mode level or wider $M_1$, $M_2$ (smaller $V_{ov1}$), to keep the tail saturated.

### Result

Branch currents: $I_T = 500\ \mu$A, $I_{D1} = I_{D2} = 250\ \mu$A, $I_{D5} = I_{D6} = 200\ \mu$A, $I_{D3} = I_{D4} = 50\ \mu$A.

- $V_P = 1.3 - V_{TH1}(V_P) - 0.432\ \mathrm{V} \approx$ **0.137 V** (with $V_{TH1} = 0.731$ V from the body effect; 0.168 V if the body effect were ignored).
- Drains of $M_3$ and $M_4$: $3 - (0.8 + 0.361) \approx$ **1.84 V**.
- Drain of the PMOS reference diode: $3 - (0.8 + 0.722) \approx$ **1.48 V**.

(The tail's $V_{DS} = V_P$ is below its 0.273-V overdrive, so in reality it would be in triode; the self-consistent values are then about 0.165 V and 2.03 V.)

**Common mistake.** Assuming $M_3$/$M_4$ carry the full 250 μA of $M_1$/$M_2$ (or the 200 μA of $M_5$/$M_6$). KCL at the drain of $M_1$ shows that the diode load supplies only what the current source does not: $250 - 200 = 50\ \mu$A. Using 250 μA would give a drain voltage of about 1.4 V instead of 1.84 V.

**Common mistake.** Ignoring the body effect of $M_1$, or using a wrong formula such as $\sqrt{|\phi_F| + V_{SB}}$. The bulk is at ground while the source is at $V_P$, so the threshold rises to 0.731 V; the correct expression uses $\sqrt{2|\phi_F| + V_{SB}}$ with $2|\phi_F| = 0.9$ V.

**Common mistake.** Taking the tail current as $I_{REF}$ or $2I_{REF}$. The tail device is $5(W/L)_N$ with the same $V_{GS}$ as $M_0$, so it carries $5I_{REF} = 500\ \mu$A.
