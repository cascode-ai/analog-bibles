# Detailed solution - R231

**Approach.** With $\lambda = 0$ and every device saturated, each mirror copies its reference current in proportion to $W/L$, so all branch currents follow from $I_{REF}$. Each requested voltage then comes from the square law for the device that sets it: $V_P$ from $M_1$ (including its body effect), and the PMOS drain voltages from the diode-connected PMOS devices at their own currents. Finally, check the saturation assumption.

### Step 1 — Currents in every branch

With $(W/L)_N = (W/L)_P = 10/0.5 = 20$,

$$\mu_nC_{ox}(W/L)_N = (134\ \mu\mathrm{A/V^2})(20) = 2.68\ \mathrm{mA/V^2}, \qquad \mu_pC_{ox}(W/L)_P = (38.4\ \mu\mathrm{A/V^2})(20) = 0.768\ \mathrm{mA/V^2} .$$

**NMOS mirror** (gates tied to $M_0$, sources at ground):

$$I_T = \frac{5(W/L)_N}{(W/L)_N}I_{REF} = 5(100\ \mu\mathrm{A}) = 500\ \mu\mathrm{A}, \qquad I_{2N} = \frac{2(W/L)_N}{(W/L)_N}I_{REF} = 200\ \mu\mathrm{A} .$$

**PMOS mirror.** The $2(W/L)_N$ device pulls its 200 μA through the PMOS reference diode, and $M_5$, $M_6$ have the same size and $V_{SG}$, so

$$I_{D5} = I_{D6} = 200\ \mu\mathrm{A} = 0.4\times500\ \mu\mathrm{A} = 0.4I_T ,$$

as labeled in the figure.

**Differential pair.** With equal gate voltages, $I_{D1} = I_{D2} = I_T/2 = 250\ \mu$A.

**Loads.** At the drain of $M_1$, the current $I_{D1}$ is supplied partly by $M_5$ and partly by $M_3$:

$$I_{D3} = I_{D1} - I_{D5} = 250\ \mu\mathrm{A} - 200\ \mu\mathrm{A} = 50\ \mu\mathrm{A}, \qquad I_{D4} = 50\ \mu\mathrm{A} .$$

$M_5$, $M_6$ take 80 % of the input-pair current, so the diode loads carry only 50 μA (which raises $1/g_{m3}$ and hence the gain).

### Step 2 — $V_P$ from $M_1$, including the body effect

At 250 μA,

$$V_{ov1} = \sqrt{\frac{2I_{D1}}{\mu_nC_{ox}(W/L)_N}} = \sqrt{\frac{2(250\ \mu\mathrm{A})}{2.68\ \mathrm{mA/V^2}}} = \sqrt{0.1866\ \mathrm{V^2}} = 0.432\ \mathrm{V} ,$$

and

$$V_P = V_{in,CM} - V_{GS1} = 1.3\ \mathrm{V} - V_{TH1} - V_{ov1} .$$

The bulk of $M_1$ is at ground, so $V_{SB1} = V_P$ and

$$V_{TH1} = V_{TH0} + \gamma\left(\sqrt{2|\phi_F| + V_P} - \sqrt{2|\phi_F|}\right) = 0.7 + 0.45\left(\sqrt{0.9 + V_P} - 0.9487\right) .$$

With $u = \sqrt{0.9 + V_P}$, i.e. $V_P = u^2 - 0.9$:

$$
\begin{aligned}
u^2 - 0.9 &= 1.3 - 0.7 - 0.45u + 0.45(0.9487) - 0.432,\\
u^2 + 0.45u - (0.9 + 1.3 - 0.7 + 0.4269 - 0.432) &= 0,\\
u^2 + 0.45u - 1.4950 &= 0 .
\end{aligned}
$$

Taking the positive root,

$$u = \frac{-0.45 + \sqrt{0.45^2 + 4(1.4950)}}{2} = \frac{-0.45 + \sqrt{6.1824}}{2} = \frac{-0.45 + 2.4864}{2} = 1.0182 ,$$

$$V_P = u^2 - 0.9 = 1.0368 - 0.9 = 0.137\ \mathrm{V} .$$

Check: $V_{TH1} = 0.7 + 0.45(1.0182 - 0.9487) = 0.7 + 0.0313 = 0.731$ V and $V_P = 1.3 - 0.731 - 0.432 = 0.137$ V ✓. Without the body effect, $V_P = 1.3 - 0.7 - 0.432 = 0.168$ V: the 31-mV threshold rise lowers $V_P$ by the same amount.

