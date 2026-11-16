# Detailed solution - R172

**Approach.** The input common-mode level must keep every transistor in saturation. The **lower** bound comes from the tail transistor, which needs at least its overdrive across it: $V_{in,CM} \ge V_{GS1} + V_{ov,SS}$. The **upper** bound comes from the input transistors: their drains are pinned by the diode-connected loads at $V_{DD} - |V_{GS3}|$, and a gate may rise at most one threshold above its drain: $V_{in,CM} \le V_{DD} - |V_{GS3}| + V_{TH1}$. In both, $V_{TH1}$ includes the body effect at the corresponding tail-node voltage.

### Step 1 — Overdrive voltages

At equilibrium (small differential swings) each input device and each load carries $I_{SS}/2 = 0.25$ mA, and the tail carries 0.5 mA. The overdrive from the square law is $V_{ov} = \sqrt{2I_D/(\mu C_{ox}W/L)}$.

**Input devices** $M_1$, $M_2$: $\mu_nC_{ox}(W/L) = (134\ \mu\mathrm{A/V^2})(100) = 13.4\ \mathrm{mA/V^2}$:

$$V_{ov1} = \sqrt{\frac{2(0.25\ \mathrm{mA})}{13.4\ \mathrm{mA/V^2}}} = \sqrt{0.0373\ \mathrm{V^2}} = 0.193\ \mathrm{V}.$$

**Tail device** (NMOS, $W/L = 50/0.5$, 0.5 mA):

$$V_{ov,SS} = \sqrt{\frac{2(0.5\ \mathrm{mA})}{13.4\ \mathrm{mA/V^2}}} = \sqrt{0.0746\ \mathrm{V^2}} = 0.273\ \mathrm{V}.$$

**PMOS loads** $M_3$, $M_4$: $\mu_pC_{ox}(W/L) = (38.4\ \mu\mathrm{A/V^2})(10/0.5) = (38.4\ \mu\mathrm{A/V^2})(20) = 0.768\ \mathrm{mA/V^2}$:

$$
\begin{aligned}
|V_{GS3}| - |V_{TH3}| &= \sqrt{\frac{2(0.25\ \mathrm{mA})}{0.768\ \mathrm{mA/V^2}}} = \sqrt{0.651\ \mathrm{V^2}} = 0.807\ \mathrm{V},\\
|V_{GS3}| &= 0.8 + 0.807 = 1.607\ \mathrm{V}.
\end{aligned}
$$

The small, low-mobility PMOS loads need a large overdrive. The diode drop is therefore large, and this will limit the upper bound.

### Step 2 — Minimum input common-mode level

The tail transistor (source at ground) is saturated only if its drain, node $P$, is at least one overdrive above ground:

$$V_P \ge V_{ov,SS} = 0.273\ \mathrm{V}.$$

The input devices sit one $V_{GS1}$ above $P$: $V_{in,CM} = V_P + V_{GS1} = V_P + V_{TH1} + V_{ov1}$. At the limit $V_P = 0.273$ V, the source–bulk voltage of $M_1$ is $V_{SB1} = 0.273$ V, so

$$
\begin{aligned}
V_{TH1} &= V_{TH0} + \gamma\left(\sqrt{2|\phi_F| + V_{SB1}} - \sqrt{2|\phi_F|}\right)\\
&= 0.7 + 0.45\left(\sqrt{0.9 + 0.273} - \sqrt{0.9}\right)\\
&= 0.7 + 0.45(1.0831 - 0.9487) = 0.7 + 0.0605 = 0.761\ \mathrm{V}.
\end{aligned}
$$

Therefore

$$V_{in,CM,min} = V_{ov,SS} + V_{ov1} + V_{TH1} = 0.273 + 0.193 + 0.761 = 1.227\ \mathrm{V}.$$

### Step 3 — Where the diode loads put the drains

A diode-connected PMOS has its gate tied to its drain, so $|V_{GS3}| = V_{DD} - V_X$. Its current is fixed at $I_{SS}/2$ by the tail (for small differential signals), so

