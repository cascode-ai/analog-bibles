# Detailed solution - R010

**Approach.** $V_X$ drives only the bulk, so $V_{GS}$ and $V_{DS}$ are fixed and $V_X$ acts through the threshold voltage: the bulk is a "back gate". Compute $V_{TH}(V_X)$, check the region, evaluate the square-law current and the transconductance, and then find where the bulk junctions become forward-biased, which limits how far this model can be used.

### Step 1 — What is fixed and what varies

The lower-potential terminal, at 1 V, is the source and the 1.5-V terminal is the drain, independent of $V_X$:

$$
\begin{aligned}
V_{GS} &= 1.9 - 1 = 0.9\ \mathrm{V} \quad(\text{fixed}),\\
V_{DS} &= 1.5 - 1 = 0.5\ \mathrm{V} \quad(\text{fixed}),\\
V_{SB} &= 1 - V_X \quad(\text{varies}).
\end{aligned}
$$

$I_X$ is the drain current (it enters the drain from the 1.5-V supply), so $I_X > 0$ while the channel conducts.

### Step 2 — Threshold voltage versus $V_X$

$$V_{TH} = V_{TH0} + \gamma\left(\sqrt{2|\phi_F| + V_{SB}} - \sqrt{2|\phi_F|}\right) = 0.7 + 0.45\left(\sqrt{1.9 - V_X} - 0.9487\right)\ \mathrm{V}.$$

Raising $V_X$ reduces $V_{SB}$ and so **lowers the threshold**:

$$
\begin{aligned}
V_X = 0:&\quad V_{TH} = 0.7 + 0.45\,(\sqrt{1.9} - 0.9487) = 0.7 + 0.45\times0.4297 = 0.893\ \mathrm{V},\\
V_X = 0.5\ \mathrm{V}:&\quad V_{TH} = 0.7 + 0.45\,(\sqrt{1.4} - 0.9487) = 0.7 + 0.45\times0.2345 = 0.806\ \mathrm{V},\\
V_X = 1\ \mathrm{V}:&\quad V_{TH} = 0.7 + 0.45\,(\sqrt{0.9} - 0.9487) = 0.700\ \mathrm{V},\\
V_X = 1.25\ \mathrm{V}:&\quad V_{TH} = 0.7 + 0.45\,(\sqrt{0.65} - 0.9487) = 0.7 - 0.45\times0.1425 = 0.636\ \mathrm{V},\\
V_X = 1.5\ \mathrm{V}:&\quad V_{TH} = 0.7 + 0.45\,(\sqrt{0.4} - 0.9487) = 0.7 - 0.45\times0.3162 = 0.558\ \mathrm{V}.
\end{aligned}
$$

For $V_X > 1$ V the bulk is *above* the source ($V_{SB} < 0$, forward body bias) and the threshold drops below $V_{TH0}$.

### Step 3 — Region of operation

Saturation requires

$$0.5\ \mathrm{V} \ge 0.9\ \mathrm{V} - V_{TH} \quad\Longleftrightarrow\quad V_{TH} \ge 0.4\ \mathrm{V}.$$

Over $0 \le V_X \le 1.5$ V the threshold stays between 0.893 V and 0.558 V, so **$M_1$ is saturated**. (Formally $V_{TH}$ would reach 0.4 V at $V_X \approx 1.82$ V, but Step 6 shows the model has broken down before that.) At $V_X = 0$ the device is only just on: $V_{GS} - V_{TH} = 0.9 - 0.893 = 0.007$ V.

### Step 4 — Drain current $I_X$

$$I_X = \tfrac12\beta\,(V_{GS} - V_{TH})^2 = \tfrac12\beta\,\left(0.9 - V_{TH}(V_X)\right)^2 .$$

Point by point (overdrive $V_{ov} = 0.9 - V_{TH}$, then current):

