# Detailed solution - R237

**Approach.** In this low-voltage cascode, node X drives the gates of $M_1$ and $M_2$ directly, so $V_X = V_{GS1}$, fixed by $I_{REF}$. The separate bias $V_b$ sets the voltage at node A (the drain of $M_1$) through $M_0$: $V_A = V_b - V_{GS0}$. $V_b$ must be high enough to keep $M_1$ saturated ($V_A \ge V_{ov1}$) and low enough to keep $M_0$ saturated ($V_X - V_A \ge V_{ov0}$). Because the source of $M_0$ sits at $V_A$ above its grounded bulk, its threshold includes the body effect.

### Step 1 — The circuit

Reading the figure:

- **Reference branch:** $I_{REF}$ flows into node X, through $M_0$ (gate at $V_b$, source at node A) and then through $M_1$ (drain at A, source grounded). The gate of $M_1$ is tied to X.
- **Output branch:** $M_3$ (gate at $V_b$, source at B) on top of $M_2$ (gate tied to X, source grounded). $I_{out}$ enters the drain of $M_3$.

Sizes: $(W/L)_1 = (W/L)_2 = 20/0.5 = 40$ and $(W/L)_0 = (W/L)_3 = 60/0.5 = 120$. All bulks are at ground; $\lambda$ is neglected. The output branch is a copy of the reference branch, so we only need to analyse the reference branch.

**Body effect** (threshold of a device whose source is $V_{SB}$ above its bulk):

$$V_{TH}(V_{SB}) = 0.7 + 0.45\left(\sqrt{0.9 + V_{SB}} - \sqrt{0.9}\right), \qquad \sqrt{0.9} = 0.9487 .$$

$M_1$ has $V_{SB} = 0$, so $V_{TH1} = 0.7$ V. $M_0$ has $V_{SB0} = V_A$.

### Step 2 — $V_X$ and the two overdrives

Both $M_1$ and $M_0$ carry $I_{REF} = 100\ \mu$A (the gate of $M_1$ draws no current).

**Overdrive of $M_1$** (square law, $V_{ov} = \sqrt{2I_D/(\mu_nC_{ox}W/L)}$):

$$V_{ov1} = \sqrt{\frac{2(100\ \mu\mathrm{A})}{(134\ \mu\mathrm{A/V^2})(40)}} = \sqrt{0.03731\ \mathrm{V^2}} = 0.193\ \mathrm{V} .$$

**$V_X$.** The gate of $M_1$ is tied to X and its source is grounded, so

$$V_X = V_{GS1} = 0.7 + 0.193 = 0.893\ \mathrm{V} .$$

(For this to be self-consistent, $M_1$ must be saturated; that is the first condition below.)

**Overdrive of $M_0$:**

$$V_{ov0} = \sqrt{\frac{2(100\ \mu\mathrm{A})}{(134\ \mu\mathrm{A/V^2})(120)}} = \sqrt{0.01244\ \mathrm{V^2}} = 0.112\ \mathrm{V} .$$

**Node A.** KVL from $V_b$ through the gate–source of $M_0$:

$$V_A = V_b - V_{GS0} = V_b - V_{TH0}(V_A) - V_{ov0} .$$

Raising $V_b$ raises $V_A$, so each saturation condition below translates into a bound on $V_b$.

### Step 3 — Lower bound: $M_1$ saturated

$M_1$ is saturated if $V_{DS1} \ge V_{GS1} - V_{TH1}$, i.e.

$$V_A \ge V_{ov1} = 0.193\ \mathrm{V} .$$

At the edge, $V_A = 0.193$ V, so the threshold of $M_0$ is

$$V_{TH0} = 0.7 + 0.45\left(\sqrt{0.9 + 0.193} - 0.9487\right) = 0.7 + 0.45(1.0455 - 0.9487) = 0.7 + 0.0436 = 0.744\ \mathrm{V} .$$

$$V_{GS0} = V_{TH0} + V_{ov0} = 0.744 + 0.112 = 0.855\ \mathrm{V} .$$

$$V_{b,min} = V_A + V_{GS0} = 0.193 + 0.855 = 1.048\ \mathrm{V} .$$

