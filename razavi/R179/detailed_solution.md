# Detailed solution - R179

**Approach.** $M_5$ is a PMOS current source with its source at $V_{DD}$, so its current is set by $V_{DD} - V_b$. Solve the square law for the $|V_{GS5}|$ that gives 0.4 mA and refer it to ground.

### Step 1 — Required current

Each input device carries $I_{SS}/2 = 0.5$ mA, and $M_5$ (and likewise $M_6$) must supply 80 % of it:

$$I_{D5} = I_{D6} = 0.8\times\frac{I_{SS}}{2} = 0.8\times 0.5\ \mathrm{mA} = 0.4\ \mathrm{mA}.$$

(The diode-connected $M_3$ supplies the remaining 0.1 mA.)

### Step 2 — Overdrive of $M_5$ and the gate voltage

With $\mu_pC_{ox}(W/L) = (38.4\ \mu\mathrm{A/V^2})(100) = 3.84\ \mathrm{mA/V^2}$ ($W/L = 50/0.5 = 100$) and $I_{D5} = \tfrac12\mu_pC_{ox}(W/L)(|V_{GS5}| - |V_{TH}|)^2$:

$$
\begin{aligned}
|V_{GS5}| - |V_{TH}| &= \sqrt{\frac{2I_{D5}}{\mu_pC_{ox}(W/L)}} = \sqrt{\frac{2(0.4\ \mathrm{mA})}{3.84\ \mathrm{mA/V^2}}} = \sqrt{0.2083\ \mathrm{V^2}} = 0.456\ \mathrm{V},\\
|V_{GS5}| &= 0.8 + 0.456 = 1.256\ \mathrm{V}.
\end{aligned}
$$

The source of $M_5$ is at $V_{DD}$, so its gate sits $|V_{GS5}|$ *below* $V_{DD}$:

$$V_b = V_{DD} - |V_{GS5}| = 3 - 1.256 = 1.744\ \mathrm{V}.$$

### Step 3 — Check that $M_5$ is saturated

The drain of $M_5$ is node $X$, held by the diode $M_3$ (0.1 mA) at $V_{DD} - |V_{GS3}|$, with

$$|V_{GS3}| = 0.8 + \sqrt{\frac{2(0.1\ \mathrm{mA})}{3.84\ \mathrm{mA/V^2}}} = 0.8 + 0.228 = 1.028\ \mathrm{V}.$$

So $V_{SD5} = |V_{GS3}| = 1.028$ V $>$ 0.456 V: $M_5$ is saturated.

### Step 4 — Refinement with channel-length modulation (optional)

With $\lambda_p = 0.2\ \mathrm{V^{-1}}$, $I_{D5} = \tfrac12\mu_pC_{ox}(W/L)V_{ov5}^2(1 + \lambda_pV_{SD5})$ with $V_{SD5} \approx 1.028$ V:

$$
\begin{aligned}
V_{ov5} &= \sqrt{\frac{2(0.4\ \mathrm{mA})}{(3.84\ \mathrm{mA/V^2})(1 + 0.2\times 1.028)}} = \sqrt{\frac{0.8}{3.84\times 1.206}}\ \mathrm{V} = 0.416\ \mathrm{V},\\
V_b &= 3 - 0.8 - 0.416 = 1.784\ \mathrm{V} \approx 1.78\ \mathrm{V}.
\end{aligned}
$$

Channel-length modulation adds current, so slightly less overdrive is needed and $V_b$ moves up by about 40 mV; the basic square-law answer is 1.74 V.

### Result

$$V_b = V_{DD} - |V_{TH}| - \sqrt{\frac{2(0.4\ \mathrm{mA})}{\mu_pC_{ox}(W/L)}} = 3 - 0.8 - 0.456 \approx 1.74\ \mathrm{V}$$

($|V_{GS5}| = 1.256$ V). Including $\lambda_p$ with $V_{SD5} \approx 1.03$ V gives about 1.78 V.

**Common mistake.** Giving $V_b = 1.256$ V, which is $|V_{GS5}|$ itself. The PMOS source is at $V_{DD}$, so $V_b = V_{DD} - |V_{GS5}|$.

**Common mistake.** Using the wrong current (0.5 mA, the full branch current, or 0.1 mA, the diode current) or NMOS parameters. $M_5$ is a PMOS carrying $0.8\times 0.5 = 0.4$ mA.

**Common mistake.** Setting $V_b = V_{DD} - |V_{TH}| = 2.2$ V, which biases $M_5$ exactly at threshold, where it carries no current; an overdrive of 0.456 V is needed on top.