$$V_X = V_Y = V_{DD} - |V_{GS3}| = 3 - 1.607 = 1.393\ \mathrm{V},$$

independent of the input common-mode level. (The loads themselves are always saturated, since $V_{SD} = V_{SG}$.)

### Step 4 — Maximum input common-mode level

$M_1$ is saturated if $V_{DS1} \ge V_{GS1} - V_{TH1}$. Substituting $V_{DS1} = V_X - V_P$ and $V_{GS1} = V_{in,CM} - V_P$:

$$V_X - V_P \ge V_{in,CM} - V_P - V_{TH1} \quad\Longrightarrow\quad V_{in,CM} \le V_X + V_{TH1} = V_{DD} - |V_{GS3}| + V_{TH1}.$$

The gate may sit at most one threshold above the drain. $V_{TH1}$ must be evaluated at the tail voltage that holds at this limit. There $V_{in,CM} = V_X + V_{TH1}$, so

$$V_P = V_{in,CM} - V_{TH1} - V_{ov1} = V_X - V_{ov1} = 1.393 - 0.193 = 1.200\ \mathrm{V}.$$

With $V_{SB1} = 1.200$ V:

$$
\begin{aligned}
V_{TH1} &= 0.7 + 0.45\left(\sqrt{0.9 + 1.200} - \sqrt{0.9}\right)\\
&= 0.7 + 0.45(1.4491 - 0.9487) = 0.7 + 0.2252 = 0.925\ \mathrm{V}.
\end{aligned}
$$

Therefore

$$V_{in,CM,max} = V_X + V_{TH1} = 1.393 + 0.925 = 2.318\ \mathrm{V}.$$

The body effect matters much more here, because $P$ has risen to 1.2 V. The higher threshold *helps*: it lets the gate rise further above the drain before $M_1$ leaves saturation.

### Step 5 — Summary of the voltage stack

| quantity | at $V_{in,CM,min}$ | at $V_{in,CM,max}$ |
|---|---|---|
| $V_P$ | 0.273 V (tail at edge of saturation) | 1.200 V |
| $V_{TH1}$ | 0.761 V | 0.925 V |
| $V_{GS1}$ | 0.954 V | 1.118 V |
| $V_X = V_Y$ | 1.393 V | 1.393 V ($M_1$ at edge of saturation) |
| $V_{in,CM}$ | **1.227 V** | **2.318 V** |

Without the body effect ($V_{TH1} = 0.7$ V throughout) the bounds would be $0.273 + 0.193 + 0.7 = 1.17$ V and $1.393 + 0.7 = 2.09$ V.

### Result

$$V_{in,CM,min} = V_{ov,SS} + V_{ov1} + V_{TH1} \approx 1.23\ \mathrm{V}, \qquad V_{in,CM,max} = V_{DD} - |V_{GS3}| + V_{TH1} \approx 2.32\ \mathrm{V}$$

(1.17 V and 2.09 V without body effect). Here $V_{ov1} = 0.193$ V, $V_{ov,SS} = 0.273$ V, $|V_{GS3}| = 1.607$ V, and $V_{TH1} = 0.761$ V or 0.925 V at the two limits.

**Common mistake.** Ignoring the overdrive of the diode-connected loads, i.e. taking the maximum as $V_{DD}$ or as $V_{DD} - |V_{THP}| + V_{TH1}$. The diode carries 0.25 mA and needs 0.81 V of overdrive on top of its threshold, which lowers the drains to 1.39 V and the upper bound by the same 0.81 V.

**Common mistake.** Omitting the tail headroom in the minimum and quoting $V_{GS1} \approx 0.89$–0.95 V. The tail transistor needs $V_P \ge 0.273$ V to remain a current source.

**Common mistake.** Computing the diode drop with $\mu_nC_{ox}$ instead of $\mu_pC_{ox}$. The loads are PMOS devices with 3.5 times lower $\mu C_{ox}$, which is why their overdrive is so large.