### Step 4 — Upper bound: $M_0$ saturated

$M_0$ is saturated if $V_{DS0} \ge V_{GS0} - V_{TH0} = V_{ov0}$. Its drain is X and its source is A:

$$V_X - V_A \ge V_{ov0} \quad\Longleftrightarrow\quad V_A \le V_X - V_{ov0} = 0.893 - 0.112 = 0.782\ \mathrm{V} .$$

At the edge, $V_A = 0.782$ V:

$$V_{TH0} = 0.7 + 0.45\left(\sqrt{0.9 + 0.782} - 0.9487\right) = 0.7 + 0.45(1.2968 - 0.9487) = 0.7 + 0.1566 = 0.857\ \mathrm{V},$$

$$V_{b,max} = V_A + V_{TH0} + V_{ov0} = 0.782 + 0.857 + 0.112 = 1.750\ \mathrm{V} .$$

Equivalently, the gate–drain form of the saturation condition, $V_b - V_X \le V_{TH0}$, gives $V_{b,max} = V_X + V_{TH0} = 0.893 + 0.857 = 1.750$ V.

### Step 5 — Comparison without body effect

Ignoring the body effect ($V_{TH0} = 0.7$ V throughout):

$$V_{b,min} = V_{ov1} + 0.7 + V_{ov0} = 0.193 + 0.812 = 1.005\ \mathrm{V}, \qquad V_{b,max} = V_X + 0.7 = 1.593\ \mathrm{V} .$$

The body effect raises $V_{TH0}$, so both bounds move up: by 43 mV at the bottom, where $V_{SB0}$ is small, and by 157 mV at the top, where $V_{SB0}$ is large.

### Step 6 — Why this mirror is "low-voltage"

The output branch copies the reference branch: the same $V_b$ and gate voltages and the same sizes give $V_B = V_A$ and $I_{out} = I_{REF}$. The output stays saturated down to $V_{out,min} = V_B + V_{ov3} = V_A + V_{ov0}$. With $V_b$ near its lower bound this is about $0.193 + 0.112 = 0.31$ V, roughly two overdrives. A standard cascode with its gate at $2V_{GS}$ would need $V_{GS} + V_{ov} \approx 1.0$ V. A practical choice puts $V_b$ a little above $V_{b,min}$ (e.g. 1.1–1.2 V), leaving margin for process variations.

### Result

$$V_X = V_{GS1} = 0.7 + \sqrt{\frac{2(100\ \mu\mathrm{A})}{(134\ \mu\mathrm{A/V^2})(40)}} \approx 0.89\ \mathrm{V} .$$

$$V_{GS0} + (V_{GS1} - V_{TH1}) \le V_b \le V_{GS1} + V_{TH0} \quad\Longrightarrow\quad 1.05\ \mathrm{V} \lesssim V_b \lesssim 1.75\ \mathrm{V}$$

(with body effect, $V_{TH0} = 0.744$ V at the lower edge and 0.857 V at the upper edge). Without body effect the range would be about 1.00–1.59 V.

**Common mistake.** Swapping the conditions, e.g. writing $V_b \ge V_{GS1} + V_{TH0}$. The lower bound protects $M_1$ (node A must not drop below $V_{ov1}$). The upper bound protects $M_0$: if $V_b$ exceeds $V_X$ by more than a threshold, the gate–drain voltage of $M_0$ exceeds $V_{TH}$ and $M_0$ enters triode.

**Common mistake.** Taking $V_X = 2V_{GS}$ or $V_X = V_b$ as in the standard cascode mirror. Here X is tied only to the gates of $M_1$ and $M_2$, so $V_X = V_{GS1}$. The cascode gates get their bias from the separate voltage $V_b$.

**Common mistake.** Ignoring the body effect of $M_0$ (or using the wrong device sizes, e.g. 20/0.5 for $M_0$). The source of $M_0$ is 0.2–0.8 V above its grounded bulk, which raises its threshold by 44–157 mV and shifts the range accordingly. $M_0$ and $M_3$ are the wide (60/0.5) devices, which is why their overdrive is only 0.112 V.