$$
\begin{aligned}
V_X = 0:&\quad V_{ov} = 0.0066\ \mathrm{V}, & I_X &= \tfrac12\beta(0.0066)^2 \approx 2\times10^{-5}\beta\ \mathrm{V^2},\\
V_X = 0.5\ \mathrm{V}:&\quad V_{ov} = 0.094\ \mathrm{V}, & I_X &= \tfrac12\beta(0.094)^2 = 0.0045\beta\ \mathrm{V^2},\\
V_X = 1\ \mathrm{V}:&\quad V_{ov} = 0.200\ \mathrm{V}, & I_X &= \tfrac12\beta(0.200)^2 = 0.020\beta\ \mathrm{V^2},\\
V_X = 1.25\ \mathrm{V}:&\quad V_{ov} = 0.264\ \mathrm{V}, & I_X &= \tfrac12\beta(0.264)^2 = 0.035\beta\ \mathrm{V^2},\\
V_X = 1.5\ \mathrm{V}:&\quad V_{ov} = 0.342\ \mathrm{V}, & I_X &= \tfrac12\beta(0.342)^2 = 0.059\beta\ \mathrm{V^2}.
\end{aligned}
$$

At $V_X = 0$ the current is essentially zero (in a real device, a small subthreshold current).

**Shape.** With $\partial V_{TH}/\partial V_X = -\eta$, $\eta = \gamma/(2\sqrt{2|\phi_F| + V_{SB}}) = 0.45/(2\sqrt{1.9 - V_X})$:

$$\frac{dI_X}{dV_X} = \beta\,(0.9 - V_{TH})\cdot\left(-\frac{\partial V_{TH}}{\partial V_X}\right) = \beta\,V_{ov}\,\eta .$$

Both factors grow with $V_X$: $V_{ov}$ because the threshold falls, and $\eta$ because $\sqrt{1.9 - V_X}$ shrinks ($\eta$ = 0.163 at $V_X = 0$, 0.237 at 1 V, 0.356 at 1.5 V). So $I_X$ is a **rising, concave-up** curve, growing faster than a parabola in $V_X$.

### Step 5 — Transconductance

**Gate transconductance** (the usual meaning):

$$g_m = \beta\,(V_{GS} - V_{TH}) = \beta\,(0.9 - V_{TH}),$$

$$
\begin{aligned}
V_X = 0:&\quad g_m = \beta\,(0.0066\ \mathrm{V}) \approx 0.007\beta,\\
V_X = 0.5\ \mathrm{V}:&\quad g_m = \beta\,(0.094\ \mathrm{V}) = 0.094\beta,\\
V_X = 1\ \mathrm{V}:&\quad g_m = \beta\,(0.200\ \mathrm{V}) = 0.20\beta,\\
V_X = 1.5\ \mathrm{V}:&\quad g_m = \beta\,(0.342\ \mathrm{V}) = 0.34\beta ,
\end{aligned}
$$

rising from essentially zero with the overdrive, slightly concave up.

**Bulk transconductance**, if "transconductance" is read as the sensitivity to the swept voltage $V_X$ itself:

$$g_{mb} = \frac{\partial I_X}{\partial V_X} = g_m\,\eta = g_m\,\frac{\gamma}{2\sqrt{2|\phi_F| + V_{SB}}} ,$$

$$
\begin{aligned}
V_X = 0:&\quad g_{mb} = 0.0066\beta\times0.163 \approx 0.001\beta,\\
V_X = 1\ \mathrm{V}:&\quad g_{mb} = 0.200\beta\times0.237 = 0.047\beta,\\
V_X = 1.5\ \mathrm{V}:&\quad g_{mb} = 0.342\beta\times0.356 = 0.12\beta .
\end{aligned}
$$

It is about 3–6 times smaller than $g_m$ (the back gate is the weaker control electrode) and also rises with $V_X$.

| $V_X$ (V) | $V_{TH}$ (V) | $I_X/\beta$ (V²) | $g_m/\beta$ (V) | $g_{mb}/\beta$ (V) |
|---|---|---|---|---|
| 0 | 0.893 | 2×10⁻⁵ | 0.007 | 0.001 |
| 0.5 | 0.806 | 0.0045 | 0.094 | 0.018 |
| 1.0 | 0.700 | 0.020 | 0.20 | 0.047 |
| 1.25 | 0.636 | 0.035 | 0.26 | 0.074 |
| 1.5 | 0.558 | 0.059 | 0.34 | 0.12 |

### Step 6 — The upper part of the range: forward-biased junctions

The p-type bulk forms junctions with the n+ source and drain:

- **Source–bulk junction**, forward bias $V_X - 1$. Up to a few hundred mV ($1 < V_X \lesssim 1.4$ V) its current is negligible and the forward-body-bias calculation above is the usual estimate. From roughly $V_X \approx 1.5$–$1.7$ V (forward bias 0.5–0.7 V) it conducts heavily. Its diode current flows from the $V_X$ source into the 1-V battery, not through $I_X$, but the electrons it injects turn on the **parasitic lateral npn** (source = emitter, bulk = base, drain = collector), whose collector current flows *into* the drain, in the direction of $I_X$.
- **Bulk–drain junction**, forward bias $V_X - 1.5$ at the bulk terminal. Its current flows from the bulk into the drain and out to the 1.5-V supply, *against* $I_X$. But a real bulk has a nonzero spreading resistance between the $V_X$ terminal and the junctions, and the conducting source–bulk diode clamps the internal bulk about one diode drop above the source (≈ 1.6–1.7 V). The bulk–drain junction therefore stays only slightly forward-biased (≈ 0.1–0.2 V) and its current is negligible. Even at equal internal bias it would be $e^{(V_{BE} - V_{BC})/V_T} = e^{0.5/V_T} \approx 10^8$ times smaller than the npn collector current, because $V_{CE} = V_{DS} = 0.5$ V keeps the npn forward-active.

Above about 1.6 V, therefore, **$I_X$ stays positive**: with the internal bulk clamped, the channel current levels off near its 1.6–1.7 V value (≈ 0.06β), and any lateral-npn current adds to it. A negative $I_X$ would need zero bulk resistance *and* no bipolar action, an idealization in which the source–bulk diode would carry hundreds of amperes at $V_X = 2$ V. The exact level depends on data that are not given (junction saturation currents, bulk resistance, parasitic bipolar transport), the square-law/body-effect model no longer applies, and in a properly designed circuit the bulk is never driven this far.

### Result

$V_{GS} = 0.9$ V and $V_{DS} = 0.5$ V are fixed; $V_X$ changes only $V_{SB} = 1 - V_X$ and hence

$$V_{TH} = 0.7 + 0.45\left(\sqrt{1.9 - V_X} - \sqrt{0.9}\right)\ \mathrm{V}:\quad 0.893,\ 0.806,\ 0.700,\ 0.636,\ 0.558\ \mathrm{V} \text{ at } V_X = 0,\ 0.5,\ 1,\ 1.25,\ 1.5\ \mathrm{V}.$$

- $M_1$ is **saturated** (overdrive below 0.5 V) and $I_X = \tfrac12\beta(0.9 - V_{TH})^2$ rises from essentially zero at $V_X = 0$ ($\approx 2\times10^{-5}\beta$, barely on) to $0.0045\beta$ at 0.5 V, **$0.020\beta$ at 1 V**, $0.035\beta$ at 1.25 V and $0.059\beta$ at 1.5 V. It rises faster than quadratically, because the threshold becomes more sensitive to $V_{SB}$ as $V_{SB}$ shrinks.
- The gate transconductance $g_m = \beta(0.9 - V_{TH})$ rises from ≈ 0 to **$0.2\beta$ at 1 V** and $0.34\beta$ at 1.5 V. The bulk transconductance $g_{mb} = \partial I_X/\partial V_X = g_m\gamma/(2\sqrt{1.9 - V_X})$ rises from ≈ $0.001\beta$ to $0.047\beta$ at 1 V and $0.12\beta$ at 1.5 V.
- For $V_X > 1$ V the source–bulk junction is forward-biased. Up to about 1.5 V the formulas remain a reasonable estimate. From about 1.5–1.7 V the source–bulk junction conducts heavily and clamps the internal bulk about one diode drop above the source. With a realistic (nonzero) bulk resistance, $I_X$ stays positive and levels off near ≈ 0.06β, or rises further if the lateral npn conducts; the bulk–drain current opposing it is negligible. The exact level is set by junction and substrate data that are not given, and the device must not be operated in that range.

**Common mistake.** Treating $V_X$ as if it were applied to the gate or the drain, or assuming that a larger $V_X$ "turns the device off". $V_X$ is the bulk voltage; raising it *lowers* $V_{SB}$ and $V_{TH}$, so $I_X$ *increases* with $V_X$.

**Common mistake.** Using $V_{TH} = 0.7$ V at $V_X = 0$. With the bulk 1 V below the source, $V_{TH} = 0.893$ V, leaving only 7 mV of overdrive.

**Common mistake.** Extending the body-effect formula all the way to $V_X = 3$ V. Once the bulk is more than about 0.5–0.6 V above the source, the source–bulk junction conducts (and later the bulk–drain junction), and the square-law curve has no meaning.