### Step 3 — Drain voltage of the PMOS reference diode

The PMOS sources and bulks are at $V_{DD}$, so $|V_{TH}| = 0.8$ V. At 200 μA:

$$|V_{ov}| = \sqrt{\frac{2(200\ \mu\mathrm{A})}{0.768\ \mathrm{mA/V^2}}} = \sqrt{0.5208\ \mathrm{V^2}} = 0.722\ \mathrm{V}, \qquad |V_{GS,ref}| = 0.8 + 0.722 = 1.522\ \mathrm{V} ,$$

$$V_{D,ref} = V_{DD} - |V_{GS,ref}| = 3 - 1.522 = 1.478\ \mathrm{V} .$$

### Step 4 — Drain voltages of $M_3$ and $M_4$

At 50 μA:

$$|V_{ov3}| = \sqrt{\frac{2(50\ \mu\mathrm{A})}{0.768\ \mathrm{mA/V^2}}} = \sqrt{0.1302\ \mathrm{V^2}} = 0.361\ \mathrm{V}, \qquad |V_{GS3}| = 0.8 + 0.361 = 1.161\ \mathrm{V} ,$$

$$V_{D3} = V_{D4} = V_{DD} - |V_{GS3}| = 3 - 1.161 = 1.839\ \mathrm{V} .$$

### Step 5 — Checking the saturation assumption

Diode-connected devices are always saturated. For the others:

- **$M_1$, $M_2$:** $V_{DS1} = 1.839 - 0.137 = 1.70$ V $\ge 0.432$ V ✓.
- **$M_5$, $M_6$:** $V_{SD5} = 3 - 1.839 = 1.161$ V $\ge |V_{ov}| = 0.722$ V ✓.
- **$2(W/L)_N$ device:** its overdrive equals that of $M_0$, $V_{ov0} = \sqrt{2(100\ \mu\mathrm{A})/(2.68\ \mathrm{mA/V^2})} = 0.273$ V (so $V_{GS0} = V_X = 0.973$ V); $V_{DS} = 1.478$ V ✓.
- **Tail $5(W/L)_N$ device:** same overdrive, 0.273 V, but $V_{DS} = V_P = 0.137$ V $< 0.273$ V ✗.

So with these sizes the tail is actually in the **triode** region, contrary to the stated assumption; the values above are the answer under that assumption. A self-consistent solution with the tail in triode, $I_T = \mu_nC_{ox}(5\cdot20)\left[V_{ov0}V_P - \tfrac12V_P^2\right]$, gives $V_P \approx 0.165$ V, $I_T \approx 0.42$ mA, only about 11 μA in $M_3$/$M_4$, and their drains at about 2.03 V. A real design would raise $V_P$ above the tail's overdrive, e.g. with a higher input common-mode level or wider $M_1$, $M_2$.

### Result

Branch currents: $I_T = 500\ \mu$A, $I_{D1} = I_{D2} = 250\ \mu$A, $I_{D5} = I_{D6} = 200\ \mu$A, $I_{D3} = I_{D4} = 50\ \mu$A.

- $V_P = 1.3 - V_{TH1}(V_P) - 0.432\ \mathrm{V} \approx$ **0.137 V** (with $V_{TH1} = 0.731$ V from the body effect; 0.168 V if the body effect were ignored).
- Drains of $M_3$ and $M_4$: $3 - (0.8 + 0.361) \approx$ **1.84 V**.
- Drain of the PMOS reference diode: $3 - (0.8 + 0.722) \approx$ **1.48 V**.

(The tail's $V_{DS} = V_P$ is below its 0.273-V overdrive, so in reality it would be in triode; the self-consistent values are then about 0.165 V and 2.03 V.)

**Common mistake.** Assuming $M_3$/$M_4$ carry the full 250 μA of $M_1$/$M_2$ (or the 200 μA of $M_5$/$M_6$). By KCL the diode load supplies only $250 - 200 = 50\ \mu$A; using 250 μA would give a drain voltage of about 1.4 V instead of 1.84 V.

**Common mistake.** Ignoring the body effect of $M_1$, or writing it with $\sqrt{|\phi_F| + V_{SB}}$. With the source at $V_P$ and the bulk at ground, the threshold rises to 0.731 V, using $\sqrt{2|\phi_F| + V_{SB}}$ with $2|\phi_F| = 0.9$ V.

**Common mistake.** Taking the tail current as $I_{REF}$ or $2I_{REF}$. The tail device is $5(W/L)_N$ with the same $V_{GS}$ as $M_0$, so it carries $5I_{REF} = 500\ \mu$A.
