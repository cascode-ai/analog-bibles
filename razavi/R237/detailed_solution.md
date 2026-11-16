# Detailed solution - R237

**Approach.** Node X drives the gates of $M_1$ and $M_2$ directly, so $V_X = V_{GS1}$, fixed by $I_{REF}$. $V_b$ sets node A through $M_0$, $V_A = V_b - V_{GS0}$, and must be high enough to keep $M_1$ saturated ($V_A \ge V_{ov1}$) and low enough to keep $M_0$ saturated ($V_X - V_A \ge V_{ov0}$). The source of $M_0$ sits at $V_A$ above its grounded bulk, so its threshold includes the body effect.

### Step 1 — $V_X$ and the two overdrives

$(W/L)_1 = (W/L)_2 = 20/0.5 = 40$ and $(W/L)_0 = (W/L)_3 = 60/0.5 = 120$. The output branch is a copy of the reference branch, so only the reference branch needs analysing; both $M_1$ and $M_0$ carry $I_{REF} = 100\ \mu$A.

$$V_{ov1} = \sqrt{\frac{2(100\ \mu\mathrm{A})}{(134\ \mu\mathrm{A/V^2})(40)}} = \sqrt{0.03731\ \mathrm{V^2}} = 0.193\ \mathrm{V}, \qquad V_X = V_{GS1} = 0.7 + 0.193 = 0.893\ \mathrm{V}$$

($M_1$ has $V_{SB} = 0$; this requires $M_1$ to be saturated, the first condition below).

$$V_{ov0} = \sqrt{\frac{2(100\ \mu\mathrm{A})}{(134\ \mu\mathrm{A/V^2})(120)}} = \sqrt{0.01244\ \mathrm{V^2}} = 0.112\ \mathrm{V} .$$

$M_0$ has $V_{SB0} = V_A$, so

$$V_{TH0}(V_A) = 0.7 + 0.45\left(\sqrt{0.9 + V_A} - \sqrt{0.9}\right), \qquad \sqrt{0.9} = 0.9487 ,$$

$$V_A = V_b - V_{GS0} = V_b - V_{TH0}(V_A) - V_{ov0} .$$

Raising $V_b$ raises $V_A$, so each saturation condition becomes a bound on $V_b$.

### Step 2 — Lower bound: $M_1$ saturated

$V_{DS1} \ge V_{GS1} - V_{TH1}$ means

$$V_A \ge V_{ov1} = 0.193\ \mathrm{V} .$$

At the edge, $V_A = 0.193$ V:

$$V_{TH0} = 0.7 + 0.45\left(\sqrt{0.9 + 0.193} - 0.9487\right) = 0.7 + 0.45(1.0455 - 0.9487) = 0.7 + 0.0436 = 0.744\ \mathrm{V} ,$$

$$V_{GS0} = V_{TH0} + V_{ov0} = 0.744 + 0.112 = 0.855\ \mathrm{V}, \qquad V_{b,min} = V_A + V_{GS0} = 0.193 + 0.855 = 1.048\ \mathrm{V} .$$

### Step 3 — Upper bound: $M_0$ saturated

$M_0$ has its drain at X and its source at A, so $V_{DS0} \ge V_{ov0}$ means

$$V_X - V_A \ge V_{ov0} \quad\Longleftrightarrow\quad V_A \le V_X - V_{ov0} = 0.893 - 0.112 = 0.782\ \mathrm{V} .$$

At the edge, $V_A = 0.782$ V:

$$V_{TH0} = 0.7 + 0.45\left(\sqrt{0.9 + 0.782} - 0.9487\right) = 0.7 + 0.45(1.2968 - 0.9487) = 0.7 + 0.1566 = 0.857\ \mathrm{V},$$

$$V_{b,max} = V_A + V_{TH0} + V_{ov0} = 0.782 + 0.857 + 0.112 = 1.750\ \mathrm{V} .$$

Equivalently, $V_b - V_X \le V_{TH0}$ gives $V_{b,max} = V_X + V_{TH0} = 0.893 + 0.857 = 1.750$ V.

### Step 4 — Comparison without body effect

With $V_{TH0} = 0.7$ V throughout:

$$V_{b,min} = V_{ov1} + 0.7 + V_{ov0} = 0.193 + 0.812 = 1.005\ \mathrm{V}, \qquad V_{b,max} = V_X + 0.7 = 1.593\ \mathrm{V} .$$

The body effect raises both bounds: by 43 mV at the bottom, where $V_{SB0}$ is small, and by 157 mV at the top, where it is large.

### Step 5 — Why this mirror is "low-voltage"

The output branch copies the reference branch, so $V_B = V_A$ and $I_{out} = I_{REF}$, and the output stays saturated down to $V_{out,min} = V_B + V_{ov3} = V_A + V_{ov0}$. With $V_b$ near its lower bound this is about $0.193 + 0.112 = 0.31$ V, roughly two overdrives, versus $V_{GS} + V_{ov} \approx 1.0$ V for a standard cascode with its gate at $2V_{GS}$. A practical choice puts $V_b$ a little above $V_{b,min}$ (e.g. 1.1–1.2 V) for margin.

### Result

$$V_X = V_{GS1} = 0.7 + \sqrt{\frac{2(100\ \mu\mathrm{A})}{(134\ \mu\mathrm{A/V^2})(40)}} \approx 0.89\ \mathrm{V} .$$

$$V_{GS0} + (V_{GS1} - V_{TH1}) \le V_b \le V_{GS1} + V_{TH0} \quad\Longrightarrow\quad 1.05\ \mathrm{V} \lesssim V_b \lesssim 1.75\ \mathrm{V}$$

(with body effect, $V_{TH0} = 0.744$ V at the lower edge and 0.857 V at the upper edge). Without body effect the range would be about 1.00–1.59 V.

**Common mistake.** Swapping the conditions, e.g. $V_b \ge V_{GS1} + V_{TH0}$. The lower bound protects $M_1$ (A must not drop below $V_{ov1}$); the upper bound protects $M_0$, which enters triode if $V_b$ exceeds $V_X$ by more than a threshold.

**Common mistake.** Taking $V_X = 2V_{GS}$ or $V_X = V_b$ as in the standard cascode mirror. X is tied only to the gates of $M_1$ and $M_2$, so $V_X = V_{GS1}$.

**Common mistake.** Ignoring the body effect of $M_0$, or using 20/0.5 for $M_0$. Its source is 0.2–0.8 V above its bulk, raising its threshold by 44–157 mV, and $M_0$, $M_3$ are the wide (60/0.5) devices, hence the 0.112-V overdrive.
